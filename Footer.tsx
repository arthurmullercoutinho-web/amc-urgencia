export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-100">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">AMC Advocacia</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Especialistas em urgência patrimonial e financeira.
            </p>
            <p className="text-slate-300 text-sm mt-2">
              <strong>OAB/MT 10.889</strong>
            </p>
          </div>

          {/* Áreas de Atuação */}
          <div>
            <h4 className="font-semibold text-amber-300 mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="/busca-apreensao" className="hover:text-amber-300 transition-colors">
                  Busca e Apreensão
                </a>
              </li>
              <li>
                <a href="/bloqueio-judicial" className="hover:text-amber-300 transition-colors">
                  Bloqueio Judicial
                </a>
              </li>
              <li>
                <a href="/revisao-financiamento" className="hover:text-amber-300 transition-colors">
                  Revisão de Financiamento
                </a>
              </li>
              <li>
                <a href="/cobranças-abusivas" className="hover:text-amber-300 transition-colors">
                  Cobranças Abusivas
                </a>
              </li>
            </ul>
          </div>

          {/* Mais Áreas */}
          <div>
            <h4 className="font-semibold text-amber-300 mb-4">Mais Áreas</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="/problemas-imobiliarios" className="hover:text-amber-300 transition-colors">
                  Problemas Imobiliários
                </a>
              </li>
              <li>
                <a href="/conflitos-contratuais" className="hover:text-amber-300 transition-colors">
                  Conflitos Contratuais
                </a>
              </li>
              <li>
                <a href="/notificacao-extrajudicial" className="hover:text-amber-300 transition-colors">
                  Notificação Extrajudicial
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-amber-300 mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="https://wa.me/556598172713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors font-semibold"
                >
                  WhatsApp: +55 65 9817-2713
                </a>
              </li>
              <li>Edifício Cuiabá Work Center</li>
              <li>Cuiabá, MT</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-4">
          <p>&copy; {currentYear} AMC Advocacia. Arthur Müller Coutinho - OAB/MT 10.889.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-amber-300 transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="/terms" className="hover:text-amber-300 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-8 p-4 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">
          <p>
            <strong>Aviso Legal (Provimento 205/2021 OAB):</strong> Este site não constitui uma relação de cliente-advogado até que um acordo de representação seja assinado. A informação neste site é apenas para fins educacionais e não deve ser considerada como aconselhamento jurídico. Não fazemos promessas de ganho ou êxito em processos. Consulte um advogado para orientação específica sobre sua situação.
          </p>
        </div>
      </div>
    </footer>
  );
}
