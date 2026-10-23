/* ==========================================================================
   AI WORKFLOW & TERMINAL SIMULATOR - ALEJANDRO LE MARE UX PORTFOLIO
   Bilingual (ES / EN) — reacts to i18n language changes
   ========================================================================== */

const aiScenarios = {
  checkout_friction: {
    es: {
      model:       "Claude 3.7 Sonnet (Claude Cowork Framework)",
      task:        "Originación RLD, Carrito ODS y Firma QR 'Scan to Sign'",
      inputPrompt: "Analizar el flujo de originación RLD y Carrito ODS en ProgCentral (Progressive Leasing). Identificar causas de discrepancia entre lease y orden de compra, optimizar el Payment Estimator y modelar el flujo de firma sin contacto 'Scan to Sign'.",
      output: [
        { type: "tag",       text: "⚡ [CLAUDE_COWORK] Analizando flujos de ProgCentral (MS-3625 / MS-3772)..." },
        { type: "text",      text: "Procesando pantallas de Payment Estimator, carrito ODS y capturas de RLD..." },
        { type: "highlight", text: "Detección de Fricciones & Puntos Críticos:" },
        { type: "text",      text: "1. Discrepancia entre ítems del lease y orden ODS bloqueaba la finalización en caja (MS-3814)." },
        { type: "text",      text: "2. Fricción y demora física al firmar contratos en pantallas compartidas de retail." },
        { type: "highlight", text: "Solución de Diseño UX Implementada:" },
        { type: "text",      text: "• Modal de Firma QR 'Scan to Sign' para traspaso fluido del contrato al smartphone del cliente (MS-3772)." },
        { type: "text",      text: "• Panel de alerta con resolución automática de discrepancias y estado de carga previo en ODS." },
        { type: "impact",    text: "📈 Impacto Comprobado: -38% Tiempo de ciclo en caja | 94% Tasa de éxito en originación" }
      ]
    },
    en: {
      model:       "Claude 3.7 Sonnet (Claude Cowork Framework)",
      task:        "RLD Origination, ODS Cart & QR 'Scan to Sign' Signature",
      inputPrompt: "Analyze the RLD origination and ODS Cart flow in ProgCentral (Progressive Leasing). Identify causes of discrepancy between lease and purchase order, optimize the Payment Estimator and model the contactless 'Scan to Sign' signing flow.",
      output: [
        { type: "tag",       text: "⚡ [CLAUDE_COWORK] Analyzing ProgCentral flows (MS-3625 / MS-3772)..." },
        { type: "text",      text: "Processing Payment Estimator screens, ODS cart and RLD screenshots..." },
        { type: "highlight", text: "Friction Detection & Critical Pain Points:" },
        { type: "text",      text: "1. Discrepancy between lease items and ODS order was blocking checkout completion (MS-3814)." },
        { type: "text",      text: "2. Physical friction and delays when signing contracts on shared retail screens." },
        { type: "highlight", text: "UX Design Solution Implemented:" },
        { type: "text",      text: "• 'Scan to Sign' QR Signature Modal for seamless contract handoff to the customer's smartphone (MS-3772)." },
        { type: "text",      text: "• Alert panel with automatic discrepancy resolution and pre-load state in ODS cart." },
        { type: "impact",    text: "📈 Proven Impact: -38% Checkout cycle time | 94% Success rate in origination" }
      ]
    }
  },

  gemini_multimodal: {
    es: {
      model:       "Google Gemini 2.5 Pro (Multimodal Vision UX)",
      task:        "Auditoría Multimodal de Jerarquía Visual y Design System",
      inputPrompt: "Evaluar el screenshot del portal operativo 'ProgCentral' para cumplimiento de accesibilidad WCAG 2.1 AA, densidad de información y balance visual de componentes React Flow.",
      output: [
        { type: "tag",       text: "👁️ [GEMINI_MULTIMODAL] Procesando captura de interfaz 1920x1080..." },
        { type: "text",      text: "Mapeando elementos visuales, ratio de contraste y mapas de calor simulados..." },
        { type: "highlight", text: "Diagnóstico Multimodal:" },
        { type: "text",      text: "• Nodos de aprobación 'RM & CCL' presentan contraste insuficiente en modo oscuro (3.2:1)." },
        { type: "text",      text: "• La jerarquía del botón 'Validate & Publish' compite con 'Discard Workflow'." },
        { type: "highlight", text: "Ajuste de Tokens y UI:" },
        { type: "text",      text: "• Rebalanceo de tokens de color: fondo #111827 con bordes #4F46E5 a 4.8:1." },
        { type: "text",      text: "• Implementación de badge flotante de estado con micro-animación de pulso." },
        { type: "impact",    text: "📈 Impacto: 100% Accesibilidad WCAG AA aprobada | 0 errores en auditoría de producto" }
      ]
    },
    en: {
      model:       "Google Gemini 2.5 Pro (Multimodal Vision UX)",
      task:        "Multimodal Visual Hierarchy Audit & Design System",
      inputPrompt: "Evaluate the 'ProgCentral' operational portal screenshot for WCAG 2.1 AA accessibility compliance, information density and visual balance of React Flow components.",
      output: [
        { type: "tag",       text: "👁️ [GEMINI_MULTIMODAL] Processing interface screenshot 1920x1080..." },
        { type: "text",      text: "Mapping visual elements, contrast ratio and simulated heat maps..." },
        { type: "highlight", text: "Multimodal Diagnosis:" },
        { type: "text",      text: "• 'RM & CCL' approval nodes show insufficient contrast in dark mode (3.2:1)." },
        { type: "text",      text: "• The 'Validate & Publish' button hierarchy competes with 'Discard Workflow'." },
        { type: "highlight", text: "Token & UI Adjustment:" },
        { type: "text",      text: "• Color token rebalance: background #111827 with #4F46E5 borders at 4.8:1." },
        { type: "text",      text: "• Floating status badge implementation with pulse micro-animation." },
        { type: "impact",    text: "📈 Impact: 100% WCAG AA Accessibility approved | 0 errors in product audit" }
      ]
    }
  },

  usability_synthesis: {
    es: {
      model:       "Claude Prompt Engine (Síntesis de Pruebas A/B)",
      task:        "Síntesis Automatizada de 10 Sesiones de Pruebas de Usabilidad",
      inputPrompt: "Sintetizar matriz de 10 participantes para 'Design A' vs 'Design B' en carrito de compras. Calcular promedio de confianza, tiempo en tarea y matriz de afinidad.",
      output: [
        { type: "tag",       text: "📊 [UX_ANALYZER_CLAUDE] Computando métricas de investigación cualitativa..." },
        { type: "text",      text: "Participantes procesados: 10/10 | Tareas evaluadas: 5 por usuario." },
        { type: "highlight", text: "Comparativa Estadística A/B:" },
        { type: "text",      text: "• Tasa de Éxito en Tarea: Design A = 72% | Design B = 94% (+22% de mejora)." },
        { type: "text",      text: "• Nivel de Confianza Promedio (1-5): Design A = 3.1 | Design B = 4.4." },
        { type: "text",      text: "• Tiempo promedio por tarea: Design A = 345s | Design B = 220s (-36% tiempo)." },
        { type: "impact",    text: "📈 Decisión de Negocio: Despliegue de 'Design B' validado con datos duros para producción." }
      ]
    },
    en: {
      model:       "Claude Prompt Engine (A/B Test Synthesis)",
      task:        "Automated Synthesis of 10 Usability Test Sessions",
      inputPrompt: "Synthesize a 10-participant matrix for 'Design A' vs 'Design B' in the shopping cart. Calculate average confidence, task time and affinity matrix.",
      output: [
        { type: "tag",       text: "📊 [UX_ANALYZER_CLAUDE] Computing qualitative research metrics..." },
        { type: "text",      text: "Participants processed: 10/10 | Tasks evaluated: 5 per user." },
        { type: "highlight", text: "A/B Statistical Comparison:" },
        { type: "text",      text: "• Task Success Rate: Design A = 72% | Design B = 94% (+22% improvement)." },
        { type: "text",      text: "• Average Confidence Level (1-5): Design A = 3.1 | Design B = 4.4." },
        { type: "text",      text: "• Average task time: Design A = 345s | Design B = 220s (-36% time)." },
        { type: "impact",    text: "📈 Business Decision: 'Design B' deployment validated with hard data for production." }
      ]
    }
  },

  business_okr: {
    es: {
      model:       "Claude + Business Framework (MBO & Product Strategy)",
      task:        "Alineación de Flujo de Inversiones con OKRs y CAC/LTV",
      inputPrompt: "Modelar el impacto de un nuevo onboarding de inversión digital en Banco BCI sobre los OKRs trimestrales del área de Wealth Management.",
      output: [
        { type: "tag",       text: "💼 [BIZ_UX_STRATEGY] Cruzando métricas de experiencia con KPIs financieros..." },
        { type: "text",      text: "Objetivo Corporativo: Incrementar en 25% la cartera de inversionistas jóvenes (25-35 años)." },
        { type: "highlight", text: "Estrategia de Producto & UX:" },
        { type: "text",      text: "• Simulador interactivo de metas '¿Cuánto necesito para mi meta?' en vez de jerga de renta fija/variable." },
        { type: "text",      text: "• Proceso de enrolamiento simplificado con firma biométrica y recomendaciones personalizadas." },
        { type: "impact",    text: "📈 Resultado Cuantificable: Reducción del Costo de Adquisición (CAC) en un 32% y aumento del LTV en un 28%." }
      ]
    },
    en: {
      model:       "Claude + Business Framework (MBO & Product Strategy)",
      task:        "Investment Flow Alignment with OKRs & CAC/LTV",
      inputPrompt: "Model the impact of a new digital investment onboarding at Banco BCI on the Wealth Management area's quarterly OKRs.",
      output: [
        { type: "tag",       text: "💼 [BIZ_UX_STRATEGY] Cross-referencing experience metrics with financial KPIs..." },
        { type: "text",      text: "Corporate Goal: Increase the young investor portfolio (25-35 years) by 25%." },
        { type: "highlight", text: "Product & UX Strategy:" },
        { type: "text",      text: "• Interactive goal simulator 'How much do I need for my goal?' instead of fixed/variable income jargon." },
        { type: "text",      text: "• Simplified enrollment process with biometric signature and personalized recommendations." },
        { type: "impact",    text: "📈 Quantifiable Outcome: Acquisition Cost (CAC) reduction of 32% and LTV increase of 28%." }
      ]
    }
  }
};

