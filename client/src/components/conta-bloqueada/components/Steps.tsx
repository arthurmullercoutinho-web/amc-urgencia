const STEPS = [
  {
    title: "Você conta o que aconteceu",
    text: "Em poucas mensagens, sem formulário — como uma conversa normal.",
  },
  {
    title: "Eu identifico o motivo provável do bloqueio",
    text: "Com base no que você recebeu do banco e nas informações do caso.",
  },
  {
    title: "Você entende quais medidas podem ser avaliadas",
    text: "Explicação clara sobre os próximos passos possíveis para o seu caso.",
  },
];

export default function Steps() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">Sem burocracia</div>
        <h2>O que acontece depois que você chama no WhatsApp</h2>
        <div className="steps">
          {STEPS.map((step, i) => (
            <div className="step" key={step.title}>
              <div className="step-num">{i + 1}</div>
              <div className="step-txt">
                <b>{step.title}</b>
                <span>{step.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
