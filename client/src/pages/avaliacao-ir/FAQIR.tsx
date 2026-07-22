import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQIRItem {
  question: string;
  answer: string;
}

interface FAQIRProps {
  items: FAQIRItem[];
}

export default function FAQIR({ items }: FAQIRProps) {
  return (
    <section className="bg-[#F6F5F1] !px-5 !py-16 md:!px-8 md:!py-20">
      <div className="!mx-auto w-full max-w-3xl">
        <h2 className="!mb-10 text-center text-2xl font-bold text-[#0E1729] md:text-3xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="!border-b-0 rounded-2xl border border-[#E4E1D8] bg-white !px-5 shadow-sm md:!px-7"
            >
              <AccordionTrigger className="!py-5 text-left text-base font-semibold !text-[#0E1729] hover:no-underline md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="!pb-5 !pt-0 text-sm leading-relaxed !text-[#5C6472] md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
