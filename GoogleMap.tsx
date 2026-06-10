import { useEffect, useRef } from "react";

export default function GoogleMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Carregar script do Google Maps
    const loadGoogleMapsScript = () => {
      if ((window as any).google) {
        initializeMap();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDummy&libraries=marker,places";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initializeMap();
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapContainer.current) return;

      const location = { lat: -15.5942, lng: -56.0974 };

      map.current = new (window as any).google.maps.Map(mapContainer.current, {
        zoom: 15,
        center: location,
        mapTypeControl: false,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: false,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#1F2937" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#E0F2FE" }],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#F3F4F6" }],
          },
        ],
      });

      // Adicionar marcador
      new (window as any).google.maps.Marker({
        position: location,
        map: map.current,
        title: "AMC Advocacia - Edifício Cuiabá Work Center",
        icon: {
          path: (window as any).google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: "#0F2050",
          fillOpacity: 1,
          strokeColor: "#B8860B",
          strokeWeight: 3,
        },
      });

      // Info window
      const infoWindow = new (window as any).google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: Inter, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #0F2050; font-weight: 600;">AMC Advocacia</h3>
            <p style="margin: 0 0 4px 0; color: #374151; font-size: 14px;">Edifício Cuiabá Work Center</p>
            <p style="margin: 0; color: #6B7280; font-size: 13px;">Cuiabá, MT</p>
          </div>
        `,
      });

      const marker = new (window as any).google.maps.Marker({
        position: location,
        map: map.current,
      });

      marker.addListener("click", () => {
        infoWindow.open(map.current, marker);
      });
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-96 rounded-lg shadow-lg border border-border"
      aria-label="Mapa do escritório AMC Advocacia"
    />
  );
}
