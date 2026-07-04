import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  description?: string;
  ctaPrimary: {
    text: string;
    onClick: () => void;
  };
  ctaSecondary?: {
    text: string;
    onClick: () => void;
  };
  urgencyBadge?: string;
  lawyerName?: string;
  lawyerTitle?: string;
  lawyerOAB?: string;
  lawyerLocation?: string;
  /**
   * Linha discreta e pequena no topo do Hero (ex: "Dr. Fulano · OAB/XX 000").
   * Diferente de lawyerName/lawyerOAB/lawyerLocation, que renderizam o bloco
   * grande de credenciais mais abaixo. Opcional — se omitida, nada é
   * renderizado, comportamento igual ao de antes desta alteração.
   */
  microbar?: string;
  /**
   * Mensagem usada no botão flutuante de WhatsApp. Opcional — mantém a
   * mensagem original como padrão para não alterar páginas que já usam
   * este componente sem passar essa prop.
   */
  whatsappFloatingMessage?: string;
  /** Número usado no botão flutuante (mesmo padrão de CTAFinal.tsx). */
  whatsappNumber?: string;
  /**
   * Tracking do clique no botão flutuante. Opcional — se omitida, mantém
   * o comportamento original (apenas o evento gtag "whatsapp_click").
   */
  onWhatsappFloatingClick?: () => void;
}

export default function Hero({
  headline,
  subheadline,
  description,
  ctaPrimary,
  ctaSecondary,
  urgencyBadge,
  lawyerName,
  lawyerTitle,
  lawyerOAB,
  lawyerLocation,
  microbar,
  whatsappFloatingMessage = "Olá, Dr. Arthur. Preciso de uma análise do meu caso.",
  whatsappNumber = "556598172713",
  onWhatsappFloatingClick,
}: HeroProps) {
  const floatingWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappFloatingMessage
  )}`;

  const handleFloatingClick =
    onWhatsappFloatingClick ??
    (() => {
      window.gtag?.("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "floating_whatsapp",
      });
    });

  return (
    <>
      {/* Hero Section - Premium Navy Blue + Gold */}
      <section className="relative w-full min-h-screen md:min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden flex items-center justify-center">
        <div className="relative z-10 w-full max-w-3xl px-4 py-8 md:py-20 -mt-10 md:mt-0 text-center">

          {/* Microbarra discreta — opcional, uma linha só */}
          {microbar && (
            <p className="text-[11px] md:text-xs text-slate-300 mb-2 md:mb-4">
              {microbar}
            </p>
          )}

          {/* Urgency Badge - Gold */}
          {urgencyBadge && (
            <div className="mb-3 md:mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/50 rounded-full px-3 py-1 md:px-4 md:py-2 backdrop-blur-sm">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-amber-300" />
                <span className="text-xs md:text-sm font-bold text-amber-200 uppercase tracking-widest">{urgencyBadge}</span>
              </div>
            </div>
          )}

          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight">
            {headline}
          </h1>

          {/* Subheadline - Increased Legibility */}
          <p className="text-base md:text-xl text-slate-200 mb-4 md:mb-8 leading-relaxed max-w-xl mx-auto font-medium">
            {subheadline}
          </p>

          {/* Description - Context */}
          {description && (
            <p className="text-sm md:text-lg text-slate-300 mb-4 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* Lawyer Credentials - Premium Style */}
          {(lawyerName || lawyerTitle || lawyerOAB || lawyerLocation) && (
            <div className="mb-4 md:mb-8 pb-4 md:pb-8 border-b border-amber-500/30">
              {lawyerName && <p className="text-xl md:text-3xl font-bold text-white whitespace-nowrap">{lawyerName}</p>}
              {lawyerTitle && <p className="text-sm md:text-lg text-amber-300 font-bold mb-1 md:mb-2">{lawyerTitle}</p>}
              <div className="flex flex-col md:flex-row gap-1 md:gap-2 justify-center text-xs md:text-sm text-slate-300">
                {lawyerOAB && <span>{lawyerOAB}</span>}
                {lawyerLocation && <span>📍 {lawyerLocation}</span>}
              </div>
            </div>
          )}

          {/* CTAs - WhatsApp Primary */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center mb-4 md:mb-8">
            <Button
              onClick={ctaPrimary.onClick}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 md:px-8 py-3 md:py-5 text-sm md:text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group w-full md:w-auto flex items-center justify-center gap-2 md:gap-3 border-2 border-green-400 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>{ctaPrimary.text}</span>
            </Button>

            {ctaSecondary && (
              <Button
                onClick={ctaSecondary.onClick}
                size="lg"
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-lg border-2 border-amber-400/50 shadow-xl hover:shadow-2xl transition-all duration-300 group w-full md:w-auto flex items-center justify-center gap-2"
              >
                <span>{ctaSecondary.text}</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>

          {/* Trust Elements */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center text-xs md:text-sm text-slate-300 text-center">
            <span className="text-amber-300">✓ Atendimento presencial e online</span>
            <span className="text-amber-300">✓ Cuiabá e região</span>
            <span className="text-amber-300">✓ Atendimento direto com advogado</span>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href={floatingWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleFloatingClick}
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </section>
    </>
  );
}
