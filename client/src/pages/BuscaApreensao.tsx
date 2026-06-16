import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function BuscaApreensao() {
  useEffect(() => {
    document.title = "Busca e Apreensão de Veículos | AMC Advocacia";
  }, []);

  const testimonials = [
   {
  text: "Recebi atendimento rápido e todas as minhas dúvidas foram esclarecidas com clareza. Consegui entender minha situação e quais eram as alternativas juridicamente possíveis.",
  author: "João Vitor S.",
  location: "Cuiabá/MT",
},
{
  text: "Fui atendido com atenção e profissionalismo. A análise do caso foi objetiva e me ajudou a tomar uma decisão com mais segurança.",
  author: "Maria da Costa",
  location: "Cuiabá/MT",
},
  ];

  const faqItems = [
    {
      question: "Quanto tempo leva para recuperar meu carro?",
      answer:
        "Alguns casos levam 24-48 horas, outros levam até 2 semanas. Tudo depende de irregularidades no processo, como o juiz interpreta a lei, e se o banco recorre. A gente te fala exatamente depois da análise.",
    },
    {
      question: "Quanto custa?",
      answer:
        "Depende do caso. A gente fala o valor exato depois da análise, sem surpresa. Você tem opções: taxa inicial + parcelas, ou pagamento conforme o processo avança.",
    },
    {
      question: "Vocês garantem que vou recuperar meu carro?",
      answer:
        "Não garantimos resultado. O que garantimos é análise completa, orientação clara, ação rápida e transparência total. A maioria das vezes isso resulta em vitória, mas nem sempre.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <Hero
        headline="Seu carro foi apreendido. Você tem prazo para agir."
        subheadline="O banco ou a financeira mandou buscar seu carro. Agora ele está em um pátio. Você não pode usar. E a cada dia que passa, você perde dinheiro. Você tem direito a defesa. Nós sabemos como usar isso."
        ctaPrimary={{
          text: "Recuperar Meu Carro",
          onClick: () =>
            window.open(
              "https://wa.me/5565999999999?text=Meu carro foi apreendido. Preciso de ajuda.",
              "_blank"
            ),
        }}
        urgencyBadge="⏱️ Análise em 1 Hora"
      />

      {/* Contexto */}
      <section className="w-full py-12 md:py-16 bg-slate-50">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Como Você Chegou Aqui?
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Você pegou um financiamento. Tudo certo no início. Mas depois as parcelas ficaram altas. Ou você teve um imprevisto. Ou perdeu a renda. Ou tudo junto.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Você atrasou as parcelas. Tentou negociar. Mas o banco não quis saber.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Aí veio a notificação. Depois a busca. Seu carro foi apreendido.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Agora você está aqui. Sem carro. Com medo. Pensando que perdeu tudo.
            </p>
            <p className="text-lg font-semibold text-blue-600 mt-6">
              Você não perdeu. Você tem direito a defesa.
            </p>
          </div>
        </div>
      </section>

      {/* Consequências */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            O Que Pode Acontecer?
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Seu carro vai para leilão
              </h3>
              <p className="text-red-800">
                O banco vende seu carro por um preço muito menor. Você perde dinheiro. E ainda fica devendo a diferença.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você perde o carro para sempre
              </h3>
              <p className="text-red-800">
                Não consegue recuperar. Fica sem transporte. Perde oportunidades de trabalho.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você fica com dívida dupla
              </h3>
              <p className="text-red-800">
                Perde o carro. Ainda fica devendo o saldo devedor. Seu nome fica sujo. Não consegue crédito nunca mais.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ Você recupera seu carro
              </h3>
              <p className="text-green-800">
                A gente entra com ação. Suspendemos a apreensão. Você recupera seu carro. Você continua sua vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Resolvemos */}
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
                desc: "Se o banco seguiu o processo correto. Se tem irregularidade na notificação. Se tem abusividade na cobrança.",
              },
              {
                step: "3",
                title: "A gente entra com ação",
                desc: "Ação para suspender a apreensão. Pede para o juiz liberar seu carro.",
              },
              {
                step: "4",
                title: "Você recupera seu carro",
                desc: "Na maioria dos casos, o juiz concede. Seu carro volta. Você respira.",
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

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} title="Depoimentos de Clientes" />
      {/* FAQ */}
      <FAQ items={faqItems} />

      <CTAFinal
  headline="Receba orientação jurídica para o seu caso."
  subheadline="Análise inicial, esclarecimento de dúvidas e avaliação das medidas juridicamente cabíveis."
  ctaText="Falar com um Advogado"
  whatsappNumber="556598172713"
/>

      <Footer />
    </div>
  );
}
