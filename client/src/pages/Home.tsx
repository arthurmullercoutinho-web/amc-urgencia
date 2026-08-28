import { useEffect } from "react";
import "@/pages/home/home.css";
import HomeHeader from "@/pages/home/HomeHeader";
import HomeHero from "@/pages/home/HomeHero";
import HomeAbout from "@/pages/home/HomeAbout";
import HomeAreas from "@/pages/home/HomeAreas";
import HomeFormaAtuacao from "@/pages/home/HomeFormaAtuacao";
import HomeContato from "@/pages/home/HomeContato";
import HomeFooter from "@/pages/home/HomeFooter";
import HomeWhatsAppButton from "@/pages/home/HomeWhatsAppButton";

const PAGE_TITLE =
  "AMC Advocacia | Direito Tributário, Previdenciário e Civil em Cuiabá/MT";
const PAGE_DESCRIPTION =
  "A AMC Advocacia oferece atuação jurídica personalizada em Cuiabá, com análise criteriosa e condução estratégica nas áreas Tributária, Previdenciária e Civil.";
const PAGE_URL = "https://amcjuridico.com.br";

export default function Home() {
  useEffect(() => {
    document.title = PAGE_TITLE;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      el?.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', PAGE_DESCRIPTION);
    setMeta(
      'meta[name="keywords"]',
      "advogado Cuiabá, direito tributário, direito previdenciário, direito civil, direito do consumidor, AMC Advocacia, Arthur Müller Coutinho"
    );
    setMeta('meta[property="og:title"]', PAGE_TITLE);
    setMeta('meta[property="og:description"]', PAGE_DESCRIPTION);
    setMeta('meta[property="og:url"]', PAGE_URL);
    setMeta('meta[name="twitter:title"]', PAGE_TITLE);
    setMeta('meta[name="twitter:description"]', PAGE_DESCRIPTION);

    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", PAGE_URL);
  }, []);

  return (
    <div className="amc-home min-h-screen flex flex-col bg-[#060b18]">
      <HomeHeader />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeAreas />
        <HomeFormaAtuacao />
        <HomeContato />
      </main>
      <HomeFooter />
      <HomeWhatsAppButton />
    </div>
  );
}
