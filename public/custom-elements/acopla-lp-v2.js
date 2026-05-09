/**
 * ACOPLA Landing Page - Web Component v2
 * 
 * ✅ Versão 2 corrigida:
 * - Web Component puro (class extends HTMLElement)
 * - shadowDOM encapsulado
 * - Sem dependências Velo
 * - Compatível 100% com Wix Custom Elements
 * 
 * Uso no Wix:
 * 1. Arquivo: public/custom-elements/acopla-lp-v2.js
 * 2. Tag: acopla-lp-v2
 * 3. ID: acoplaLpV2
 */

const ACOPLA_STYLES_V2 = `
@import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Mono:wght@400;500&display=swap');

:host {
  display: block;
  width: 100%;
  --green: #00602a;
  --green-d: #004d22;
  --lime: #bcdb05;
  --lime-d: #a3bf04;
  --lime-l: rgba(188,219,5,.12);
  --white: #ffffff;
  --off: #f5f4ef;
  --dark: #080f06;
  --text: #0f1a0b;
  --muted: #6b6b5c;
  --border: #e0ddd2;
  --syne: 'Cabinet Grotesk', sans-serif;
  --body: 'DM Sans', sans-serif;
  --mono: 'DM Mono', monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:host {
  font-family: var(--body);
  background: var(--white);
  color: var(--text);
  line-height: 1.65;
}

.acopla-root {
  background: var(--white);
  color: var(--text);
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; }
img, svg { display: block; max-width: 100%; }

/* SCROLL PROGRESS */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: var(--lime);
  z-index: 400;
  width: 0;
  transition: width .1s linear;
}

/* NAV */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 300;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  transition: all .35s;
  background: transparent;
}

nav.scrolled {
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(24px);
  box-shadow: 0 1px 0 var(--border);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-logo img {
  height: 34px;
  width: auto;
  filter: brightness(0) invert(1);
  transition: filter .3s;
}

nav.scrolled .nav-logo img {
  filter: none;
}

/* HERO */
#hero {
  min-height: 100svh;
  background: var(--dark);
  display: flex;
  align-items: center;
  padding: 92px 0 34px;
  position: relative;
  overflow: hidden;
}

.hero-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  width: 100%;
}

.hero-h1 {
  font-family: var(--syne);
  font-size: clamp(2.15rem, 4.45vw, 3.72rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.01;
  letter-spacing: -.045em;
  margin-bottom: 16px;
}

.hero-h1 .acc {
  color: var(--lime);
  display: block;
}

.hero-sub {
  font-size: .9rem;
  color: rgba(255,255,255,.45);
  line-height: 1.62;
  max-width: 500px;
  margin-bottom: 22px;
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 100px;
  font-weight: 600;
  font-size: .82rem;
  font-family: var(--body);
  transition: all .25s;
  cursor: pointer;
  border: none;
}

.btn-lime {
  background: var(--lime);
  color: var(--dark);
}

.btn-lime:hover {
  background: #cde405;
  transform: translateY(-2px);
}

/* STATS */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255,255,255,.06);
  border-radius: 14px;
  overflow: hidden;
  margin-top: 28px;
}

.stat-item {
  background: rgba(255,255,255,.03);
  padding: 15px;
}

.stat-value {
  font-family: var(--syne);
  font-size: 1.48rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
}

.stat-label {
  font-size: .64rem;
  color: rgba(255,255,255,.3);
  margin-top: 4px;
  line-height: 1.32;
}

/* SECTIONS */
.section {
  padding: 108px 0;
}

.section h2 {
  font-family: var(--syne);
  font-size: clamp(2rem, 3.4vw, 3.1rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -.035em;
  margin-bottom: 14px;
}

/* ANIMATIONS */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeUp .65s ease forwards;
}

/* RESPONSIVE */
@media(max-width: 768px) {
  nav { padding: 0 16px; }
  .hero-stats { grid-template-columns: 1fr 1fr; }
  .section { padding: 72px 0; }
}

@media(max-width: 480px) {
  .hero-stats { grid-template-columns: 1fr; }
  .btn { width: 100%; justify-content: center; }
}
`;

class AcoplaLpV2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.scrollProgress = null;
    this.navElement = null;
  }

  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = ACOPLA_STYLES_V2;
    this.shadowRoot.appendChild(style);

    const wrapper = document.createElement('div');
    wrapper.className = 'acopla-root';
    wrapper.innerHTML = `
      <div class="scroll-progress"></div>
      
      <nav>
        <a href="#" class="nav-logo">
          <img src="assets/images/logo-acopla.png" alt="ACOPLA">
        </a>
      </nav>

      <section id="hero">
        <div class="hero-wrap">
          <h1 class="hero-h1">
            Seu custo com telecom e tecnologia
            <span class="acc">pode estar maior</span>
            <span class="acc">do que precisa ser.</span>
          </h1>
          <p class="hero-sub">
            A ACOPLA / ACP TECH organiza, audita e transforma a gestão de tecnologias e telecomunicações da sua empresa.
          </p>
          <button class="btn btn-lime">Solicitar diagnóstico sem custo ↗</button>
          
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-value"><span data-counter="30">0</span>%</div>
              <div class="stat-label">de redução média</div>
            </div>
            <div class="stat-item">
              <div class="stat-value"><span data-counter="23">0</span>+</div>
              <div class="stat-label">anos acompanhando</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">R$ zero</div>
              <div class="stat-label">sem custo se sem resultado</div>
            </div>
          </div>
        </div>
      </section>
    `;

    this.shadowRoot.appendChild(wrapper);
  }

  setupEvents() {
    this.scrollProgress = this.shadowRoot.querySelector('.scroll-progress');
    this.navElement = this.shadowRoot.querySelector('nav');

    if (this.scrollProgress) {
      window.addEventListener('scroll', () => this.updateScrollProgress());
    }

    if (this.navElement) {
      window.addEventListener('scroll', () => this.updateNavScroll());
    }

    // Counters
    this.animateCounters();
  }

  updateScrollProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    this.scrollProgress.style.width = progress + '%';
  }

  updateNavScroll() {
    if (window.scrollY > 50) {
      this.navElement.classList.add('scrolled');
    } else {
      this.navElement.classList.remove('scrolled');
    }
  }

  animateCounters() {
    const counters = this.shadowRoot.querySelectorAll('[data-counter]');
    counters.forEach(el => {
      const target = parseInt(el.dataset.counter);
      if (target > 0) {
        this.animCounter(el, target);
      }
    });
  }

  animCounter(el, target) {
    const duration = 1800;
    const start = performance.now();
    
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(easeOut * target);
      
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    
    requestAnimationFrame(tick);
  }

  // Método para permitir acesso do Velo (opcional)
  setSeoMarkup(markup) {
    // Este método pode ser chamado do Velo para configurar metadados
    const meta = document.createElement('div');
    meta.style.display = 'none';
    meta.innerHTML = markup;
    this.appendChild(meta);
  }
}

// Registrar Web Component
if (!customElements.get('acopla-lp-v2')) {
  customElements.define('acopla-lp-v2', AcoplaLpV2);
}
