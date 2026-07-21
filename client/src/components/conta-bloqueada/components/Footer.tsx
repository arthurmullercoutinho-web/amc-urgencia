export default function Footer() {
  return (
    <footer>
      <span className="fname">AMC Advocacia — Arthur Müller Coutinho</span>
      <span className="fmeta">OAB/MT 10.889 · Cuiabá/MT</span>

      <div className="finfo">
        <div className="faddr">
          <b>Edifício Cuiabá Work Center</b>
          Av. Historiador Rubens de Mendonça, 1836 - Sala 803, Jardim Aclimação
          - Cuiabá/MT
        </div>
        <a
          className="fmaps"
          href="https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio%20Cuiab%C3%A1%20Work%20Center%2C%20Av.%20Historiador%20Rubens%20de%20Mendon%C3%A7a%2C%201836%2C%20Jardim%20Aclima%C3%A7%C3%A3o%2C%20Cuiab%C3%A1%20-%20MT"
          target="_blank"
          rel="noopener"
        >
          Como chegar
        </a>
        <div className="fwhats">WhatsApp: +55 65 9817-2713</div>

        <div className="flegal">
          <a href="/privacy">Política de Privacidade</a>
          &nbsp;·&nbsp;
          <a href="/terms">Termos de Uso</a>
        </div>
        <div className="fcopy">
          © 2026 AMC Advocacia. Arthur Müller Coutinho – OAB/MT 10.889.
        </div>
      </div>
    </footer>
  );
}
