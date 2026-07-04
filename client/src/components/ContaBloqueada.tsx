import "./landing.css";

import MicroBar from "./components/MicroBar";
import Hero from "./components/Hero";
import Agitation from "./components/Agitation";
import CTAMid from "./components/CTAMid";
import Steps from "./components/Steps";
import Advogado from "./components/Advogado";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function ContaBloqueadaGolden() {
  return (
    <>
      <MicroBar />
      <Hero />
      <Agitation />
      <CTAMid />
      <Steps />
      <Advogado />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
