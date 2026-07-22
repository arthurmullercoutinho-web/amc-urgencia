export const WHATSAPP_PHONE = "556598172713";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  hero: "Olá, conheci a AMC Advocacia pelo anúncio e gostaria de receber informações sobre isenção de Imposto de Renda.",
  saidaAntecipada: "Olá, iniciei uma verificação no site da AMC Advocacia e gostaria de conversar sobre meu caso.",
  conclusao: "Olá, concluí a verificação inicial no site da AMC Advocacia e gostaria de receber orientações sobre a análise do meu caso.",
} as const;
