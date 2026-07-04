export const WHATSAPP_URL =
  "https://wa.me/556598172713?text=Ol%C3%A1%2C%20Dr.%20Arthur.%20Vi%20sua%20p%C3%A1gina%20sobre%20conta%20bloqueada%20%E2%80%94%20minha%20conta%20foi%20bloqueada%20e%20eu%20queria%20entender%20o%20que%20pode%20ser%20feito.";

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
