export const WHATSAPP_PHONE = "556598172713";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  hero: "Olá, conheci a AMC Advocacia pelo anúncio e gostaria de receber informações sobre isenção de Imposto de Renda.",
  saidaAntecipada: "Olá, iniciei uma verificação no site da AMC Advocacia e gostaria de conversar sobre meu caso.",
  conclusaoPositiva:
    "Olá, concluí a avaliação de isenção de Imposto de Renda no site da AMC Advocacia e gostaria de confirmar se meu caso pode se enquadrar.",
  conclusaoNegativa:
    "Olá, concluí a avaliação de isenção de Imposto de Renda no site da AMC Advocacia e gostaria de esclarecer meu caso.",
} as const;
