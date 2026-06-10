import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5565999999999?text=Olá! Gostaria de uma análise do meu caso.";

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            AMC
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
          </Link>
          <a
            href="#triagem"
            className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
          >
            Serviços
          </a>
          <a
            href="#faq"
            className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white gap-2">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/">
              <a className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2">
                Home
              </a>
            </Link>
            <a
              href="#triagem"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Serviços
            </a>
            <a
              href="#faq"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              FAQ
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
