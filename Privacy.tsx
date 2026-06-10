export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-16">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Política de Privacidade</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introdução</h2>
            <p>
              A AMC Advocacia ("nós", "nosso" ou "nos") respeita a privacidade de nossos visitantes e clientes. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site e utiliza nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Informações que Coletamos</h2>
            <p>Podemos coletar informações de você de várias maneiras:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Informações que você nos fornece voluntariamente (nome, email, telefone, mensagens)</li>
              <li>Informações coletadas automaticamente (endereço IP, tipo de navegador, páginas visitadas)</li>
              <li>Cookies e tecnologias similares para melhorar sua experiência</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Como Usamos Suas Informações</h2>
            <p>Usamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder suas consultas e fornecer atendimento jurídico</li>
              <li>Melhorar nosso site e serviços</li>
              <li>Enviar comunicações relacionadas aos seus pedidos</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Proteção de Dados (LGPD)</h2>
            <p>
              Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). Seus dados pessoais são tratados com segurança e confidencialidade, e você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar seu consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Segurança</h2>
            <p>
              Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Terceiros</h2>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou conforme exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco:
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
