import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-500/50 rounded-lg blur-xl opacity-20"></div>
              <img
                src="/arthur.jpg"
                alt="Arthur Müller Coutinho - Advogado"
                className="relative w-full max-w-sm rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Informações */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                Arthur Müller Coutinho
              </h2>
              <p className="text-lg text-amber-500 font-semibold">OAB/MT 10.889</p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                Especialista em problemas jurídicos urgentes que envolvem patrimônio e questões financeiras. Com experiência consolidada, atua na proteção de direitos e na recuperação de patrimônio em situações que exigem ação rápida e precisa.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Meu compromisso é oferecer análise clara, orientação direta e estratégia eficaz para resolver seus problemas jurídicos com urgência e profissionalismo.
              </p>
            </div>

            {/* Credibilidade */}
            <Card className="bg-slate-800 border border-amber-500/30 p-6">
              <h3 className="font-bold text-amber-300 mb-3">Compromisso Profissional</h3>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Análise em até 1 hora</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Atendimento direto com advogado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Orientação clara e objetiva</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Transparência total sobre seu caso</span>
                </li>
              </ul>
            </Card>

            {/* Contato */}
            <div className="pt-4">
              <a
                href="https://wa.me/556598172713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
              >
                <span>Fale Comigo no WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
