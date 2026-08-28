export default function HomeHero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] lg:min-h-[80vh] bg-[#060b18] overflow-hidden">
      {/* ===== Mobile: fotografia centralizada, texto direto sobre o navy ===== */}
      <div className="md:hidden flex min-h-[100svh] flex-col">
        {/* espaço reservado para a faixa/cabeçalho fixo */}
        <div className="h-14 shrink-0" />

        <div className="flex-1 flex flex-col items-center justify-center px-6">
          {/* fotografia — fundo já removido/substituído por navy; fade real via mask nos últimos 12% */}
          <div className="relative w-[56%] max-w-[202px]">
            <img
              src="/foto-arthur-navy.png"
              alt="Arthur Müller Coutinho, advogado responsável pela AMC Advocacia"
              className="amc-photo-fade-mask w-full h-auto block"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* texto — sem caixa, direto sobre o fundo navy */}
          <div className="amc-fade-in relative z-10 mt-1 w-[82%] max-w-[300px] text-left">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#d1b89b]">
              Arthur Müller Coutinho · OAB/MT 10.889
            </p>
            <h1 className="amc-serif mt-2.5 text-[1.55rem] leading-[1.28] font-semibold text-white">
              Atuação jurídica técnica, estratégica e responsável.
            </h1>
            <p className="mt-2 text-[13px] text-[#a0a0a0]">
              Direito Tributário, Previdenciário e Civil.
            </p>
            <button
              onClick={() => scrollTo("#contato")}
              className="mt-4 inline-flex items-center justify-center bg-[#d1b89b] hover:bg-[#c2a688] text-[#1a1a1a] text-[13px] font-medium px-6 py-2.5 rounded-[5px] transition-colors"
            >
              Fale com o escritório
            </button>
          </div>
        </div>
      </div>

      {/* ===== Desktop: texto de um lado, fotografia do outro ===== */}
      <div className="hidden md:grid md:grid-cols-2 min-h-[100svh] lg:min-h-[80vh] lg:grid-cols-[520px_480px] lg:justify-center lg:gap-[72px]">
        <div className="amc-fade-in relative z-10 px-14 lg:px-0 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#d1b89b]">
            Arthur Müller Coutinho · OAB/MT 10.889
          </p>
          <h1 className="amc-serif mt-4 text-5xl lg:text-[62px] leading-[1.12] font-semibold text-white max-w-xl lg:max-w-none">
            Atuação jurídica técnica, estratégica e responsável.
          </h1>
          <p className="mt-6 text-lg text-[#a0a0a0] leading-relaxed">
            Direito Tributário, Previdenciário e Civil.
          </p>
          <div className="mt-9">
            <button
              onClick={() => scrollTo("#contato")}
              className="inline-flex items-center justify-center bg-[#d1b89b] hover:bg-[#c2a688] text-[#1a1a1a] text-base font-medium px-7 py-3.5 rounded-[6px] transition-colors"
            >
              Fale com o escritório
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-end pr-14 lg:justify-start lg:pr-0">
          {/* fotografia — proporção preservada (sem cover/corte), menor e com espaço navy ao redor */}
          <div className="w-[34vw] max-w-[500px] min-w-[280px] lg:w-[480px] lg:max-w-[480px]">
            <img
              src="/foto-arthur-navy.png"
              alt="Arthur Müller Coutinho, advogado responsável pela AMC Advocacia"
              className="amc-photo-fade-mask w-full h-auto block"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
