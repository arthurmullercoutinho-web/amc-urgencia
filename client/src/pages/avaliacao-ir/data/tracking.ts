import { useCallback, useRef } from "react";

const EVENT_CATEGORY = "AvaliacaoIR";

export function trackTriagemIniciada(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "triagem_ir_iniciada", {
      event_category: EVENT_CATEGORY,
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", "TriagemIniciada");
  }
}

export function trackLead(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      event_category: EVENT_CATEGORY,
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}

export function trackContact(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "contact_whatsapp_ir", {
      event_category: EVENT_CATEGORY,
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact");
  }
}

export function useAvaliacaoIRTracking() {
  const triagemIniciadaFired = useRef(false);
  const leadFired = useRef(false);
  const contactFired = useRef(false);

  const fireTriagemIniciada = useCallback(() => {
    if (triagemIniciadaFired.current) return;
    triagemIniciadaFired.current = true;
    trackTriagemIniciada();
  }, []);

  const fireLead = useCallback(() => {
    if (leadFired.current) return;
    leadFired.current = true;
    trackLead();
  }, []);

  const fireContact = useCallback(() => {
    if (contactFired.current) return;
    contactFired.current = true;
    trackContact();
  }, []);

  return { fireTriagemIniciada, fireLead, fireContact };
}
