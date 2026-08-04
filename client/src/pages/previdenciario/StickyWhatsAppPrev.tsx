import { useEffect, useState, type RefObject } from "react";
import WhatsAppIcon from "@/pages/previdenciario/WhatsAppIcon";
import { buildWhatsAppUrl, STICKY_WHATSAPP_MESSAGE } from "@/pages/previdenciario/data/whatsapp";

interface StickyWhatsAppPrevProps {
  heroRef: RefObject<HTMLElement | null>;
  diagnosticoRef: RefObject<HTMLElement | null>;
  onWhatsAppClick: () => void;
}

export default function StickyWhatsAppPrev({
  heroRef,
  diagnosticoRef,
  onWhatsAppClick,
}: StickyWhatsAppPrevProps) {
  const [heroVisivel, setHeroVisivel] = useState(true);
  const [diagnosticoVisivel, setDiagnosticoVisivel] = useState(false);

  useEffect(() => {
    const heroEl = heroRef.current;
    const diagnosticoEl = diagnosticoRef.current;
    if (!heroEl || !diagnosticoEl) return;

    const heroObserver = new IntersectionObserver(([entry]) => setHeroVisivel(entry.isIntersecting), {
      threshold: 0,
    });
    const diagnosticoObserver = new IntersectionObserver(
      ([entry]) => setDiagnosticoVisivel(entry.isIntersecting),
      { threshold: 0 }
    );

    heroObserver.observe(heroEl);
    diagnosticoObserver.observe(diagnosticoEl);

    return () => {
      heroObserver.disconnect();
      diagnosticoObserver.disconnect();
    };
  }, [heroRef, diagnosticoRef]);

  const visivel = !heroVisivel && !diagnosticoVisivel;

  return (
    <a
      href={buildWhatsAppUrl(STICKY_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onWhatsAppClick}
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
      className={`fixed inset-x-0 bottom-0 z-40 flex min-h-[52px] items-center justify-center !gap-2 border-t !border-[#8CF5A4]/20 !bg-[rgba(5,15,9,0.96)] !px-4 !pb-[env(safe-area-inset-bottom)] text-sm font-semibold !text-[#8CF5A4] backdrop-blur-[10px] transition-transform duration-200 md:!hidden ${
        visivel ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      Analisar meu caso no WhatsApp
    </a>
  );
}
