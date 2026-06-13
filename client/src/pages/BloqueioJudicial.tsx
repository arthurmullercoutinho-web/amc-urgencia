import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function BloqueioJudicial() {
  const testimonials = [
  {
    text: "Recebi atendimento atencioso e todas as etapas do processo foram explicadas com clareza. Isso me trouxe mais segurança para lidar com a situação.",
    author: "Cliente AMC",
    location: "Cuiabá/MT",
  },
  {
    text: "Fui orientado de forma transparente sobre os meus direitos e sobre as medidas que poderiam ser analisadas para o meu caso.",
    author: "Cliente AMC",
    location: "Cuiabá/MT",
  },
];

  const faqItems = [
    {
      question: "Quanto tempo leva para desbloquear minha conta?",
      answer:
        "Alguns casos levam 24-48 horas, outros levam até 1 semana. Tudo depende de abusividade no bloqueio, como o juiz interpreta a lei, e se o credor recorre. A gente te fala exatamente depois da análise.",
    },
    {
      question: "Meu dinheiro vai voltar?",
      answer:
        "Na maioria dos casos, sim. Mas a gente é honesta: nem todo caso tem sucesso. Depende dos fatos, da documentação, e do juiz. O que a gente garante é análise completa, orientação clara, ação rápida e transparência total.",
    },
    {
      question: "Posso sacar meu dinheiro enquanto vocês trabalham?",
      answer:
        "Depende. Se a gente conseguir uma medida de urgência, você pode sacar enquanto o processo acontece. Se não conseguir, você fica sem acesso enquanto a gente trabalha. Mas a gente trabalha rápido. A gente te explica isso depois da análise.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <Hero
        headline="Sua conta foi bloqueada. Você não consegue sacar nada."
        subheadline="Acordou com a conta zerada. Não consegue sacar. Não consegue transferir. Não consegue fazer nada. Você não sabe o que fazer. Você tem direito a defesa. Nós sabemos como usar isso."
        ctaPrimary={{
          text: "Desbloquear Minha Conta",
          onClick: () =>
            window.open(
              "https://wa.me/556598172713?text=Minha conta foi bloqueada. Preciso de ajuda.",
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
              Você tinha uma dívida. Ou acha que tinha. Ou já pagou, mas o credor não acreditou. Ou é uma cobrança abusiva.
            </p>
            <p>
              De repente, seu banco te avisa: "Sua conta foi bloqueada por ordem judicial."
            </p>
            <p>
              Você tenta sacar. Não consegue. Tenta transferir. Não consegue. Tenta fazer qualquer coisa. Não consegue.
            </p>
            <p>
              Você está preso. Sem dinheiro. Sem saber o que fazer. Você tem filhos para alimentar. Contas para pagar. E seu dinheiro está congelado.
            </p>
            <p className="font-semibold text-blue-600">
              Você não perdeu seu dinheiro. Você tem direito a defesa.
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
                ❌ Você fica sem dinheiro para viver
              </h3>
              <p className="text-red-800">
                Sua conta está bloqueada. Você não consegue sacar para comer. Você não consegue pagar as contas. Você não consegue fazer nada.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Seu dinheiro é confiscado
              </h3>
              <p className="text-red-800">
                O banco transfere seu dinheiro para o credor. Você perde seu patrimônio. Você fica sem nada.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Você fica com nome sujo
              </h3>
              <p className="text-red-800">
                Além do bloqueio, seu nome fica sujo. Você não consegue crédito nunca mais. Você não consegue financiar nada.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ Você desbloqueia sua conta
              </h3>
              <p className="text-green-800">
                A gente entra com ação. Suspendemos o bloqueio. Você recupera acesso ao seu dinheiro. Você continua sua vida.
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
                desc: "Notificação do banco, comprovante de bloqueio, tudo.",
              },
              {
                step: "2",
                title: "A gente procura abusividade (em 1 hora)",
                desc: "Se o bloqueio foi feito corretamente. Se tem abusividade no bloqueio. Se você tem direito a defesa.",
              },
              {
                step: "3",
                title: "A gente entra com ação",
                desc: "Ação para desbloquear sua conta. Pede para o juiz liberar seu dinheiro.",
              },
              {
                step: "4",
                title: "Você recupera seu dinheiro",
                desc: "Na maioria dos casos, o juiz concede. Sua conta volta a funcionar. Seu dinheiro está seguro.",
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
        headline="Seu dinheiro não precisa ficar bloqueado."
        subheadline="Análise rápida. Orientação clara. Ação eficiente."
        ctaText="Desbloquear Minha Conta - Fale Agora no WhatsApp"
        whatsappNumber="5565999999999"
      />

      <Footer />
    </div>
  );
}
