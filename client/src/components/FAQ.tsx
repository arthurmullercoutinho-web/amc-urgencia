import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}
interface FAQProps {
  items: FAQItem[];
  title?: string;
}
export default function FAQ({ items, title = "Perguntas Frequentes" }: FAQProps) {
  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container max-w-3xl mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            {title}
          </h2>
        )}
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 rounded-lg px-4 md:px-6 data-[state=open]:border-amber-400 data-[state=open]:bg-amber-50/50"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-amber-600 py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 pb-4 pt-0">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
