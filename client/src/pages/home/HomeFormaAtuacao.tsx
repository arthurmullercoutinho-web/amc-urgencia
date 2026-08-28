const STEPS = [
  "Análise do caso",
  "Orientação jurídica",
  "Definição da medida adequada",
  "Acompanhamento",
];

export default function HomeFormaAtuacao() {
  return (
    <section className="bg-[#eef1ec] py-10 md:py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
          <p className="amc-eyebrow text-xs font-semibold uppercase text-[#128038] shrink-0 md:mr-6">
            Forma de Atuação
          </p>

          <div className="grid grid-cols-2 md:flex md:flex-1 gap-x-6 gap-y-5 md:gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step}
                className={`flex items-center gap-2.5 md:flex-1 md:px-4 ${
                  i > 0 ? "md:border-l md:border-[#060b18]/10" : ""
                }`}
              >
                <span className="text-sm font-bold text-[#128038]">0{i + 1}</span>
                <span className="text-sm md:text-[15px] text-[#060b18] leading-snug">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
