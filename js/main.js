/* ==========================================================================
   MAIN APPLICATION LOGIC - ALEJANDRO LE MARE UX PORTFOLIO
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileMenu();
  initNavigationSpy();
  initCaseFilters();
  initCounterAnimations();
  initContactForm();
});

/* --------------------------------------------------------------------------
   Theme Switcher (Dark / Light)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === "dark" 
    ? `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
    : `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
}

/* --------------------------------------------------------------------------
   Mobile Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (!mobileBtn || !navLinks) return;

  mobileBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/* --------------------------------------------------------------------------
   Navigation Spy on Scroll
   -------------------------------------------------------------------------- */
function initNavigationSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Case Studies Category Filtering
   -------------------------------------------------------------------------- */
function initCaseFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const caseCards = document.querySelectorAll(".case-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      caseCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category.includes(filter)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   KPI Number Counter Animation
   -------------------------------------------------------------------------- */
function initCounterAnimations() {
  const counters = document.querySelectorAll(".kpi-number");
  let animated = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-target"), 10);
      const prefix = counter.getAttribute("data-prefix") || "";
      const suffix = counter.getAttribute("data-suffix") || "";
      let count = 0;
      const speed = target > 50 ? 20 : 60;

      const updateCount = () => {
        const increment = Math.ceil(target / 30);
        count += increment;
        if (count < target) {
          counter.textContent = `${prefix}${count}${suffix}`;
          setTimeout(updateCount, speed);
        } else {
          counter.textContent = `${prefix}${target}${suffix}`;
        }
      };
      updateCount();
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        runCounters();
      }
    });
  }, { threshold: 0.3 });

  const kpiSection = document.querySelector(".kpi-grid");
  if (kpiSection) {
    observer.observe(kpiSection);
  }
}

/* --------------------------------------------------------------------------
   Contact Form Validation & Feedback
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !message) {
      if (feedback) {
        feedback.innerHTML = `<span style="color: #EF4444;">Por favor completa todos los campos requeridos.</span>`;
      }
      return;
    }

    // Direct mailto fallback or simulated success
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `Enviando mensaje...`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = `¡Mensaje Enviado con Éxito! ✓`;
      submitBtn.style.background = "#10B981";

      if (feedback) {
        feedback.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); padding: 14px; border-radius: 8px; color: #34D399; margin-top: 14px;">
            ¡Gracias, <strong>${name}</strong>! He recibido tu consulta. También puedes escribirme directamente a <a href="mailto:lemare.alejandro@gmail.com" style="text-decoration: underline; color: #FFFFFF;">lemare.alejandro@gmail.com</a> o por WhatsApp al +56 9 5919 1255.
          </div>
        `;
      }

      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = "";
      }, 5000);
    }, 1000);
  });
}
