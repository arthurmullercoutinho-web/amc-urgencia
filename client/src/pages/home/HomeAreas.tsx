import { ArrowUpRight } from "lucide-react";

interface Area {
  number: string;
  title: string;
  description: string;
  linkHref: string;
}

const AREAS: Area[] = [
  {
    number: "01",
    title: "Direito Tributário",
    description:
      "Atuação em isenção e restituição do Imposto de Renda, execuções fiscais e outras controvérsias tributárias.",
    linkHref: "/avaliacao-ir",
  },
  {
    number: "02",
    title: "Direito Previdenciário",
    description:
      "Benefícios por incapacidade, aposentadorias, BPC/LOAS, revisões, perícias e demandas relacionadas ao INSS.",
    linkHref: "/previdenciario",
  },
  {
    number: "03",
    title: "Direito Civil e do Consumidor",
    description:
      "Contratos, responsabilidade civil, cobranças indevidas, relações bancárias, conflitos imobiliários e questões patrimoniais.",
    linkHref: "#contato",
  },
];

export default function HomeAreas() {
  const handleClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="areas" className="scroll-mt-16 bg-[#f6f4ee] py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="amc-eyebrow text-xs font-semibold uppercase text-[#128038]">
            Áreas de Atuação
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight text-[#060b18]">
            Três frentes de atuação concentrada.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {AREAS.map((area) => (
            <a
              key={area.title}
              href={area.linkHref}
              onClick={(e) => handleClick(area.linkHref, e)}
              className="group relative overflow-hidden bg-[#060b18] hover:bg-[#0d1a33] transition-colors p-7 md:p-8 flex flex-col"
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 right-3 text-7xl md:text-8xl font-bold text-white/[0.06] select-none"
              >
                {area.number}
              </span>

              <h3 className="relative text-xl md:text-2xl font-semibold text-white leading-snug">
                {area.title}
              </h3>

              <p className="relative mt-4 text-sm md:text-base text-white/70 leading-relaxed flex-1">
                {area.description}
              </p>

              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#8cf5a4] w-fit">
                Saiba mais
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
