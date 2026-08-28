export default function HomeFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060b18] border-t border-white/10 text-slate-300">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">AMC Advocacia</h3>
            <p className="text-sm text-slate-400">Arthur Müller Coutinho</p>
            <p className="text-sm text-slate-400">OAB/MT 10.889</p>
            <p className="text-sm text-slate-400 mt-1">Cuiabá/MT</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#B8860B] uppercase tracking-wide mb-4">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/avaliacao-ir" className="hover:text-white transition-colors">
                  Direito Tributário
                </a>
              </li>
              <li>
                <a href="/previdenciario" className="hover:text-white transition-colors">
                  Direito Previdenciário
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Direito Civil e do Consumidor
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#B8860B] uppercase tracking-wide mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/556598172713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +55 65 9817-2713
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#B8860B] uppercase tracking-wide mb-4">
              Institucional
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} AMC Advocacia. Arthur Müller Coutinho - OAB/MT 10.889.
          </p>
          <p className="text-xs text-slate-500 mt-4 leading-relaxed">
            <strong className="text-slate-400">Aviso Legal (Provimento 205/2021 OAB):</strong>{" "}
            Este site não constitui uma relação de cliente-advogado até que um
            acordo de representação seja assinado. A informação neste site é
            apenas para fins educacionais e não deve ser considerada como
            aconselhamento jurídico. Não fazemos promessas de ganho ou êxito em
            processos. Consulte um advogado para orientação específica sobre sua
            situação.
          </p>
        </div>
      </div>
    </footer>
  );
}
