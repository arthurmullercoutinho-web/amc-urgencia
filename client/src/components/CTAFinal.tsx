import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

interface CTAFinalProps {
  headline: string;
  subheadline?: string;
  ctaText: string;
  whatsappNumber?: string;
  urgencyText?: string;
}

export default function CTAFinal({
  headline,
  subheadline,
  ctaText,
  whatsappNumber = "556598172713",
  urgencyText = "Resposta em até 1 hora",
}: CTAFinalProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de uma análise do meu caso.`;

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {headline}
        </h2>

        {/* Subheadline */}
        {subheadline && (
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            {subheadline}
          </p>
        )}

        {/* CTA Button */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-8 text-xl rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-200 group inline-flex items-center gap-3 scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            {ctaText}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>
        </a>

        {/* Urgency Text */}
        {urgencyText && (
          <p className="text-sm text-amber-300 mt-6">
            ⏱️ <span className="font-semibold">{urgencyText}</span>
          </p>
        )}
      </div>
    </section>
  );
}
