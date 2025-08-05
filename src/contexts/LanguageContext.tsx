"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation data
const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    "nav.freeConsultation": "Free Consultation",
    "nav.licensedPublicAdjusters": "Licensed Public Adjusters",
    "nav.language": "Language",
    "nav.languageIdioma": "Language / Idioma",

    // Hero Section
    "hero.title": "Get the Settlement You Deserve",
    "hero.subtitle":
      "Professional public adjusting services to maximize your insurance claim settlement. We work exclusively for you, not the insurance company.",
    "hero.getFreeEvaluation": "Get Free Evaluation",
    "hero.callNow": "Call (786) 417-3869",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "We handle all types of insurance claims to ensure you receive the maximum settlement you deserve.",
    "services.propertyDamage": "Property Damage Claims",
    "services.propertyDamageSubtitle":
      "Comprehensive coverage for all types of property damage",
    "services.businessClaims": "Business Claims",
    "services.businessClaimsSubtitle":
      "Protecting your business and livelihood",
    "services.fireDamage": "Fire Damage",
    "services.waterDamage": "Water Damage",
    "services.stormDamage": "Storm Damage",
    "services.commercialProperty": "Commercial Property",
    "services.businessInterruption": "Business Interruption",
    "services.delayedDeniedClaims": "Delayed & Denied Claims",
    "services.delayedDeniedClaimsDesc":
      "Is your insurance company dragging their feet? Don't let the insurance companies bully or throw a lot of red tape at you.",
    "services.claimReview": "Claim Review",
    "services.negotiation": "Negotiation",
    "services.appeals": "Appeals",
    "services.commercialClaimsDesc":
      "Business claims can quickly become complicated matters with layers of insurance coverage.",
    "services.residentialClaims": "Residential Claims",
    "services.residentialClaimsDesc":
      "If being treated fairly and getting paid quickly are important to you, consider hiring a public insurance adjuster.",
    "services.homeDamage": "Home Damage",
    "services.personalProperty": "Personal Property",
    "services.livingExpenses": "Living Expenses",
    "services.liabilityClaims": "Liability Claims",
    "services.newClaimTitle": "Do You Have a New Claim?",
    "services.newClaimDesc":
      "The best time to get a public adjuster involved in your claim is at the very beginning. Policyholders unfamiliar with the claims process and policy language can make key mistakes.",
    "services.startClaim": "Start Your Claim",
    "services.immediateResponse": "Immediate Response",
    "services.properDocumentation": "Proper Documentation",
    "services.policyReview": "Policy Review",
    "services.expertGuidance": "Expert Guidance",
    "services.insuranceAdvocacy": "Insurance Company Advocacy",
    "services.redTapeNavigation": "Red Tape Navigation",
    "services.unreasonableDemands": "Unreasonable Demands Handling",
    "services.personalRepresentation": "Personal Representation",
    "services.reviewClaim": "Review Your Claim",
    "services.benefitsTitle": "Benefits of Hiring a Public Adjuster",
    "services.benefitsSubtitle":
      "Don't let the insurer tell you what they will pay. We ensure you get the settlement you deserve.",
    "services.policyReviewDesc":
      "We review your policy to ensure all coverages are claimed and maximize your recovery.",
    "services.fairCostEstimation": "Fair Cost Estimation",
    "services.fairCostEstimationDesc":
      "We estimate the fair repair cost of your damages, not what the insurance company wants to pay.",
    "services.expertAdvocacy": "Expert Advocacy",
    "services.expertAdvocacyDesc":
      "We meet with the insurance adjuster to advocate for you and fight for your rights.",
    "services.fairSettlement": "Fair Settlement",
    "services.fairSettlementDesc":
      "We negotiate and settle your claim so you are treated fairly and get maximum compensation.",
    "services.largeLossClaims": "Large Loss Claims",
    "services.expertCoordination": "Expert Coordination",
    "services.provenResults": "Proven Results",
    "services.recordSpeaks": "Our Record Speaks for Itself",
    "services.recordSpeaksDesc":
      "Review our commercial claim success stories to understand why we're considered the large loss claims expert.",
    "services.whatsYourClaimWorth": "What's Your Claim Really Worth?",
    "services.whatsYourClaimWorthDesc":
      "If you've sustained property damage and plan to file an insurance claim, do you know what your claim is really worth? Will your insurer offer you a fair claim settlement?",
    "services.fairTreatment": "Fair Treatment",
    "services.quickPayment": "Quick Payment",
    "services.viewSuccessStories": "View Success Stories",
    "services.whyChooseFernandez": "Why Choose Fernandez Public Adjusters?",
    "services.whyChooseFernandezDesc":
      "We're not just another public adjusting firm. Here's what sets us apart:",
    "services.provenExperience": "Proven Experience",
    "services.provenExperienceDesc":
      "Our adjuster's level of experience is unmatched. We utilize claims management software and the latest technology to manage, track and build a case that gets you a fair settlement.",
    "services.policyholderChampions": "Policyholder Champions",
    "services.policyholderChampionsDesc":
      "We work exclusively for you - not the insurance company. Our commitment is to be your champion throughout the entire claims process.",
    "services.maximumSettlements": "Maximum Settlements",
    "services.maximumSettlementsDesc":
      "Our clients typically receive 3-5 times more than initial insurance offers. We know how to document and negotiate for maximum recovery.",
    "services.personalService": "Personal Service",
    "services.personalServiceDesc":
      "You'll work directly with experienced adjusters, not case managers. We provide personalized attention to every client.",
    "services.noUpfrontFees": "No Upfront Fees",
    "services.noUpfrontFeesDesc":
      "We work on a contingency basis - we only get paid when you get paid. No hidden costs or upfront fees.",
    "services.provenResultsDesc":
      "Over $2.5 million recovered for our clients. Check our testimonials and see the difference we make.",

    // About
    "about.title": "About Us",
    "about.subtitle": "Your trusted partner in insurance claims",
    "about.keyQualifications": "Key Qualifications",
    "about.ourTeam": "Our Team",
    "about.whyChooseUs": "Why Choose Us?",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch for a free consultation",
    "contact.emergencyCall": "Emergency Call",
    "contact.getHelp": "Get Help",
    "contact.freeEvaluation": "Free Evaluation",
    "contact.freeEvaluationDesc": "No cost evaluation of your claim",
    "contact.noObligation": "No Obligation",
    "contact.noObligationDesc": "No pressure to hire our services",
    "contact.expertAdvice": "Expert Advice",
    "contact.expertAdviceDesc": "Professional guidance throughout",
    "contact.maximumSettlement": "Maximum Settlement",
    "contact.maximumSettlementDesc": "Fight for what you deserve",

    // Blog
    "blog.title": "Expert Insights & Tips",
    "blog.subtitle":
      "Stay informed with the latest tips, guides, and expert advice on insurance claims and public adjusting.",
    "blog.browseByCategory": "Browse by Category",
    "blog.stayUpdated": "Stay Updated",
    "blog.subscribe": "Subscribe",

    // Footer
    "footer.getFreeConsultation": "Get A Free Consultation",
    "footer.newsletter": "Newsletter",
    "footer.subscribe": "Subscribe to our newsletter",

    // Common
    "common.learnMore": "Learn More",
    "common.readMore": "Read More",
    "common.close": "Close",
    "common.submit": "Submit",
    "common.email": "Email",
    "common.phone": "Phone",
    "common.address": "Address",
    "common.name": "Name",
    "common.message": "Message",
    "common.noUpfrontFees": "No Upfront Fees",
    "common.response247": "24/7 Response",
    "common.nationwideService": "Nationwide Service",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Real testimonials from satisfied clients",
    "testimonials.testimonial1":
      '"I am writing to let you know I appreciate the hard work that has gone into my case. It\'s been a long journey. Miguel and his team have been compassionate and understanding during this emotional and stressful time. I thank you for that."',
    "testimonials.client1": "- Florida Homeowner",
    "testimonials.testimonial2":
      '"We felt very confident with Miguel assisting us with our claim. We are thankful we had them advocating for us."',
    "testimonials.client2": "- Liza Pettingill",
    "testimonials.testimonial3":
      '"Superb service and attention to detail, follow through and support made our experience with our claim positive and satisfying."',
    "testimonials.client3": "- Taylor Vanston",

    // CTA
    "cta.title": "Ready to Get Your Free Claim Evaluation?",
    "cta.subtitle":
      "Don't wait to get the settlement you deserve. Contact us today for a free, no-obligation evaluation of your claim.",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    "nav.blog": "Blog",
    "nav.freeConsultation": "Consulta Gratuita",
    "nav.licensedPublicAdjusters": "Ajustadores Públicos Licenciados",
    "nav.language": "Idioma",
    "nav.languageIdioma": "Language / Idioma",

    // Hero Section
    "hero.title": "Obtén la Compensación que Mereces",
    "hero.subtitle":
      "Servicios profesionales de ajuste público para maximizar tu compensación de seguro. Trabajamos exclusivamente para ti, no para la compañía de seguros.",
    "hero.getFreeEvaluation": "Evaluación Gratuita",
    "hero.callNow": "Llama (786) 417-3869",

    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle":
      "Manejamos todos los tipos de reclamos de seguro para asegurar que recibas la máxima compensación que mereces.",
    "services.propertyDamage": "Reclamos de Daños a la Propiedad",
    "services.propertyDamageSubtitle":
      "Cobertura integral para todos los tipos de daños a la propiedad",
    "services.businessClaims": "Reclamos Comerciales",
    "services.businessClaimsSubtitle": "Protegiendo tu negocio y sustento",
    "services.fireDamage": "Daños por Incendio",
    "services.waterDamage": "Daños por Agua",
    "services.stormDamage": "Daños por Tormenta",
    "services.commercialProperty": "Propiedad Comercial",
    "services.businessInterruption": "Interrupción de Negocio",
    "services.delayedDeniedClaims": "Reclamos Retrasados y Negados",
    "services.delayedDeniedClaimsDesc":
      "¿Tu compañía de seguros está arrastrando los pies? No dejes que las compañías de seguros te intimiden o te pongan muchas trabas.",
    "services.claimReview": "Revisión de Reclamo",
    "services.negotiation": "Negociación",
    "services.appeals": "Apelaciones",
    "services.commercialClaimsDesc":
      "Los reclamos comerciales pueden volverse rápidamente asuntos complicados con capas de cobertura de seguro.",
    "services.residentialClaims": "Reclamos Residenciales",
    "services.residentialClaimsDesc":
      "Si ser tratado justamente y recibir pago rápidamente son importantes para ti, considera contratar un ajustador público de seguros.",
    "services.homeDamage": "Daños al Hogar",
    "services.personalProperty": "Propiedad Personal",
    "services.livingExpenses": "Gastos de Vida",
    "services.liabilityClaims": "Reclamos de Responsabilidad",
    "services.newClaimTitle": "¿Tienes un Nuevo Reclamo?",
    "services.newClaimDesc":
      "El mejor momento para involucrar a un ajustador público en tu reclamo es desde el principio. Los asegurados que no están familiarizados con el proceso de reclamos y el lenguaje de la póliza pueden cometer errores clave.",
    "services.startClaim": "Iniciar Tu Reclamo",
    "services.immediateResponse": "Respuesta Inmediata",
    "services.properDocumentation": "Documentación Adecuada",
    "services.policyReview": "Revisión de Póliza",
    "services.expertGuidance": "Orientación Experta",
    "services.insuranceAdvocacy": "Defensa de Compañía de Seguros",
    "services.redTapeNavigation": "Navegación de Trámites",
    "services.unreasonableDemands": "Manejo de Demandas Irrazonables",
    "services.personalRepresentation": "Representación Personal",
    "services.reviewClaim": "Revisar Tu Reclamo",
    "services.benefitsTitle": "Beneficios de Contratar un Ajustador Público",
    "services.benefitsSubtitle":
      "No dejes que el asegurador te diga lo que pagará. Nos aseguramos de que obtengas la compensación que mereces.",
    "services.policyReviewDesc":
      "Revisamos tu póliza para asegurar que todas las coberturas sean reclamadas y maximizar tu recuperación.",
    "services.fairCostEstimation": "Estimación de Costo Justo",
    "services.fairCostEstimationDesc":
      "Estimamos el costo justo de reparación de tus daños, no lo que la compañía de seguros quiere pagar.",
    "services.expertAdvocacy": "Defensa Experta",
    "services.expertAdvocacyDesc":
      "Nos reunimos con el ajustador de seguros para defenderte y luchar por tus derechos.",
    "services.fairSettlement": "Compensación Justa",
    "services.fairSettlementDesc":
      "Negociamos y liquidamos tu reclamo para que seas tratado justamente y obtengas la máxima compensación.",
    "services.largeLossClaims": "Reclamos de Pérdidas Grandes",
    "services.expertCoordination": "Coordinación Experta",
    "services.provenResults": "Resultados Comprobados",
    "services.recordSpeaks": "Nuestro Récord Habla por Sí Mismo",
    "services.recordSpeaksDesc":
      "Revisa nuestras historias de éxito de reclamos comerciales para entender por qué somos considerados expertos en reclamos de pérdidas grandes.",
    "services.whatsYourClaimWorth": "¿Cuánto Vale Realmente Tu Reclamo?",
    "services.whatsYourClaimWorthDesc":
      "Si has sufrido daños a la propiedad y planeas presentar un reclamo de seguro, ¿sabes cuánto vale realmente tu reclamo? ¿Tu asegurador te ofrecerá una compensación justa?",
    "services.fairTreatment": "Trato Justo",
    "services.quickPayment": "Pago Rápido",
    "services.viewSuccessStories": "Ver Historias de Éxito",
    "services.whyChooseFernandez":
      "¿Por Qué Elegir Fernandez Public Adjusters?",
    "services.whyChooseFernandezDesc":
      "No somos solo otra firma de ajuste público. Esto es lo que nos distingue:",
    "services.provenExperience": "Experiencia Comprobada",
    "services.provenExperienceDesc":
      "El nivel de experiencia de nuestro ajustador no tiene igual. Utilizamos software de gestión de reclamos y la tecnología más reciente para gestionar, rastrear y construir un caso que te obtenga una compensación justa.",
    "services.policyholderChampions": "Campeones del Asegurado",
    "services.policyholderChampionsDesc":
      "Trabajamos exclusivamente para ti - no para la compañía de seguros. Nuestro compromiso es ser tu campeón durante todo el proceso de reclamos.",
    "services.maximumSettlements": "Compensaciones Máximas",
    "services.maximumSettlementsDesc":
      "Nuestros clientes típicamente reciben 3-5 veces más que las ofertas iniciales de seguros. Sabemos cómo documentar y negociar para la máxima recuperación.",
    "services.personalService": "Servicio Personal",
    "services.personalServiceDesc":
      "Trabajarás directamente con ajustadores experimentados, no con gerentes de casos. Proporcionamos atención personalizada a cada cliente.",
    "services.noUpfrontFees": "Sin Cargos Iniciales",
    "services.noUpfrontFeesDesc":
      "Trabajamos a base de contingencia - solo nos pagamos cuando tú te pagas. Sin costos ocultos o cargos iniciales.",
    "services.provenResultsDesc":
      "Más de $2.5 millones recuperados para nuestros clientes. Revisa nuestros testimonios y ve la diferencia que hacemos.",

    // About
    "about.title": "Acerca de Nosotros",
    "about.subtitle": "Tu socio de confianza en reclamos de seguro",
    "about.keyQualifications": "Calificaciones Clave",
    "about.ourTeam": "Nuestro Equipo",
    "about.whyChooseUs": "¿Por Qué Elegirnos?",

    // Contact
    "contact.title": "Contáctanos",
    "contact.subtitle": "Ponte en contacto para una consulta gratuita",
    "contact.emergencyCall": "Llamada de Emergencia",
    "contact.getHelp": "Obtener Ayuda",
    "contact.freeEvaluation": "Evaluación Gratuita",
    "contact.freeEvaluationDesc": "Evaluación sin costo de tu reclamo",
    "contact.noObligation": "Sin Obligación",
    "contact.noObligationDesc": "Sin presión para contratar nuestros servicios",
    "contact.expertAdvice": "Consejo Experto",
    "contact.expertAdviceDesc":
      "Orientación profesional durante todo el proceso",
    "contact.maximumSettlement": "Compensación Máxima",
    "contact.maximumSettlementDesc": "Lucha por lo que mereces",

    // Blog
    "blog.title": "Consejos y Perspectivas Expertas",
    "blog.subtitle":
      "Mantente informado con los últimos consejos, guías y asesoramiento experto sobre reclamos de seguro y ajuste público.",
    "blog.browseByCategory": "Explorar por Categoría",
    "blog.stayUpdated": "Mantente Actualizado",
    "blog.subscribe": "Suscribirse",

    // Footer
    "footer.getFreeConsultation": "Obtén una Consulta Gratuita",
    "footer.newsletter": "Boletín",
    "footer.subscribe": "Suscríbete a nuestro boletín",

    // Common
    "common.learnMore": "Saber Más",
    "common.readMore": "Leer Más",
    "common.close": "Cerrar",
    "common.submit": "Enviar",
    "common.email": "Correo Electrónico",
    "common.phone": "Teléfono",
    "common.address": "Dirección",
    "common.name": "Nombre",
    "common.message": "Mensaje",
    "common.noUpfrontFees": "Sin Cargos Iniciales",
    "common.response247": "Respuesta 24/7",
    "common.nationwideService": "Servicio Nacional",

    // Testimonials
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Testimonios reales de clientes satisfechos",
    "testimonials.testimonial1":
      '"Estoy escribiendo para hacerte saber que aprecio el trabajo duro que se ha puesto en mi caso. Ha sido un largo viaje. Miguel y su equipo han sido compasivos y comprensivos durante este tiempo emocional y estresante. Te agradezco por eso."',
    "testimonials.client1": "- Propietario de Florida",
    "testimonials.testimonial2":
      '"Nos sentimos muy confiados con Miguel ayudándonos con nuestro reclamo. Estamos agradecidos de haber tenido a alguien abogando por nosotros."',
    "testimonials.client2": "- Liza Pettingill",
    "testimonials.testimonial3":
      '"Servicio superior y atención al detalle, seguimiento y apoyo hicieron que nuestra experiencia con nuestro reclamo fuera positiva y satisfactoria."',
    "testimonials.client3": "- Taylor Vanston",

    // CTA
    "cta.title": "¿Listo para Obtener tu Evaluación Gratuita de Reclamo?",
    "cta.subtitle":
      "No esperes para obtener la compensación que mereces. Contáctanos hoy para una evaluación gratuita y sin obligación de tu reclamo.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    // Store in localStorage for persistence
    localStorage.setItem("preferredLanguage", lang);
  };

  // Load saved language preference on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
