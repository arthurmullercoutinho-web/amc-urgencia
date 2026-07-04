import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

// Mensagem e link do WhatsApp — mesma mensagem usada em todos os CTAs
// da versão aprovada da landing (Hero e CTA final).
const WHATSAPP_MESSAGE =
  "Olá Dr. Arthur.\n\nEncontrei a página sobre conta bloqueada.\n\nGostaria de entender o que aconteceu com minha conta e quais medidas podem ser avaliadas para o meu caso.";
const WHATSAPP_URL = `https://wa.me/556598172713?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Idêntica à função de tracking da versão aprovada (GA4 + Google Ads + Meta
// Pixel). Usa o mesmo padrão de optional chaining já presente em Hero.tsx
// e CTAFinal.tsx (window.gtag?. / window.fbq?.), o que indica que os tipos
// globais já estão declarados em algum lugar do projeto.
function trackWhatsAppClick() {
  window.gtag?.("event", "clique_whatsapp", {
    event_category: "WhatsApp",
    event_label: "conta_bloqueada",
    value: 1,
  });
  window.gtag?.("event", "conversion", {
    send_to: "AW-620453322/yJl8CJOUwIkbEMq77acC",
  });
  // Cast local: ao contrário de 'gtag', 'fbq' não aparece em nenhum dos
  // componentes originais, então não há garantia de que já existe uma
  // declaração de tipo global para ele neste projeto.
  (window as unknown as { fbq?: (...args: any[]) => void }).fbq?.(
    "track",
    "Contact"
  );
}

export default function ContaBloqueada() {
  const testimonials = [
    {
      text: "Recebi atendimento atencioso e todas as etapas do processo foram explicadas com clareza. Isso me trouxe mais segurança para lidar com a situação.",
      author: "Carlos Henrique Silva",
      location: "Cuiabá/MT",
    },
    {
      text: "Fui orientado de forma transparente sobre os meus direitos e sobre as medidas que poderiam ser analisadas para o meu caso.",
      author: "Domingos Soares",
      location: "Cuiabá/MT",
    },
  ];

  // Conjunto de perguntas aprovado. O item "Como confirmo que o escritório
  // é real?" agora usa um link real (JSX), habilitado pela alteração em
  // FAQ.tsx (answer: string | ReactNode).
  const faqItems = [
    {
      question: "A primeira conversa tem custo?",
      answer:
        "Não. A conversa inicial pelo WhatsApp, para entender o seu caso, não tem custo nem compromisso.",
    },
    {
      question: "Meus dados e prints ficam seguros?",
      answer:
        "Sim. Todo atendimento é protegido por sigilo profissional, dever ético da advocacia.",
    },
    {
      question: "Você atende fora de Cuiabá?",
      answer:
        "Sim, atendo online para todo o Brasil. Presencial disponível em Cuiabá.",
    },
    {
      question: "É possível recuperar o dinheiro bloqueado?",
      answer:
        "Depende das circunstâncias do caso. Na conversa inicial, avalio a situação e explico quais medidas podem ser cabíveis.",
    },
    {
      question: "Como confirmo que o escritório é real?",
      answer: (
        <>
          Você pode consultar o registro OAB/MT 10.889 diretamente no{" "}
          <a
            href="https://cna.oab.org.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 font-semibold underline"
          >
            site oficial da OAB
          </a>{" "}
          antes de qualquer contato.
        </>
      ),
    },
    {
      question: "Vou ser pressionado a contratar depois da conversa?",
      answer: "Não. Você decide se quer continuar depois de entender o seu caso.",
    },
  ];

  // As 4 hipóteses de bloqueio aprovadas — exclusivamente bancárias,
  // sem nenhuma menção a bloqueio judicial, ordem judicial, penhora,
  // SISBAJUD ou qualquer medida determinada pela Justiça.
  const blockReasons = [
    {
      title: "Atualização cadastral pendente",
      desc: "O banco exige documentos ou dados atualizados antes de liberar a movimentação.",
    },
    {
      title: "Análise interna do banco",
      desc: "Movimentação considerada fora do padrão, gerando bloqueio preventivo.",
    },
    {
      title: "Suspeita de fraude",
      desc: "Conta sinalizada por segurança, aguardando confirmação de dados.",
    },
    {
      title: "Pendência de compliance",
      desc: "Documentação ou informação cadastral que o banco considera incompleta.",
    },
  ];

  // As 3 etapas aprovadas (substituem as 4 anteriores) — passo 2 em
  // primeira pessoa, consistente com a voz do restante da página.
  const steps = [
    {
      step: "1",
      title: "Você conta o que aconteceu",
      desc: "Em poucas mensagens, sem formulário — como uma conversa normal.",
    },
    {
      step: "2",
      title: "Eu identifico o motivo provável do bloqueio",
      desc: "Com base no que você recebeu do banco e nas informações do caso.",
    },
    {
      step: "3",
      title: "Você entende quais medidas podem ser avaliadas",
      desc: "Explicação clara sobre os próximos passos possíveis para o seu caso.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <Hero
        headline="Sua conta foi bloqueada ou seu dinheiro foi retido?"
        subheadline="Um advogado pode ajudar você a entender o motivo do bloqueio e quais medidas podem ser avaliadas — sem custo para conversar."
        microbar="Dr. Arthur Müller Coutinho · OAB/MT 10.889"
        ctaPrimary={{
          text: "Quero entender meu bloqueio",
          onClick: () => {
            trackWhatsAppClick();
            window.open(WHATSAPP_URL, "_blank");
          },
        }}
        whatsappFloatingMessage={WHATSAPP_MESSAGE}
        onWhatsappFloatingClick={trackWhatsAppClick}
      />

      {/*
        Seção única "O que costuma acontecer" — substitui as três seções
        anteriores ("Como Você Chegou Aqui?", "O Que Pode Acontecer?" e o
        card verde de solução), que repetiam o mesmo conteúdo três vezes.
        Mantive a paleta de cores já usada neste arquivo (red-50/red-900)
        para não introduzir uma paleta nova fora da arquitetura existente.
      */}
      <section className="w-full py-12 md:py-16 bg-slate-50">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-wide text-red-700 mb-2">
            O que costuma acontecer
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Bancos bloqueiam contas por motivos específicos — nem sempre
            explicados com clareza.
          </h2>

          <div className="space-y-4">
            {blockReasons.map((reason) => (
              <div
                key={reason.title}
                className="flex gap-4 items-start p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-red-200 text-red-800 font-bold">
                  ✕
                </div>
                <div>
                  <h3 className="font-bold text-red-900">{reason.title}</h3>
                  <p className="text-red-800 text-sm">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA intermediário — captura o pico emocional logo após a agitação */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">
              Nem sempre o banco explica qual desses motivos se aplica ao seu
              caso.
            </p>
            <button
              onClick={() => {
                trackWhatsAppClick();
                window.open(WHATSAPP_URL, "_blank");
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#128038] hover:bg-[#0f6f30] text-white font-bold px-6 py-4 rounded-xl w-full md:w-auto"
            >
              Analisar meu caso agora
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
            Sem burocracia
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            O que acontece depois que você chama no WhatsApp
          </h2>

          <div className="space-y-4">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-900 text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        Bloco do advogado — conteúdo novo, não existia nesta página antes.
        Foto no mesmo caminho já usado na versão aprovada; troque pelo
        arquivo real se o caminho no seu projeto for diferente.
      */}
      <section className="w-full py-12 md:py-16 bg-slate-50">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              {/* SUBSTITUIR pelo caminho real da foto no seu projeto, se diferente */}
              <img
                src="/foto-arthur-coutinho.jpg"
                alt="Dr. Arthur Müller Coutinho, advogado responsável pelo atendimento"
                className="h-16 w-16 rounded-full object-cover border-2 border-amber-400"
              />
              <div>
                <p className="font-bold text-lg">Arthur Müller Coutinho</p>
                <p className="text-slate-300 text-sm">
                  OAB/MT 10.889 · AMC Advocacia
                </p>
              </div>
            </div>
            <p className="italic text-slate-200 border-l-2 border-amber-400 pl-4">
              "Quase todo caso que chega até mim começa do mesmo jeito: a
              pessoa não sabe se deve esperar ou agir. Eu ajudo a responder
              isso primeiro — o resto a gente resolve com calma, olhando pro
              que realmente aconteceu no seu caso."
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Atendimento direto", "Presencial em Cuiabá", "Online em todo o Brasil"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold bg-amber-400 text-slate-900 px-3 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} title="Depoimentos de Clientes" />

      <FAQ items={faqItems} />

      <CTAFinal
        headline="Ainda com dúvidas sobre o seu caso?"
        subheadline="Fale agora com o Dr. Arthur e entenda, sem custo, o que pode ser feito."
        ctaText="Falar agora no WhatsApp"
        whatsappMessage={WHATSAPP_MESSAGE}
        onWhatsappClick={trackWhatsAppClick}
        urgencyText="Resposta em até 1 hora útil"
      />

      <Footer />
    </div>
  );
}
