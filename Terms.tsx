export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-16">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Termos de Uso</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar este site, você aceita estar vinculado por estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não use este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Uso Autorizado</h2>
            <p>
              Este site é fornecido para uso pessoal e não comercial. Você concorda em não usar este site para qualquer propósito ilegal ou proibido por estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Isenção de Responsabilidade Legal</h2>
            <p>
              As informações fornecidas neste site são apenas para fins informativos e não constituem aconselhamento jurídico. Não estabelecem uma relação advogado-cliente. Você deve consultar um advogado qualificado para questões jurídicas específicas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Conformidade com Provimento 205/2021 da OAB</h2>
            <p>
              Conforme exigido pelo Provimento 205/2021 da Ordem dos Advogados do Brasil (OAB), informamos que:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Não fazemos promessas de ganho ou êxito em processos</li>
              <li>A contratação de serviços jurídicos não garante resultado favorável</li>
              <li>Cada caso é único e depende de fatores específicos</li>
              <li>Os resultados passados não garantem resultados futuros</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Limitação de Responsabilidade</h2>
            <p>
              A AMC Advocacia não será responsável por danos indiretos, incidentais, especiais ou consequentes resultantes do uso ou incapacidade de usar este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, gráficos e logos, é propriedade da AMC Advocacia e protegido por leis de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Links Externos</h2>
            <p>
              Este site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Modificações</h2>
            <p>
              Reservamos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis do Estado de Mato Grosso, Brasil, e você concorda em se submeter à jurisdição exclusiva dos tribunais desse estado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="font-semibold">AMC Advocacia</p>
              <p>Arthur Müller Coutinho - OAB/MT 10.889</p>
              <p>WhatsApp: +55 65 9817-2713</p>
              <p>Edifício Cuiabá Work Center, Cuiabá/MT</p>
            </div>
          </section>

          <section>
            <p className="text-sm text-muted-foreground pt-8 border-t border-border">
              Última atualização: Junho de 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
