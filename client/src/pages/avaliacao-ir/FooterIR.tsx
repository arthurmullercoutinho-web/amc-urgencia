export default function FooterIR() {
  const currentYear = new Date().getFullYear();

  return (
    <div role="contentinfo" className="w-full border-t-2 border-[#7CD9A0] bg-[#0E1729] text-white">
      <div className="!mx-auto w-full max-w-[1150px] !px-5 !py-8 md:!px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold !text-white">AMC Advocacia</p>
            <p className="!mt-1 text-sm !text-[#B9C2D4]">
              Arthur Müller Coutinho — OAB/MT 10.889
            </p>
            <p className="!mt-1 text-sm !text-[#B9C2D4]">Cuiabá/MT</p>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <a
              href="https://wa.me/556598172713"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium !text-white underline decoration-white/40 underline-offset-4 hover:!text-[#7CD9A0] hover:decoration-[#7CD9A0]"
            >
              WhatsApp: +55 65 9817-2713
            </a>
            <a
              href="/privacy"
              className="font-medium !text-[#B9C2D4] underline decoration-[#B9C2D4]/40 underline-offset-4 hover:!text-[#7CD9A0] hover:decoration-[#7CD9A0]"
            >
              Política de Privacidade
            </a>
          </div>
        </div>

        <p className="!mt-6 border-t border-white/15 !pt-4 text-xs leading-relaxed !text-[#B9C2D4]">
          Este conteúdo é meramente informativo e não constitui garantia de direito ou de
          resultado. A viabilidade de cada caso depende de avaliação jurídica individual. ©{" "}
          {currentYear} AMC Advocacia.
        </p>
      </div>
    </div>
  );
}
