import { WHATSAPP_URL, trackWhatsAppClick } from "../data/whatsapp";

export default function CTAFinal() {
  return (
    <section className="final-cta section">
      <div className="wrap">
        <h2>Ainda com dúvidas sobre o seu caso?</h2>
        <p>Fale agora com o Dr. Arthur e entenda, sem custo, o que pode ser feito.</p>
        <a
          className="btn-wa pulse-once"
          href={WHATSAPP_URL}
          onClick={trackWhatsAppClick}
          rel="noopener"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
          Falar agora no WhatsApp
        </a>
        <div className="cta-micro">Resposta em até 1 hora útil</div>
      </div>
    </section>
  );
}
