export default function FooterPrev() {
  const currentYear = new Date().getFullYear();

  return (
    <div role="contentinfo" className="w-full border-t border-[#8CF5A4]/20 bg-[#050F09] text-white">
      <div className="!mx-auto w-full max-w-[1150px] !px-5 !py-8 md:!px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm !text-[#B9CBC0]">
            © {currentYear} AMC Advocacia. Todos os direitos reservados.
          </p>
          <a
            href="/privacy"
            className="text-sm font-medium !text-[#8CF5A4] underline decoration-[#8CF5A4]/40 underline-offset-4 hover:!text-[#5FF082]"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>
  );
}
