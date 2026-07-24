import WhatsAppIcon from "./WhatsAppIcon";
import { buildWhatsAppUrl } from "./data/whatsapp";

interface WhatsAppButtonProps {
  message: string;
  onWhatsAppClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "discreet";
  className?: string;
}

export default function WhatsAppButton({
  message,
  onWhatsAppClick,
  children,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  if (variant === "discreet") {
    return (
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onWhatsAppClick}
        className={`!inline-flex !min-h-11 items-center justify-center !px-2 !py-2 text-sm font-medium underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onWhatsAppClick}
      className={`!inline-flex !min-h-[58px] w-full items-center justify-center gap-3 rounded-[13px] !bg-gradient-to-r !from-[#5FF082] !to-[#32E85B] !px-6 !py-4 text-base font-bold !text-[#04150B] shadow-[0_10px_28px_rgba(50,232,91,0.35)] transition-colors hover:!brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04150B] sm:w-auto ${className}`}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0 !text-[#04150B]" />
      <span>{children}</span>
    </a>
  );
}
