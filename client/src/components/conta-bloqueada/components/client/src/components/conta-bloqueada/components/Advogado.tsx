export default function Advogado() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="advogado-card">
          <div className="advogado-top">
            {/* SUBSTITUIR pela foto profissional real do Dr. Arthur
                (recomendado: 200x200px, .jpg ou .webp, rosto centralizado) */}
            <img
              className="advogado-photo"
              src="/foto-arthur-coutinho.jpg"
              alt="Dr. Arthur Müller Coutinho, advogado responsável pelo atendimento"
            />
            <div>
              <b>Arthur Müller Coutinho</b>
              <div className="oab">OAB/MT 10.889 · AMC Advocacia</div>
            </div>
          </div>
          <div className="advogado-quote">
            "Quase todo caso que chega até mim começa do mesmo jeito: a
            pessoa não sabe se deve esperar ou agir. Eu ajudo a responder
            isso primeiro — o resto a gente resolve com calma, olhando pro
            que realmente aconteceu no seu caso."
          </div>
          <div className="advogado-badges">
            <span className="adv-badge">Atendimento direto</span>
            <span className="adv-badge">Presencial em Cuiabá</span>
            <span className="adv-badge">Online em todo o Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
}
