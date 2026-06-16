import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function RevisaoFinanciamento() {
 const testimonials = [
  {
    text: "Recebi orientação clara sobre o meu contrato e pude compreender melhor os meus direitos e as alternativas juridicamente possíveis para o caso.",
    author: "Elaine França",
    location: "Cuiabá/MT",
  },
  {
    text: "O atendimento foi atencioso e transparente. Todas as minhas dúvidas foram esclarecidas e recebi informações importantes para tomar uma decisão com mais segurança.",
    author: "Silvani S.",
    location: "Cuiabá/MT",
  },
];

  const faqItems = [
    {
      question: "Quanto tempo leva para revisar meu financiamento?",
      answer:
        "Alguns casos levam 1-2 semanas, outros levam até 1 mês. Tudo depende de abusividade no contrato, como o juiz interpreta a lei, e se o banco recorre. A gente te fala exatamente depois da análise.",
    },
    {
      question: "Minhas parcelas vão ser reduzidas?",
      answer:
        "Na maioria dos casos, sim. Mas a gente é honesta: nem todo caso tem sucesso. Depende dos fatos, da documentação, e do juiz. O que a gente garante é análise completa, orientação clara, ação rápida e transparência total.",
    },
    {
      question: "Quanto custa?",
      answer:
        "Depende do caso. A gente fala o valor exato depois da análise, sem surpresa. Você tem opções: taxa inicial + parcelas, ou pagamento conforme o processo avança.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <Hero
        headline="Suas parcelas ficaram impagáveis. Você está preso em um contrato abusivo."
        subheadline="Você pegou um financiamento. As parcelas começaram pequenas. Depois ficaram cada vez maiores. Agora você não consegue pagar. Você tem direito a revisar esse contrato. Nós sabemos como fazer isso."
        ctaPrimary={{
          text: "Revisar Meu Financiamento",
          onClick: () =>
            window.open(
              "https://wa.me/556598172713?text=Minhas parcelas ficaram muito altas. Preciso revisar meu financiamento.",
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
              Você precisava de dinheiro. Pegou um financiamento. Tudo certo no início. As parcelas eram pequenas. Você conseguia pagar.
            </p>
            <p>
              Mas depois as parcelas começaram a aumentar. Você não entende por quê. Você lê o contrato, mas não entende nada. Está tudo em letra pequena. Com palavras estranhas.
            </p>
            <p>
              Agora as parcelas ficaram tão altas que você não consegue pagar. Você está preso. Sem saber o que fazer. Você tem medo de perder tudo.
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
                ❌ Você continua pagando juros abusivos
              </h3>
              <p className="text-red-800">
                Você paga parcelas cada vez maiores. Você perde dinheiro todo mês. Você nunca consegue se livrar da dívida.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você para de pagar
              </h3>
              <p className="text-red-800">
                Você não consegue mais pagar as parcelas. Seu bem é apreendido. Você fica sem nada.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você fica com dívida dupla
              </h3>
              <p className="text-red-800">
                Você para de pagar. Seu bem é vendido por menos do que vale. Você ainda fica devendo a diferença. Seu nome fica sujo.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ Você revisa seu contrato
              </h3>
              <p className="text-green-800">
                A gente analisa seu financiamento. Encontra abusividades. Reduz suas parcelas. Você consegue pagar. Você continua sua vida.
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
                desc: "Contrato, comprovante de pagamento, tudo.",
              },
              {
                step: "2",
                title: "A gente procura abusividades (em 1 hora)",
                desc: "Se os juros são abusivos. Se as parcelas aumentam sem motivo. Se tem cláusulas ilegais.",
              },
              {
                step: "3",
                title: "A gente entra com ação",
                desc: "Ação para revisar seu contrato. Pede para o juiz reduzir suas parcelas.",
              },
              {
                step: "4",
                title: "Suas parcelas são reduzidas",
                desc: "Na maioria dos casos, o juiz concede. Suas parcelas são reduzidas. Você consegue pagar.",
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
        headline="Suas parcelas não precisam ser impagáveis."
        subheadline="Análise rápida. Orientação clara. Ação eficiente."
        ctaText="Revisar Meu Financiamento - Fale Agora no WhatsApp"
        whatsappNumber="5565999999999"
      />

      <Footer />
    </div>
  );
}
