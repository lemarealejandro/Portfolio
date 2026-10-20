/* ==========================================================================
   CASE STUDIES MODAL & GALLERY - ALEJANDRO LE MARE UX PORTFOLIO
   ========================================================================== */

const caseStudiesData = {
  progleasing: {
    title: "Sistema de Workflows y Portal Operativo Lease-to-Own",
    company: "Progressive Leasing | Utah, EE.UU. (vía Ki Technologies)",
    role: "Senior UX Designer",
    period: "Diciembre 2024 - Presente",
    tag: "Fintech Enterprise & IA",
    coverImage: "assets/images/03-react-flow-builder.png",
    gallery: [
      { src: "assets/images/03-react-flow-builder.png", caption: "React Flow Builder: Editor visual de reglas y nodos de aprobación multinivel" },
      { src: "assets/images/08-execution-monitor.png", caption: "Execution Monitor: Tablero en tiempo real de estados de flujos" },
      { src: "assets/images/01-workflow-definitions.png", caption: "Definiciones de Workflows: Vista de catálogo con filtrado de gobernanza" },
      { src: "assets/images/10-review-request-detail.png", caption: "Detalle de revisión: Formulario con aprobación en 1-click y trazabilidad de rechazos" }
    ],
    overview: "Progressive Leasing es el líder en soluciones de arrendamiento con opción a compra en el retail de Estados Unidos. Lideré el diseño integral de la arquitectura y la experiencia de usuario del portal operativo 'ProgCentral' y la herramienta 'React Flow Builder' para la gestión de flujos de aprobación y gobernanza interna.",
    challenge: "Los equipos de operaciones y riesgo en EE.UU. dependían de configuraciones manuales en base de datos para modificar reglas de aprobación entre roles (RM, CCL, Account Managers). Esto generaba cuellos de botella de hasta 3 semanas y un alto índice de errores operacionales.",
    solution: "Diseñé un constructor visual de nodos drag-and-drop con validación lógica en tiempo real. Apliqué síntesis de usabilidad asistida por IA (Claude Cowork) para procesar grabaciones de usuarios y optimizar el tiempo de configuración y la reducción de carga cognitiva.",
    metrics: [
      { val: "-38%", label: "Tiempo de configuración de flujos" },
      { val: "94%", label: "Tasa de éxito en tareas de revisión" },
      { val: "100%", label: "Aprobación en compliance normativo en EE.UU." }
    ],
    skills: ["React Flow UI", "Claude Prompt Framework", "Usability Testing Synthesis", "Design Systems", "Enterprise FinTech", "B2B SaaS"]
  },
  bancobci: {
    title: "Democratización de Plataforma de Inversiones Digitales",
    company: "Banco Bci (Chile)",
    role: "UX Designer",
    period: "Marzo 2022 - Febrero 2024 (2 años)",
    tag: "Banca & Wealth Management",
    coverImage: "assets/images/Step 1.png",
    gallery: [
      { src: "assets/images/Step 1.png", caption: "Paso 1: Diagnóstico de perfil de riesgo con lenguaje humano y sin tecnicismos" },
      { src: "assets/images/Step 2.png", caption: "Paso 2: Comparador interactivo de metas y proyección de rentabilidad" },
      { src: "assets/images/Step 3.png", caption: "Paso 3: Confirmación transparente de costos y activación con firma digital" }
    ],
    overview: "En Banco Bci formé parte del equipo de transformación digital enfocado en democratizar el acceso a productos de inversión (fondos mutuos, acciones y depósitos a plazo) para clientes retail, alineando la experiencia con los OKRs del banco.",
    challenge: "El 64% de los usuarios abandonaba el flujo de inversión antes de concretar su primer aporte debido a la complejidad de las opciones y al miedo a comisiones ocultas o términos financieros intimidantes.",
    solution: "Diseñé una experiencia guiada centrada en 'Metas de vida' en lugar de productos financieros abstractos. Usé IA para testear variantes de UX Writing comprensibles para cualquier usuario y creé simuladores de retorno en tiempo real con microinteracciones de confianza.",
    metrics: [
      { val: "+32%", label: "Aumento en nuevos inversores activos" },
      { val: "-45%", label: "Reducción en tiempo de contratación" },
      { val: "+18 pts", label: "Incremento en NPS de inversión" }
    ],
    skills: ["Wealth Management UX", "Customer Journey Mapping", "UX Writing con IA", "Wireframing & Prototyping", "OKRs de Negocio"]
  },
  falabella: {
    title: "Optimización de Checkout y Escalamiento de Design System",
    company: "Falabella Retail (Latinoamérica)",
    role: "Analista UX",
    period: "Septiembre 2020 - Enero 2022 (1 año 5 meses)",
    tag: "E-Commerce & Retail Masivo",
    coverImage: "assets/images/12-my-skills.png",
    gallery: [
      { src: "assets/images/12-my-skills.png", caption: "Estructura modular de componentes y estados de interacción" },
      { src: "assets/images/18-skill-history-timeline.png", caption: "Flujos de trazabilidad y estados dinámicos" },
      { src: "assets/images/13-certificate-list.png", caption: "Sistemas de diseño escalables y unificación de patrones" }
    ],
    overview: "Falabella es el mayor retailer omnicanal de Sudamérica. Como Analista UX, optimicé los flujos críticos del embudo de compra y colaboré en la adopción regional del sistema de diseño unificado.",
    challenge: "Altas tasas de rebote en la selección de opciones de despacho mixto (retiro en tienda + despacho a domicilio) y discrepancias en los componentes de interfaz entre los equipos de Chile, Perú y Colombia.",
    solution: "Conduje pruebas de usabilidad remotas, benchmarks competitivos y auditorías heurísticas. Rediseñé la selección de métodos de envío en una sola pantalla inteligente con cálculo de fechas garantizadas.",
    metrics: [
      { val: "+1.8%", label: "Incremento en Conversion Rate (CRO)" },
      { val: "-2.5 sem", label: "Aceleración de entrega diseño-código" },
      { val: "+15M", label: "Usuarios impactados mensualmente" }
    ],
    skills: ["CRO & Funnel Analysis", "Design Systems Scalability", "Multinational E-commerce", "Usability Benchmarking", "Agile Squads"]
  },
  everis: {
    title: "Ecosistemas Móviles Nativos y Apps de Campo B2B",
    company: "everis (NTT DATA) | Santander, Telefónica, Transbank",
    role: "UX/UI Designer & Solutions Analyst",
    period: "Junio 2019 - Septiembre 2020 (1 año 4 meses)",
    tag: "Fintech & Telecom",
    coverImage: "assets/images/05-published-workflow.png",
    gallery: [
      { src: "assets/images/05-published-workflow.png", caption: "Superdigital Santander & Transbank: Diseños de navegación rápida y transacciones sin fricción" },
      { src: "assets/images/06-workflow-mapper.png", caption: "Telefónica Campo: Mapeo de tareas de servicio técnico con estados offline" },
      { src: "assets/images/07-new-mapping-dialog.png", caption: "Interacciones táctiles de alta densidad adaptadas a dispositivos móviles robustos" }
    ],
    overview: "En la consultora multinacional everis (ahora NTT DATA), diseñé soluciones de alta exigencia para tres clientes estratégicos: la fintech Superdigital del Banco Santander, la app técnica de campo para Telefónica y la experiencia móvil de Transbank.",
    challenge: "Los técnicos de Telefónica sufrían demoras y pérdida de datos en terreno por interfaces mal adaptadas al trabajo bajo el sol o con guantes. Simultáneamente, Santander necesitaba una banca móvil ultra-rápida para el segmento no bancarizado.",
    solution: "Diseñé sistemas de interfaz adaptativos de alto contraste con botones grandes y soporte offline en Ionic 4 para Telefónica, y flujos simplificados de enrolamiento y transferencias instantáneas para Santander Superdigital.",
    metrics: [
      { val: "-50%", label: "Tiempo de resolución de órdenes técnicas" },
      { val: "100%", label: "Disponibilidad offline en terreno" },
      { val: "Ionic 4", label: "Frontend maquetado y validado" }
    ],
    skills: ["Ionic 4 Maquetación", "Mobile Native UX/UI", "Offline-First Design", "Payment Gateway UX", "Telefónica & Santander"]
  }
};

