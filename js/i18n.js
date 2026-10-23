/* ==========================================================================
   INTERNATIONALIZATION (i18n) — ES / EN
   Alejandro Le Mare UX Portfolio
   ========================================================================== */

const translations = {
  es: {
    /* ── NAV ────────────────────────────────────── */
    "nav.inicio":         "Inicio",
    "nav.metodologia":    "Metodología",
    "nav.simulador":      "AI Sandbox",
    "nav.casos":          "Casos de Estudio",
    "nav.cursos":         "Certificaciones",
    "nav.trayectoria":    "Trayectoria",
    "nav.contacto":       "Contacto",
    "nav.cv":             "Descargar CV",
    "nav.aria.menu":      "Abrir menú",
    "nav.aria.theme":     "Cambiar tema",
    "nav.aria.lang":      "Change language to English",

    /* ── CV DROPDOWN ────────────────────────────── */
    "cv.es.title":  "CV en Español (PDF)",
    "cv.es.meta":   "Versión oficial • 3 páginas",
    "cv.en.title":  "Resume in English (PDF)",
    "cv.en.meta":   "US Executive format • 2 pages",

    /* ── HERO ───────────────────────────────────── */
    "hero.pill":    "Senior UX & AI Product Strategist • Creando valor medible en FinTech & Enterprise",
    "hero.h1.a":    "Diseño experiencias que las personas adoptan y que",
    "hero.h1.b":    "hacen crecer el negocio",
    "hero.h1.c":    ", aceleradas con IA.",
    "hero.desc":    "El buen diseño no es ornamental: debe resolver un dolor humano real y mover las métricas de la empresa. Con más de 12 años liderando productos para gigantes de FinTech y Banca (<strong>Progressive Leasing EE.UU.</strong>, <strong>Banco Bci</strong>, <strong>Falabella</strong>, <strong>Santander</strong>), integro <strong>Claude</strong> y <strong>Gemini</strong> como aceleradores estratégicos: elimino suposiciones, sintetizo research en minutos y entrego soluciones con impacto directo en conversión, retención y ROI.",
    "hero.cta.cases":   "Explorar Casos de Estudio",
    "hero.cta.sandbox": "Probar AI Sandbox",
    "hero.hl1":  "Maestría en <strong>Claude & Gemini Cowork</strong>",
    "hero.hl2":  "Impacto en <strong>OKRs, CAC, LTV y Conversión</strong>",
    "hero.hl3":  "Experiencia <strong>USA FinTech & LatAm</strong>",
    "hero.fc.top.title":    "Claude + Gemini Framework",
    "hero.fc.top.sub":      "Síntesis 4x más rápida de Research",
    "hero.fc.bot.title":    "Progressive Leasing (Utah, USA)",
    "hero.fc.bot.sub":      "+94% Tasa de éxito en tareas críticas",

    /* ── KPI ────────────────────────────────────── */
    "kpi.years":   "Años de Trayectoria en UX & Producto",
    "kpi.users":   "Usuarios Impactados en FinTech y Banca",
    "kpi.config":  "Tiempo de Configuración en Workflows",
    "kpi.access":  "Cumplimiento Heurístico & Accesibilidad",

    /* ── METHODOLOGY ────────────────────────────── */
    "method.tag":      "Propósito & Metodología",
    "method.h2":       "La Verdadera Intención: ¿Por qué Unir UX, Negocio e IA?",
    "method.subtitle": "Diseñar sin entender el negocio es perder el tiempo; diseñar sin empatía es perder usuarios; y diseñar sin IA hoy es trabajar a ciegas y con lentitud. Mi objetivo es equilibrar los tres factores para crear productos viables, rentables y profundamente humanos:",
    "method.ux.h3":    "Empatía Humana & UX End-to-End",
    "method.ux.p":     "Entender la frustración del usuario en su punto más crítico. Traduzco procesos burocráticos y densos en experiencias fluidas donde cada acción se siente natural, segura y sin fricción.",
    "method.ux.li1":   "Escucha activa e investigación cualitativa: detectar dónde el usuario duda o se rinde",
    "method.ux.li2":   "Arquitectura de información y orquestadores visuales complejos (React Flow)",
    "method.ux.li3":   "Accesibilidad universal WCAG 2.1 AA para no excluir a ningún segmento",
    "method.biz.h3":   "Mentalidad de Negocio & Retorno de Inversión (ROI)",
    "method.biz.p":    "Cuidar los números y la sostenibilidad de la empresa. Cada flujo que diseño responde a un objetivo financiero claro: reducir costos, aumentar ingresos o fidelizar clientes.",
    "method.biz.li1":  "Alineación estratégica con OKRs directivos y metas de rentabilidad trimestrales",
    "method.biz.li2":  "Optimización de embudos de conversión (CRO) y reducción de churn en checkout",
    "method.biz.li3":  "Disminución cuantificable de costos de soporte y fricción operacional interna",
    "method.ai.h3":    "Inteligencia Artificial como Multiplicador Estratégico",
    "method.ai.p":     "Dominio avanzado de Claude (Claude Cowork) y Google Gemini (Multimodal Vision). No uso la IA como un atajo superficial, sino para eliminar conjeturas y acelerar certezas.",
    "method.ai.li1":   "Síntesis automatizada de 10+ pruebas de usabilidad en minutos vs. semanas",
    "method.ai.li2":   "Auditoría heurística visual y detección de anomalías de UI con Gemini Vision",
    "method.ai.li3":   "Desarrollo de tooling personalizado para squads (UX Analyzer con Claude SDK)",

    /* ── AI SANDBOX ─────────────────────────────── */
    "sandbox.tag":        "Demostrador Interactivo",
    "sandbox.h2":         "La IA en la Práctica: De la Hipótesis al Impacto Real",
    "sandbox.subtitle":   "Aquí no hay conceptos abstractos. Explora en vivo cómo aplico prompts estructurados con Claude y Gemini para resolver problemas reales de negocio y acelerar decisiones de diseño:",
    "sandbox.task":       "Análisis Heurístico & Negocio",
    "sandbox.select.lbl": "Seleccionar Escenario de Trabajo:",
    "sandbox.opt1":       "1. Progressive Leasing (Originación RLD, Carrito ODS & Firma QR)",
    "sandbox.opt2":       "2. Auditoría Multimodal de Jerarquía Visual (Gemini 2.5)",
    "sandbox.opt3":       "3. Síntesis Cuantitativa de Pruebas A/B (Cart Testing Framework)",
    "sandbox.opt4":       "4. Banco Bci: Alineación UX con OKRs de Inversiones",
    "sandbox.prompt.lbl": "Prompt Estructurado / Input de Negocio:",
    "sandbox.run":        "Ejecutar Síntesis con IA",
    "sandbox.matrix.h4":  "Framework Real de Síntesis: Progressive Leasing",
    "sandbox.matrix.p":   "Matriz de afinidad, tiempo por tarea y cálculo de confianza (A/B Testing Synthesis) documentada en mi metodología.",
    "sandbox.matrix.cta": "Ver Caso Progressive Leasing",
    "sandbox.th1":  "Participante",
    "sandbox.th2":  "Diseño Evaluado",
    "sandbox.th3":  "T1 (Selección)",
    "sandbox.th4":  "T2 (Costos)",
    "sandbox.th5":  "T3 (Términos)",
    "sandbox.th6":  "Confianza (1-5)",
    "sandbox.th7":  "Tiempo en Tarea",
    "sandbox.th8":  "Resultado Negocio",

    /* ── CASE STUDIES ───────────────────────────── */
    "cases.tag":       "Resultados Comprobados",
    "cases.h2":        "Casos de Estudio: Problemas Reales, Impacto Medible",
    "cases.subtitle":  "Historias reales de cómo la investigación centrada en las personas, la visión de negocio y la aceleración con IA resolvieron fricciones críticas en grandes organizaciones:",
    "cases.filter.all":      "Todos los Proyectos",
    "cases.filter.fintech":  "Fintech & Enterprise",
    "cases.filter.banca":    "Banca & Inversiones",
    "cases.filter.ecommerce":"E-commerce & Retail",
    "cases.filter.ai":       "IA & Workflows",

    /* Case 1 */
    "case1.tag":     "ODS Discovery • FinTech EE.UU.",
    "case1.company": "Progressive Leasing (Utah, EE.UU.)",
    "case1.period":  "2024 - 2026",
    "case1.title":   "ODS Project Journey: Discovery Técnico, Arquitectura de Entrega & Prototipado",
    "case1.desc":    "Transformé documentación técnica abstracta y sin referencias visuales en una arquitectura UX lista para producción: lideré un viaje de 8 fases coordinando ProgCentral, MyStore BFF, EA e Ingeniería, acelerando la síntesis con Claude y validando contratos API con prototipos interactivos del Carrito ODS y especificaciones para Jira MS-3923.",
    "case1.m1.lbl":  "Fases Validadas",
    "case1.m2.lbl":  "Docs Confluence",
    "case1.m3.lbl":  "Modos Despacho",
    "case1.m4.lbl":  "MS-3923 Jira",

    /* Case 2 */
    "case2.tag":     "Workflow Builder • Okta Security",
    "case2.company": "Progressive Leasing (Utah, EE.UU.)",
    "case2.period":  "2024 - Presente",
    "case2.title":   "React Flow Builder, Seguridad Okta & Firma QR 'Scan to Sign'",
    "case2.desc":    "Diseñé el constructor visual de nodos drag-and-drop con validación lógica en tiempo real para ProgCentral y la innovación 'Scan to Sign' (firma de contratos mediante QR en retail). Optimicé flujos de originación RLD y aseguré gobernanza estricta bajo estándares de seguridad Okta, reduciendo un 38% el tiempo de configuración de reglas.",
    "case2.m1.lbl":  "Tiempo de setup",
    "case2.m2.lbl":  "Tasa de éxito",
    "case2.m3.lbl":  "Síntesis con IA",

    /* Case 3 */
    "case3.tag":     "Banca Digital • Inversiones",
    "case3.company": "Banco Bci (Chile)",
    "case3.period":  "2022 - 2024 (2 años)",
    "case3.title":   "Democratización de Plataforma de Inversiones Digitales",
    "case3.desc":    "Eliminé el miedo a invertir traduciendo la jerga financiera densa en simuladores interactivos guiados por metas de vida reales, combinando microcopy empático testeado con IA para incrementar en 32% los nuevos inversionistas activos.",
    "case3.m1.lbl":  "Nuevos inversores",
    "case3.m2.lbl":  "Tiempo en flujo",
    "case3.m3.lbl":  "NPS Producto",

    /* Case 4 */
    "case4.tag":     "E-Commerce Masivo • Design System",
    "case4.company": "Falabella Retail (Latinoamérica)",
    "case4.period":  "2020 - 2022",
    "case4.title":   "Optimización de Funnel de Compra y Escalamiento Regional",
    "case4.desc":    "Unifiqué la experiencia de checkout y selección de despacho para más de 15 millones de compradores mensuales en 3 países, reduciendo drásticamente la fricción en el carrito y generando un aumento del 1.8% en la tasa de conversión global (CRO).",
    "case4.m1.lbl":  "Conversion Rate (CRO)",
    "case4.m2.lbl":  "Entrega en squads",
    "case4.m3.lbl":  "Usuarios/mes",

    /* Case 5 */
    "case5.tag":     "Fintech & Telecom Móvil",
    "case5.company": "everis (NTT DATA) / Santander / Telefónica",
    "case5.period":  "2019 - 2020",
    "case5.title":   "Ecosistemas Móviles Nativos y Apps de Campo B2B",
    "case5.desc":    "Diseñé interfaces táctiles resistentes para técnicos de terreno de Telefónica con soporte offline en Ionic 4 y flujos de enrolamiento veloz para la fintech Superdigital de Santander, reduciendo en 50% los tiempos de resolución en campo.",
    "case5.m1.lbl":  "Tiempo en terreno",
    "case5.m2.lbl":  "Offline-ready",
    "case5.m3.lbl":  "Frontend validado",

    /* ── CERTIFICATIONS ─────────────────────────── */
    "certs.tag":       "Especialización Continua",
    "certs.h2":        "Cursos de Inteligencia Artificial & Negocios",
    "certs.subtitle":  "Certificaciones y especializaciones que respaldan mi dominio técnico en modelos generativos y visión estratégica empresarial:",
    "cert1.title":  "Claude 101 & Advanced Prompting",
    "cert1.issuer": "Anthropic / Prompt Engineering Framework",
    "cert1.p":      "Especialización en cadenas de pensamiento, estructuración de contexto denso, Claude Cowork en flujos de diseño y desarrollo de agentes para síntesis cualitativa.",
    "cert2.title":  "Google Gemini & Multimodal UX Analysis",
    "cert2.issuer": "Ecosistema Gemini Enterprise",
    "cert2.p":      "Aplicación de modelos multimodales para análisis visual de heurísticas, extracción de patrones de diseño desde capturas y benchmarking competitivo a alta velocidad.",
    "cert3.title":  "Cómo Administrar por Objetivos (MBO / OKRs)",
    "cert3.issuer": "LinkedIn Learning & Project Management",
    "cert3.p":      "Alineación de objetivos de experiencia con metas trimestrales y anuales de la empresa: indicadores cuantitativos, valor entregado y ROI del diseño.",
    "cert4.title":  "Fundamentos de Gestión de Proyectos: Requisitos",
    "cert4.issuer": "Metodologías Ágiles & Project Governance",
    "cert4.p":      "Levantamiento riguroso de requerimientos funcionales y técnicos, prevención de scope creep y articulación entre stakeholders de negocio y equipos de ingeniería.",
    "cert5.title":  "Liderazgo y Trabajo en Equipo en Entornos Ágiles",
    "cert5.issuer": "Cross-Functional Leadership",
    "cert5.p":      "Facilitación de workshops de co-creación, design sprints, gestión de consenso con clientes y liderazgo de squads multidisciplinarios en entornos remotos y globales.",
    "cert6.title":  "Inglés de Negocios: Comunicación y Gestión de Crisis",
    "cert6.issuer": "Executive Business English",
    "cert6.p":      "Comunicación fluida con stakeholders ejecutivos en Estados Unidos (Progressive Leasing / Utah), defensa de decisiones de diseño y resolución de incidencias críticas.",
    "tools.h4":     "Herramientas que Domino en el Día a Día:",

    /* ── TIMELINE ───────────────────────────────── */
    "timeline.tag":      "Experiencia Comprobada",
    "timeline.h2":       "Trayectoria Profesional",
    "timeline.subtitle": "Más de una década evolucionando desde la dirección de arte y estrategia de negocio hasta el liderazgo en UX e inteligencia artificial:",
    "tl1.role":    "Senior UX Designer",
    "tl1.company": "Ki Technologies • Cliente: Progressive Leasing (Utah, EE.UU.)",
    "tl1.date":    "Diciembre 2024 — Presente",
    "tl1.p":       "Liderazgo de diseño para la plataforma de financiamiento Lease-to-Own. Creación de la arquitectura de 'ProgCentral' y 'React Flow Builder' para gobernanza de aprobaciones. Aplicación de Claude Cowork para sintetizar pruebas de usabilidad y frameworks cuantitativos de evaluación A/B.",
    "tl2.role":    "UX Designer (Wealth Management & Banca Inversiones)",
    "tl2.company": "Banco Bci (Chile)",
    "tl2.date":    "Marzo 2022 — Febrero 2024 (2 años)",
    "tl2.p":       "Colaboración en el desarrollo de productos de inversión y flujos customer-centric. Ejecución de actividades de Research cualitativo, Journey Maps, diagramas de flujo, Wireframing, Prototyping y experiencia End-to-End, logrando un aumento del 32% en nuevos inversionistas digitales.",
    "tl3.role":    "Analista UX",
    "tl3.company": "Falabella Retail (Latinoamérica)",
    "tl3.date":    "Septiembre 2020 — Enero 2022 (1 año 5 meses)",
    "tl3.p":       "Optimización de la tasa de conversión en los flujos de checkout, selección de métodos de despacho y escalamiento del Design System transversal para los equipos de Chile, Perú y Colombia.",
    "tl4.role":    "UX / UI Designer - Solutions Analyst",
    "tl4.company": "everis (NTT DATA) • Santander, Telefónica, Transbank",
    "tl4.date":    "Junio 2019 — Septiembre 2020 (1 año 4 meses)",
    "tl4.p":       "Diseño de pantallas nativas para la fintech Superdigital de Santander, flujos para comercios en Transbank y maquetación frontend en Ionic 4 para la aplicación móvil de soporte técnico en terreno de Telefónica S.A.",
    "tl5.role":    "Diseñador Web & UX/UI Designer",
    "tl5.company": "Prosys • RAC Asistencia Vial",
    "tl5.date":    "Julio 2018 — Junio 2019 (1 año)",
    "tl5.p":       "Benchmark competitivo, validación de datos, journey mapping, wireframing, pruebas de usabilidad y maquetación frontend en Ionic 4 bajo metodologías ágiles.",
    "tl6.role":    "Art Director & Strategic Consultant",
    "tl6.company": "Onlinesolutionsfl (Florida, EE.UU.)",
    "tl6.date":    "Febrero 2016 — Julio 2018 (2 años 6 meses)",
    "tl6.p":       "Desarrollo de planes de negocio, consultoría estratégica para clientes en EE.UU., aumento de tráfico web, desarrollo de estrategias de venta e interfaces para optimización de ingresos publicitarios.",
    "cv.banner.h4": "📄 Descargar Currículum Vitae Oficial (PDF)",
    "cv.banner.p":  "Accede al historial profesional completo con métricas de impacto en FinTech (Progressive Leasing EE.UU.), Banca (Bci, Santander), CIAM (Falabella) y certificaciones en IA aplicada.",
    "cv.es.btn":    "CV Español (3 págs)",
    "cv.en.btn":    "Resume English (2 pages)",

    /* ── CONTACT ────────────────────────────────── */
    "contact.tag":      "Conversemos",
    "contact.h2":       "¿Listo para Impulsar tu Próximo Producto con UX e IA?",
    "contact.subtitle": "Hablemos sobre cómo conectar las necesidades de tus usuarios con los objetivos de tu negocio mediante diseño de vanguardia y aceleración con IA.",
    "contact.ch.h3":    "Canales Directos",
    "contact.ch.p":     "Respondo habitualmente en menos de 24 horas. Disponible para roles Senior / Lead UX y consultorías de producto estratégico.",
    "contact.email.h4": "Email Directo",
    "contact.wa.h4":    "WhatsApp & Teléfono",
    "contact.li.h4":    "Perfil de LinkedIn",
    "contact.loc.h4":   "Ubicación & Modalidad",
    "contact.loc.p":    "Santiago de Chile • Disponible Remoto Global (USA / LatAm)",
    "contact.cv.h4":    "📄 Descargar Currículum Vitae Oficial (PDF)",
    "contact.cv.p":     "Formato descargable optimizado con historial completo y certificaciones:",
    "contact.form.h3":  "Envíame un Mensaje",
    "contact.form.p":   "Cuéntame sobre tu empresa, producto o desafío de diseño:",
    "form.name.lbl":    "Tu Nombre o Empresa *",
    "form.name.ph":     "Ej: Valentina Morales / FinTech SpA",
    "form.email.lbl":   "Correo Electrónico de Contacto *",
    "form.email.ph":    "tu@empresa.com",
    "form.interest.lbl":"Área de Interés Principal",
    "form.opt1":        "Rol Senior / Lead UX Designer",
    "form.opt2":        "Estrategia de Producto & Aceleración con IA",
    "form.opt3":        "Diseño para FinTech, Banca o E-commerce",
    "form.opt4":        "Consultoría Heurística & Optimización de Funnel",
    "form.msg.lbl":     "Mensaje / Breve Resumen *",
    "form.msg.ph":      "¿En qué consiste el proyecto o vacante?",
    "form.submit":      "Enviar Mensaje a Alejandro",

    /* ── FOOTER ─────────────────────────────────── */
    "footer.inicio":    "Inicio",
    "footer.metodo":    "Metodología",
    "footer.casos":     "Casos de Estudio",
    "footer.cursos":    "Cursos IA",
    "footer.copy":      "© 2026 Alejandro Le Mare Mendoza. Diseñado con rigor estratégico para maximizar valor a usuarios y negocios. Potenciado con Claude 3.7 & Gemini 2.5.",

    /* ── MODAL ──────────────────────────────────── */
    "modal.overview.h4":  "Visión General del Proyecto",
    "modal.challenge.h4": "⚠️ El Desafío de Negocio",
    "modal.solution.h4":  "💡 La Solución UX & Aporte de IA",
    "modal.initiatives.h4": "🚀 Módulos & Épicas Diseñadas en Producción",
    "modal.proto.h5":    "Prototipo Interactivo Funcional Disponible",
    "modal.proto.p":     "Explora el flujo de Carrito ODS y Estimador de Pagos desarrollado para ProgCentral.",
    "modal.proto.cta":   "Abrir Prototipo ODS ↗",
    "modal.gallery.h4":  "Capturas del Flujo y Entregables Visuales",
    "modal.aria.close":  "Cerrar ventana modal",
  },

  en: {
    /* ── NAV ────────────────────────────────────── */
    "nav.inicio":         "Home",
    "nav.metodologia":    "Methodology",
    "nav.simulador":      "AI Sandbox",
    "nav.casos":          "Case Studies",
    "nav.cursos":         "Certifications",
    "nav.trayectoria":    "Career",
    "nav.contacto":       "Contact",
    "nav.cv":             "Download CV",
    "nav.aria.menu":      "Open menu",
    "nav.aria.theme":     "Toggle theme",
    "nav.aria.lang":      "Cambiar idioma a Español",

    /* ── CV DROPDOWN ────────────────────────────── */
    "cv.es.title":  "CV in Spanish (PDF)",
    "cv.es.meta":   "Official version • 3 pages",
    "cv.en.title":  "Resume in English (PDF)",
    "cv.en.meta":   "US Executive format • 2 pages",

    /* ── HERO ───────────────────────────────────── */
    "hero.pill":    "Senior UX & AI Product Strategist • Creating measurable value in FinTech & Enterprise",
    "hero.h1.a":    "I design experiences people adopt that",
    "hero.h1.b":    "grow the business",
    "hero.h1.c":    ", accelerated with AI.",
    "hero.desc":    "Good design is not ornamental: it must solve real human pain and move company metrics. With over 12 years leading products for FinTech & Banking giants (<strong>Progressive Leasing USA</strong>, <strong>Banco Bci</strong>, <strong>Falabella</strong>, <strong>Santander</strong>), I integrate <strong>Claude</strong> and <strong>Gemini</strong> as strategic accelerators: eliminating assumptions, synthesizing research in minutes, and delivering solutions with direct impact on conversion, retention and ROI.",
    "hero.cta.cases":   "Explore Case Studies",
    "hero.cta.sandbox": "Try AI Sandbox",
    "hero.hl1":  "Mastery in <strong>Claude & Gemini Cowork</strong>",
    "hero.hl2":  "Impact on <strong>OKRs, CAC, LTV & Conversion</strong>",
    "hero.hl3":  "Experience in <strong>USA FinTech & LatAm</strong>",
    "hero.fc.top.title":    "Claude + Gemini Framework",
    "hero.fc.top.sub":      "4x faster Research synthesis",
    "hero.fc.bot.title":    "Progressive Leasing (Utah, USA)",
    "hero.fc.bot.sub":      "+94% Success rate on critical tasks",

    /* ── KPI ────────────────────────────────────── */
    "kpi.years":   "Years of UX & Product Expertise",
    "kpi.users":   "Users Impacted in FinTech & Banking",
    "kpi.config":  "Reduction in Workflow Configuration Time",
    "kpi.access":  "Heuristic & Accessibility Compliance",

    /* ── METHODOLOGY ────────────────────────────── */
    "method.tag":      "Purpose & Methodology",
    "method.h2":       "The Real Intent: Why Unite UX, Business & AI?",
    "method.subtitle": "Designing without understanding the business wastes time; designing without empathy loses users; and designing without AI today means working blind and slow. My goal is to balance all three to create viable, profitable and deeply human products:",
    "method.ux.h3":    "Human Empathy & End-to-End UX",
    "method.ux.p":     "Understand user frustration at its most critical point. I translate bureaucratic and dense processes into fluid experiences where every action feels natural, safe and frictionless.",
    "method.ux.li1":   "Active listening and qualitative research: detecting where users hesitate or give up",
    "method.ux.li2":   "Information architecture and complex visual orchestrators (React Flow)",
    "method.ux.li3":   "Universal WCAG 2.1 AA accessibility to include every user segment",
    "method.biz.h3":   "Business Mindset & Return on Investment (ROI)",
    "method.biz.p":    "Watching the numbers and business sustainability. Every flow I design responds to a clear financial objective: cut costs, increase revenue, or retain customers.",
    "method.biz.li1":  "Strategic alignment with executive OKRs and quarterly profitability targets",
    "method.biz.li2":  "Conversion funnel optimization (CRO) and checkout churn reduction",
    "method.biz.li3":  "Quantifiable decrease in support costs and internal operational friction",
    "method.ai.h3":    "Artificial Intelligence as a Strategic Multiplier",
    "method.ai.p":     "Advanced mastery of Claude (Claude Cowork) and Google Gemini (Multimodal Vision). I don't use AI as a superficial shortcut, but to eliminate guesswork and accelerate certainties.",
    "method.ai.li1":   "Automated synthesis of 10+ usability tests in minutes vs. weeks",
    "method.ai.li2":   "Visual heuristic audit and UI anomaly detection with Gemini Vision",
    "method.ai.li3":   "Custom tooling development for squads (UX Analyzer with Claude SDK)",

    /* ── AI SANDBOX ─────────────────────────────── */
    "sandbox.tag":        "Interactive Demo",
    "sandbox.h2":         "AI in Practice: From Hypothesis to Real Impact",
    "sandbox.subtitle":   "No abstract concepts here. Explore live how I apply structured prompts with Claude and Gemini to solve real business problems and accelerate design decisions:",
    "sandbox.task":       "Heuristic & Business Analysis",
    "sandbox.select.lbl": "Select Work Scenario:",
    "sandbox.opt1":       "1. Progressive Leasing (RLD Origination, ODS Cart & QR Signature)",
    "sandbox.opt2":       "2. Multimodal Visual Hierarchy Audit (Gemini 2.5)",
    "sandbox.opt3":       "3. Quantitative A/B Test Synthesis (Cart Testing Framework)",
    "sandbox.opt4":       "4. Banco Bci: UX Alignment with Investment OKRs",
    "sandbox.prompt.lbl": "Structured Prompt / Business Input:",
    "sandbox.run":        "Run AI Synthesis",
    "sandbox.matrix.h4":  "Real Synthesis Framework: Progressive Leasing",
    "sandbox.matrix.p":   "Affinity matrix, task time and confidence calculation (A/B Testing Synthesis) documented in my methodology.",
    "sandbox.matrix.cta": "View Progressive Leasing Case",
    "sandbox.th1":  "Participant",
    "sandbox.th2":  "Design Evaluated",
    "sandbox.th3":  "T1 (Selection)",
    "sandbox.th4":  "T2 (Costs)",
    "sandbox.th5":  "T3 (Terms)",
    "sandbox.th6":  "Confidence (1-5)",
    "sandbox.th7":  "Task Time",
    "sandbox.th8":  "Business Outcome",

    /* ── CASE STUDIES ───────────────────────────── */
    "cases.tag":       "Proven Results",
    "cases.h2":        "Case Studies: Real Problems, Measurable Impact",
    "cases.subtitle":  "Real stories of how human-centered research, business vision and AI acceleration solved critical friction in large organizations:",
    "cases.filter.all":      "All Projects",
    "cases.filter.fintech":  "Fintech & Enterprise",
    "cases.filter.banca":    "Banking & Investments",
    "cases.filter.ecommerce":"E-commerce & Retail",
    "cases.filter.ai":       "AI & Workflows",

    /* Case 1 */
    "case1.tag":     "ODS Discovery • FinTech USA",
    "case1.company": "Progressive Leasing (Utah, USA)",
    "case1.period":  "2024 - 2026",
    "case1.title":   "ODS Project Journey: Technical Discovery, Delivery Architecture & Prototyping",
    "case1.desc":    "I transformed abstract technical documentation with no visual references into a production-ready UX architecture: led an 8-phase journey coordinating ProgCentral, MyStore BFF, EA and Engineering, accelerating synthesis with Claude and validating API contracts with interactive ODS Cart prototypes and Jira MS-3923 specifications.",
    "case1.m1.lbl":  "Validated Phases",
    "case1.m2.lbl":  "Confluence Docs",
    "case1.m3.lbl":  "Delivery Modes",
    "case1.m4.lbl":  "MS-3923 Jira",

    /* Case 2 */
    "case2.tag":     "Workflow Builder • Okta Security",
    "case2.company": "Progressive Leasing (Utah, USA)",
    "case2.period":  "2024 - Present",
    "case2.title":   "React Flow Builder, Okta Security & QR 'Scan to Sign' Signature",
    "case2.desc":    "I designed the visual drag-and-drop node builder with real-time logic validation for ProgCentral and the 'Scan to Sign' innovation (contract signing via QR in retail). Optimized RLD origination flows and ensured strict governance under Okta security standards, reducing rule configuration time by 38%.",
    "case2.m1.lbl":  "Setup time",
    "case2.m2.lbl":  "Success rate",
    "case2.m3.lbl":  "AI Synthesis",

    /* Case 3 */
    "case3.tag":     "Digital Banking • Investments",
    "case3.company": "Banco Bci (Chile)",
    "case3.period":  "2022 - 2024 (2 years)",
    "case3.title":   "Democratizing the Digital Investment Platform",
    "case3.desc":    "I eliminated the fear of investing by translating dense financial jargon into interactive simulators guided by real life goals, combining empathetic AI-tested microcopy to increase active new investors by 32%.",
    "case3.m1.lbl":  "New investors",
    "case3.m2.lbl":  "Flow time",
    "case3.m3.lbl":  "Product NPS",

    /* Case 4 */
    "case4.tag":     "Mass E-Commerce • Design System",
    "case4.company": "Falabella Retail (Latin America)",
    "case4.period":  "2020 - 2022",
    "case4.title":   "Purchase Funnel Optimization & Regional Scaling",
    "case4.desc":    "I unified the checkout and shipping selection experience for over 15 million monthly shoppers across 3 countries, drastically reducing cart friction and generating a 1.8% increase in global conversion rate (CRO).",
    "case4.m1.lbl":  "Conversion Rate (CRO)",
    "case4.m2.lbl":  "Squad delivery",
    "case4.m3.lbl":  "Users/month",

    /* Case 5 */
    "case5.tag":     "Fintech & Mobile Telecom",
    "case5.company": "everis (NTT DATA) / Santander / Telefónica",
    "case5.period":  "2019 - 2020",
    "case5.title":   "Native Mobile Ecosystems & B2B Field Apps",
    "case5.desc":    "I designed ruggedized touch interfaces for Telefónica field technicians with offline support in Ionic 4 and fast enrollment flows for Santander's Superdigital fintech, reducing field resolution times by 50%.",
    "case5.m1.lbl":  "Field time",
    "case5.m2.lbl":  "Offline-ready",
    "case5.m3.lbl":  "Frontend validated",

    /* ── CERTIFICATIONS ─────────────────────────── */
    "certs.tag":       "Continuous Specialization",
    "certs.h2":        "Artificial Intelligence & Business Courses",
    "certs.subtitle":  "Certifications and specializations that support my technical mastery of generative models and strategic business vision:",
    "cert1.title":  "Claude 101 & Advanced Prompting",
    "cert1.issuer": "Anthropic / Prompt Engineering Framework",
    "cert1.p":      "Specialization in chain-of-thought, dense context structuring, Claude Cowork in design flows and agent development for qualitative synthesis.",
    "cert2.title":  "Google Gemini & Multimodal UX Analysis",
    "cert2.issuer": "Gemini Enterprise Ecosystem",
    "cert2.p":      "Application of multimodal models for visual heuristic analysis, design pattern extraction from screenshots and competitive benchmarking at high speed.",
    "cert3.title":  "How to Manage by Objectives (MBO / OKRs)",
    "cert3.issuer": "LinkedIn Learning & Project Management",
    "cert3.p":      "Aligning experience objectives with quarterly and annual company goals: quantitative indicators, delivered value and design ROI.",
    "cert4.title":  "Project Management Fundamentals: Requirements",
    "cert4.issuer": "Agile Methodologies & Project Governance",
    "cert4.p":      "Rigorous functional and technical requirements gathering, scope creep prevention and articulation between business stakeholders and engineering teams.",
    "cert5.title":  "Leadership & Teamwork in Agile Environments",
    "cert5.issuer": "Cross-Functional Leadership",
    "cert5.p":      "Facilitating co-creation workshops, design sprints, client consensus management and leadership of multidisciplinary squads in remote and global environments.",
    "cert6.title":  "Business English: Communication & Crisis Management",
    "cert6.issuer": "Executive Business English",
    "cert6.p":      "Fluent communication with executive stakeholders in the United States (Progressive Leasing / Utah), defending design decisions and resolving critical incidents.",
    "tools.h4":     "Tools I Master Day to Day:",

    /* ── TIMELINE ───────────────────────────────── */
    "timeline.tag":      "Proven Experience",
    "timeline.h2":       "Professional Career",
    "timeline.subtitle": "Over a decade evolving from art direction and business strategy to leadership in UX and artificial intelligence:",
    "tl1.role":    "Senior UX Designer",
    "tl1.company": "Ki Technologies • Client: Progressive Leasing (Utah, USA)",
    "tl1.date":    "December 2024 — Present",
    "tl1.p":       "Design leadership for the Lease-to-Own financing platform. Creating the 'ProgCentral' and 'React Flow Builder' architecture for approval governance. Applying Claude Cowork to synthesize usability tests and quantitative A/B evaluation frameworks.",
    "tl2.role":    "UX Designer (Wealth Management & Investment Banking)",
    "tl2.company": "Banco Bci (Chile)",
    "tl2.date":    "March 2022 — February 2024 (2 years)",
    "tl2.p":       "Collaboration on investment product development and customer-centric flows. Execution of qualitative research activities, Journey Maps, flow diagrams, Wireframing, Prototyping and End-to-End experience, achieving a 32% increase in new digital investors.",
    "tl3.role":    "UX Analyst",
    "tl3.company": "Falabella Retail (Latin America)",
    "tl3.date":    "September 2020 — January 2022 (1 year 5 months)",
    "tl3.p":       "Conversion rate optimization in checkout flows, shipping method selection and scaling the cross-functional Design System for teams in Chile, Peru and Colombia.",
    "tl4.role":    "UX / UI Designer - Solutions Analyst",
    "tl4.company": "everis (NTT DATA) • Santander, Telefónica, Transbank",
    "tl4.date":    "June 2019 — September 2020 (1 year 4 months)",
    "tl4.p":       "Native screen design for Santander's Superdigital fintech, merchant flows for Transbank and frontend development in Ionic 4 for Telefónica S.A.'s mobile field support application.",
    "tl5.role":    "Web Designer & UX/UI Designer",
    "tl5.company": "Prosys • RAC Asistencia Vial",
    "tl5.date":    "July 2018 — June 2019 (1 year)",
    "tl5.p":       "Competitive benchmark, data validation, journey mapping, wireframing, usability testing and frontend development in Ionic 4 under agile methodologies.",
    "tl6.role":    "Art Director & Strategic Consultant",
    "tl6.company": "Onlinesolutionsfl (Florida, USA)",
    "tl6.date":    "February 2016 — July 2018 (2 years 6 months)",
    "tl6.p":       "Business plan development, strategic consulting for US clients, web traffic growth, sales strategy development and interfaces for advertising revenue optimization.",
    "cv.banner.h4": "📄 Download Official Curriculum Vitae (PDF)",
    "cv.banner.p":  "Access the complete professional history with impact metrics in FinTech (Progressive Leasing USA), Banking (Bci, Santander), CIAM (Falabella) and applied AI certifications.",
    "cv.es.btn":    "CV Spanish (3 pages)",
    "cv.en.btn":    "Resume English (2 pages)",

    /* ── CONTACT ────────────────────────────────── */
    "contact.tag":      "Let's Talk",
    "contact.h2":       "Ready to Boost Your Next Product with UX & AI?",
    "contact.subtitle": "Let's talk about how to connect your users' needs with your business goals through cutting-edge design and AI acceleration.",
    "contact.ch.h3":    "Direct Channels",
    "contact.ch.p":     "I usually respond in under 24 hours. Available for Senior / Lead UX roles and strategic product consulting.",
    "contact.email.h4": "Direct Email",
    "contact.wa.h4":    "WhatsApp & Phone",
    "contact.li.h4":    "LinkedIn Profile",
    "contact.loc.h4":   "Location & Modality",
    "contact.loc.p":    "Santiago, Chile • Available Remote Globally (USA / LatAm)",
    "contact.cv.h4":    "📄 Download Official Curriculum Vitae (PDF)",
    "contact.cv.p":     "Optimized downloadable format with full history and certifications:",
    "contact.form.h3":  "Send Me a Message",
    "contact.form.p":   "Tell me about your company, product or design challenge:",
    "form.name.lbl":    "Your Name or Company *",
    "form.name.ph":     "E.g: John Smith / FinTech Inc.",
    "form.email.lbl":   "Contact Email *",
    "form.email.ph":    "you@company.com",
    "form.interest.lbl":"Main Area of Interest",
    "form.opt1":        "Senior / Lead UX Designer Role",
    "form.opt2":        "Product Strategy & AI Acceleration",
    "form.opt3":        "Design for FinTech, Banking or E-commerce",
    "form.opt4":        "Heuristic Consulting & Funnel Optimization",
    "form.msg.lbl":     "Message / Brief Summary *",
    "form.msg.ph":      "What is the project or position about?",
    "form.submit":      "Send Message to Alejandro",

    /* ── FOOTER ─────────────────────────────────── */
    "footer.inicio":    "Home",
    "footer.metodo":    "Methodology",
    "footer.casos":     "Case Studies",
    "footer.cursos":    "AI Courses",
    "footer.copy":      "© 2026 Alejandro Le Mare Mendoza. Designed with strategic rigor to maximize value for users and businesses. Powered by Claude 3.7 & Gemini 2.5.",

    /* ── MODAL ──────────────────────────────────── */
    "modal.overview.h4":    "Project Overview",
    "modal.challenge.h4":   "⚠️ The Business Challenge",
    "modal.solution.h4":    "💡 The UX Solution & AI Contribution",
    "modal.initiatives.h4": "🚀 Modules & Epics Designed in Production",
    "modal.proto.h5":   "Functional Interactive Prototype Available",
    "modal.proto.p":    "Explore the ODS Cart flow and Payment Estimator developed for ProgCentral.",
    "modal.proto.cta":  "Open ODS Prototype ↗",
    "modal.gallery.h4": "Flow Screenshots & Visual Deliverables",
    "modal.aria.close": "Close modal window",
  }
};

