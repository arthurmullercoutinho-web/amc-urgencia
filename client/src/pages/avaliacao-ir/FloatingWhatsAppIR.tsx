import WhatsAppIcon from "./WhatsAppIcon";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "./data/whatsapp";

interface FloatingWhatsAppIRProps {
  onWhatsAppClick: () => void;
}

export default function FloatingWhatsAppIR({ onWhatsAppClick }: FloatingWhatsAppIRProps) {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onWhatsAppClick}
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-[calc(18px+env(safe-area-inset-bottom))] right-[calc(18px+env(safe-area-inset-right))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#128038] shadow-[0_8px_20px_rgba(18,128,56,0.45)] transition-colors hover:bg-[#0f6b2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}
