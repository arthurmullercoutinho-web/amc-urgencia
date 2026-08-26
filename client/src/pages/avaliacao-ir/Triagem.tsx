import { useEffect, useRef, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_MESSAGES } from "./data/whatsapp";
import { useAvaliacaoIRTracking } from "./data/tracking";

type Etapa1Valor = "sim" | "nao" | "nao_sei";
type Etapa2Valor =
  | "aposentadoria_servidor"
  | "pensao_servidor"
  | "reserva_reforma"
  | "inss"
  | "previdencia_complementar"
  | "outra"
  | "nenhuma";
type Etapa3Valor = "sim" | "nao" | "duvida";
type Etapa4Valor = "sim" | "alguns" | "nao" | "nao_sei";

type ResultadoConclusao = "positiva" | "negativa";

type Tela =
  | { tipo: "etapa1" }
  | { tipo: "etapa2" }
  | { tipo: "etapa3" }
  | { tipo: "etapa4" }
  | { tipo: "orientacaoA" }
  | { tipo: "saida" }
  | { tipo: "conclusao"; resultado: ResultadoConclusao };

interface Respostas {
  etapa1?: Etapa1Valor;
  etapa2?: Etapa2Valor;
  etapa3?: Etapa3Valor;
  etapa4?: Etapa4Valor;
}

const ETAPA1_OPCOES: { valor: Etapa1Valor; rotulo: string }[] = [
  { valor: "sim", rotulo: "Sim" },
  { valor: "nao", rotulo: "Não" },
  { valor: "nao_sei", rotulo: "Não sei" },
];

const ETAPA2_OPCOES: { valor: Etapa2Valor; rotulo: string }[] = [
  { valor: "aposentadoria_servidor", rotulo: "Aposentadoria de servidor público" },
  { valor: "pensao_servidor", rotulo: "Pensão de servidor público" },
  { valor: "reserva_reforma", rotulo: "Reserva ou reforma militar" },
  { valor: "inss", rotulo: "INSS" },
  { valor: "previdencia_complementar", rotulo: "Previdência complementar" },
  { valor: "outra", rotulo: "Outra aposentadoria ou pensão" },
  { valor: "nenhuma", rotulo: "Nenhuma dessas opções" },
];

const ETAPA3_OPCOES: { valor: Etapa3Valor; rotulo: string }[] = [
  { valor: "sim", rotulo: "Sim" },
  { valor: "nao", rotulo: "Não" },
  { valor: "duvida", rotulo: "Tenho dúvida" },
];

const ETAPA4_OPCOES: { valor: Etapa4Valor; rotulo: string }[] = [
  { valor: "sim", rotulo: "Sim" },
  { valor: "alguns", rotulo: "Alguns" },
  { valor: "nao", rotulo: "Não" },
  { valor: "nao_sei", rotulo: "Não sei" },
];

interface TriagemProps {
  tracking: ReturnType<typeof useAvaliacaoIRTracking>;
}

