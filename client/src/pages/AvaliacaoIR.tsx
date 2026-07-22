import { useEffect, useState } from "react";
import { Landmark, RotateCcw, FileSearch } from "lucide-react";
import HeaderIR from "@/pages/avaliacao-ir/HeaderIR";
import FooterIR from "@/pages/avaliacao-ir/FooterIR";
import FAQIR from "@/pages/avaliacao-ir/FAQIR";
import FloatingWhatsAppIR from "@/pages/avaliacao-ir/FloatingWhatsAppIR";
import Triagem from "@/pages/avaliacao-ir/Triagem";
import WhatsAppButton from "@/pages/avaliacao-ir/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/pages/avaliacao-ir/data/whatsapp";
import { useAvaliacaoIRTracking } from "@/pages/avaliacao-ir/data/tracking";

const PAGE_TITLE = "Avaliação de Direito Tributário | AMC Advocacia";
const PAGE_DESCRIPTION =
  "Informações sobre isenção de Imposto de Renda para aposentados, pensionistas e militares inativos. Entenda os requisitos legais com a AMC Advocacia.";
const PAGE_URL = "https://www.amcjuridico.com.br/avaliacao-ir";

const COMO_FUNCIONA = [
  {
    icon: Landmark,
    titulo: "Rendimentos abrangidos",
    texto:
      "A legislação prevê a possibilidade de isenção do Imposto de Renda sobre determinados rendimentos de aposentadoria, pensão, reserva ou reforma quando presentes os requisitos legais. A isenção alcança os rendimentos de aposentadoria, pensão, reserva ou reforma. Rendimentos de trabalho ou atividade profissional permanecem sujeitos às regras gerais de tributação.",
  },
  {
    icon: RotateCcw,
    titulo: "Retenção e possível restituição",
    texto:
      "A existência de valores a restituir depende da ocorrência de retenções anteriores e da análise do período aplicável ao caso.",
  },
  {
    icon: FileSearch,
    titulo: "Documentos e análise individual",
    texto:
      "A ausência de laudo pronto não deve levar a uma conclusão automática. Os documentos necessários dependem da análise individual.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Preciso ter o laudo médico pronto?",
    answer:
      "Não necessariamente. A documentação disponível e a necessidade de outros documentos podem ser avaliadas durante o atendimento.",
  },
  {
    question: "A isenção pode valer para benefício do INSS?",
    answer:
      "Pode haver enquadramento conforme a natureza do benefício, a incidência de Imposto de Renda e os demais requisitos legais.",
  },
  {
    question: "Minhas respostas ficam salvas?",
    answer:
      "As respostas foram projetadas para permanecer apenas durante esta verificação. O funcionamento técnico será validado antes da publicação.",
  },
  {
    question: "Esta verificação garante a isenção ou restituição?",
    answer:
      "Não. Esta ferramenta tem finalidade informativa. A existência do direito e de eventual valor a restituir depende da análise jurídica individual e da documentação de cada caso.",
  },
];

