import { WHATSAPP_URL, trackWhatsAppClick } from "../data/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      className="float-wa"
      href={WHATSAPP_URL}
      onClick={trackWhatsAppClick}
      rel="noopener"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </a>
  );
}
