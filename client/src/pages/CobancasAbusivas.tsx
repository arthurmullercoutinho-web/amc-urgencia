import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function CobancasAbusivas() {
 const testimonials = [
  {
    text: "Recebi orientação clara e objetiva sobre a situação que estava enfrentando. O atendimento foi atencioso e todas as minhas dúvidas foram esclarecidas de forma transparente.",
    author: "Cliente AMC",
    location: "Cuiabá/MT",
  },
  {
    text: "Fui atendido com profissionalismo e recebi informações importantes para compreender melhor os meus direitos e avaliar as medidas juridicamente cabíveis para o caso.",
    author: "Cliente AMC",
    location: "Cuiabá/MT",
  },
];

  const faqItems = [
    {
      question: "Quanto tempo leva para parar a cobrança?",
      answer:
        "Alguns casos levam 24-48 horas, outros levam até 1-2 semanas. Tudo depende de abusividade na cobrança, como o juiz interpreta a lei, e se o credor recorre. A gente te fala exatamente depois da análise.",
    },
    {
      question: "Meu nome vai ser limpo?",
      answer:
        "Na maioria dos casos, sim. Mas a gente é honesta: nem todo caso tem sucesso. Depende dos fatos, da documentação, e do juiz. O que a gente garante é análise completa, orientação clara, ação rápida e transparência total.",
    },
    {
      question: "Posso ser cobrado novamente depois?",
      answer:
        "Não. Se a gente conseguir parar a cobrança, ela não pode ser cobrada novamente. Se o credor tentar cobrar de novo, você pode entrar com ação por abusividade. A gente te explica isso depois da análise.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <Hero
        headline="Você está sendo cobrado indevidamente. Você tem direito a parar isso."
        subheadline="Você recebeu uma cobrança de dívida que já pagou. Ou de juros que não fazem sentido. Ou de multa que não deveria existir. Você tem direito a defesa. Nós sabemos como usar isso."
        ctaPrimary={{
          text: "Parar a Cobrança",
          onClick: () =>
            window.open(
              "https://wa.me/556598172713?text=Estou sendo cobrado indevidamente. Preciso de ajuda.",
              "_blank"
            ),
        }}
        urgencyBadge="⏱️ Análise em 1 Hora"
      />

      <section className="w-full py-12 md:py-16 bg-slate-50">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Como Você Chegou Aqui?
          </h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p>
              Você tinha uma dívida. Você pagou. Você tem comprovante de pagamento. Você acha que está tudo certo.
            </p>
            <p>
              De repente, você recebe uma cobrança. Você fica confuso. Você já pagou. Você tenta ligar para a empresa. Ninguém resolve. Você tenta enviar e-mail. Ninguém responde.
            </p>
            <p>
              Aí vem a notificação. Depois a ação judicial. Você está sendo cobrado por uma dívida que já pagou.
            </p>
            <p className="font-semibold text-blue-600">
              Você não está errado. Você tem direito a defesa.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            O Que Pode Acontecer?
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você continua sendo cobrado
              </h3>
              <p className="text-red-800">
                Você recebe notificação atrás de notificação. Você vive com medo. Você não consegue dormir.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Seu nome fica sujo
              </h3>
              <p className="text-red-800">
                A cobrança abusiva vai para seu nome. Seu nome fica sujo. Você não consegue crédito nunca mais.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você perde dinheiro
              </h3>
              <p className="text-red-800">
                Você é forçado a pagar uma dívida que já pagou. Você perde dinheiro. Você fica sem nada.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ Você para a cobrança
              </h3>
              <p className="text-green-800">
                A gente entra com ação. Paramos a cobrança abusiva. Seu nome é limpo. Você continua sua vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-slate-50">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Como Resolvemos Seu Problema
          </h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Você manda os documentos",
                desc: "Notificação, comprovante de pagamento, tudo.",
              },
              {
                step: "2",
                title: "A gente procura irregularidades (em 1 hora)",
                desc: "Se você já pagou essa dívida. Se a cobrança é abusiva. Se tem juros ilegais.",
              },
              {
                step: "3",
                title: "A gente entra com ação",
                desc: "Ação para parar a cobrança. Pede para o juiz cancelar a dívida.",
              },
              {
                step: "4",
                title: "A cobrança para",
                desc: "Na maioria dos casos, o juiz concede. A cobrança para. Seu nome é limpo.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
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

      <Testimonials testimonials={testimonials} title="Histórias Reais" />

      <FAQ items={faqItems} />

      <CTAFinal
        headline="Você não precisa ser cobrado indevidamente."
        subheadline="Análise rápida. Orientação clara. Ação eficiente."
        ctaText="Parar a Cobrança - Fale Agora no WhatsApp"
        whatsappNumber="556598172713"
      />

      <Footer />
    </div>
  );
}