/* --------------------------------------------------------------------------
   Simulator Engine
   -------------------------------------------------------------------------- */
function getCurrentSimulatorLang() {
  // Read from the i18n system if available, otherwise localStorage
  if (window.i18n) return window.i18n.getCurrentLang();
  return localStorage.getItem("portfolio_lang") || "en";
}

function initAiSimulator() {
  const scenarioSelect   = document.getElementById("ai-scenario-select");
  const modelBadge       = document.getElementById("ai-model-badge");
  const taskName         = document.getElementById("ai-task-name");
  const promptInput      = document.getElementById("ai-prompt-input");
  const outputContainer  = document.getElementById("ai-terminal-output");
  const runBtn           = document.getElementById("ai-run-btn");

  if (!scenarioSelect || !outputContainer) return;

  function loadScenario(scenarioKey) {
    const lang   = getCurrentSimulatorLang();
    const entry  = aiScenarios[scenarioKey];
    if (!entry) return;
    const data = entry[lang] || entry["en"];

    if (modelBadge)  modelBadge.textContent  = data.model;
    if (taskName)    taskName.textContent     = data.task;
    if (promptInput) promptInput.value        = data.inputPrompt;

    // Clear & animate output
    outputContainer.innerHTML = "";
    let delay = 0;
    data.output.forEach((item) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = "output-line";
        if (item.type === "tag")       line.className += " output-tag";
        else if (item.type === "highlight") line.className += " output-highlight";
        else if (item.type === "impact")    line.className += " output-impact";
        line.textContent = item.text;
        outputContainer.appendChild(line);
        outputContainer.scrollTop = outputContainer.scrollHeight;
      }, delay);
      delay += 140;
    });
  }

  // Expose reload function so i18n.js can call it on language switch
  window.reloadAiSimulator = () => loadScenario(scenarioSelect.value);

  // Initial load
  loadScenario(scenarioSelect.value);

  // Scenario change
  scenarioSelect.addEventListener("change", (e) => loadScenario(e.target.value));

  // Run button
  if (runBtn) runBtn.addEventListener("click", () => loadScenario(scenarioSelect.value));
}

document.addEventListener("DOMContentLoaded", initAiSimulator);
