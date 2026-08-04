import { useState } from "react";
import { MessageCircle } from "lucide-react";
import WhatsAppButton from "@/pages/previdenciario/WhatsAppButton";
import {
  DIAGNOSTICO_SITUACOES,
  DIAGNOSTICO_CTA,
  buildDiagnosticoMessage,
  type DiagnosticoSituacao,
  type DiagnosticoDocumento,
} from "@/pages/previdenciario/data/whatsapp";

type Etapa = "situacao" | "documento" | "resultado";

const OPCOES_SITUACAO: { valor: DiagnosticoSituacao; rotulo: string }[] = (
  Object.keys(DIAGNOSTICO_SITUACOES) as DiagnosticoSituacao[]
).map((valor) => ({ valor, rotulo: DIAGNOSTICO_SITUACOES[valor].rotulo }));

const OPCOES_DOCUMENTO: { valor: DiagnosticoDocumento; rotulo: string }[] = [
  { valor: "sim", rotulo: "Sim, tenho" },
  { valor: "nao", rotulo: "Não tenho agora" },
];

const OPCAO_CLASSNAME =
  "!min-h-[52px] w-full rounded-2xl border !border-[#8CF5A4]/20 !bg-[#0D2016] !px-5 !py-3 text-left text-base font-medium !text-[#F2F7F3] transition-colors hover:!border-[#8CF5A4]/50 hover:!bg-[#12281B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8CF5A4]";

// Versão levemente compactada no mobile (só a 1ª pergunta, 5 opções) — mesma fonte,
// mesma largura, mesma identidade visual; reduz altura/padding e o espaço entre itens
// para exigir menos scroll. Restaura o tamanho padrão a partir do md.
const OPCAO_SITUACAO_CLASSNAME =
  "!min-h-[46px] w-full rounded-2xl border !border-[#8CF5A4]/20 !bg-[#0D2016] !px-5 !py-2 text-left text-base font-medium !text-[#F2F7F3] transition-colors hover:!border-[#8CF5A4]/50 hover:!bg-[#12281B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8CF5A4] md:!min-h-[52px] md:!py-3";

const VOLTAR_CLASSNAME =
  "!mt-4 text-sm font-medium !text-[#B9CBC0] underline decoration-[#B9CBC0]/40 underline-offset-4 hover:!text-[#F2F7F3]";

interface DiagnosticoPrevProps {
  onWhatsAppClick: () => void;
}

export default function DiagnosticoPrev({ onWhatsAppClick }: DiagnosticoPrevProps) {
  const [etapa, setEtapa] = useState<Etapa>("situacao");
  const [situacao, setSituacao] = useState<DiagnosticoSituacao | null>(null);
  const [documento, setDocumento] = useState<DiagnosticoDocumento | null>(null);

  function escolherSituacao(valor: DiagnosticoSituacao) {
    setSituacao(valor);
    setEtapa("documento");
  }

  function escolherDocumento(valor: DiagnosticoDocumento) {
    setDocumento(valor);
    setEtapa("resultado");
  }

  function recomecar() {
    setSituacao(null);
    setDocumento(null);
    setEtapa("situacao");
  }

  return (
    <div className="!mx-auto w-full max-w-[560px] rounded-3xl border !border-[#8CF5A4]/15 !bg-[#0D2016] !p-6 md:!p-8">
      <div className="!mb-5 flex items-center !gap-2 text-xs font-bold uppercase tracking-widest !text-[#8CF5A4]">
        <MessageCircle className="h-4 w-4 shrink-0" />
        Diagnóstico rápido
      </div>

      {etapa === "situacao" && (
        <div>
          <h2 className="!mb-5 text-lg font-bold !text-[#F2F7F3] md:text-xl">
            O que aconteceu com seu benefício?
          </h2>
          <div className="flex flex-col !gap-2 md:!gap-3">
            {OPCOES_SITUACAO.map((op) => (
              <button
                key={op.valor}
                type="button"
                onClick={() => escolherSituacao(op.valor)}
                className={OPCAO_SITUACAO_CLASSNAME}
              >
                {op.rotulo}
              </button>
            ))}
          </div>
        </div>
      )}

      {etapa === "documento" && (
        <div>
          <h2 className="!mb-5 text-lg font-bold !text-[#F2F7F3] md:text-xl">
            Você tem a decisão ou resultado do INSS?
          </h2>
          <div className="flex flex-col !gap-3">
            {OPCOES_DOCUMENTO.map((op) => (
              <button
                key={op.valor}
                type="button"
                onClick={() => escolherDocumento(op.valor)}
                className={OPCAO_CLASSNAME}
              >
                {op.rotulo}
              </button>
            ))}
          </div>
          <button type="button" onClick={recomecar} className={VOLTAR_CLASSNAME}>
            ← Recomeçar
          </button>
        </div>
      )}

      {etapa === "resultado" && situacao && documento && (
        <div>
          <p className="!mb-6 text-base leading-relaxed !text-[#DCE3F0]">
            {documento === "sim"
              ? DIAGNOSTICO_SITUACOES[situacao].respostaComDecisao
              : DIAGNOSTICO_SITUACOES[situacao].respostaSemDecisao}
          </p>
          <WhatsAppButton
            message={buildDiagnosticoMessage(situacao, documento)}
            onWhatsAppClick={onWhatsAppClick}
          >
            {DIAGNOSTICO_CTA[documento]}
          </WhatsAppButton>
          <button type="button" onClick={recomecar} className={`${VOLTAR_CLASSNAME} block`}>
            ← Recomeçar
          </button>
        </div>
      )}
    </div>
  );
}
