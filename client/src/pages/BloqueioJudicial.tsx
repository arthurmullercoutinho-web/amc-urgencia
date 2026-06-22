import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function ContaBloqueada() {
  const testimonials = [
  {
    text: "Recebi atendimento atencioso e todas as etapas do processo foram explicadas com clareza. Isso me trouxe mais segurança para lidar com a situação.",
    author: "Carlos Henrique Silva",
    location: "Cuiabá/MT",
  },
  {
    text: "Fui orientado de forma transparente sobre os meus direitos e sobre as medidas que poderiam ser analisadas para o meu caso.",
    author: "Domingos soares",
    location: "Cuiabá/MT",
  },
];

 const faqItens = [
  {
    question: "Quanto tempo leva para resolver uma conta bloqueada?",
    answer: "O prazo varia conforme a situação. Cada caso depende do motivo do bloqueio, da documentação disponível e das medidas que podem ser adotadas. Após a análise inicial, é possível fornecer uma orientação"
  },
  {
    question: "É possível recuperar o dinheiro bloqueado?",
    answer: "Dependendo das circunstâncias do caso, podem existir medidas para buscar a liberação dos valores e a reparação de eventuais prejuízos. A viabilidade precisa ser analisada individualmente."
  },
  {
    question: "Minha conta foi bloqueada por suspeita de fraude. O que devo fazer?",
    answer: "O primeiro passo é identificar a causa do bloqueio e reunir os documentos relacionados ao caso. Com essas informações, é possível avaliar quais medidas podem ser adotadas para buscar a regularização"
  },
  {
    question: "O banco pode bloquear minha conta e reter meu dinheiro?",
    answer: "As instituições financeiras possuem mecanismos de segurança e prevenção a fraudes, mas o bloqueio deve observar os direitos do consumidor e as circunstâncias do caso concreto."
  }
];


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <Herói
  Manchete="Sua conta foi bloqueada ou seu dinheiro ficou retido?"
  Subtitulo="Conta em análise, saldo indisponível, PIX bloqueado ou valores retidos? Analisamos seu caso e orientamos as medidas possíveis para buscar a liberação do dinheiro."
  Texto="Quero Analisar Meu Bloqueio"
  onClick={() =>
    window.open(
      "https://wa.me/556598172713?text=Minha conta foi bloqueada pelo banco ou meu dinheiro ficou retido. Preciso de ajuda.",
      "_blank"
    )
  }
  urgencyBadge="⏱️ Análise em 1 Hora"
/>

      <section className="w-full py-12 md:py-16 bg-slate-50">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Como Você Chegou Aqui?
          </h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p>
               Você tenta acessar sua conta normalmente e descobre que não consegue movimentar seu dinheiro.
            </p>
            <p>
               Em alguns casos, o banco informa que a conta está em análise. Em outros, menciona suspeita de fraude, bloqueio de segurança ou retenção de valores."
            </p>
            <p>
             Você não consegue sacar. Não consegue transferir. Não consegue utilizar o PIX. E muitas vezes sequer recebe uma explicação clara sobre o que aconteceu.
            </p>
            <p>
              Enquanto isso, contas vencem, compromissos financeiros continuam surgindo e o dinheiro permanece indisponível.
              </p>
            <p className="font-semibold text-blue-600">
             Dependendo da situação, existem medidas que podem ser avaliadas para buscar a liberação dos valores e a reparação dos prejuízos causados.
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
                ❌ Você perde acesso ao seu dinheiro
              </h3>
              <p className="text-red-800">
                Sua conta fica bloqueada e você não consegue sacar, transferir ou utilizar o PIX normalmente. Enquanto isso, compromissos financeiros continuam vencendo.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Valores ficam retidos
              </h3>
              <p className="text-red-800">
                Em alguns casos, o saldo permanece indisponível por dias ou semanas, dificultando o pagamento de despesas e a movimentação financeira.
              </p>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">
                ❌ Falta de informação gera insegurança
              </h3>
              <p className="text-red-800">
                Muitas pessoas não recebem uma explicação clara sobre o motivo do bloqueio e ficam sem saber quais providências podem ser adotadas para regularizar a situação.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                ✅ Busque uma solução para o bloqueio
              </h3>
              <p className="text-green-800">
                Dependendo das circunstâncias do caso, podem existir medidas para buscar o acesso aos valores, regularizar a conta e reduzir os prejuízos causados pelo bloqueio.A
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
  title: "Você envia os documentos",
  desc: "Envie prints do aplicativo, notificações do banco, comprovantes do bloqueio, protocolos de atendimento e demais informações do caso.",
},
{
  step: "2",
  title: "Analisamos o motivo do bloqueio",
  desc: "Verificamos se houve retenção de valores, conta em análise, suspeita de fraude, bloqueio de segurança ou ausência de explicação adequada.",
},
{
  step: "3",
  title: "Indicamos as medidas cabíveis",
  desc: "Após a análise, avaliamos quais providências podem ser adotadas para buscar a regularização da conta e a liberação dos valores.",
},
{
  step: "4",
  title: "Acompanhamos o caso",
  desc: "O objetivo é buscar uma solução para o bloqueio, reduzir os prejuízos causados e avaliar eventual reparação quando houver falha na prestação do serviço.",
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
  headline="Não fique sem acesso ao seu dinheiro."
  subheadline="Análise rápida. Orientação clara. Medidas cabíveis para o seu caso."
  ctaText="Quero Analisar Meu Bloqueio"
  ctaLink="https://wa.me/556598172713?text=Minha conta foi bloqueada pelo banco ou meu dinheiro ficou retido. Preciso de ajuda."
/>

      <Footer />
    </div>
  );
}
