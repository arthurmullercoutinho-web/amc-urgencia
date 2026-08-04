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

// Diagnóstico rápido (experimento CRO — /previdenciario)
export type DiagnosticoSituacao = "negado" | "cortado" | "pericia" | "recurso" | "outra";
export type DiagnosticoDocumento = "sim" | "nao";

export const DIAGNOSTICO_SITUACOES: Record<
  DiagnosticoSituacao,
  {
    rotulo: string;
    /** Frase iniciando com maiúscula, usada para compor a mensagem do WhatsApp. */
    fraseSituacao: string;
    respostaComDecisao: string;
    respostaSemDecisao: string;
  }
> = {
  negado: {
    rotulo: "Benefício negado",
    fraseSituacao: "Meu benefício foi negado pelo INSS",
    respostaComDecisao:
      "Entendi. Como seu benefício foi negado e você tem a decisão do INSS, podemos analisar o motivo da negativa e verificar qual caminho pode ser adotado no seu caso.",
    respostaSemDecisao:
      "Entendi. Mesmo sem a decisão em mãos agora, podemos conversar sobre o que aconteceu e orientar quais informações serão necessárias para analisar o caso.",
  },
  cortado: {
    rotulo: "Benefício cortado/cessado",
    fraseSituacao: "Meu benefício foi cortado pelo INSS",
    respostaComDecisao:
      "Entendi. Como seu benefício foi cortado e você tem a decisão do INSS, podemos analisar se a cessação foi corretamente fundamentada e verificar qual caminho pode ser adotado.",
    respostaSemDecisao:
      "Entendi. Mesmo sem a decisão em mãos agora, podemos conversar sobre a cessação e orientar quais informações serão necessárias para analisar o caso.",
  },
  pericia: {
    rotulo: "Perícia desfavorável",
    fraseSituacao: "Tive uma perícia desfavorável do INSS",
    respostaComDecisao:
      "Entendi. Como você teve uma perícia desfavorável e já tem o resultado em mãos, podemos avaliar os documentos médicos e verificar qual caminho pode ser adotado.",
    respostaSemDecisao:
      "Entendi. Mesmo sem o resultado em mãos agora, podemos conversar sobre a perícia e orientar quais informações serão necessárias para analisar o caso.",
  },
  recurso: {
    rotulo: "Fiz recurso e ainda não tive resposta",
    fraseSituacao: "Fiz recurso no INSS e ainda não tive resposta",
    respostaComDecisao:
      "Entendi. Como você já entrou com recurso e tem a decisão do INSS, podemos avaliar em que fase o processo está e qual pode ser o próximo passo.",
    respostaSemDecisao:
      "Entendi. Mesmo sem a decisão em mãos agora, podemos conversar sobre o recurso e orientar quais informações serão necessárias para analisar o caso.",
  },
  outra: {
    rotulo: "Outra situação",
    fraseSituacao: "Tenho uma situação com o INSS diferente das opções listadas",
    respostaComDecisao:
      "Entendi. Como sua situação é um pouco diferente e você já tem algum documento ou decisão do INSS, podemos avaliar os detalhes e verificar qual caminho pode ser adotado.",
    respostaSemDecisao:
      "Entendi. Mesmo sem documentos em mãos agora, podemos conversar sobre a sua situação e orientar quais informações serão necessárias para analisar o caso.",
  },
};

export const DIAGNOSTICO_CTA = {
  sim: "Enviar minha decisão pelo WhatsApp",
  nao: "Falar sobre meu caso no WhatsApp",
} as const satisfies Record<DiagnosticoDocumento, string>;

export function buildDiagnosticoMessage(
  situacao: DiagnosticoSituacao,
  temDecisao: DiagnosticoDocumento
): string {
  if (situacao === "recurso" && temDecisao === "sim") {
    return "Olá, vim pelo site. Fiz recurso no INSS e ainda não tive resposta. Tenho a decisão/documentação em mãos e gostaria de enviar para análise do meu caso.";
  }
  const frase = DIAGNOSTICO_SITUACOES[situacao].fraseSituacao;
  if (temDecisao === "sim") {
    return `Olá, vim pelo site. ${frase} e tenho a decisão em mãos. Gostaria de enviar para análise do meu caso.`;
  }
  return `Olá, vim pelo site. ${frase}, mas não estou com a decisão em mãos agora. Gostaria de conversar sobre meu caso.`;
}

export const STICKY_WHATSAPP_MESSAGE = "Olá, vim pelo site e quero analisar meu caso com o Dr. Arthur.";