export default function Triagem({ tracking }: TriagemProps) {
  const [historico, setHistorico] = useState<Tela[]>([{ tipo: "etapa1" }]);
  const [respostas, setRespostas] = useState<Respostas>({});
  const telaAtual = historico[historico.length - 1];
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (telaAtual.tipo === "conclusao") {
      tracking.fireTriagemConcluida();
      if (telaAtual.resultado === "positiva") {
        tracking.fireLead();
      }
    }
  }, [telaAtual, tracking]);

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    headingRef.current?.focus();
  }, [telaAtual]);

  function avancar(proxima: Tela) {
    setHistorico((h) => [...h, proxima]);
  }

  function voltar() {
    setHistorico((h) => (h.length > 1 ? h.slice(0, -1) : h));
  }

  function handleEtapa1(valor: Etapa1Valor) {
    tracking.fireTriagemIniciada();
    setRespostas((r) => ({ ...r, etapa1: valor }));
    avancar(valor === "nao" ? { tipo: "orientacaoA" } : { tipo: "etapa2" });
  }

  function handleEtapa2(valor: Etapa2Valor) {
    setRespostas((r) => ({ ...r, etapa2: valor }));
    avancar(valor === "nenhuma" ? { tipo: "saida" } : { tipo: "etapa3" });
  }

  function handleEtapa3(valor: Etapa3Valor) {
    setRespostas((r) => ({ ...r, etapa3: valor }));
    avancar({ tipo: "etapa4" });
  }

  function handleEtapa4(valor: Etapa4Valor) {
    setRespostas((r) => ({ ...r, etapa4: valor }));
    // Documentos não definem o resultado: o critério é exclusivamente o diagnóstico
    // de doença grave (etapa3). "Tenho dúvida" é tratado como resultado cauteloso,
    // junto com "não" — nunca afirma indício de enquadramento.
    const resultado: ResultadoConclusao = respostas.etapa3 === "sim" ? "positiva" : "negativa";
    avancar({ tipo: "conclusao", resultado });
  }

  const numeroEtapa =
    telaAtual.tipo === "etapa1"
      ? 1
      : telaAtual.tipo === "etapa2"
      ? 2
      : telaAtual.tipo === "etapa3"
      ? 3
      : telaAtual.tipo === "etapa4"
      ? 4
      : null;

  return (
    <div
      ref={containerRef}
      className="!mx-auto w-full max-w-2xl scroll-mt-6 rounded-3xl border border-[#E4E1D8] bg-white !p-6 shadow-[0_12px_40px_rgba(14,23,41,0.14)] sm:!p-8 md:!p-10"
    >
      {numeroEtapa !== null && (
        <div className="!mb-7">
          <p className="!mb-2 text-sm font-bold uppercase tracking-wide text-[#0E1729]">
            Etapa {numeroEtapa} de 4
          </p>
          <Progress
            value={(numeroEtapa / 4) * 100}
            aria-label={`Etapa ${numeroEtapa} de 4`}
            className="h-2.5 bg-[#E4E1D8] [&>div]:bg-[#128038]"
          />
        </div>
      )}

      {telaAtual.tipo === "etapa1" && (
        <EtapaPergunta
          headingRef={headingRef}
          pergunta="Existe desconto de Imposto de Renda no contracheque ou benefício?"
          opcoes={ETAPA1_OPCOES}
          valorAtual={respostas.etapa1}
          onConfirmar={handleEtapa1}
          onVoltar={historico.length > 1 ? voltar : undefined}
        />
      )}

      {telaAtual.tipo === "etapa2" && (
        <EtapaPergunta
          headingRef={headingRef}
          pergunta="Qual é a origem do seu rendimento?"
          opcoes={ETAPA2_OPCOES}
          valorAtual={respostas.etapa2}
          onConfirmar={handleEtapa2}
          onVoltar={voltar}
        />
      )}

      {telaAtual.tipo === "etapa3" && (
        <EtapaPergunta
          headingRef={headingRef}
          aviso="O conteúdo da resposta a seguir foi projetado para permanecer apenas neste navegador durante esta verificação e não integrar os eventos de medição da página."
          pergunta="Você possui diagnóstico médico de alguma doença grave?"
          opcoes={ETAPA3_OPCOES}
          valorAtual={respostas.etapa3}
          onConfirmar={handleEtapa3}
          onVoltar={voltar}
        />
      )}

      {telaAtual.tipo === "etapa4" && (
        <EtapaPergunta
          headingRef={headingRef}
          pergunta="Você possui algum documento médico, como exames, laudos ou relatórios, que possa ser relevante para uma análise mais completa do seu caso?"
          opcoes={ETAPA4_OPCOES}
          valorAtual={respostas.etapa4}
          onConfirmar={handleEtapa4}
          onVoltar={voltar}
        />
      )}

      {telaAtual.tipo === "orientacaoA" && (
        <TelaInformativa
          headingRef={headingRef}
          titulo="Orientação"
          texto="Se não há desconto de Imposto de Renda no benefício, pode não existir valor atual a interromper ou a restituir. Como essa informação pode variar conforme o benefício e o período analisado, confira o contracheque ou converse com o escritório em caso de dúvida."
          whatsappMensagem={WHATSAPP_MESSAGES.saidaAntecipada}
          fireContact={tracking.fireContact}
          onVoltar={voltar}
        />
      )}

      {telaAtual.tipo === "saida" && (
        <TelaInformativa
          headingRef={headingRef}
          titulo="Fora do escopo desta verificação"
          texto="Esta análise é destinada a quem recebe aposentadoria, pensão, reserva ou reforma. Para informações sobre outra situação jurídica, utilize os canais gerais da AMC Advocacia."
          whatsappMensagem={WHATSAPP_MESSAGES.saidaAntecipada}
          fireContact={tracking.fireContact}
          onVoltar={voltar}
        />
      )}

      {telaAtual.tipo === "conclusao" && telaAtual.resultado === "positiva" && (
        <TelaInformativa
          headingRef={headingRef}
          titulo="Seu caso apresenta indícios de possível enquadramento"
          texto="Com base nas respostas informadas, pode existir possibilidade de isenção do Imposto de Renda por doença grave. Esta é uma avaliação preliminar e o direito depende da análise dos documentos, da doença e da origem dos rendimentos."
          textoComplementar="Para confirmar as informações e receber uma orientação sobre os próximos passos, fale diretamente com a AMC Advocacia."
          botaoLabel="Confirmar meu caso pelo WhatsApp"
          whatsappMensagem={WHATSAPP_MESSAGES.conclusaoPositiva}
          fireContact={tracking.fireContact}
          onVoltar={voltar}
        />
      )}

      {telaAtual.tipo === "conclusao" && telaAtual.resultado === "negativa" && (
        <TelaInformativa
          headingRef={headingRef}
          titulo="Não identificamos um enquadramento evidente"
          texto="Com base nas respostas informadas, não foi possível identificar de imediato uma hipótese de isenção. Como situações específicas podem exigir análise individual, você pode falar com a AMC Advocacia para esclarecer seu caso."
          botaoLabel="Esclarecer meu caso pelo WhatsApp"
          whatsappMensagem={WHATSAPP_MESSAGES.conclusaoNegativa}
          fireContact={tracking.fireContact}
          onVoltar={voltar}
        />
      )}

      {numeroEtapa !== null && (
        <div className="!mt-7 flex justify-center border-t border-[#E4E1D8] !pt-5">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.hero}
            onWhatsAppClick={tracking.fireContact}
            variant="discreet"
            className="!text-[#5C6472] decoration-[#5C6472]/50 hover:!text-[#0E1729] hover:decoration-[#0E1729] focus-visible:outline-[#0E1729]"
          >
            Prefere falar diretamente? Fale pelo WhatsApp
          </WhatsAppButton>
        </div>
      )}
    </div>
  );
}

