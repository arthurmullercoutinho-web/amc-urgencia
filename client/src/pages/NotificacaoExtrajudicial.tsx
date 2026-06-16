import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function NotificacaoExtrajudicial() {
 const testimonials = [
  {
    text: "Recebi atendimento atencioso e orientações claras sobre a situação que estava enfrentando. Todas as minhas dúvidas foram esclarecidas de forma objetiva e transparente.",
    author: "Claudio Roberto da Costa",
    location: "Cuiabá/MT",
  },
  {
    text: "Fui atendida com profissionalismo e recebi informações importantes para compreender melhor os meus direitos e as medidas juridicamente cabíveis para o caso.",
    author: "Ana Maria Santana",
    location: "Cuiabá/MT",
  },
];

  const faqItems = [
    {
      question: "Quanto tempo leva para entender minha notificação?",
      answer:
        "A gente entende em 1 hora. A gente explica em até 2 horas. Você recebe uma explicação clara do que significa. Você recebe orientação de como responder. Tudo rápido. Tudo claro.",
    },
    {
      question: "Qual é o prazo para responder?",
      answer:
        "Depende da notificação. Pode ser 5 dias, 10 dias, 15 dias. A gente te fala exatamente qual é o prazo depois de analisar a notificação. Você não vai perder o prazo.",
    },
    {
      question: "Se eu responder agora, vou estar protegido?",
      answer:
        "Sim. Se você responder no prazo, você tem direito de defesa. Você não perde seu direito. Você está protegido. A gente te explica tudo depois da análise.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <Hero
        headline="Você recebeu uma notificação ameaçadora. Você tem prazo para responder."
        subheadline="Você recebeu uma notificação de cobrança, despejo, ação judicial, ou qualquer comunicação que o assusta. Você não sabe o que fazer. Você tem prazo para responder. Nós sabemos como responder estrategicamente."
        ctaPrimary={{
          text: "Entender Minha Notificação",
          onClick: () =>
            window.open(
              "https://wa.me/5565999999999?text=Recebi uma notificação. Preciso entender o que significa.",
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
              Você recebeu uma notificação. Pode ser do cartório. Pode ser do banco. Pode ser de qualquer lugar. Você não entende o que significa. Você tem medo.
            </p>
            <p>
              Você lê a notificação, mas está em linguagem jurídica. Você não entende nada. Você não sabe o que fazer. Você tem prazo para responder. Você não sabe como.
            </p>
            <p className="font-semibold text-blue-600">
              Você não está perdido. Você tem direito a orientação.
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
                ❌ Você não responde
              </h3>
              <p className="text-red-800">
                Você não entende a notificação. Você não responde no prazo. O prazo vence. Você perde o direito de defesa.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você responde errado
              </h3>
              <p className="text-red-800">
                Você tenta responder, mas responde errado. Sua resposta não funciona. Você perde de qualquer forma.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você fica sem defesa
              </h3>
              <p className="text-red-800">
                Você não responde ou responde errado. Você perde o direito de defesa. Você fica sem proteção.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ Você entende e responde
              </h3>
              <p className="text-green-800">
                A gente explica a notificação. A gente orienta como responder. Você responde estrategicamente. Você tem defesa.
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
                title: "Você liga ou manda mensagem",
                desc: "Você manda a notificação que recebeu. A gente lê.",
              },
              {
                step: "2",
                title: "A gente analisa em 1 hora",
                desc: "O que a notificação significa. Qual é o prazo para responder. Se você tem direito a defesa.",
              },
              {
                step: "3",
                title: "A gente explica",
                desc: "A gente explica exatamente o que a notificação significa. Em português simples. Sem juridiquês.",
              },
              {
                step: "4",
                title: "Você responde estrategicamente",
                desc: "Você responde no prazo. Você responde corretamente. Você tem defesa.",
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

     <Testimonials testimonials={testimonials} title="Depoimentos de Clientes" />

      <FAQ items={faqItems} />

      <CTAFinal
        headline="Você não precisa ter medo de uma notificação."
        subheadline="Análise rápida. Orientação clara. Resposta estratégica."
        ctaText="Entender Minha Notificação - Fale Agora no WhatsApp"
        whatsappNumber="556598172713"
      />

      <Footer />
    </div>
  );
}
