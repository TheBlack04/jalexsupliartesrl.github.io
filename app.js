/* ============================================================
   JALEX SUPLIARTES S.R.L. — JAVASCRIPT PRINCIPAL
   ============================================================ */

// ---- PRODUCTOS DATA ----
const PRODUCTOS = [
  // SUMINISTROS
  {
    id: 1, cat: 'suministros',
    emoji: '🔧', bgColor: 'linear-gradient(135deg,#1a1200,#3a2a00)',
    nombre: 'Herramientas Manuales',
    desc: 'Juegos de herramientas de alta resistencia para uso profesional y empresarial.',
    badge: 'popular',
    wa: 'Hola!%20Me%20interesa%20cotizar%20Herramientas%20Manuales.'
  },
  {
    id: 2, cat: 'suministros',
    emoji: '📦', bgColor: 'linear-gradient(135deg,#001a1a,#003a3a)',
    nombre: 'Material de Embalaje',
    desc: 'Cajas, plástico de burbujas, cintas y todo lo necesario para empacar productos.',
    badge: 'nuevo',
    wa: 'Hola!%20Me%20interesa%20cotizar%20Material%20de%20Embalaje.'
  },
  {
    id: 3, cat: 'suministros',
    emoji: '🔩', bgColor: 'linear-gradient(135deg,#0a0a1a,#1a1a3a)',
    nombre: 'Ferretería General',
    desc: 'Tornillos, pernos, anclajes, tuercas y todo tipo de elementos de sujeción.',
    badge: null,
    wa: 'Hola!%20Me%20interesa%20cotizar%20Ferretería%20General.'
  },
  {
    id: 4, cat: 'suministros',
    emoji: '🧤', bgColor: 'linear-gradient(135deg,#1a0a00,#3a1a00)',
    nombre: 'Equipos de Protección',
    desc: 'Guantes, lentes, cascos, mascarillas y equipo de seguridad industrial.',
    badge: 'popular',
    wa: 'Hola!%20Me%20interesa%20cotizar%20Equipos%20de%20Protecci%C3%B3n.'
  },
  // ARTES
  {
    id: 5, cat: 'artes',
    emoji: '🎨', bgColor: 'linear-gradient(135deg,#1a0a1a,#3a1a3a)',
    nombre: 'Pinturas Acrílicas',
    desc: 'Set completo de pinturas acrílicas de alta calidad para artistas y proyectos creativos.',
    badge: 'popular',
    wa: 'Hola!%20Me%20interesa%20cotizar%20Pinturas%20Acr%C3%ADlicas.'
  },
  {
    id: 6, cat: 'artes',
    emoji: '✏️', bgColor: 'linear-gradient(135deg,#001a00,#003a00)',
    nombre: 'Materiales de Dibujo',
    desc: 'Lápices de grafito, carboncillo, marcadores y bolígrafos de precisión.',
    badge: 'nuevo',
    wa: 'Hola!%20Me%20interesa%20cotizar%20Materiales%20de%20Dibujo.'
  },
  {
    id: 7, cat: 'artes',
    emoji: '🖼️', bgColor: 'linear-gradient(135deg,#1a1000,#3a2500)',
    nombre: 'Lienzos & Bastidores',
    desc: 'Lienzos de algodón y lino en múltiples tamaños, bastidores de madera de calidad.',
    badge: null,
    wa: 'Hola!%20Me%20interesa%20cotizar%20Lienzos%20y%20Bastidores.'
  },
  {
    id: 8, cat: 'artes',
    emoji: '🖌️', bgColor: 'linear-gradient(135deg,#0a001a,#20003a)',
    nombre: 'Pinceles Profesionales',
    desc: 'Colección de pinceles de cerdas naturales y sintéticas para todo tipo de técnica.',
    badge: 'oferta',
    wa: 'Hola!%20Me%20interesa%20cotizar%20Pinceles%20Profesionales.'
  },
  // OFICINA
  {
    id: 9, cat: 'oficina',
    emoji: '🖨️', bgColor: 'linear-gradient(135deg,#001010,#002525)',
    nombre: 'Suministros de Impresión',
    desc: 'Tóner, cartuchos de tinta, papeles especiales y materiales para impresión profesional.',
    badge: 'popular',
    wa: 'Hola!%20Me%20interesa%20cotizar%20Suministros%20de%20Impresi%C3%B3n.'
  },
  {
    id: 10, cat: 'oficina',
    emoji: '📋', bgColor: 'linear-gradient(135deg,#100010,#250025)',
    nombre: 'Papelería & Archivos',
    desc: 'Folders, carpetas, papeles, blocks y todo lo necesario para organizar tu oficina.',
    badge: null,
    wa: 'Hola!%20Me%20interesa%20cotizar%20Papelería%20y%20Archivos.'
  },
  {
    id: 11, cat: 'oficina',
    emoji: '🖥️', bgColor: 'linear-gradient(135deg,#100800,#252000)',
    nombre: 'Accesorios de Escritorio',
    desc: 'Organizadores, soportes, mouse pads, auriculares y accesorios para tu espacio de trabajo.',
    badge: 'nuevo',
    wa: 'Hola!%20Me%20interesa%20cotizar%20Accesorios%20de%20Escritorio.'
  },
  // CONSTRUCCION
  {
    id: 12, cat: 'construccion',
    emoji: '🏗️', bgColor: 'linear-gradient(135deg,#0a0a00,#202000)',
    nombre: 'Materiales de Acabado',
    desc: 'Pintura de paredes, rodillos, brochas, masilla y materiales de acabado interior.',
    badge: 'popular',
    wa: 'Hola!%20Me%20interesa%20cotizar%20Materiales%20de%20Acabado.'
  },
];

