import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import TriageCard from "@/components/TriageCard";
import About from "@/components/About";

import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "AMC Advocacia - Urgência Patrimonial e Financeira";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Análise em 1 hora. Atendimento com advogado. Ação rápida em problemas jurídicos urgentes que envolvem dinheiro e patrimônio."
      );
    }
  }, []);

  const handleTriageClick = () => {
    const triageSection = document.getElementById("triagem");
    triageSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
  window.gtag?.("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: "hero",
  });

  window.open(
    "https://wa.me/556598172713?text=Olá, Dr. Arthur. Encontrei seu site e gostaria de uma análise jurídica do meu caso.",
    "_blank"
  );
};

  const triageItems = [
    {
      icon: "🔐",
      title: "Busca e Apreensão",
      description: "Seu veículo foi apreendido ou recebeu notificação do banco?",
      problems: [
        "Veículo apreendido indevidamente",
        "Recuperação de bens",
        "Defesa rápida",
      ],
      ctaText: "Saiba Mais",
      ctaLink: "/busca-apreensao",
    },
    {
      icon: "💰",
      title: "Bloqueio Judicial",
      description: "Sua conta foi bloqueada e você não consegue movimentar seu dinheiro?",
      problems: [
        "Conta bloqueada",
        "Sem acesso ao dinheiro",
        "Desbloqueio urgente",
      ],
      ctaText: "Saiba Mais",
      ctaLink: "/bloqueio-judicial",
    },
    {
      icon: "📋",
      title: "Revisão de Financiamento",
      description: "As parcelas ficaram impagáveis ou existe risco de apreensão?",
      problems: [
        "Parcelas muito altas",
        "Risco de apreensão",
        "Renegociação possível",
      ],
      ctaText: "Saiba Mais",
      ctaLink: "/revisao-financiamento",
    },
    {
      icon: "⚖️",
      title: "Cobranças Abusivas",
      description: "Recebe cobranças indevidas ou está sendo perseguido por credores?",
      problems: [
        "Cobranças indevidas",
        "Assédio de credores",
        "Proteção de direitos",
      ],
      ctaText: "Saiba Mais",
      ctaLink: "/cobrancas-abusivas",
    },
    {
      icon: "🏠",
      title: "Problemas Imobiliários",
      description: "Está em disputa por um imóvel ou precisa rescindir um contrato?",
      problems: [
        "Disputa imobiliária",
        "Rescisão de contrato",
        "Proteção do patrimônio",
      ],
      ctaText: "Saiba Mais",
      ctaLink: "/problemas-imobiliarios",
    },
    {
      icon: "📑",
      title: "Conflitos Contratuais",
      description: "Assinou um contrato prejudicial ou foi enganado nas cláusulas?",
      problems: [
        "Contrato prejudicial",
        "Cláusulas abusivas",
        "Rescisão ou renegociação",
      ],
      ctaText: "Saiba Mais",
      ctaLink: "/conflitos-contratuais",
    },
  ];

  const testimonials = [
    {
      text: "Consegui desbloquear minha conta em 48 horas. Atendimento ágil e profissional.",
      author: "Carlos M.",
      location: "Cuiabá, MT",
      result: "Conta desbloqueada",
    },
    {
      text: "Renegociaram meu financiamento e reduziram os juros. Recomendo!",
      author: "Ana S.",
      location: "Cuiabá, MT",
      result: "Juros reduzidos",
    },
    {
      text: "Defesa rápida contra cobranças abusivas. Problema resolvido em 1 semana.",
      author: "Roberto L.",
      location: "Cuiabá, MT",
      result: "Cobrança cancelada",
    },
    {
      text: "Análise profissional do meu caso. Muito satisfeito com o resultado.",
      author: "Marina T.",
      location: "Cuiabá, MT",
      result: "Caso resolvido",
    },
  ];

  const faqItems = [
    {
      question: "Quanto tempo leva para receber uma análise?",
      answer: "Respondemos em até 1 hora. Você receberá uma análise inicial do seu caso via WhatsApp ou e-mail, com recomendações específicas para sua situação.",
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "A primeira consulta é feita via WhatsApp ou telefone. Você descreve seu problema, e nosso advogado faz uma análise rápida e recomenda os próximos passos.",
    },
    {
      question: "Vocês garantem ganho de processo?",
      answer: "Não fazemos promessas de resultado. Oferecemos análise profissional, estratégia jurídica sólida e defesa competente. O resultado depende dos fatos e da lei.",
    },
    {
      question: "Qual é o valor dos honorários?",
      answer: "Os honorários variam conforme a complexidade do caso. Discutimos isso na primeira consulta, sem compromisso.",
    },
    {
      question: "Posso falar com o advogado antes de contratar?",
      answer: "Sim! Clique no botão WhatsApp e converse diretamente com o advogado. Essa conversa inicial é sem compromisso.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section - Premium First Fold */}
      <Hero
        headline="Seu patrimônio está em risco?"
        subheadline="Atuação jurídica rápida para proteger o que é seu."
        description="Busca e apreensão, bloqueios judiciais, cobranças abusivas, contratos prejudiciais e outros conflitos que ameaçam seu patrimônio exigem ação rápida e estratégica."
        ctaPrimary={{
          text: "Falar com Advogado Agora",
          onClick: handleWhatsAppClick,
        }}
        ctaSecondary={{
          text: "Qual é Seu Problema?",
          onClick: handleTriageClick,
        }}
        urgencyBadge="⏱️ ATENDIMENTO COM ADVOGADO"
        lawyerName="Arthur Müller Coutinho"
        lawyerTitle="Advogado especialista em defesa patrimonial e financeira"
        lawyerOAB="OAB/MT 10.889"
        lawyerLocation="Cuiabá/MT"
      />

      {/* Social Proof Section */}
      <SocialProof />

      {/* Triage Section - 7 Landing Pages Entry Points */}
      <section id="triagem" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Qual é Seu Problema Jurídico?
            </h2>
            <p className="text-lg text-slate-600">
              Escolha a área que melhor se aplica ao seu caso e receba uma análise especializada
            </p>
          </div>

          {/* 6 Triage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {triageItems.map((item, index) => (
              <TriageCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                problems={item.problems}
                ctaText={item.ctaText}
                ctaLink={item.ctaLink}
              />
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Não encontrou seu problema específico?</p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              💬 Fale com um Advogado
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      {/* Final CTA Section */}
      <CTAFinal
        headline="Pronto para proteger seu patrimônio?"
        subheadline="Análise jurídica em até 1 hora com advogado especialista."
        ctaText="Fale Agora no WhatsApp"
        whatsappNumber="556598172713"
        urgencyText="Resposta em até 1 hora"
      />

      {/* Location Section - Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Atendimento em Cuiaba/MT</h2>
            <p className="text-lg text-slate-600">Visite nosso escritorio premium</p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              {/* Location Info */}
              <div className="flex items-start gap-4">
                <div className="text-2xl text-amber-500 flex-shrink-0">📍</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Edificio Cuiaba Work Center</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Av. Historiador Rubens de Mendonca, 1836 - Sala 803<br />
                    Jardim Aclimacao - Cuiaba/MT
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="text-2xl text-amber-500 flex-shrink-0">📞</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Contato Direto</h3>
                  <p className="text-slate-600">
                    <a href="https://wa.me/556598172713" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">
                      WhatsApp: +55 65 9817-2713
                    </a>
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-slate-200">
                <a
                  href="https://wa.me/556598172713?text=Ola! Gostaria de uma analise do meu caso."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="https://www.google.com.br/maps/place/Edif%C3%ADcio+Cuiab%C3%A1+Work+Center/@-15.5852338,-56.0798737,3a,75y,90t/data=!3m7!1e2!3m5!1sCIHM0ogKEICAgICC99WvwAE!2e10!3e12!7i4032!8i1816!4m7!3m6!1s0x939db1af781b05ed:0xb44f75749397de11!8m2!3d-15.5850672!4d-56.0798938!10e5!16s%2Fg%2F1tj9d26c?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-700 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg border-2 border-amber-400/50 shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