export default function AvaliacaoIR() {
  const tracking = useAvaliacaoIRTracking();
  const [triagemIniciada, setTriagemIniciada] = useState(false);

  useEffect(() => {
    document.title = PAGE_TITLE;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', PAGE_DESCRIPTION);
    setMeta('meta[property="og:title"]', PAGE_TITLE);
    setMeta('meta[property="og:description"]', PAGE_DESCRIPTION);
    setMeta('meta[property="og:url"]', PAGE_URL);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", PAGE_URL);
  }, []);

  function handleIniciarTriagem() {
    tracking.fireTriagemIniciada();
    setTriagemIniciada(true);
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="hidden md:block">
        <HeaderIR />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0E1729] to-[#16223B] !px-6 !pt-5 !pb-16 md:!px-8 md:!pt-20 md:!pb-28">
        {/* Cabeçalho compacto integrado ao hero, somente mobile */}
        <div className="!mb-6 text-center text-xs !px-4 md:hidden">
          <span className="text-[#DCE3F0]">Dr. Arthur Müller Coutinho</span>
          <span className="text-[#DCE3F0]"> · </span>
          <span className="font-bold text-white">OAB/MT 10.889</span>
        </div>

        <div className="!mx-auto grid w-full max-w-[1150px] items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          <div className="text-left">
            <h1 className="font-serif text-[35px] font-bold leading-[1.18] text-white md:font-sans md:text-4xl md:leading-[1.15]">
              Aposentados, pensionistas e militares inativos podem ter direito à{" "}
              <span className="text-[#7CD9A0]">isenção do Imposto de Renda</span>
            </h1>
            <p className="!mt-4 max-w-xl text-base text-[#B9C2D4] md:!mt-5 md:text-lg">
              O benefício pode ser aplicado em casos de determinadas doenças previstas em
              lei. Verifique os requisitos para uma análise inicial.
            </p>

            {!triagemIniciada && (
              <div className="!mt-6 flex flex-col items-start gap-4 md:!mt-8">
                <button
                  type="button"
                  onClick={handleIniciarTriagem}
                  className="!inline-flex min-h-[58px] w-full items-center justify-center rounded-[13px] !bg-[#128038] !px-8 !py-4 text-lg font-bold !text-white shadow-[0_6px_20px_rgba(18,128,56,0.4)] transition-colors hover:!bg-[#0f6b2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  Verificar os requisitos
                </button>

                <WhatsAppButton
                  message={WHATSAPP_MESSAGES.hero}
                  onWhatsAppClick={tracking.fireContact}
                  variant="discreet"
                  className="!text-[#B9C2D4] decoration-[#B9C2D4]/50 hover:!text-white hover:decoration-white focus-visible:outline-white"
                >
                  Prefere falar diretamente? Fale pelo WhatsApp
                </WhatsAppButton>
              </div>
            )}
          </div>

          <div className="hidden w-full max-w-[300px] md:!mx-0 md:block">
            <img
              src="/foto-arthur-coutinho.jpg"
              alt="Arthur Müller Coutinho, advogado responsável pelo atendimento"
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Triagem */}
      {triagemIniciada && (
        <section
          aria-label="Verificação inicial"
          className="bg-[#F6F5F1] !px-5 !pt-12 !pb-20 md:!px-8 md:!py-16"
        >
          <Triagem tracking={tracking} />
        </section>
      )}

      {/* Como funciona */}
      <section className="bg-white !px-5 !py-16 md:!px-8 md:!py-20">
        <div className="!mx-auto w-full max-w-[1150px]">
          <h2 className="!mb-10 text-center text-2xl font-bold text-[#0E1729] md:text-3xl">
            Como funciona
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {COMO_FUNCIONA.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.titulo}
                  className="flex h-full flex-col rounded-2xl border border-[#E4E1D8] bg-white !p-7 shadow-sm"
                >
                  <div className="!mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0E1729]/[0.07]">
                    <Icon className="h-6 w-6 !text-[#0E1729]" strokeWidth={2} />
                  </div>
                  <h3 className="!mb-2 text-lg font-bold text-[#0E1729]">{item.titulo}</h3>
                  <p className="text-sm leading-relaxed !text-[#5C6472]">{item.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQIR items={FAQ_ITEMS} />

      {/* Sobre o advogado */}
      <section className="bg-white !px-5 !py-16 md:!px-8 md:!py-20">
        <div className="!mx-auto w-full max-w-2xl rounded-3xl bg-[#0E1729] !p-8 text-center shadow-md md:!p-12">
          {/* Mobile: fotografia circular pequena ao lado do nome (única foto visível neste breakpoint) */}
          <div className="flex items-center gap-4 text-left md:hidden">
            <img
              src="/foto-arthur-coutinho.jpg"
              alt="Arthur Müller Coutinho, advogado responsável pelo atendimento"
              className="h-20 w-20 shrink-0 rounded-full border-2 border-[#B08D2B] object-cover object-top"
            />
            <div>
              <h2 className="text-lg font-bold text-white">Arthur Müller Coutinho</h2>
              <p className="text-sm text-[#B9C2D4]">OAB/MT 10.889</p>
              <p className="text-sm text-[#B9C2D4]">AMC Advocacia</p>
            </div>
          </div>

          {/* Desktop: sem fotografia (já exibida no hero) */}
          <div className="hidden md:block">
            <h2 className="text-2xl font-bold text-white">Arthur Müller Coutinho</h2>
            <p className="!mt-1 text-base font-semibold text-[#B9C2D4]">OAB/MT 10.889</p>
          </div>
          <p className="!mx-auto !mt-5 max-w-md text-base leading-relaxed text-[#B9C2D4]">
            Atendimento direto com o advogado responsável pelo caso, com atuação em Direito
            Tributário e benefícios previdenciários.
          </p>
          <ul className="!mt-6 flex flex-col items-center gap-2 text-sm text-[#B9C2D4] sm:flex-row sm:justify-center sm:gap-6">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7CD9A0]" aria-hidden="true" />
              Atendimento direto
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7CD9A0]" aria-hidden="true" />
              Presencial em Cuiabá
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7CD9A0]" aria-hidden="true" />
              Online em todo o Brasil
            </li>
          </ul>
        </div>
      </section>

      <FooterIR />
      <FloatingWhatsAppIR onWhatsAppClick={tracking.fireContact} />
    </div>
  );
}
