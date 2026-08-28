import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/556598172713?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20AMC%20Advocacia%20e%20gostaria%20de%20informa%C3%A7%C3%B5es.";

export default function HomeWhatsAppButton() {
  const [pastHero, setPastHero] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const hasFocusRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting), {
      rootMargin: "0px 0px -10% 0px",
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !nearFooter;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a AMC Advocacia pelo WhatsApp"
      onFocus={() => {
        hasFocusRef.current = true;
      }}
      onBlur={() => {
        hasFocusRef.current = false;
      }}
      className={`group fixed right-4 md:right-6 bottom-[calc(1rem+env(safe-area-inset-bottom))] md:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-40 flex items-center rounded-full border border-white/10 bg-[#0d3d2b] shadow-[0_8px_22px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:bg-[#12503a] focus-visible:bg-[#12503a] outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span className="hidden md:block max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-white transition-all duration-300 group-hover:max-w-[130px] group-hover:pl-4 group-focus-visible:max-w-[130px] group-focus-visible:pl-4">
        Fale conosco
      </span>
      <span className="flex h-[52px] w-[52px] md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 md:h-[26px] md:w-[26px] text-white">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.18-1.77 1.24-.45.06-1.02.08-1.65-.1-.38-.11-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.5-3.98-.13-.18-1.08-1.44-1.08-2.75 0-1.3.68-1.94.92-2.2.24-.26.53-.32.7-.32h.5c.16 0 .38-.03.58.44.22.53.75 1.83.82 1.96.07.13.11.29.02.47-.09.18-.13.29-.26.44-.13.16-.28.35-.4.47-.13.13-.27.27-.12.53.16.26.7 1.16 1.51 1.88 1.04.93 1.91 1.22 2.17 1.36.26.13.41.11.56-.07.16-.18.66-.77.84-1.03.18-.26.35-.22.6-.13.24.09 1.55.73 1.82.87.26.13.44.2.5.31.07.13.07.71-.15 1.33z" />
        </svg>
      </span>
    </a>
  );
}
