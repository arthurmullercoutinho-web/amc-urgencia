const REASONS = [
  {
    title: "Atualização cadastral pendente",
    text: "O banco exige documentos ou dados atualizados antes de liberar a movimentação.",
  },
  {
    title: "Análise interna do banco",
    text: "Movimentação considerada fora do padrão, gerando bloqueio preventivo.",
  },
  {
    title: "Suspeita de fraude",
    text: "Conta sinalizada por segurança, aguardando confirmação de dados.",
  },
  {
    title: "Pendência de compliance",
    text: "Documentação ou informação cadastral que o banco considera incompleta.",
  },
];

export default function Agitation() {
  return (
    <section className="agitation section">
      <div className="wrap">
        <div className="eyebrow">O que costuma acontecer</div>
        <h2>
          Bancos bloqueiam contas por motivos específicos — nem sempre
          explicados com clareza.
        </h2>

        {REASONS.map((reason) => (
          <div className="ag-item" key={reason.title}>
            <div className="ag-icon">✕</div>
            <div className="ag-txt">
              <b>{reason.title}</b>
              <span>{reason.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
