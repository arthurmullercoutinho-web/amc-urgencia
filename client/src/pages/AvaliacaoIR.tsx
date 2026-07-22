import { useEffect, useState } from "react";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Triagem from "@/pages/avaliacao-ir/Triagem";
import WhatsAppButton from "@/pages/avaliacao-ir/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/pages/avaliacao-ir/data/whatsapp";
import { useAvaliacaoIRTracking } from "@/pages/avaliacao-ir/data/tracking";

const PAGE_TITLE = "Avaliação de Direito Tributário | AMC Advocacia";
const PAGE_DESCRIPTION =
  "Informações sobre isenção de Imposto de Renda para aposentados, pensionistas e militares inativos. Entenda os requisitos legais com a AMC Advocacia.";
const PAGE_URL = "https://www.amcjuridico.com.br/avaliacao-ir";

const COMO_FUNCIONA = [
  "A legislação prevê a possibilidade de isenção do Imposto de Renda sobre determinados rendimentos de aposentadoria, pensão, reserva ou reforma quando presentes os requisitos legais.",
  "A isenção alcança os rendimentos de aposentadoria, pensão, reserva ou reforma. Rendimentos de trabalho ou atividade profissional permanecem sujeitos às regras gerais de tributação.",
  "A existência de valores a restituir depende da ocorrência de retenções anteriores e da análise do período aplicável ao caso.",
  "A ausência de laudo pronto não deve levar a uma conclusão automática. Os documentos necessários dependem da análise individual.",
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
      {/* Área inicial */}
      <section className="bg-primary px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-bold leading-snug text-primary-foreground md:text-4xl md:leading-tight">
            Aposentados, pensionistas e militares inativos com determinadas doenças
            previstas em lei podem ter direito à isenção do Imposto de Renda
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Entenda os requisitos e verifique quais informações são necessárias para a
            análise do caso.
          </p>

          {!triagemIniciada && (
            <div className="mt-8 flex flex-col items-center gap-4">
              <button
                type="button"
                onClick={handleIniciarTriagem}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-8 py-4 text-lg font-bold text-primary shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              >
                Verificar os requisitos
              </button>

              <WhatsAppButton
                message={WHATSAPP_MESSAGES.hero}
                onWhatsAppClick={tracking.fireContact}
                variant="discreet"
                className="text-primary-foreground/80 decoration-primary-foreground/40 hover:decoration-primary-foreground hover:text-primary-foreground"
              >
                Prefere falar diretamente? Fale pelo WhatsApp
              </WhatsAppButton>
            </div>
          )}
        </div>
      </section>

      {/* Triagem */}
      {triagemIniciada && (
        <section aria-label="Verificação inicial" className="bg-slate-50 px-4 py-10 md:py-14">
          <Triagem tracking={tracking} />
        </section>
      )}

      {/* Conteúdo informativo */}
      <section className="px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">Como funciona</h2>
          <div className="space-y-4">
            {COMO_FUNCIONA.map((paragrafo, index) => (
              <p key={index} className="text-base leading-relaxed text-foreground md:text-lg">
                {paragrafo}
              </p>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} title="Perguntas frequentes" />

      {/* Sobre o advogado */}
      <section className="bg-slate-50 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <img
              src="/foto-arthur-coutinho.jpg"
              alt="Arthur Müller Coutinho, advogado responsável pelo atendimento"
              className="h-40 w-40 shrink-0 rounded-full object-cover shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold text-primary">Arthur Müller Coutinho</h2>
              <p className="mt-1 text-base font-semibold text-accent">OAB/MT 10.889</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <span className="rounded-full border border-primary/20 bg-white px-3 py-1 text-sm text-primary">
                  Atendimento direto
                </span>
                <span className="rounded-full border border-primary/20 bg-white px-3 py-1 text-sm text-primary">
                  Presencial em Cuiabá
                </span>
                <span className="rounded-full border border-primary/20 bg-white px-3 py-1 text-sm text-primary">
                  Online em todo o Brasil
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso informativo */}
      <section className="px-4 py-10">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Este conteúdo tem finalidade meramente informativa e não constitui garantia de
            direito ou de resultado. A viabilidade de cada caso depende de avaliação
            jurídica individual. Consulte também a nossa{" "}
            <a href="/privacy" className="font-medium text-primary underline underline-offset-4">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
