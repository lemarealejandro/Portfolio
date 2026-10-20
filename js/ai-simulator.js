/* ==========================================================================
   AI WORKFLOW & TERMINAL SIMULATOR - ALEJANDRO LE MARE UX PORTFOLIO
   ========================================================================== */

const aiScenarios = {
  checkout_friction: {
    model: "Claude 3.7 Sonnet (Claude Cowork Framework)",
    task: "Análisis Heurístico de Fricción en Funnel de Lease-to-Own",
    inputPrompt: "Analizar el funnel de checkout de Progressive Leasing. Identificar puntos de abandono en la selección de cuotas y generar recomendaciones heurísticas priorizadas por impacto en conversión y esfuerzo de desarrollo.",
    output: [
      { type: "tag", text: "⚡ [CLAUDE_COWORK] Iniciando evaluación heurística..." },
      { type: "text", text: "Analizando 12 pantallas del flujo de pago y 420 transcripciones de usuarios..." },
      { type: "highlight", text: "Detección de Fricciones Críticas:" },
      { type: "text", text: "1. Sobrecarga cognitiva en el desglose de tarifas de entrega (Task Success decayó al 38%)." },
      { type: "text", text: "2. Ambigüedad en la selección de periodicidad (quincenal vs mensual)." },
      { type: "highlight", text: "Solución de Diseño UX Propuesta:" },
      { type: "text", text: "• Agrupar costo transparente 'Total Lease Cost' con toggle dinámico de cálculo en vivo." },
      { type: "text", text: "• Reducir de 4 pasos a 2 pantallas con feedback progresivo y confirmación visual inmediata." },
      { type: "impact", text: "📈 Impacto Estimado en Negocio: +14.2% Tasa de Conversión | -28% Consultas de soporte" }
    ]
  },
  gemini_multimodal: {
    model: "Google Gemini 2.5 Pro (Multimodal Vision UX)",
    task: "Auditoría Multimodal de Jerarquía Visual y Design System",
    inputPrompt: "Evaluar el screenshot del portal operativo 'ProgCentral' para cumplimiento de accesibilidad WCAG 2.1 AA, densidad de información y balance visual de componentes React Flow.",
    output: [
      { type: "tag", text: "👁️ [GEMINI_MULTIMODAL] Procesando captura de interfaz 1920x1080..." },
      { type: "text", text: "Mapeando elementos visuales, ratio de contraste y mapas de calor simulados..." },
      { type: "highlight", text: "Diagnóstico Multimodal:" },
      { type: "text", text: "• Nodos de aprobación 'RM & CCL' presentan contraste insuficiente en modo oscuro (3.2:1)." },
      { type: "text", text: "• La jerarquía del botón 'Validate & Publish' compite con 'Discard Workflow'." },
      { type: "highlight", text: "Ajuste de Tokens y UI:" },
      { type: "text", text: "• Rebalanceo de tokens de color: fondo #111827 con bordes #4F46E5 a 4.8:1." },
      { type: "text", text: "• Implementación de badge flotante de estado con micro-animación de pulso." },
      { type: "impact", text: "📈 Impacto: 100% Accesibilidad WCAG AA aprobada | 0 errores en auditoría de producto" }
    ]
  },
  usability_synthesis: {
    model: "Claude Prompt Engine (Síntesis de Pruebas A/B)",
    task: "Síntesis Automatizada de 10 Sesiones de Pruebas de Usabilidad",
    inputPrompt: "Sintetizar matriz de 10 participantes para 'Design A' vs 'Design B' en carrito de compras. Calcular promedio de confianza, tiempo en tarea y matriz de afinidad.",
    output: [
      { type: "tag", text: "📊 [UX_ANALYZER_CLAUDE] Computando métricas de investigación cualitativa..." },
      { type: "text", text: "Participantes procesados: 10/10 | Tareas evaluadas: 5 por usuario." },
      { type: "highlight", text: "Comparativa Estadística A/B:" },
      { type: "text", text: "• Tasa de Éxito en Tarea: Design A = 72% | Design B = 94% (+22% de mejora)." },
      { type: "text", text: "• Nivel de Confianza Promedio (1-5): Design A = 3.1 | Design B = 4.4." },
      { type: "text", text: "• Tiempo promedio por tarea: Design A = 345s | Design B = 220s (-36% tiempo)." },
      { type: "impact", text: "📈 Decisión de Negocio: Despliegue de 'Design B' validado con datos duros para producción." }
    ]
  },
  business_okr: {
    model: "Claude + Business Framework (MBO & Product Strategy)",
    task: "Alineación de Flujo de Inversiones con OKRs y CAC/LTV",
    inputPrompt: "Modelar el impacto de un nuevo onboarding de inversión digital en Banco BCI sobre los OKRs trimestrales del área de Wealth Management.",
    output: [
      { type: "tag", text: "💼 [BIZ_UX_STRATEGY] Cruzando métricas de experiencia con KPIs financieros..." },
      { type: "text", text: "Objetivo Corporativo: Incrementar en 25% la cartera de inversionistas jóvenes (25-35 años)." },
      { type: "highlight", text: "Estrategia de Producto & UX:" },
      { type: "text", text: "• Simulador interactivo de metas '¿Cuánto necesito para mi meta?' en vez de jerga de renta fija/variable." },
      { type: "text", text: "• Proceso de enrolamiento simplificado con firma biométrica y recomendaciones personalizadas." },
      { type: "impact", text: "📈 Resultado Cuantificable: Reducción del Costo de Adquisición (CAC) en un 32% y aumento del LTV en un 28%." }
    ]
  }
};

function initAiSimulator() {
  const scenarioSelect = document.getElementById("ai-scenario-select");
  const modelBadge = document.getElementById("ai-model-badge");
  const taskName = document.getElementById("ai-task-name");
  const promptInput = document.getElementById("ai-prompt-input");
  const outputContainer = document.getElementById("ai-terminal-output");
  const runBtn = document.getElementById("ai-run-btn");

  if (!scenarioSelect || !outputContainer) return;

  function loadScenario(scenarioKey) {
    const data = aiScenarios[scenarioKey];
    if (!data) return;

    if (modelBadge) modelBadge.textContent = data.model;
    if (taskName) taskName.textContent = data.task;
    if (promptInput) promptInput.value = data.inputPrompt;

    // Render output
    outputContainer.innerHTML = "";
    
    // Typing simulation
    let delay = 0;
    data.output.forEach((item, index) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = "output-line";

        if (item.type === "tag") {
          line.className += " output-tag";
        } else if (item.type === "highlight") {
          line.className += " output-highlight";
        } else if (item.type === "impact") {
          line.className += " output-impact";
        }

        line.textContent = item.text;
        outputContainer.appendChild(line);
        outputContainer.scrollTop = outputContainer.scrollHeight;
      }, delay);
      delay += 140;
    });
  }

  // Initial load
  loadScenario(scenarioSelect.value);

  // Change listener
  scenarioSelect.addEventListener("change", (e) => {
    loadScenario(e.target.value);
  });

  // Run button re-trigger
  if (runBtn) {
    runBtn.addEventListener("click", () => {
      loadScenario(scenarioSelect.value);
    });
  }
}

document.addEventListener("DOMContentLoaded", initAiSimulator);
