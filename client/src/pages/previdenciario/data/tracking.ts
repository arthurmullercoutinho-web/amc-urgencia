import { useCallback, useRef } from "react";

const EVENT_CATEGORY = "Previdenciario";

export function trackWhatsAppClick(label: string): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: label,
    });
    window.gtag("event", "contact_whatsapp_previdenciario", {
      event_category: EVENT_CATEGORY,
      event_label: label,
    });
    window.gtag("event", "conversion", {
      send_to: "AW-620453322/BSrVCKGg7qEbEMq77acC",
      value: 1.0,
      currency: "BRL",
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact");
  }
}

export function usePrevidenciarioTracking() {
  const fired = useRef<Record<string, boolean>>({});

  const fireContact = useCallback((label: string) => {
    return () => {
      if (fired.current[label]) return;
      fired.current[label] = true;
      trackWhatsAppClick(label);
    };
  }, []);

  return { fireContact };
}
