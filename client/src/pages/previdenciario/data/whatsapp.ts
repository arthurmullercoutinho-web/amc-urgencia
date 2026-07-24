export const WHATSAPP_PHONE = "556598172713";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  hero: "Olá, meu benefício foi negado pelo INSS e gostaria de entender meus direitos. Vim pelo site.",
  cessado: "Olá, meu benefício foi cessado pelo INSS e gostaria de entender meus direitos. Vim pelo site.",
  indeferido: "Olá, tive meu pedido indeferido pelo INSS e gostaria de saber sobre recurso. Vim pelo site.",
  contato: "Olá, vim pelo site da AMC Advocacia e gostaria de atendimento sobre meu benefício do INSS.",
} as const;
