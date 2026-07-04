import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import type { ReactNode } from "react";

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
   * Microcopy abaixo do CTA (ex: objeções de custo/sigilo/urgência).
   * Opcional — se omitida, mantém os checkmarks institucionais originais
   * para não alterar páginas que já usam este componente sem essa prop.
   */
  ctaMicro?: ReactNode;
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
  ctaMicro,
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
      <section className="relative w-full flex-1 md:min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden flex items-center justify-center">
        <div className="relative z-10 w-full max-w-3xl px-4 py-8 md:py-20 text-center">

          {/* Microbarra discreta — opcional, uma linha só */}
          {microbar && (
            <p className="text-[11px] md:text-xs text-slate-300 mb-4 md:mb-4">
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
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-5 md:mb-6 leading-tight">
            {headline}
          </h1>

          {/* Subheadline - Increased Legibility */}
          <p className="text-base md:text-xl text-slate-200 mb-8 md:mb-8 leading-relaxed max-w-xl mx-auto font-medium">
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
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center mb-6 md:mb-8">
            <Button
              onClick={ctaPrimary.onClick}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 md:px-8 py-3 md:py-5 text-sm md:text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group w-full md:w-auto flex items-center justify-center gap-[9px] md:gap-3 border-2 border-green-400 hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-[21px] h-[21px] md:w-6 md:h-6 flex-shrink-0"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.18-1.77 1.24-.45.06-1.02.08-1.65-.1-.38-.11-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.5-3.98-.13-.18-1.08-1.44-1.08-2.75 0-1.3.68-1.94.92-2.2.24-.26.53-.32.7-.32h.5c.16 0 .38-.03.58.44.22.53.75 1.83.82 1.96.07.13.11.29.02.47-.09.18-.13.29-.26.44-.13.16-.28.35-.4.47-.13.13-.27.27-.12.53.16.26.7 1.16 1.51 1.88 1.04.93 1.91 1.22 2.17 1.36.26.13.41.11.56-.07.16-.18.66-.77.84-1.03.18-.26.35-.22.6-.13.24.09 1.55.73 1.82.87.26.13.44.2.5.31.07.13.07.71-.15 1.33z" />
              </svg>
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

          {/* Trust Elements / CTA microcopy */}
          {ctaMicro ? (
            <p className="text-xs md:text-sm text-slate-300 text-center">
              {ctaMicro}
            </p>
          ) : (
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center text-xs md:text-sm text-slate-300 text-center">
              <span className="text-amber-300">✓ Atendimento presencial e online</span>
              <span className="text-amber-300">✓ Cuiabá e região</span>
              <span className="text-amber-300">✓ Atendimento direto com advogado</span>
            </div>
          )}
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
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-[28px] h-[28px]"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
        </a>
      </section>
    </>
  );
}
