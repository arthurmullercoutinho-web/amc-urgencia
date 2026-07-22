import { useEffect, useRef, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
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

type Tela =
  | { tipo: "etapa1" }
  | { tipo: "etapa2" }
  | { tipo: "etapa3" }
  | { tipo: "etapa4" }
  | { tipo: "orientacaoA" }
  | { tipo: "saida" }
  | { tipo: "conclusao" };

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
      tracking.fireLead();
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
    avancar({ tipo: "conclusao" });
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
      className="mx-auto w-full max-w-2xl scroll-mt-4 rounded-lg border border-border bg-card p-5 shadow-sm md:p-8"
    >
      {numeroEtapa !== null && (
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold text-primary">Etapa {numeroEtapa} de 4</p>
          <Progress
            value={(numeroEtapa / 4) * 100}
            aria-label={`Etapa ${numeroEtapa} de 4`}
            className="bg-muted [&>div]:bg-accent"
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
        />
      )}

      {telaAtual.tipo === "etapa2" && (
        <EtapaPergunta
          headingRef={headingRef}
          pergunta="Qual é a origem do seu rendimento?"
          opcoes={ETAPA2_OPCOES}
          valorAtual={respostas.etapa2}
          onConfirmar={handleEtapa2}
        />
      )}

      {telaAtual.tipo === "etapa3" && (
        <>
          <p className="mb-4 rounded-md bg-muted p-4 text-sm text-foreground md:text-base">
            O conteúdo da resposta a seguir foi projetado para permanecer apenas neste
            navegador durante esta verificação e não integrar os eventos de medição da
            página.
          </p>
          <EtapaPergunta
            headingRef={headingRef}
            pergunta="Existe diagnóstico médico de alguma condição grave possivelmente abrangida pela legislação?"
            opcoes={ETAPA3_OPCOES}
            valorAtual={respostas.etapa3}
            onConfirmar={handleEtapa3}
          />
        </>
      )}

      {telaAtual.tipo === "etapa4" && (
        <EtapaPergunta
          headingRef={headingRef}
          pergunta="Você possui algum documento médico, como exames, laudos ou relatórios, que possa ser relevante para uma análise mais completa do seu caso?"
          opcoes={ETAPA4_OPCOES}
          valorAtual={respostas.etapa4}
          onConfirmar={handleEtapa4}
        />
      )}

      {telaAtual.tipo === "orientacaoA" && (
        <TelaInformativa
          headingRef={headingRef}
          titulo="Orientação"
          texto="Se não há desconto de Imposto de Renda no benefício, pode não existir valor atual a interromper ou a restituir. Como essa informação pode variar conforme o benefício e o período analisado, confira o contracheque ou converse com o escritório em caso de dúvida."
          whatsappMensagem={WHATSAPP_MESSAGES.saidaAntecipada}
          fireContact={tracking.fireContact}
        />
      )}

      {telaAtual.tipo === "saida" && (
        <TelaInformativa
          headingRef={headingRef}
          titulo="Fora do escopo desta verificação"
          texto="Esta análise é destinada a quem recebe aposentadoria, pensão, reserva ou reforma. Para informações sobre outra situação jurídica, utilize os canais gerais da AMC Advocacia."
          whatsappMensagem={WHATSAPP_MESSAGES.saidaAntecipada}
          fireContact={tracking.fireContact}
        />
      )}

      {telaAtual.tipo === "conclusao" && (
        <TelaInformativa
          headingRef={headingRef}
          titulo="Verificação concluída"
          texto="Verificação inicial concluída. Para dar continuidade, fale diretamente com o escritório pelo WhatsApp. As informações deverão ser confirmadas durante o atendimento."
          whatsappMensagem={WHATSAPP_MESSAGES.conclusao}
          fireContact={tracking.fireContact}
        />
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
        {historico.length > 1 ? (
          <button
            type="button"
            onClick={voltar}
            className="min-h-11 rounded-md px-4 py-2 text-sm font-medium text-primary underline underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ← Voltar
          </button>
        ) : (
          <span />
        )}

        {numeroEtapa !== null && (
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.hero}
            onWhatsAppClick={tracking.fireContact}
            variant="discreet"
          >
            Prefere falar diretamente? Fale pelo WhatsApp
          </WhatsAppButton>
        )}
      </div>
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
  opcoes: Opcao<T>[];
  valorAtual?: T;
  onConfirmar: (valor: T) => void;
}

function EtapaPergunta<T extends string>({
  headingRef,
  pergunta,
  opcoes,
  valorAtual,
  onConfirmar,
}: EtapaPerguntaProps<T>) {
  const [selecionada, setSelecionada] = useState<T | undefined>(valorAtual);

  return (
    <fieldset>
      <legend className="sr-only">{pergunta}</legend>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mb-5 text-xl font-bold text-primary outline-none md:text-2xl"
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
              className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-md border-2 px-4 py-3 text-base transition-colors md:text-lg ${
                marcada
                  ? "border-primary bg-primary/5 font-semibold text-primary"
                  : "border-border text-foreground hover:border-primary/40"
              }`}
            >
              <RadioGroupItem value={opcao.valor} id={id} className="shrink-0" />
              <span>{opcao.rotulo}</span>
              {marcada && (
                <span aria-hidden="true" className="ml-auto text-accent">
                  ✓
                </span>
              )}
            </label>
          );
        })}
      </RadioGroup>

      <Button
        type="button"
        size="lg"
        disabled={!selecionada}
        onClick={() => selecionada && onConfirmar(selecionada)}
        className="mt-6 min-h-11 w-full bg-primary text-primary-foreground hover:bg-primary/90 md:w-auto"
      >
        Continuar
      </Button>
    </fieldset>
  );
}

interface TelaInformativaProps {
  headingRef: React.RefObject<HTMLHeadingElement>;
  titulo: string;
  texto: string;
  whatsappMensagem: string;
  fireContact: () => void;
}

function TelaInformativa({
  headingRef,
  titulo,
  texto,
  whatsappMensagem,
  fireContact,
}: TelaInformativaProps) {
  return (
    <div>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mb-4 text-xl font-bold text-primary outline-none md:text-2xl"
      >
        {titulo}
      </h2>
      <p className="mb-6 text-base leading-relaxed text-foreground md:text-lg">{texto}</p>
      <WhatsAppButton message={whatsappMensagem} onWhatsAppClick={fireContact} variant="primary">
        Falar no WhatsApp
      </WhatsAppButton>
    </div>
  );
}
