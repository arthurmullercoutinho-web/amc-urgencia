import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function ProblemasImobiliarios() {
 const testimonials = [
  {
    text: "Recebi atendimento atencioso e uma análise detalhada da minha situação. As orientações foram claras e me ajudaram a compreender melhor os meus direitos e as possibilidades jurídicas do caso.",
    author: "Adriana Dias",
    location: "Cuiabá/MT",
  },
  {
    text: "Fui atendida com profissionalismo e transparência. Recebi esclarecimentos importantes sobre o meu caso e pude tomar decisões com mais segurança e tranquilidade.",
    author: "Lenice da Silva",
    location: "Cuiabá/MT",
  },
];

  const faqItems = [
    {
      question: "Quanto tempo leva para proteger meu imóvel?",
      answer:
        "Alguns casos levam 24-48 horas, outros levam até 1-2 semanas. Tudo depende de irregularidades no processo, como o juiz interpreta a lei, e se o credor recorre. A gente te fala exatamente depois da análise.",
    },
    {
      question: "Vou perder meu imóvel?",
      answer:
        "Na maioria dos casos, não. Mas a gente é honesta: nem todo caso tem sucesso. Depende dos fatos, da documentação, e do juiz. O que a gente garante é análise completa, orientação clara, ação rápida e transparência total.",
    },
    {
      question: "Enquanto vocês trabalham, posso continuar no meu imóvel?",
      answer:
        "Depende. Se a gente conseguir uma medida de urgência, você pode continuar no seu imóvel enquanto o processo acontece. Se não conseguir, você pode ser despejado enquanto a gente trabalha. Mas a gente trabalha rápido. A gente te explica isso depois da análise.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <Hero
        headline="Seu imóvel está em risco. Você tem prazo para agir."
        subheadline="Você recebeu uma notificação de despejo, execução hipotecária, ou qualquer ameaça ao seu imóvel. Você tem direito a defesa. Nós sabemos como usar isso."
        ctaPrimary={{
          text: "Proteger Meu Imóvel",
          onClick: () =>
            window.open(
              "https://wa.me/556598172713?text=Meu imóvel está em risco. Preciso de ajuda.",
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
              Você tem um imóvel. Pode ser sua casa. Pode ser um aluguel. Você tem uma dívida relacionada ao imóvel. Pode ser uma ação de despejo. Pode ser uma execução hipotecária. Pode ser qualquer coisa que ameaça seu imóvel.
            </p>
            <p>
              De repente, você recebe uma notificação. Você está sendo despejado. Ou seu imóvel está sendo executado. Você tem prazo para responder. Você não sabe o que fazer.
            </p>
            <p className="font-semibold text-blue-600">
              Você não perdeu seu imóvel. Você tem direito a defesa.
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
                ❌ Você perde seu imóvel
              </h3>
              <p className="text-red-800">
                Você é despejado ou seu imóvel é executado. Você perde seu patrimônio.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você perde tudo
              </h3>
              <p className="text-red-800">
                Você perde seu imóvel. Você ainda fica devendo a diferença. Seu nome fica sujo.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Sua família fica sem casa
              </h3>
              <p className="text-red-800">
                Você é despejado. Sua família fica sem casa. Você não consegue colocar as crianças em escola.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ Você protege seu imóvel
              </h3>
              <p className="text-green-800">
                A gente entra com ação. Suspendemos a ação de despejo ou execução. Você mantém seu imóvel. Você continua sua vida.
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
                desc: "Notificação, contrato, comprovante de pagamento, tudo.",
              },
              {
                step: "2",
                title: "A gente procura irregularidades (em 1 hora)",
                desc: "Se o processo foi feito corretamente. Se tem irregularidade. Se tem abusividade.",
              },
              {
                step: "3",
                title: "A gente entra com ação",
                desc: "Ação para suspender o despejo ou execução. Pede para o juiz proteger seu imóvel.",
              },
              {
                step: "4",
                title: "Seu imóvel está protegido",
                desc: "Na maioria dos casos, o juiz concede. Seu imóvel está protegido. Você mantém sua casa.",
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
        headline="Seu imóvel não precisa ser perdido."
        subheadline="Análise rápida. Orientação clara. Ação eficiente."
        ctaText="Proteger Meu Imóvel - Fale Agora no WhatsApp"
        whatsappNumber="5565999999999"
      />

      <Footer />
    </div>
  );
}
