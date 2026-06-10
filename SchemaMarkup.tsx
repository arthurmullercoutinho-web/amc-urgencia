import { useEffect } from "react";

export default function SchemaMarkup() {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://amcjuridico.com.br",
      name: "AMC Advocacia",
      image: "https://amcjuridico.com.br/og-image.png",
      description: "Especialistas em urgencia patrimonial e financeira em Cuiaba, MT",
      url: "https://amcjuridico.com.br",
      telephone: "+5565998172713",
      email: "contato@amcjuridico.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Edificio Cuiaba Work Center",
        addressLocality: "Cuiaba",
        addressRegion: "MT",
        postalCode: "78000-000",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-15.5942",
        longitude: "-56.0974",
      },
      areaServed: [
        "Cuiaba",
        "Mato Grosso",
        "Brasil",
      ],
      priceRange: "$$",
      sameAs: [
        "https://wa.me/556598172713",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "1",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
