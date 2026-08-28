import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "O Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Contato", href: "#contato" },
];

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (isOpen) {
        lastScrollY.current = y;
        return;
      }
      const goingDown = y > lastScrollY.current;
      setIsHidden(goingDown && y > 96);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-hidden={isHidden && !isOpen}
      className="amc-header fixed top-0 inset-x-0 z-50 bg-[#060b18]/75 backdrop-blur-md border-b border-white/10"
    >
      <div className="container flex h-14 md:h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="AMC Advocacia - página inicial">
          <img src="/amc_logo_symbol.png" alt="AMC Advocacia" className="h-9 md:h-10 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-[13px] font-medium uppercase tracking-wide text-white/80 hover:text-[#8cf5a4] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNavClick("#contato")}
          className="hidden md:inline-flex items-center rounded-[5px] border border-[#d1b89b] bg-transparent px-4 py-2 text-[13px] font-medium text-[#d1b89b] transition-colors hover:bg-[#d1b89b] hover:text-[#060b18]"
        >
          Fale com o escritório
        </button>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-white"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-14 bottom-0 bg-[#060b18] flex flex-col">
          <nav className="container py-8 flex flex-col gap-1" aria-label="Navegação mobile">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-lg font-medium text-white/90 hover:text-[#8cf5a4] py-4 border-b border-white/10"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contato")}
              className="mt-6 flex w-full items-center justify-center rounded-[5px] border border-[#d1b89b] bg-transparent px-6 py-3.5 text-sm font-medium text-[#d1b89b] transition-colors hover:bg-[#d1b89b] hover:text-[#060b18]"
            >
              Fale com o escritório
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