/* --------------------------------------------------------------------------
   Language Switcher Engine
   -------------------------------------------------------------------------- */
(function () {
  const STORAGE_KEY = "portfolio_lang";

  function getCurrentLang() {
    return localStorage.getItem(STORAGE_KEY) || "es";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    updateLangButton(lang);
    document.documentElement.setAttribute("lang", lang);
  }

  function t(key, lang) {
    return translations[lang]?.[key] ?? translations["es"][key] ?? key;
  }

  function applyTranslations(lang) {
    /* helper to set text content */
    const setText = (selector, key, isHTML = false) => {
      const el = document.querySelector(selector);
      if (!el) return;
      if (isHTML) el.innerHTML = t(key, lang);
      else el.textContent = t(key, lang);
    };

    /* helper to set attribute */
    const setAttr = (selector, attr, key) => {
      const el = document.querySelector(selector);
      if (!el) return;
      el.setAttribute(attr, t(key, lang));
    };

    const setAllText = (selector, key, isHTML = false) => {
      document.querySelectorAll(selector).forEach(el => {
        if (isHTML) el.innerHTML = t(key, lang);
        else el.textContent = t(key, lang);
      });
    };

    // HTML lang
    document.documentElement.setAttribute("lang", lang);

    /* ── NAV ── */
    setText("#link-hero", "nav.inicio");
    setText("#link-metodologia", "nav.metodologia");
    setText("#link-simulador", "nav.simulador");
    setText("#link-casos", "nav.casos");
    setText("#link-cursos", "nav.cursos");
    setText("#link-trayectoria", "nav.trayectoria");
    setText("#link-contacto", "nav.contacto");
    const cvSpan = document.querySelector("#cv-dropdown-btn > span");
    if (cvSpan) cvSpan.textContent = t("nav.cv", lang);
    setAttr("#mobile-menu-btn", "aria-label", "nav.aria.menu");
    setAttr("#theme-toggle", "aria-label", "nav.aria.theme");
    setAttr("#lang-toggle", "aria-label", "nav.aria.lang");

    /* ── CV DROPDOWN ── */
    const cvItems = document.querySelectorAll(".cv-dropdown-item");
    if (cvItems[0]) {
      cvItems[0].querySelector(".cv-item-title").textContent = t("cv.es.title", lang);
      cvItems[0].querySelector(".cv-item-meta").textContent  = t("cv.es.meta", lang);
    }
    if (cvItems[1]) {
      cvItems[1].querySelector(".cv-item-title").textContent = t("cv.en.title", lang);
      cvItems[1].querySelector(".cv-item-meta").textContent  = t("cv.en.meta", lang);
    }

    /* ── HERO ── */
    setText(".hero-status-pill", "hero.pill");
    const h1 = document.querySelector(".hero-title");
    if (h1) h1.innerHTML = `${t("hero.h1.a", lang)} <span class="gradient-text">${t("hero.h1.b", lang)}</span>${t("hero.h1.c", lang)}`;
    setText(".hero-description", "hero.desc", true);
    setText("#hero-cta-cases", "hero.cta.cases");
    setText("#hero-cta-sandbox", "hero.cta.sandbox");
    const ctaSandbox = document.querySelector("#hero-cta-sandbox");
    if (ctaSandbox) ctaSandbox.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> ${t("hero.cta.sandbox", lang)}`;
    const ctaCases = document.querySelector("#hero-cta-cases");
    if (ctaCases) ctaCases.innerHTML = `${t("hero.cta.cases", lang)} <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`;
    const hls = document.querySelectorAll(".highlight-item span");
    if (hls[0]) hls[0].innerHTML = t("hero.hl1", lang);
    if (hls[1]) hls[1].innerHTML = t("hero.hl2", lang);
    if (hls[2]) hls[2].innerHTML = t("hero.hl3", lang);
    const ftTop = document.querySelector(".floating-badge-top");
    if (ftTop) {
      ftTop.querySelector(".floating-title").textContent    = t("hero.fc.top.title", lang);
      ftTop.querySelector(".floating-subtitle").textContent = t("hero.fc.top.sub", lang);
    }
    const ftBot = document.querySelector(".floating-badge-bottom");
    if (ftBot) {
      ftBot.querySelector(".floating-title").textContent    = t("hero.fc.bot.title", lang);
      ftBot.querySelector(".floating-subtitle").textContent = t("hero.fc.bot.sub", lang);
    }

    /* ── KPI ── */
    const kpiLabels = document.querySelectorAll(".kpi-label");
    const kpiKeys   = ["kpi.years","kpi.users","kpi.config","kpi.access"];
    kpiLabels.forEach((el,i) => { if(kpiKeys[i]) el.textContent = t(kpiKeys[i], lang); });

    /* ── METHODOLOGY ── */
    const methodTag = document.querySelector("#metodologia .section-tag");
    if (methodTag) methodTag.innerHTML = methodTag.innerHTML.replace(/[^>]*$/, t("method.tag", lang));
    setText("#metodologia .section-title", "method.h2");
    setText("#metodologia .section-subtitle", "method.subtitle");
    const triadCards = document.querySelectorAll(".triad-card");
    const triadData = [
      { h3:"method.ux.h3", p:"method.ux.p", li:["method.ux.li1","method.ux.li2","method.ux.li3"] },
      { h3:"method.biz.h3",p:"method.biz.p",li:["method.biz.li1","method.biz.li2","method.biz.li3"]},
      { h3:"method.ai.h3", p:"method.ai.p", li:["method.ai.li1","method.ai.li2","method.ai.li3"] }
    ];
    triadCards.forEach((card, i) => {
      if (!triadData[i]) return;
      const h3 = card.querySelector("h3");
      if (h3) h3.textContent = t(triadData[i].h3, lang);
      const p  = card.querySelector("p");
      if (p)  p.textContent  = t(triadData[i].p,  lang);
      const spans = card.querySelectorAll(".triad-list li span");
      spans.forEach((s, j) => { if (triadData[i].li[j]) s.textContent = t(triadData[i].li[j], lang); });
    });

    /* ── AI SANDBOX ── */
    const sandboxTag = document.querySelector("#simulador .section-tag");
    if (sandboxTag) sandboxTag.textContent = t("sandbox.tag", lang);
    setText("#simulador .section-title", "sandbox.h2");
    setText("#simulador .section-subtitle", "sandbox.subtitle");
    const taskName = document.getElementById("ai-task-name");
    if (taskName) taskName.textContent = t("sandbox.task", lang);
    const selectLbl = document.querySelector("label[for='ai-scenario-select']");
    if (selectLbl) selectLbl.textContent = t("sandbox.select.lbl", lang);
    const promptLbl = document.querySelector("label[for='ai-prompt-input']");
    if (promptLbl) promptLbl.textContent = t("sandbox.prompt.lbl", lang);
    const runBtn = document.getElementById("ai-run-btn");
    if (runBtn) runBtn.innerHTML = `<svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg> ${t("sandbox.run", lang)}`;
    const opts = document.querySelectorAll("#ai-scenario-select option");
    ["sandbox.opt1","sandbox.opt2","sandbox.opt3","sandbox.opt4"].forEach((k,i)=>{ if(opts[i]) opts[i].textContent = t(k,lang); });
    // Matrix
    const matrixH4 = document.querySelector(".matrix-table-container")?.closest("div")?.querySelector("h4");
    const matrixP  = document.querySelector(".matrix-table-container")?.closest("div")?.querySelector("p");
    const matrixCta = document.querySelector(".matrix-table-container")?.closest("div[style]")?.querySelector("a.btn");
    if (matrixH4) matrixH4.textContent = t("sandbox.matrix.h4", lang);
    if (matrixP)  matrixP.textContent  = t("sandbox.matrix.p",  lang);
    if (matrixCta) matrixCta.textContent = t("sandbox.matrix.cta", lang);
    const ths = document.querySelectorAll(".matrix-table th");
    ["sandbox.th1","sandbox.th2","sandbox.th3","sandbox.th4","sandbox.th5","sandbox.th6","sandbox.th7","sandbox.th8"].forEach((k,i)=>{ if(ths[i]) ths[i].textContent = t(k,lang); });

    /* ── CASE STUDIES ── */
    const casesTag = document.querySelector("#casos .section-tag");
    if (casesTag) casesTag.textContent = t("cases.tag", lang);
    setText("#casos .section-title", "cases.h2");
    setText("#casos .section-subtitle", "cases.subtitle");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const filterKeys = ["cases.filter.all","cases.filter.fintech","cases.filter.banca","cases.filter.ecommerce","cases.filter.ai"];
    filterBtns.forEach((b,i)=>{ if(filterKeys[i]) b.textContent = t(filterKeys[i],lang); });

    const caseCards = document.querySelectorAll(".case-card");
    const caseKeys = [
      { tag:"case1.tag", company:"case1.company", period:"case1.period", title:"case1.title", desc:"case1.desc", mlbls:["case1.m1.lbl","case1.m2.lbl","case1.m3.lbl","case1.m4.lbl"] },
      { tag:"case2.tag", company:"case2.company", period:"case2.period", title:"case2.title", desc:"case2.desc", mlbls:["case2.m1.lbl","case2.m2.lbl","case2.m3.lbl"] },
      { tag:"case3.tag", company:"case3.company", period:"case3.period", title:"case3.title", desc:"case3.desc", mlbls:["case3.m1.lbl","case3.m2.lbl","case3.m3.lbl"] },
      { tag:"case4.tag", company:"case4.company", period:"case4.period", title:"case4.title", desc:"case4.desc", mlbls:["case4.m1.lbl","case4.m2.lbl","case4.m3.lbl"] },
      { tag:"case5.tag", company:"case5.company", period:"case5.period", title:"case5.title", desc:"case5.desc", mlbls:["case5.m1.lbl","case5.m2.lbl","case5.m3.lbl"] }
    ];
    caseCards.forEach((card, i) => {
      const ck = caseKeys[i];
      if (!ck) return;
      const overlay = card.querySelector(".case-overlay-tag");
      if (overlay) overlay.textContent = t(ck.tag, lang);
      const company = card.querySelector(".case-company");
      if (company) company.textContent = t(ck.company, lang);
      const period = card.querySelector(".case-period");
      if (period) period.textContent = t(ck.period, lang);
      const title = card.querySelector(".case-title");
      if (title) title.textContent = t(ck.title, lang);
      const desc = card.querySelector(".case-desc");
      if (desc) desc.textContent = t(ck.desc, lang);
      const lbls = card.querySelectorAll(".case-metric-lbl");
      lbls.forEach((lbl, j) => { if (ck.mlbls[j]) lbl.textContent = t(ck.mlbls[j], lang); });
    });

    /* ── CERTIFICATIONS ── */
    const certsTag = document.querySelector("#cursos .section-tag");
    if (certsTag) certsTag.textContent = t("certs.tag", lang);
    setText("#cursos .section-title", "certs.h2");
    setText("#cursos .section-subtitle", "certs.subtitle");
    const certCards = document.querySelectorAll(".cert-card");
    const certData = [
      { title:"cert1.title", issuer:"cert1.issuer", p:"cert1.p" },
      { title:"cert2.title", issuer:"cert2.issuer", p:"cert2.p" },
      { title:"cert3.title", issuer:"cert3.issuer", p:"cert3.p" },
      { title:"cert4.title", issuer:"cert4.issuer", p:"cert4.p" },
      { title:"cert5.title", issuer:"cert5.issuer", p:"cert5.p" },
      { title:"cert6.title", issuer:"cert6.issuer", p:"cert6.p" }
    ];
    certCards.forEach((card, i) => {
      if (!certData[i]) return;
      const h3 = card.querySelector(".cert-title");
      if (h3) h3.textContent = t(certData[i].title, lang);
      const iss = card.querySelector(".cert-issuer");
      if (iss) iss.textContent = t(certData[i].issuer, lang);
      const p = card.querySelector("p");
      if (p) p.textContent = t(certData[i].p, lang);
    });
    const toolsH4 = document.querySelector("#cursos > div > div:last-child h4");
    if (toolsH4) toolsH4.textContent = t("tools.h4", lang);

    /* ── TIMELINE ── */
    const tlTag = document.querySelector("#trayectoria .section-tag");
    if (tlTag) tlTag.textContent = t("timeline.tag", lang);
    setText("#trayectoria .section-title", "timeline.h2");
    setText("#trayectoria .section-subtitle", "timeline.subtitle");
    const tlItems = document.querySelectorAll(".timeline-item");
    const tlData = [
      { role:"tl1.role", company:"tl1.company", date:"tl1.date", p:"tl1.p" },
      { role:"tl2.role", company:"tl2.company", date:"tl2.date", p:"tl2.p" },
      { role:"tl3.role", company:"tl3.company", date:"tl3.date", p:"tl3.p" },
      { role:"tl4.role", company:"tl4.company", date:"tl4.date", p:"tl4.p" },
      { role:"tl5.role", company:"tl5.company", date:"tl5.date", p:"tl5.p" },
      { role:"tl6.role", company:"tl6.company", date:"tl6.date", p:"tl6.p" }
    ];
    tlItems.forEach((item, i) => {
      if (!tlData[i]) return;
      const role    = item.querySelector(".timeline-role");
      const company = item.querySelector(".timeline-company");
      const date    = item.querySelector(".timeline-date");
      const p       = item.querySelector("p");
      if (role)    role.textContent    = t(tlData[i].role,    lang);
      if (company) company.textContent = t(tlData[i].company, lang);
      if (date)    date.textContent    = t(tlData[i].date,    lang);
      if (p)       p.textContent       = t(tlData[i].p,       lang);
    });
    // CV Banner in timeline
    const cvBanners = document.querySelectorAll(".timeline-container .glass-card h4");
    if (cvBanners[0]) cvBanners[0].innerHTML = `<span>📄</span> ${t("cv.banner.h4", lang).replace("📄 ", "")}`;
    const cvBannerP = document.querySelector(".timeline-container .glass-card p");
    if (cvBannerP) cvBannerP.textContent = t("cv.banner.p", lang);
    const cvBannerBtns = document.querySelectorAll(".timeline-container .glass-card a span:last-child");
    if (cvBannerBtns[0]) cvBannerBtns[0].textContent = t("cv.es.btn", lang);
    if (cvBannerBtns[1]) cvBannerBtns[1].textContent = t("cv.en.btn", lang);

    /* ── CONTACT ── */
    const contactTag = document.querySelector("#contacto .section-tag");
    if (contactTag) contactTag.textContent = t("contact.tag", lang);
    setText("#contacto .section-title", "contact.h2");
    setText("#contacto .section-subtitle", "contact.subtitle");
    const ciCard = document.querySelector(".contact-info-card");
    if (ciCard) {
      const h3 = ciCard.querySelector("h3");
      if (h3) h3.textContent = t("contact.ch.h3", lang);
      const p = ciCard.querySelector("p");
      if (p) p.textContent = t("contact.ch.p", lang);
      const channels = ciCard.querySelectorAll(".contact-channel h4");
      if (channels[0]) channels[0].textContent = t("contact.email.h4", lang);
      if (channels[1]) channels[1].textContent = t("contact.wa.h4",    lang);
      if (channels[2]) channels[2].textContent = t("contact.li.h4",    lang);
      if (channels[3]) channels[3].textContent = t("contact.loc.h4",   lang);
      const locP = ciCard.querySelector(".contact-channel:last-of-type p");
      if (locP) locP.textContent = t("contact.loc.p", lang);
      // CV callout in contact
      const cvH4 = ciCard.querySelector("h4:last-of-type");
      if (cvH4) cvH4.innerHTML = t("contact.cv.h4", lang);
      const cvP = ciCard.querySelector("p:last-of-type");
      if (cvP) cvP.textContent = t("contact.cv.p", lang);
      const cvBtns = ciCard.querySelectorAll(".btn span:last-child");
      if (cvBtns[0]) cvBtns[0].textContent = t("cv.es.btn", lang);
      if (cvBtns[1]) cvBtns[1].textContent = t("cv.en.btn", lang);
    }
    const cf = document.querySelector(".contact-form");
    if (cf) {
      const h3 = cf.querySelector("h3");
      if (h3) h3.textContent = t("contact.form.h3", lang);
      const p = cf.querySelector("p");
      if (p) p.textContent = t("contact.form.p", lang);
    }
    setAttr("#form-name", "placeholder", "form.name.ph");
    setText("label[for='form-name']", "form.name.lbl");
    setAttr("#form-email", "placeholder", "form.email.ph");
    setText("label[for='form-email']", "form.email.lbl");
    setText("label[for='form-interest']", "form.interest.lbl");
    const formOpts = document.querySelectorAll("#form-interest option");
    ["form.opt1","form.opt2","form.opt3","form.opt4"].forEach((k,i)=>{ if(formOpts[i]) formOpts[i].textContent = t(k,lang); });
    setText("label[for='form-message']", "form.msg.lbl");
    setAttr("#form-message", "placeholder", "form.msg.ph");
    const submitBtn = document.querySelector("#contact-form button[type='submit'] span");
    if (submitBtn) submitBtn.textContent = t("form.submit", lang);

    /* ── FOOTER ── */
    const footerLinks = document.querySelectorAll(".footer .nav-link");
    const footerKeys = ["footer.inicio","footer.metodo","footer.casos","footer.cursos"];
    footerLinks.forEach((l,i)=>{ if(footerKeys[i]) l.textContent = t(footerKeys[i],lang); });
    const footerP = document.querySelector(".footer p");
    if (footerP) footerP.textContent = t("footer.copy", lang);

    /* ── MODAL STATIC LABELS ── */
    setText("#modal-title", "modal.overview.h4"); // placeholder (modal.js fills dynamically)
    const modalCloseBtn = document.getElementById("modal-close-btn");
    if (modalCloseBtn) modalCloseBtn.setAttribute("aria-label", t("modal.aria.close", lang));
  }

  function updateLangButton(lang) {
    const btn = document.getElementById("lang-toggle");
    if (!btn) return;
    if (lang === "es") {
      btn.innerHTML = `<span class="lang-flag">🇺🇸</span><span class="lang-label">EN</span>`;
      btn.setAttribute("aria-label", t("nav.aria.lang", "es"));
    } else {
      btn.innerHTML = `<span class="lang-flag">🇪🇸</span><span class="lang-label">ES</span>`;
      btn.setAttribute("aria-label", t("nav.aria.lang", "en"));
    }
  }

  function initLangToggle() {
    const btn = document.getElementById("lang-toggle");
    if (!btn) return;

    const savedLang = getCurrentLang();
    setLang(savedLang);

    btn.addEventListener("click", () => {
      const current = getCurrentLang();
      setLang(current === "es" ? "en" : "es");
    });
  }

  /* Run on DOM ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLangToggle);
  } else {
    initLangToggle();
  }

  /* Expose for external use */
  window.i18n = { setLang, getCurrentLang, t };
})();
