export const WHATSAPP_URL =
  "https://wa.me/556598172713?text=Ol%C3%A1%20Dr.%20Arthur.%0A%0AEncontrei%20a%20p%C3%A1gina%20sobre%20conta%20bloqueada.%0A%0AGostaria%20de%20entender%20o%20que%20aconteceu%20com%20minha%20conta%20e%20quais%20medidas%20podem%20ser%20avaliadas%20para%20o%20meu%20caso.";

export function trackWhatsAppClick(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "clique_whatsapp", {
      event_category: "WhatsApp",
      event_label: "conta_bloqueada",
      value: 1,
    });
    window.gtag("event", "conversion", {
      send_to: "AW-620453322/yJl8CJOUwIkbEMq77acC",
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact");
  }
}