function initModal() {
  const modal = document.getElementById("case-study-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const caseCards = document.querySelectorAll(".case-card");

  if (!modal) return;

  function openCaseModal(caseId) {
    const data = caseStudiesData[caseId];
    if (!data) return;

    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-company").textContent = data.company;
    document.getElementById("modal-role-period").textContent = `${data.role} • ${data.period}`;
    document.getElementById("modal-tag").textContent = data.tag;
    document.getElementById("modal-overview").textContent = data.overview;
    document.getElementById("modal-challenge").textContent = data.challenge;
    document.getElementById("modal-solution").textContent = data.solution;

    // Render Gallery
    const galleryContainer = document.getElementById("modal-gallery-container");
    galleryContainer.innerHTML = "";
    data.gallery.forEach((item, index) => {
      const slide = document.createElement("div");
      slide.className = "modal-gallery-slide";
      slide.style.marginBottom = "24px";
      slide.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy" style="border-radius: 12px; border: 1px solid var(--border-subtle); width: 100%;">
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px; text-align: center;">${item.caption}</p>
      `;
      galleryContainer.appendChild(slide);
    });

    // Render Metrics
    const metricsContainer = document.getElementById("modal-metrics-container");
    metricsContainer.innerHTML = "";
    data.metrics.forEach(m => {
      const card = document.createElement("div");
      card.className = "case-metric-item";
      card.style.background = "rgba(255,255,255,0.03)";
      card.style.padding = "16px";
      card.style.borderRadius = "12px";
      card.style.border = "1px solid var(--border-subtle)";
      card.innerHTML = `
        <span class="case-metric-val" style="font-size: 1.6rem; color: var(--color-accent-emerald); font-weight: 800;">${m.val}</span>
        <span class="case-metric-lbl" style="font-size: 0.8rem; color: var(--text-secondary);">${m.label}</span>
      `;
      metricsContainer.appendChild(card);
    });

    // Render Skills
    const skillsContainer = document.getElementById("modal-skills-container");
    skillsContainer.innerHTML = "";
    data.skills.forEach(s => {
      const badge = document.createElement("span");
      badge.className = "badge badge-ai";
      badge.textContent = s;
      skillsContainer.appendChild(badge);
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  caseCards.forEach(card => {
    card.addEventListener("click", () => {
      const caseId = card.getAttribute("data-case-id");
      openCaseModal(caseId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", initModal);
