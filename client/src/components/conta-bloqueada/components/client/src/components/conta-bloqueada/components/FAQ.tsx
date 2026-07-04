const FAQ_ITEMS: { question: string; answer: React.ReactNode; openByDefault?: boolean }[] = [
  {
    question: "A primeira conversa tem custo?",
    answer:
      "Não. A conversa inicial pelo WhatsApp, para entender o seu caso, não tem custo nem compromisso.",
    openByDefault: true,
  },
  {
    question: "Meus dados e prints ficam seguros?",
    answer:
      "Sim. Todo atendimento é protegido por sigilo profissional, dever ético da advocacia.",
  },
  {
    question: "Você atende fora de Cuiabá?",
    answer: "Sim, atendo online para todo o Brasil. Presencial disponível em Cuiabá.",
  },
  {
    question: "É possível recuperar o dinheiro bloqueado?",
    answer:
      "Depende das circunstâncias do caso. Na conversa inicial, avalio a situação e explico quais medidas podem ser cabíveis.",
  },
  {
    question: "Como confirmo que o escritório é real?",
    answer: (
      <>
        Você pode consultar o registro OAB/MT 10.889 diretamente no{" "}
        <a
          href="https://cna.oab.org.br/"
          target="_blank"
          rel="noopener"
          style={{ color: "var(--wa-dark)", fontWeight: 600 }}
        >
          site oficial da OAB
        </a>{" "}
        antes de qualquer contato.
      </>
    ),
  },
  {
    question: "Vou ser pressionado a contratar depois da conversa?",
    answer: "Não. Você decide se quer continuar depois de entender o seu caso.",
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">Perguntas frequentes</div>
        <h2>Dúvidas comuns</h2>

        {FAQ_ITEMS.map((item) => (
          <details
            className="faq-item"
            key={item.question}
            open={item.openByDefault || undefined}
          >
            <summary>{item.question}</summary>
            <div className="faq-a">{item.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
