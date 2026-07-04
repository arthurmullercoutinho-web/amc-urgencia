const TESTIMONIALS = [
  {
    name: "Carlos Henrique Silva",
    location: "Cuiabá/MT",
    text: '"Recebi atendimento atencioso e todas as etapas do processo foram explicadas com clareza. Isso me trouxe mais segurança para lidar com a situação."',
  },
  {
    name: "Domingos Soares",
    location: "Cuiabá/MT",
    text: '"Fui orientado de forma transparente sobre os meus direitos e sobre as medidas que poderiam ser analisadas para o meu caso."',
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">Quem já passou por isso</div>
        <h2>Depoimentos</h2>

        {TESTIMONIALS.map((t) => (
          <div className="depo" key={t.name}>
            <div className="depo-head">
              <div>
                <div className="stars">★★★★★</div>
                <div className="depo-name">{t.name}</div>
                <div className="depo-meta">{t.location}</div>
              </div>
            </div>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