interface Opcao<T extends string> {
  valor: T;
  rotulo: string;
}

interface EtapaPerguntaProps<T extends string> {
  headingRef: React.RefObject<HTMLHeadingElement>;
  pergunta: string;
  aviso?: string;
  opcoes: Opcao<T>[];
  valorAtual?: T;
  onConfirmar: (valor: T) => void;
  onVoltar?: () => void;
}

function EtapaPergunta<T extends string>({
  headingRef,
  pergunta,
  aviso,
  opcoes,
  valorAtual,
  onConfirmar,
  onVoltar,
}: EtapaPerguntaProps<T>) {
  const [selecionada, setSelecionada] = useState<T | undefined>(valorAtual);

  return (
    <fieldset>
      <legend className="sr-only">{pergunta}</legend>

      {aviso && (
        <p className="!mb-4 rounded-xl bg-[#F6F5F1] !p-4 text-sm leading-relaxed text-[#0E1729]">
          {aviso}
        </p>
      )}

      <h2
        ref={headingRef}
        tabIndex={-1}
        className="!mb-6 text-xl font-bold leading-snug text-[#0E1729] outline-none md:text-2xl"
      >
        {pergunta}
      </h2>

      <RadioGroup
        value={selecionada}
        onValueChange={(v) => setSelecionada(v as T)}
        className="gap-3"
      >
        {opcoes.map((opcao) => {
          const id = `opcao-${opcao.valor}`;
          const marcada = selecionada === opcao.valor;
          return (
            <label
              key={opcao.valor}
              htmlFor={id}
              className={`flex min-h-[56px] cursor-pointer items-center gap-3 rounded-2xl border-2 !px-5 !py-4 text-base font-medium shadow-sm transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#128038] has-[:focus-visible]:ring-offset-2 md:text-lg ${
                marcada
                  ? "border-[#0E1729] bg-[#0E1729]/[0.05] text-[#0E1729] shadow-md"
                  : "border-[#E4E1D8] bg-white text-[#0E1729] hover:border-[#0E1729]/40 hover:shadow-md"
              }`}
            >
              <RadioGroupItem value={opcao.valor} id={id} className="sr-only" />
              <span
                aria-hidden="true"
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                  marcada ? "border-[#128038] bg-[#128038]" : "border-[#5C6472]/40 bg-white"
                }`}
              >
                {marcada && <Check className="h-4 w-4 !text-white" strokeWidth={3} />}
              </span>
              <span>{opcao.rotulo}</span>
            </label>
          );
        })}
      </RadioGroup>

      <div className="!mt-8 flex items-center justify-between gap-4">
        {onVoltar ? (
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={onVoltar}
            className="min-h-11 !px-6 border-2 border-[#0E1729]/25 !text-[#0E1729] hover:!bg-[#0E1729]/5"
          >
            ← Voltar
          </Button>
        ) : (
          <span />
        )}

        <Button
          type="button"
          size="lg"
          disabled={!selecionada}
          onClick={() => selecionada && onConfirmar(selecionada)}
          className="min-h-11 !bg-[#0E1729] !px-8 !text-white hover:!bg-[#16223B]"
        >
          Continuar
        </Button>
      </div>
    </fieldset>
  );
}

interface TelaInformativaProps {
  headingRef: React.RefObject<HTMLHeadingElement>;
  titulo: string;
  texto: string;
  textoComplementar?: string;
  botaoLabel?: string;
  whatsappMensagem: string;
  fireContact: () => void;
  onVoltar: () => void;
}

function TelaInformativa({
  headingRef,
  titulo,
  texto,
  textoComplementar,
  botaoLabel = "Falar no WhatsApp",
  whatsappMensagem,
  fireContact,
  onVoltar,
}: TelaInformativaProps) {
  return (
    <div>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="!mb-4 text-xl font-bold text-[#0E1729] outline-none md:text-2xl"
      >
        {titulo}
      </h2>
      <p className="!mb-3 text-base leading-relaxed text-[#0E1729] md:text-lg">{texto}</p>
      {textoComplementar && (
        <p className="!mb-7 text-base leading-relaxed text-[#5C6472] md:text-lg">
          {textoComplementar}
        </p>
      )}
      {!textoComplementar && <div className="!mb-4" />}
      <WhatsAppButton message={whatsappMensagem} onWhatsAppClick={fireContact} variant="primary">
        {botaoLabel}
      </WhatsAppButton>

      <div className="!mt-6">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onVoltar}
          className="min-h-11 border-2 border-[#0E1729]/25 !text-[#0E1729] hover:!bg-[#0E1729]/5"
        >
          ← Voltar
        </Button>
      </div>
    </div>
  );
}
