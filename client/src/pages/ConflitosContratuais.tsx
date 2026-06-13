import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function ConflitosContratuais() {
  const testimonials = [
  {
    text: "Recebi atendimento atencioso e uma análise detalhada do contrato. As orientações foram claras e me ajudaram a compreender melhor os meus direitos e as alternativas juridicamente possíveis.",
    author: "Cliente AMC",
    location: "Cuiabá/MT",
  },
  {
    text: "Fui atendida com profissionalismo e transparência. Recebi esclarecimentos importantes sobre o meu caso e pude tomar decisões com mais segurança.",
    author: "Cliente AMC",
    location: "Cuiabá/MT",
  },
];
  const faqItems = [
    {
      question: "Quanto tempo leva para revisar meu contrato?",
      answer:
        "Alguns casos levam 1-2 semanas, outros levam até 1 mês. Tudo depende de abusividade no contrato, como o juiz interpreta a lei, e se o outro lado recorre. A gente te fala exatamente depois da análise.",
    },
    {
      question: "Meu contrato vai ser revisado?",
      answer:
        "Na maioria dos casos, sim. Mas a gente é honesta: nem todo caso tem sucesso. Depende dos fatos, da documentação, e do juiz. O que a gente garante é análise completa, orientação clara, ação rápida e transparência total.",
    },
    {
      question: "Enquanto vocês trabalham, preciso continuar cumprindo o contrato?",
      answer:
        "Depende. Se a gente conseguir uma medida de urgência, você pode parar de cumprir enquanto o processo acontece. Se não conseguir, você continua cumprindo enquanto a gente trabalha. Mas a gente trabalha rápido. A gente te explica isso depois da análise.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <Hero
        headline="Seu contrato é abusivo. Você está tendo prejuízo."
        subheadline="Você assinou um contrato. Agora percebeu que as cláusulas são abusivas. Ou o outro lado não está cumprindo. Você está tendo prejuízo. Você tem direito a revisar esse contrato. Nós sabemos como fazer isso."
        ctaPrimary={{
          text: "Revisar Meu Contrato",
          onClick: () =>
            window.open(
              "https://wa.me/5565999999999?text=Tenho um contrato abusivo. Preciso revisar.",
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
              Você assinou um contrato. Tudo certo no início. Você confiou na outra pessoa. Você não leu tudo. Ou você leu, mas não entendeu.
            </p>
            <p>
              Agora você percebeu que as cláusulas são abusivas. Ou o outro lado não está cumprindo o que prometeu. Você está tendo prejuízo.
            </p>
            <p>
              Você tenta conversar. O outro lado não quer saber. Você tenta resolver. Nada funciona. Você está preso em um contrato ruim.
            </p>
            <p className="font-semibold text-blue-600">
              Você não está preso. Você tem direito a revisar esse contrato.
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
                ❌ Você continua tendo prejuízo
              </h3>
              <p className="text-red-800">
                O contrato continua abusivo. Você continua perdendo dinheiro. Você nunca consegue se livrar.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você perde dinheiro
              </h3>
              <p className="text-red-800">
                Você para de cumprir o contrato. O outro lado entra com ação contra você. Você é condenado. Você perde dinheiro.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Seu nome fica sujo
              </h3>
              <p className="text-red-800">
                Você é condenado. Seu nome fica sujo. Você não consegue crédito nunca mais.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ Você revisa seu contrato
              </h3>
              <p className="text-green-800">
                A gente analisa seu contrato. Encontra abusividades. Revisa as cláusulas. Você para de ter prejuízo. Você continua sua vida.
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
                desc: "Contrato, comprovante de prejuízo, tudo.",
              },
              {
                step: "2",
                title: "A gente procura abusividades (em 1 hora)",
                desc: "Se o contrato tem cláusulas abusivas. Se o outro lado está cumprindo. Se você tem direito a revisar.",
              },
              {
                step: "3",
                title: "A gente entra com ação",
                desc: "Ação para revisar seu contrato. Pede para o juiz corrigir as cláusulas abusivas.",
              },
              {
                step: "4",
                title: "Seu contrato é revisado",
                desc: "Na maioria dos casos, o juiz concede. Seu contrato é revisado. Você para de ter prejuízo.",
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
        headline="Seu contrato não precisa ser abusivo."
        subheadline="Análise rápida. Orientação clara. Ação eficiente."
        ctaText="Revisar Meu Contrato - Fale Agora no WhatsApp"
        whatsappNumber="556598172713"
      />

      <Footer />
    </div>
  );
}
