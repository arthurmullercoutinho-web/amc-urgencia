import { useEffect, useRef } from "react";
import {
  ShieldCheck,
  FileCheck2,
  Stethoscope,
  ClipboardList,
  Scale,
  MessageCircle,
  HeartHandshake,
  MapPin,
  FileWarning,
  RefreshCw,
  Gavel,
} from "lucide-react";
import HeaderPrev from "@/pages/previdenciario/HeaderPrev";
import "@/pages/previdenciario/previdenciario-hero.css";
import FooterPrev from "@/pages/previdenciario/FooterPrev";
import WhatsAppButton from "@/pages/previdenciario/WhatsAppButton";
import DiagnosticoPrev from "@/pages/previdenciario/DiagnosticoPrev";
import StickyWhatsAppPrev from "@/pages/previdenciario/StickyWhatsAppPrev";
import { WHATSAPP_MESSAGES } from "@/pages/previdenciario/data/whatsapp";
import { usePrevidenciarioTracking } from "@/pages/previdenciario/data/tracking";

const PAGE_TITLE = "Auxílio-doença negado pelo INSS? | AMC Advocacia";
const PAGE_DESCRIPTION =
  "Auxílio-doença e benefício por incapacidade negado, cortado ou cessado pelo INSS. Atuação em Cuiabá/MT com Arthur Müller Coutinho, OAB/MT 10.889.";
const PAGE_URL = "https://www.amcjuridico.com.br/previdenciario";

const PROBLEMAS = [
  { icon: FileWarning, texto: "Auxílio-doença negado" },
  { icon: RefreshCw, texto: "Benefício cessado" },
  { icon: ClipboardList, texto: "Pedido indeferido" },
  { icon: Stethoscope, texto: "Perícia desfavorável" },
];

const PERCURSO = [
  {
    icon: MessageCircle,
    titulo: "Contato",
    texto: "Você relata o que aconteceu, diretamente pelo WhatsApp.",
  },
  {
    icon: FileCheck2,
    titulo: "Análise da decisão",
    texto: "Avaliamos a carta do INSS, os fundamentos usados e o resultado da perícia.",
  },
  {
    icon: ClipboardList,
    titulo: "Documentos do caso",
    texto: "Reunimos laudos, exames e demais documentos necessários à análise.",
  },
  {
    icon: Scale,
    titulo: "Caminho definido",
    texto: "Indicamos se o caso comporta recurso administrativo ou ação judicial.",
  },
];

const SITUACOES = [
  {
    icon: FileCheck2,
    tag: "01 · AUXÍLIO-DOENÇA",
    titulo: "Benefício negado pelo INSS",
    texto: "Quando o pedido é indeferido logo na análise administrativa ou após a perícia.",
    bullets: ["Carta de indeferimento do INSS", "Resultado da perícia médica", "Documentação médica existente"],
    mensagem: WHATSAPP_MESSAGES.hero,
    label: "card_auxilio_negado",
  },
  {
    icon: RefreshCw,
    tag: "02 · CESSAÇÃO",
    titulo: "Benefício cortado ou cessado",
    texto: "Quando o pagamento é interrompido sem nova avaliação adequada da incapacidade.",
    bullets: ["Alta médica considerada indevida", "Cessação sem exame atualizado", "Necessidade de reavaliação"],
    mensagem: WHATSAPP_MESSAGES.cessado,
    label: "card_cessado",
  },
  {
    icon: Gavel,
    tag: "03 · RECURSO",
    titulo: "Indeferimento e recurso",
    texto: "Quando ainda é possível questionar a decisão administrativa ou judicialmente.",
    bullets: ["Verificação do prazo disponível", "Recurso administrativo, quando cabível", "Ação judicial, quando necessária"],
    mensagem: WHATSAPP_MESSAGES.indeferido,
    label: "card_indeferido",
  },
];

const VALORES = [
  {
    icon: MessageCircle,
    titulo: "Linguagem clara",
    texto: "Explicações simples sobre a decisão do INSS, sem termos técnicos soltos.",
  },
  {
    icon: ShieldCheck,
    titulo: "Sem promessas",
    texto: "Análise honesta do caso, sem garantir resultado ou reversão automática.",
  },
  {
    icon: HeartHandshake,
    titulo: "Contato direto",
    texto: "Comunicação pelo WhatsApp em cada etapa, sem intermediários.",
  },
];

