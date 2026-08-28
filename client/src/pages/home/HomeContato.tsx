import { MapPin, Phone } from "lucide-react";

export default function HomeContato() {
  const whatsappUrl =
    "https://wa.me/556598172713?text=" +
    encodeURIComponent("Olá. Gostaria de falar com a AMC Advocacia sobre meu caso.");

  const mapsUrl =
    "https://www.google.com.br/maps/place/Edif%C3%ADcio+Cuiab%C3%A1+Work+Center/@-15.5852338,-56.0798737,17z";

  return (
    <section id="contato" className="scroll-mt-16 bg-[#060b18] py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="amc-eyebrow text-xs font-semibold uppercase text-[#8cf5a4]">
            Contato
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Converse com a AMC Advocacia.
          </h2>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-[#128038] text-white text-base font-medium px-8 py-4 hover:bg-[#0f6b2f] transition-colors"
          >
            Fale com o escritório
          </a>
        </div>

        <div className="mt-14 md:mt-16 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-6 md:gap-10 max-w-2xl">
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-[#8cf5a4] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-white/40 mb-1">WhatsApp</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-[#8cf5a4] transition-colors">
                +55 65 9817-2713
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#8cf5a4] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-white/40 mb-1">Endereço</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Ed. Cuiabá Work Center, Sala 803
                <br />
                Jardim Aclimação - Cuiabá/MT
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block text-xs text-[#8cf5a4] hover:text-white transition-colors"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
