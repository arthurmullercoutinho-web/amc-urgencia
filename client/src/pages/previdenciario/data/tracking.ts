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

// --- Eventos adicionais do funil de triagem (não substituem nada acima) ---

export function trackTriagemIniciada(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "prev_triagem_iniciada", {
      event_category: EVENT_CATEGORY,
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", "PrevTriagemIniciada");
  }
}

export function trackTriagemConcluida(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "prev_triagem_concluida", {
      event_category: EVENT_CATEGORY,
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", "PrevTriagemConcluida");
  }
}

export function trackWhatsAppQualificado(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "prev_whatsapp_qualificado", {
      event_category: EVENT_CATEGORY,
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", "PrevWhatsAppQualificado");
  }
}

export function trackWhatsAppDireto(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "prev_whatsapp_direto", {
      event_category: EVENT_CATEGORY,
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", "PrevWhatsAppDireto");
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

  const fireOnce = useCallback((key: string, trackFn: () => void) => {
    if (fired.current[key]) return;
    fired.current[key] = true;
    trackFn();
  }, []);

  const fireTriagemIniciada = useCallback(() => {
    fireOnce("prev_triagem_iniciada", trackTriagemIniciada);
  }, [fireOnce]);

  const fireTriagemConcluida = useCallback(() => {
    fireOnce("prev_triagem_concluida", trackTriagemConcluida);
  }, [fireOnce]);

  const fireWhatsAppQualificado = useCallback(() => {
    fireOnce("prev_whatsapp_qualificado", trackWhatsAppQualificado);
  }, [fireOnce]);

  const fireWhatsAppDireto = useCallback(() => {
    fireOnce("prev_whatsapp_direto", trackWhatsAppDireto);
  }, [fireOnce]);

  return {
    fireContact,
    fireTriagemIniciada,
    fireTriagemConcluida,
    fireWhatsAppQualificado,
    fireWhatsAppDireto,
  };
}