export default function Previdenciario() {
  const tracking = usePrevidenciarioTracking();
  const heroRef = useRef<HTMLElement>(null);
  const diagnosticoRef = useRef<HTMLElement>(null);

  // PrevWhatsAppDireto: para todo ponto de WhatsApp FORA do resultado do diagnóstico.
  // Mantém o Contact/whatsapp_click antigo (via fireContact) intacto, só adiciona o novo evento.
  const fireDireto = (label: string) => () => {
    tracking.fireContact(label)();
    tracking.fireWhatsAppDireto();
  };

  useEffect(() => {
    document.title = PAGE_TITLE;
    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', PAGE_DESCRIPTION);
    setMeta('meta[property="og:title"]', PAGE_TITLE);
    setMeta('meta[property="og:description"]', PAGE_DESCRIPTION);
    setMeta('meta[property="og:url"]', PAGE_URL);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", PAGE_URL);
  }, []);

  return (
    <div className="prev-page min-h-screen !bg-[#050F09]">
      <HeaderPrev onWhatsAppClick={fireDireto("header")} />

      {/* Hero — redesenho com fotografia real integrada ao fundo (autorizado em rodada dedicada) */}
      <section className="prev-hero" ref={heroRef}>
        <div className="prev-container">
          {/* fotografia — apenas mobile/tablet, posicionada em absoluto (não empurra o texto) */}
          <div className="prev-hero-photo-abs">
            <img
              src="/foto-arthur-previdenciario-transparent.png"
              alt="Arthur Müller Coutinho, advogado responsável pela AMC Advocacia"
              className="prev-hero-photo-abs-img"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="prev-hero-content">
            <div className="prev-hero-text-narrow">
              <div className="prev-hero-identity">
                <span className="prev-hero-name">Arthur Müller Coutinho</span>
                <span className="prev-hero-oab">OAB/MT 10.889</span>
              </div>
              <div className="prev-hero-rule" />
              <div className="prev-kicker">Direito Previdenciário</div>
              <h1>
                Auxílio-doença
                <br />
                negado ou
                <br />
                cortado pelo
                <br />
                <span>INSS?</span>
              </h1>
            </div>

            <p className="prev-lead prev-lead-full">
              Analisamos a negativa, a perícia e os documentos para orientar o caminho adequado ao
              seu caso.
            </p>
            <p className="prev-hero-local">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="prev-hero-local-text">
                Atendimento em <span className="prev-hero-local-city">Cuiabá/MT</span> e online
              </span>
            </p>

            <div className="prev-actions">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.hero}
                onWhatsAppClick={fireDireto("hero")}
                className="prev-btn prev-primary"
              >
                Falar agora no WhatsApp
              </WhatsAppButton>

              <a
                href="#situacoes"
                className="prev-btn prev-cta-desktop-only !hidden !min-h-[58px] items-center justify-center rounded-[13px] border !border-[#8CF5A4]/30 !bg-transparent !px-6 !py-4 text-base font-semibold !text-[#F2F7F3] transition-colors hover:!bg-white/5 md:!inline-flex"
              >
                Entender atuação
              </a>
            </div>

            <p className="prev-hero-microtexto">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Atendimento reservado · Análise individual do caso
            </p>
          </div>

          {/* fotografia — apenas desktop, coluna direita */}
          <div className="prev-hero-visual">
            <img
              src="/foto-arthur-previdenciario.png"
              alt="Arthur Müller Coutinho, advogado responsável pela AMC Advocacia"
              className="prev-hero-visual-img"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Diagnóstico rápido — experimento CRO V1 */}
      <section
        id="diagnostico"
        ref={diagnosticoRef}
        aria-label="Diagnóstico rápido"
        className="!bg-[#050F09] !px-5 !py-12 md:!px-8 md:!py-16"
      >
        <DiagnosticoPrev onWhatsAppClick={tracking.fireContact("diagnostico_concluido")} />
      </section>

      {/* Por que isso acontece */}
      <section id="problema" className="!bg-[#F6F3E9] !px-5 !py-14 md:!px-8 md:!py-20">
        <div className="!mx-auto w-full max-w-[1150px]">
          <div className="!mb-8 text-center md:!mb-10">
            <div className="!mb-2 text-xs font-bold uppercase tracking-widest !text-[#3B7A52]">
              Por que isso acontece
            </div>
            <h2 className="text-2xl font-bold !text-[#0E2417] md:text-3xl">
              Um benefício negado quase sempre tem um motivo específico
            </h2>
            <p className="!mx-auto !mt-3 max-w-2xl text-base !text-[#4A5C50]">
              Antes de decidir o próximo passo, é importante entender exatamente o que a
              decisão do INSS considerou — e o que ainda pode ser questionado.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {PROBLEMAS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.texto}
                  className="flex items-center gap-3 rounded-2xl border !border-[#0E2417]/10 !bg-white !p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] !bg-[#1B4D2C]/10 !text-[#2E7A45]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold !text-[#0E2417]">{item.texto}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="!bg-gradient-to-b !from-[#081A10] !to-[#050F09] !px-5 !py-14 md:!px-8 md:!py-20">
        <div className="!mx-auto w-full max-w-[1150px]">
          <div className="!mb-10 text-center md:!mb-14">
            <div className="!mb-2 text-xs font-bold uppercase tracking-widest !text-[#8CF5A4]">
              Como funciona
            </div>
            <h2 className="text-2xl font-bold !text-[#F2F7F3] md:text-3xl">
              Da decisão do INSS à definição do caminho
            </h2>
            <p className="!mx-auto !mt-3 max-w-2xl text-base !text-[#B9CBC0]">
              Um processo claro, do primeiro contato à definição da estratégia do seu caso.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {PERCURSO.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titulo} className="flex flex-col items-center text-center">
                  <div className="!mb-3.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border !border-[#32E85B]/30 !bg-gradient-to-br !from-[#32E85B]/20 !to-[#32E85B]/5 !text-[#8CF5A4]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="!mb-1.5 text-base font-bold !text-[#F2F7F3]">{item.titulo}</h3>
                  <p className="max-w-[220px] text-sm leading-relaxed !text-[#B9CBC0]">
                    {item.texto}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Situações atendidas */}
      <section id="situacoes" className="!bg-[#F6F3E9] !px-5 !py-14 md:!px-8 md:!py-20">
        <div className="!mx-auto w-full max-w-[1150px]">
          <div className="!mb-8 text-center md:!mb-10">
            <div className="!mb-2 text-xs font-bold uppercase tracking-widest !text-[#3B7A52]">
              Situações atendidas
            </div>
            <h2 className="text-2xl font-bold !text-[#0E2417] md:text-3xl">
              Em quais casos podemos atuar
            </h2>
            <p className="!mx-auto !mt-3 max-w-2xl text-base !text-[#4A5C50]">
              Cada situação exige uma leitura própria da decisão do INSS. Veja os casos mais
              comuns.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SITUACOES.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.titulo}
                  className="flex h-full flex-col rounded-2xl border !border-[#0E2417]/8 !bg-white !p-6 shadow-sm"
                >
                  <div className="!mb-4 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] !bg-[#2E7A45]/10 !text-[#2E7A45]">
                    <Icon className="h-[26px] w-[26px] shrink-0" />
                  </div>
                  <div className="!mb-2 text-xs font-bold tracking-wide !text-[#2E7A45]">
                    {card.tag}
                  </div>
                  <h3 className="!mb-2 text-lg font-bold !text-[#0E2417]">{card.titulo}</h3>
                  <p className="!mb-3 text-sm leading-relaxed !text-[#4A5C50]">{card.texto}</p>
                  <ul className="!mb-5 flex flex-col gap-1.5 text-sm !text-[#4A5C50]">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="!mt-2 h-1 w-1 shrink-0 rounded-full !bg-[#2E7A45]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    message={card.mensagem}
                    onWhatsAppClick={fireDireto(card.label)}
                    variant="discreet"
                    className="!mt-auto !justify-start !text-[#2E7A45] decoration-[#2E7A45]/40 hover:!text-[#1B4D2C]"
                  >
                    Falar sobre este caso
                  </WhatsAppButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atuação responsável */}
      <section className="border-y !border-[#8CF5A4]/15 !bg-[#050F09] !px-5 !py-12 md:!px-8 md:!py-16">
        <div className="!mx-auto w-full max-w-[1150px]">
          <div className="!mb-8 text-center">
            <div className="!mb-2 text-xs font-bold uppercase tracking-widest !text-[#8CF5A4]">
              Atuação responsável
            </div>
            <h2 className="text-xl font-bold !text-[#F2F7F3] md:text-2xl">
              Como conduzimos o seu caso
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {VALORES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titulo} className="text-center">
                  <div className="!mx-auto !mb-3 flex h-12 w-12 items-center justify-center rounded-xl border !border-[#8CF5A4]/25 !bg-[#8CF5A4]/8 !text-[#8CF5A4]">
                    <Icon className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="!mb-1.5 text-base font-bold !text-[#F2F7F3]">{item.titulo}</h3>
                  <p className="text-sm leading-relaxed !text-[#B9CBC0]">{item.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quem é o advogado */}
      <section className="!bg-[#EEE9D9] !px-5 !py-14 md:!px-8 md:!py-20">
        <div className="!mx-auto w-full max-w-[680px] text-center">
          <div className="!mb-2 text-xs font-bold uppercase tracking-widest !text-[#3B7A52]">
            Quem é o advogado
          </div>
          <h2 className="text-2xl font-bold !text-[#0E2417] md:text-3xl">
            Atuação jurídica técnica, clara e responsável.
          </h2>
          <p className="!mt-3 text-sm font-semibold !text-[#0E2417]">
            Arthur Müller Coutinho
            <span className="!ml-2 font-normal !text-[#4A5C50]">OAB/MT 10.889</span>
          </p>
          <p className="!mt-4 !mx-auto max-w-xl text-base leading-relaxed !text-[#4A5C50]">
            Arthur Müller Coutinho atua em Cuiabá/MT com comunicação direta, análise
            individualizada e condução estratégica do caso concreto.
          </p>
          <div className="!mt-6 flex justify-center">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.hero}
              onWhatsAppClick={fireDireto("quem_somos")}
            >
              Chamar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="!bg-[#081A10] !px-5 !py-14 text-center md:!px-8 md:!py-20">
        <div className="!mx-auto w-full max-w-[640px] rounded-3xl border !border-[#8CF5A4]/15 !bg-[#0D2016] !p-8 md:!p-10">
          <div className="!mb-2 text-xs font-bold uppercase tracking-widest !text-[#8CF5A4]">
            Localização e contato
          </div>
          <h2 className="!mb-6 text-xl font-bold !text-[#F2F7F3] md:text-2xl">
            Fale com o escritório.
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.hero}
              onWhatsAppClick={fireDireto("localizacao")}
            >
              WhatsApp
            </WhatsAppButton>
            <a
              href="https://www.google.com.br/maps/place/Edif%C3%ADcio+Cuiab%C3%A1+Work+Center/@-15.5852338,-56.0798737,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICC99WvwAE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAHle-TeYdeOI4YAhge5WyRn9SJJwimyl-NdZ6nG_7CyWekeCpFyuoEjC1SyOCayK3W7w1ZEYD9O0SeBA6WKSDenAIMn2xx7LyVOlEiKWH-NNnP6Kw1Q5KdL5VQm3XcKlDJZbDCj%3Dw190-h86-k-no!7i4032!8i1816!4m7!3m6!1s0x939db1af781b05ed:0xb44f75749397de11!8m2!3d-15.5850672!4d-56.0798938!10e5!16s%2Fg%2F1tj9d26c?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="!inline-flex !min-h-[58px] items-center justify-center gap-2 rounded-[13px] border !border-[#8CF5A4]/25 !bg-transparent !px-6 !py-4 text-base font-semibold !text-[#F2F7F3] transition-colors hover:!bg-white/5"
            >
              <MapPin className="h-[18px] w-[18px] shrink-0" />
              Como chegar
            </a>
          </div>
        </div>
      </section>

      <FooterPrev />

      <StickyWhatsAppPrev
        heroRef={heroRef}
        diagnosticoRef={diagnosticoRef}
        onWhatsAppClick={fireDireto("sticky_mobile")}
      />
      {/* reserva espaço para a barra sticky não cobrir o rodapé no mobile */}
      <div className="h-[68px] md:hidden" aria-hidden="true" />
    </div>
  );
}
