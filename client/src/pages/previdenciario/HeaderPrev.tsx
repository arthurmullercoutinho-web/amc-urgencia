import WhatsAppIcon from "./WhatsAppIcon";
import { buildWhatsAppUrl } from "./data/whatsapp";
import { WHATSAPP_MESSAGES } from "./data/whatsapp";

interface HeaderPrevProps {
  onWhatsAppClick: () => void;
}

export default function HeaderPrev({ onWhatsAppClick }: HeaderPrevProps) {
  return (
    <header className="prev-header sticky top-0 z-[60] w-full !bg-[rgba(5,15,9,0.97)] border-b !border-[rgba(140,245,164,0.14)] backdrop-blur-[14px]">
      <div className="prev-nav !mx-auto flex w-full max-w-[1160px] min-h-[64px] items-center justify-between !gap-5 !px-[17px] md:min-h-[78px] md:!px-[20px]">
        <a
          href="/previdenciario"
          className="flex items-center !gap-[15px] min-w-max"
        >
          <img
            src="/amc_logo_symbol.png"
            alt="AMC"
            className="prev-logo w-[62px] h-[38px] object-contain md:w-[74px] md:h-[44px]"
          />
          <div className="prev-divider w-px h-[35px] !bg-[rgba(140,245,164,0.3)] md:h-[40px]" />
          <div className="prev-brand-text uppercase font-[900] leading-[1.35] text-[11px] tracking-[.14em] !text-[#F2F7F3] md:text-[13px] md:tracking-[.18em]">
            Advocacia<br />Estratégica
          </div>
        </a>

        <nav className="prev-menu hidden items-center !gap-[18px] text-[12px] font-[900] uppercase !tracking-[.04em] !text-[#dcefe2] md:flex">
          <a href="#problema" className="hover:!text-[#8CF5A4]">
            Como funciona
          </a>
          <a href="#situacoes" className="hover:!text-[#8CF5A4]">
            Situações
          </a>
          <a href="/" className="hover:!text-[#8CF5A4]">
            Início
          </a>
        </nav>

        <a
          href={buildWhatsAppUrl(WHATSAPP_MESSAGES.contato)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsAppClick}
          className="prev-header-cta !inline-flex items-center !gap-1.5 whitespace-nowrap rounded-[7px] border !border-[#25603A] !bg-transparent !px-3 !py-2 text-[12px] font-bold !text-[#8CF5A4] transition-colors hover:!bg-[rgba(140,245,164,0.08)] hover:!border-[#8CF5A4] md:!gap-2 md:rounded-[8px] md:!px-[17px] md:!py-3 md:text-sm"
        >
          <WhatsAppIcon className="h-[13px] w-[13px] shrink-0 md:h-[15px] md:w-[15px]" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