// ---- UTILS ----
const WA_NUM = '18297815458';
function waLink(msg) {
  return `https://wa.me/${WA_NUM}?text=${msg}`;
}

// ---- RENDER PRODUCTOS ----
function renderProductos(cat) {
  const grid = document.getElementById('productos-grid');
  if (!grid) return;

  const items = cat === 'all' ? PRODUCTOS : PRODUCTOS.filter(p => p.cat === cat);

  grid.innerHTML = items.map(p => {
    const badge = p.badge
      ? `<span class="producto-badge badge-${p.badge}">${p.badge === 'nuevo' ? 'Nuevo' : p.badge === 'popular' ? 'Popular' : 'Oferta'}</span>`
      : '';
    return `
    <div class="producto-card" data-cat="${p.cat}">
      <div class="producto-img" style="background:${p.bgColor}">
        ${badge}
        <span style="font-size:3.2rem">${p.emoji}</span>
      </div>
      <div class="producto-info">
        <h4>${p.nombre}</h4>
        <p>${p.desc}</p>
        <a href="${waLink(p.wa)}" target="_blank" class="producto-cta">
          <i class="fab fa-whatsapp"></i> Solicitar Cotización
        </a>
      </div>
    </div>`;
  }).join('');

  // Animate new cards
  setTimeout(() => {
    grid.querySelectorAll('.producto-card').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity .4s ease ${i * 0.06}s, transform .4s ease ${i * 0.06}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }, 10);
}

// ---- FILTER TABS ----
function initFilters() {
  const filters = document.querySelectorAll('.cat-filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProductos(btn.dataset.cat);
    });
  });
  renderProductos('all');
}

// ---- NAVBAR ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveLink();
  }, { passive: true });

  // Hamburger menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ---- ACTIVE LINK ----
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');
  let current    = '';

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}

// ---- SCROLL ANIMATIONS ----
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

// ---- STAGGER GRID ANIMATIONS ----
function initGridAnimations() {
  const gridObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.servicio-card, .testimonio-card, .mv-card');
        children.forEach((child, i) => {
          child.style.opacity = '0';
          child.style.transform = 'translateY(24px)';
          child.style.transition = `opacity .5s ease ${i * 0.12}s, transform .5s ease ${i * 0.12}s`;
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          }, 100 + i * 120);
        });
        gridObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.servicios-grid, .testimonios-grid, .mv-grid').forEach(g => {
    gridObserver.observe(g);
  });
}

// ---- SMOOTH SCROLL ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ---- TICKER PAUSE ON HOVER ----
function initTicker() {
  const ticker = document.querySelector('.ticker');
  if (!ticker) return;
  ticker.parentElement.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
  });
  ticker.parentElement.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
  });
}

// ---- BACK TO TOP (scroll arrow) ----
function initScrollHero() {
  const scrollBtn = document.querySelector('.hero-scroll');
  if (!scrollBtn) return;
  scrollBtn.addEventListener('click', () => {
    const nosotros = document.getElementById('nosotros');
    if (nosotros) nosotros.scrollIntoView({ behavior: 'smooth' });
  });
  scrollBtn.style.cursor = 'pointer';
}

// ---- GALLERY PLACEHOLDER MESSAGE ----
function initGallery() {
  const gals = document.querySelectorAll('.gal-placeholder');
  gals.forEach(gal => {
    gal.addEventListener('click', () => {
      const label = gal.querySelector('.gal-overlay span')?.textContent || 'Proyecto';
      const msg = encodeURIComponent(`Hola! Vi la galería de su web y me interesa el proyecto: "${label}". ¿Me pueden dar más información?`);
      window.open(`https://wa.me/${WA_NUM}?text=${msg}`, '_blank');
    });
    gal.style.cursor = 'pointer';
  });
}

// ---- ACTIVE HIGHLIGHT in nav on load ----
function highlightCurrentSection() {
  updateActiveLink();
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFilters();
  initAnimations();
  initGridAnimations();
  initSmoothScroll();
  initTicker();
  initScrollHero();
  initGallery();
  highlightCurrentSection();

  // Reduce motion support
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.classList.add('visible');
    });
  }
});
