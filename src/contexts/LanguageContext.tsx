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
    "services.fireDamage": "Fire Damage",
    "services.fireDamageDesc":
      "Complete fire damage assessment and documentation. We ensure all damage is properly documented and valued.",
    "services.structuralDamageAssessment": "Structural damage assessment",
    "services.smokeSootDamage": "Smoke and soot damage",
    "services.personalPropertyInventory": "Personal property inventory",
    "services.waterDamage": "Water Damage",
    "services.waterDamageDesc":
      "From burst pipes to storm flooding, we handle all water damage claims with expert assessment.",
    "services.floodDamageAssessment": "Flood damage assessment",
    "services.moldRemediationCosts": "Mold remediation costs",
    "services.structuralDryingDocumentation": "Structural drying documentation",
    "services.stormDamage": "Storm Damage",
    "services.stormDamageDesc":
      "Hurricane, tornado, and storm damage claims. We document all damage for maximum recovery.",
    "services.roofDamageAssessment": "Roof damage assessment",
    "services.windowSidingDamage": "Window and siding damage",
    "services.debrisRemovalCosts": "Debris removal costs",
    "services.businessClaims": "Business Claims",
    "services.businessClaimsSubtitle":
      "Protecting your business and livelihood",
    "services.commercialProperty": "Commercial Property",
    "services.commercialPropertyDesc":
      "Complete commercial property damage assessment and business interruption claim handling.",
    "services.buildingDamageAssessment": "Building damage assessment",
    "services.equipmentInventoryLoss": "Equipment and inventory loss",
    "services.businessInterruptionClaims": "Business interruption claims",
    "services.extraExpenseCoverage": "Extra expense coverage",
    "services.businessInterruption": "Business Interruption",
    "services.businessInterruptionDesc":
      "Maximize your business interruption claim to cover lost income and operating expenses.",
    "services.lostIncomeCalculation": "Lost income calculation",
    "services.operatingExpenseCoverage": "Operating expense coverage",
    "services.extendedPeriodIndemnity": "Extended period of indemnity",
    "services.contingentBusinessInterruption":
      "Contingent business interruption",
    "services.specializedServices": "Specialized Services",
    "services.specializedServicesDesc":
      "Expert handling of complex and specialized claims",
    "services.electricalDamage": "Electrical Damage",
    "services.electricalDamageDesc": "Power surge and electrical damage claims",
    "services.vehicleDamage": "Vehicle Damage",
    "services.vehicleDamageDesc": "Comprehensive and collision claims",
    "services.personalProperty": "Personal Property",
    "services.personalPropertyDesc": "Contents and personal property claims",
    "services.liabilityClaims": "Liability Claims",
    "services.liabilityClaimsDesc": "Third-party liability and defense",
    "services.needHelpWithClaim": "Need Help With Your Claim?",
    "services.ctaDescription":
      "Don't let insurance companies take advantage of you. Contact us today for a free claim evaluation and see how much more you could recover.",
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
    "services.livingExpenses": "Living Expenses",
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
    "about.founderLeadAdjuster": "Founder & Lead Adjuster",
    "about.founderDescription":
      "Licensed public adjuster with extensive legal and construction expertise",
    "about.masterDegree": "Master of Science in Law & Policy",
    "about.magnaCumLaude": "Magna Cum Laude Graduate",
    "about.propertyDamageSpecialist": "Property Damage Specialist",
    "about.legalInsuranceExperience": "Legal & Insurance Experience",
    "about.license": "License: XXXXXXX",
    "about.professionalPhoto": "Professional Photo",
    "about.professionalBackground": "Professional Background",
    "about.biographyIntro":
      "was born in Lima, Peru, and raised in Miami, Florida. His early experiences in these diverse environments shaped his understanding of the complexities of culture, law, and community.",
    "about.academicExcellence": "Academic Excellence",
    "about.academicExcellenceDesc":
      "Miguel pursued his academic interests at Florida State University, where he earned a Bachelor's degree in Political Science. His passion for law led him to attend Barry University for law school. After a year, he made a strategic decision to transfer and focus on obtaining a Master of Science in Law and Policy, graduating magna cum laude with an impressive 3.78 GPA.",
    "about.careerExperience":
      "Throughout his career, Miguel has gained extensive experience working in various law firms, refining his legal skills. His expertise lies in construction defects, where he has successfully represented both private clients and insurance companies, adeptly navigating the intricacies of claims and ensuring just outcomes.",
    "about.constructionBackground":
      "Miguel's background is further enriched by his stepfather's lifelong career in the construction industry, specializing in kitchen cabinetry, marble tops, flooring, and various aspects of construction work. This familial connection has provided him with unique insights and a practical understanding of construction processes, enhancing his capability to serve clients effectively as a public adjuster.",
    "about.commitment":
      "With a combination of legal knowledge and hands-on experience in the construction field, Miguel Angel Fernandez is well-equipped to advocate for clients facing insurance claims. His commitment is to guide clients through the claims process with professionalism and dedication, ensuring they receive the compensation they deserve.",
    "about.ourTeam": "Our Team",
    "about.teamDescription":
      "Experienced professionals dedicated to maximizing your claim settlement",
    "about.claimsSpecialists": "Claims Specialists",
    "about.claimsSpecialistsDesc":
      "Expert adjusters with years of experience in property damage assessment and insurance claim negotiation.",
    "about.legalExperts": "Legal Experts",
    "about.legalExpertsDesc":
      "Legal professionals ensuring your rights are protected and claims are properly documented and presented.",
    "about.clientAdvocates": "Client Advocates",
    "about.clientAdvocatesDesc":
      "Dedicated professionals committed to fighting for your rights and maximizing your claim settlement.",
    "about.whyChooseUs": "Why Choose Us?",
    "about.whyChooseUsDesc": "What sets us apart from other public adjusters",
    "about.provenResults": "Proven Results",
    "about.provenResultsDesc":
      "Track record of maximizing claim settlements and getting clients the compensation they deserve.",
    "about.licensedInsured": "Licensed & Insured",
    "about.licensedInsuredDesc":
      "Fully licensed public adjusters with proper insurance coverage for your protection.",
    "about.personalService": "Personal Service",
    "about.personalServiceDesc":
      "Direct access to your adjuster throughout the entire claims process.",
    "about.expertKnowledge": "Expert Knowledge",
    "about.expertKnowledgeDesc":
      "Deep understanding of insurance policies, construction, and the claims process.",
    "about.noUpfrontFees": "No Upfront Fees",
    "about.noUpfrontFeesDesc":
      "We only get paid when you get paid. No risk to you.",
    "about.clientSatisfaction": "Client Satisfaction",
    "about.clientSatisfactionDesc":
      "High client satisfaction rate with many repeat clients and referrals.",
    "about.readyToGetStarted": "Ready to Get Started?",
    "about.ctaDescription":
      "Don't let insurance companies take advantage of you. Contact us today for a free claim evaluation and see how much more you could recover.",
    "about.keyQualifications": "Key Qualifications",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch for a free consultation",
    "contact.sendMessage": "Send Us a Message",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.phoneNumber": "Phone Number",
    "contact.emailAddress": "Email Address",
    "contact.claimType": "Type of Claim",
    "contact.selectClaimType": "Select claim type",
    "contact.propertyDamage": "Property Damage",
    "contact.businessInterruption": "Business Interruption",
    "contact.stormDamage": "Storm Damage",
    "contact.fireDamage": "Fire Damage",
    "contact.waterDamage": "Water Damage",
    "contact.other": "Other",
    "contact.describeClaim": "Describe Your Claim",
    "contact.claimDetailsPlaceholder":
      "Please provide details about your claim...",
    "contact.officeInformation": "Office Information",
    "contact.businessHours": "Business Hours",
    "contact.available247": "Available 24/7 for Emergencies",
    "contact.mondayFriday": "Monday - Friday",
    "contact.saturday": "Saturday",
    "contact.sunday": "Sunday",
    "contact.emergencyCallsOnly": "Emergency Calls Only",
    "contact.emergencyCall": "Emergency? Call Now!",
    "contact.emergencyDesc":
      "If you've experienced property damage, don't wait. Call us immediately for emergency response.",
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
    "blog.featuredArticle": "Featured Article",
    "blog.featuredPostTitle": "What to Do After a Hurricane: A Complete Guide",
    "blog.featuredPostExcerpt":
      "Hurricane season can be devastating for property owners. Learn the essential steps to take immediately after a hurricane to protect your claim and ensure you receive the maximum settlement possible.",
    "blog.readFullArticle": "Read Full Article",
    "blog.stayUpdated": "Stay Updated",
    "blog.newsletterDesc":
      "Subscribe to our newsletter for the latest tips, updates, and expert advice on insurance claims and public adjusting.",
    "blog.emailPlaceholder": "Enter your email address",
    "blog.subscribe": "Subscribe",
    "blog.category.hurricaneClaims": "Hurricane Claims",
    "blog.category.businessClaims": "Business Claims",
    "blog.category.fireClaims": "Fire Claims",
    "blog.category.waterDamage": "Water Damage",
    "blog.category.stormClaims": "Storm Claims",
    "blog.category.publicAdjusting": "Public Adjusting",
    "blog.category.insuranceTips": "Insurance Tips",
    "blog.category.claimProcess": "Claim Process",
    "blog.blogImage": "Blog Image",
    "blog.minRead": "min read",
    "blog.posts.hurricaneGuide.title":
      "What to Do After a Hurricane: A Complete Guide",
    "blog.posts.hurricaneGuide.excerpt":
      "Hurricane season can be devastating for property owners. Learn the essential steps to take immediately after a hurricane to protect your claim.",
    "blog.posts.businessInterruption.title":
      "Understanding Business Interruption Claims",
    "blog.posts.businessInterruption.excerpt":
      "Business interruption insurance can be complex. Discover what's covered, how to document losses, and maximize your recovery.",
    "blog.posts.fireDamage.title":
      "Fire Damage Claims: What Insurance Companies Don't Tell You",
    "blog.posts.fireDamage.excerpt":
      "Fire damage claims often involve hidden costs and complex documentation. Learn the secrets to maximizing your fire damage settlement.",
    "blog.posts.waterDamage.title":
      "Water Damage Claims: From Assessment to Settlement",
    "blog.posts.waterDamage.excerpt":
      "Water damage can be deceptive. Learn how to properly document water damage and ensure you receive full compensation.",
    "blog.posts.hireAdjuster.title":
      "When to Hire a Public Adjuster: The Complete Guide",
    "blog.posts.hireAdjuster.excerpt":
      "Not sure if you need a public adjuster? Learn when hiring a public adjuster makes sense and how to choose the right one.",
    "blog.posts.stormDamage.title":
      "Storm Damage Claims: Maximizing Your Recovery",
    "blog.posts.stormDamage.excerpt":
      "Storm damage can affect multiple areas of your property. Learn how to document all damage and maximize your storm claim.",

    // Footer
    "footer.getFreeConsultation": "Get A Free Consultation",
    "footer.companyDescription":
      "Licensed public adjusters fighting for your rights and maximizing your claim settlements.",
    "footer.contactInformation": "Contact Information",
    "footer.license": "License: XXXXXXX",
    "footer.quickLinks": "Quick Links",
    "footer.ourServices": "Our Services",
    "footer.aboutUs": "About Us",
    "footer.contact": "Contact",
    "footer.blog": "Blog",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.newsletter": "Newsletter",
    "footer.newsletterDesc":
      "Subscribe to our newsletter for the latest tips, updates, and news!",
    "footer.emailPlaceholder": "Enter your email address",
    "footer.subscribe": "Subscribe",
    "footer.copyright":
      "© Copyright 2025 | Fernandez Public Adjusters, LLC | All Rights Reserved",

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
    "common.getFreeEvaluation": "Get Free Evaluation",
    "common.callPhone": "Call (786) 417-3869",

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
    "services.fireDamage": "Daños por Incendio",
    "services.fireDamageDesc":
      "Evaluación completa de daños por incendio y documentación. Nos aseguramos de que todos los daños estén adecuadamente documentados y valorados.",
    "services.structuralDamageAssessment": "Evaluación de daños estructurales",
    "services.smokeSootDamage": "Daños por humo y hollín",
    "services.personalPropertyInventory": "Inventario de propiedad personal",
    "services.waterDamage": "Daños por Agua",
    "services.waterDamageDesc":
      "Desde tuberías rotas hasta inundaciones por tormentas, manejamos todos los reclamos de daños por agua con evaluación experta.",
    "services.floodDamageAssessment": "Evaluación de daños por inundación",
    "services.moldRemediationCosts": "Costos de remediación de moho",
    "services.structuralDryingDocumentation":
      "Documentación de secado estructural",
    "services.stormDamage": "Daños por Tormenta",
    "services.stormDamageDesc":
      "Reclamos de daños por huracán, tornado y tormenta. Documentamos todos los daños para máxima recuperación.",
    "services.roofDamageAssessment": "Evaluación de daños al techo",
    "services.windowSidingDamage": "Daños a ventanas y revestimiento",
    "services.debrisRemovalCosts": "Costos de remoción de escombros",
    "services.businessClaims": "Reclamos Comerciales",
    "services.businessClaimsSubtitle": "Protegiendo tu negocio y sustento",
    "services.commercialProperty": "Propiedad Comercial",
    "services.commercialPropertyDesc":
      "Evaluación completa de daños a propiedad comercial y manejo de reclamos de interrupción de negocio.",
    "services.buildingDamageAssessment": "Evaluación de daños al edificio",
    "services.equipmentInventoryLoss": "Pérdida de equipos e inventario",
    "services.businessInterruptionClaims":
      "Reclamos de interrupción de negocio",
    "services.extraExpenseCoverage": "Cobertura de gastos extra",
    "services.businessInterruption": "Interrupción de Negocio",
    "services.businessInterruptionDesc":
      "Maximiza tu reclamo de interrupción de negocio para cubrir ingresos perdidos y gastos operativos.",
    "services.lostIncomeCalculation": "Cálculo de ingresos perdidos",
    "services.operatingExpenseCoverage": "Cobertura de gastos operativos",
    "services.extendedPeriodIndemnity": "Período extendido de indemnización",
    "services.contingentBusinessInterruption":
      "Interrupción de negocio contingente",
    "services.specializedServices": "Servicios Especializados",
    "services.specializedServicesDesc":
      "Manejo experto de reclamos complejos y especializados",
    "services.electricalDamage": "Daños Eléctricos",
    "services.electricalDamageDesc":
      "Reclamos de daños por sobretensión y daños eléctricos",
    "services.vehicleDamage": "Daños al Vehículo",
    "services.vehicleDamageDesc": "Reclamos de cobertura completa y colisión",
    "services.personalProperty": "Propiedad Personal",
    "services.personalPropertyDesc":
      "Reclamos de contenido y propiedad personal",
    "services.liabilityClaims": "Reclamos de Responsabilidad",
    "services.liabilityClaimsDesc": "Responsabilidad de terceros y defensa",
    "services.needHelpWithClaim": "¿Necesitas Ayuda con tu Reclamo?",
    "services.ctaDescription":
      "No dejes que las compañías de seguros se aprovechen de ti. Contáctanos hoy para una evaluación gratuita de reclamo y ve cuánto más podrías recuperar.",
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
    "services.livingExpenses": "Gastos de Vida",
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
    "about.founderLeadAdjuster": "Fundador y Ajustador Principal",
    "about.founderDescription":
      "Ajustador público licenciado con amplia experiencia legal y de construcción",
    "about.masterDegree": "Maestría en Ciencias de Leyes y Políticas",
    "about.magnaCumLaude": "Graduado Magna Cum Laude",
    "about.propertyDamageSpecialist": "Especialista en Daños a la Propiedad",
    "about.legalInsuranceExperience": "Experiencia Legal y de Seguros",
    "about.license": "Licencia: XXXXXXX",
    "about.professionalPhoto": "Foto Profesional",
    "about.professionalBackground": "Antecedentes Profesionales",
    "about.biographyIntro":
      "nació en Lima, Perú, y se crió en Miami, Florida. Sus primeras experiencias en estos diversos entornos moldearon su comprensión de las complejidades de la cultura, la ley y la comunidad.",
    "about.academicExcellence": "Excelencia Académica",
    "about.academicExcellenceDesc":
      "Miguel persiguió sus intereses académicos en la Universidad Estatal de Florida, donde obtuvo una Licenciatura en Ciencias Políticas. Su pasión por la ley lo llevó a asistir a la Universidad Barry para la escuela de derecho. Después de un año, tomó una decisión estratégica de transferirse y enfocarse en obtener una Maestría en Ciencias de Leyes y Políticas, graduándose magna cum laude con un impresionante GPA de 3.78.",
    "about.careerExperience":
      "A lo largo de su carrera, Miguel ha ganado amplia experiencia trabajando en varias firmas de abogados, refinando sus habilidades legales. Su experiencia se encuentra en defectos de construcción, donde ha representado exitosamente tanto a clientes privados como a compañías de seguros, navegando hábilmente las complejidades de los reclamos y asegurando resultados justos.",
    "about.constructionBackground":
      "El trasfondo de Miguel se enriquece aún más con la carrera de toda la vida de su padrastro en la industria de la construcción, especializándose en gabinetes de cocina, tapas de mármol, pisos y varios aspectos del trabajo de construcción. Esta conexión familiar le ha proporcionado perspectivas únicas y una comprensión práctica de los procesos de construcción, mejorando su capacidad para servir efectivamente a los clientes como ajustador público.",
    "about.commitment":
      "Con una combinación de conocimiento legal y experiencia práctica en el campo de la construcción, Miguel Angel Fernandez está bien equipado para abogar por clientes que enfrentan reclamos de seguros. Su compromiso es guiar a los clientes a través del proceso de reclamos con profesionalismo y dedicación, asegurando que reciban la compensación que merecen.",
    "about.ourTeam": "Nuestro Equipo",
    "about.teamDescription":
      "Profesionales experimentados dedicados a maximizar tu compensación de reclamo",
    "about.claimsSpecialists": "Especialistas en Reclamos",
    "about.claimsSpecialistsDesc":
      "Ajustadores expertos con años de experiencia en evaluación de daños a la propiedad y negociación de reclamos de seguros.",
    "about.legalExperts": "Expertos Legales",
    "about.legalExpertsDesc":
      "Profesionales legales asegurando que tus derechos estén protegidos y los reclamos estén adecuadamente documentados y presentados.",
    "about.clientAdvocates": "Defensores del Cliente",
    "about.clientAdvocatesDesc":
      "Profesionales dedicados comprometidos a luchar por tus derechos y maximizar tu compensación de reclamo.",
    "about.whyChooseUs": "¿Por Qué Elegirnos?",
    "about.whyChooseUsDesc":
      "Lo que nos distingue de otros ajustadores públicos",
    "about.provenResults": "Resultados Comprobados",
    "about.provenResultsDesc":
      "Récord de maximizar compensaciones de reclamos y obtener para los clientes la compensación que merecen.",
    "about.licensedInsured": "Licenciados y Asegurados",
    "about.licensedInsuredDesc":
      "Ajustadores públicos completamente licenciados con cobertura de seguro adecuada para tu protección.",
    "about.personalService": "Servicio Personal",
    "about.personalServiceDesc":
      "Acceso directo a tu ajustador durante todo el proceso de reclamos.",
    "about.expertKnowledge": "Conocimiento Experto",
    "about.expertKnowledgeDesc":
      "Comprensión profunda de pólizas de seguros, construcción y el proceso de reclamos.",
    "about.noUpfrontFees": "Sin Cargos Iniciales",
    "about.noUpfrontFeesDesc":
      "Solo nos pagamos cuando tú te pagas. Sin riesgo para ti.",
    "about.clientSatisfaction": "Satisfacción del Cliente",
    "about.clientSatisfactionDesc":
      "Alta tasa de satisfacción del cliente con muchos clientes recurrentes y referencias.",
    "about.readyToGetStarted": "¿Listo para Comenzar?",
    "about.ctaDescription":
      "No dejes que las compañías de seguros se aprovechen de ti. Contáctanos hoy para una evaluación gratuita de reclamo y ve cuánto más podrías recuperar.",
    "about.keyQualifications": "Calificaciones Clave",

    // Contact
    "contact.title": "Contáctanos",
    "contact.subtitle": "Ponte en contacto para una consulta gratuita",
    "contact.sendMessage": "Envíanos un Mensaje",
    "contact.firstName": "Nombre",
    "contact.lastName": "Apellido",
    "contact.phoneNumber": "Número de Teléfono",
    "contact.emailAddress": "Dirección de Correo Electrónico",
    "contact.claimType": "Tipo de Reclamo",
    "contact.selectClaimType": "Seleccionar tipo de reclamo",
    "contact.propertyDamage": "Daños a la Propiedad",
    "contact.businessInterruption": "Interrupción de Negocio",
    "contact.stormDamage": "Daños por Tormenta",
    "contact.fireDamage": "Daños por Incendio",
    "contact.waterDamage": "Daños por Agua",
    "contact.other": "Otro",
    "contact.describeClaim": "Describe Tu Reclamo",
    "contact.claimDetailsPlaceholder":
      "Por favor proporciona detalles sobre tu reclamo...",
    "contact.officeInformation": "Información de la Oficina",
    "contact.businessHours": "Horario de Atención",
    "contact.available247": "Disponible 24/7 para Emergencias",
    "contact.mondayFriday": "Lunes - Viernes",
    "contact.saturday": "Sábado",
    "contact.sunday": "Domingo",
    "contact.emergencyCallsOnly": "Solo Llamadas de Emergencia",
    "contact.emergencyCall": "¿Emergencia? ¡Llama Ahora!",
    "contact.emergencyDesc":
      "Si has experimentado daños a la propiedad, no esperes. Llámanos inmediatamente para respuesta de emergencia.",
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
    "blog.featuredArticle": "Artículo Destacado",
    "blog.featuredPostTitle":
      "Qué Hacer Después de un Huracán: Una Guía Completa",
    "blog.featuredPostExcerpt":
      "La temporada de huracanes puede ser devastadora para los propietarios. Aprende los pasos esenciales a seguir inmediatamente después de un huracán para proteger tu reclamo y asegurar que recibas la máxima compensación posible.",
    "blog.readFullArticle": "Leer Artículo Completo",
    "blog.stayUpdated": "Mantente Actualizado",
    "blog.newsletterDesc":
      "Suscríbete a nuestro boletín para los últimos consejos, actualizaciones y asesoramiento experto sobre reclamos de seguro y ajuste público.",
    "blog.emailPlaceholder": "Ingresa tu dirección de correo electrónico",
    "blog.subscribe": "Suscribirse",
    "blog.category.hurricaneClaims": "Reclamos de Huracán",
    "blog.category.businessClaims": "Reclamos Comerciales",
    "blog.category.fireClaims": "Reclamos de Incendio",
    "blog.category.waterDamage": "Daños por Agua",
    "blog.category.stormClaims": "Reclamos de Tormenta",
    "blog.category.publicAdjusting": "Ajuste Público",
    "blog.category.insuranceTips": "Consejos de Seguros",
    "blog.category.claimProcess": "Proceso de Reclamo",
    "blog.blogImage": "Imagen del Blog",
    "blog.minRead": "min de lectura",
    "blog.posts.hurricaneGuide.title":
      "Qué Hacer Después de un Huracán: Una Guía Completa",
    "blog.posts.hurricaneGuide.excerpt":
      "La temporada de huracanes puede ser devastadora para los propietarios. Aprende los pasos esenciales a seguir inmediatamente después de un huracán para proteger tu reclamo.",
    "blog.posts.businessInterruption.title":
      "Entendiendo los Reclamos de Interrupción de Negocio",
    "blog.posts.businessInterruption.excerpt":
      "El seguro de interrupción de negocio puede ser complejo. Descubre qué está cubierto, cómo documentar las pérdidas y maximizar tu recuperación.",
    "blog.posts.fireDamage.title":
      "Reclamos de Daños por Incendio: Lo que las Compañías de Seguros No Te Dicen",
    "blog.posts.fireDamage.excerpt":
      "Los reclamos de daños por incendio a menudo involucran costos ocultos y documentación compleja. Aprende los secretos para maximizar tu compensación por daños por incendio.",
    "blog.posts.waterDamage.title":
      "Reclamos de Daños por Agua: Desde la Evaluación hasta la Liquidación",
    "blog.posts.waterDamage.excerpt":
      "Los daños por agua pueden ser engañosos. Aprende cómo documentar adecuadamente los daños por agua y asegurar que recibas compensación completa.",
    "blog.posts.hireAdjuster.title":
      "Cuándo Contratar un Ajustador Público: La Guía Completa",
    "blog.posts.hireAdjuster.excerpt":
      "¿No estás seguro si necesitas un ajustador público? Aprende cuándo contratar un ajustador público tiene sentido y cómo elegir el correcto.",
    "blog.posts.stormDamage.title":
      "Reclamos de Daños por Tormenta: Maximizando tu Recuperación",
    "blog.posts.stormDamage.excerpt":
      "Los daños por tormenta pueden afectar múltiples áreas de tu propiedad. Aprende cómo documentar todos los daños y maximizar tu reclamo por tormenta.",

    // Footer
    "footer.getFreeConsultation": "Obtén una Consulta Gratuita",
    "footer.companyDescription":
      "Ajustadores públicos licenciados luchando por tus derechos y maximizando tus compensaciones de reclamos.",
    "footer.contactInformation": "Información de Contacto",
    "footer.license": "Licencia: XXXXXXX",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.ourServices": "Nuestros Servicios",
    "footer.aboutUs": "Acerca de Nosotros",
    "footer.contact": "Contacto",
    "footer.blog": "Blog",
    "footer.privacyPolicy": "Política de Privacidad",
    "footer.termsOfService": "Términos de Servicio",
    "footer.newsletter": "Boletín",
    "footer.newsletterDesc":
      "¡Suscríbete a nuestro boletín para los últimos consejos, actualizaciones y noticias!",
    "footer.emailPlaceholder": "Ingresa tu dirección de correo electrónico",
    "footer.subscribe": "Suscribirse",
    "footer.copyright":
      "© Copyright 2025 | Fernandez Public Adjusters, LLC | Todos los Derechos Reservados",

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
    "common.getFreeEvaluation": "Evaluación Gratuita",
    "common.callPhone": "Llama (786) 417-3869",

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
