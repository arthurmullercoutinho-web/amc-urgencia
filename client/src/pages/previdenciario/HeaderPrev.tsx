import WhatsAppIcon from "./WhatsAppIcon";
import { buildWhatsAppUrl } from "./data/whatsapp";
import { WHATSAPP_MESSAGES } from "./data/whatsapp";

interface HeaderPrevProps {
  onWhatsAppClick: () => void;
}

export default function HeaderPrev({ onWhatsAppClick }: HeaderPrevProps) {
  return (
    <header className="w-full border-b border-[#8CF5A4]/20 bg-[#050F09]">
      <div className="!mx-auto flex w-full max-w-[1150px] items-center justify-between gap-4 !px-5 !py-4 md:!px-8">
        <span className="text-lg font-bold tracking-tight !text-[#F2F7F3]">
          AMC Advocacia
        </span>
        <a
          href={buildWhatsAppUrl(WHATSAPP_MESSAGES.contato)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsAppClick}
          className="!inline-flex items-center gap-2 rounded-lg border !border-[#25603A] !bg-transparent !px-3 !py-2 text-sm font-semibold !text-[#8CF5A4] transition-colors hover:!bg-[#8CF5A4]/10"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
