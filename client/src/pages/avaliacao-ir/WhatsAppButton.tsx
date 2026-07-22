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
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variantClasses =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
      : "text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary text-sm font-medium bg-transparent px-2 py-2";

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onWhatsAppClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
}
