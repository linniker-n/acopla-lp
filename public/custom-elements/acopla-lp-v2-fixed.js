/**
 * ACOPLA Landing Page - Web Component v2.1 (CORRIGIDO - COM ESTILOS)
 * 
 * ✅ shadowDOM com estilos
 * ✅ Sem vazamento de CSS
 * ✅ Renderização correta no Wix
 * ✅ Imagens funcionando
 * 
 * Uso: 
 * - Source: public/custom-elements/acopla-lp-v2-fixed.js
 * - Tag: acopla-lp-v2
 * - ID: acoplaLpV2
 */

class AcoplaLpV2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      :host { display: block; width: 100%; }
      
      .root {
        background: #080f06;
        color: #ffffff;
        font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.65;
      }

      /* SCROLL PROGRESS */
      .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        background: #bcdb05;
        z-index: 400;
        width: 0;
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
        padding: 0 5%;
        background: transparent;
        transition: all 0.35s;
      }

      nav.scrolled {
        background: rgba(255, 255, 255, 0.96);
        backdrop-filter: blur(24px);
        box-shadow: 0 1px 0 #e0ddd2;
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
      }

      nav.scrolled .nav-logo img {
        filter: none;
      }

      /* HERO */
      #hero {
        min-height: 100vh;
        background: #080f06;
        display: flex;
        align-items: center;
        padding: 92px 0 34px;
        position: relative;
        overflow: hidden;
      }

      .hero-grid {
        position: absolute;
        inset: 0;
        background-image: 
          linear-gradient(rgba(188, 219, 5, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(188, 219, 5, 0.04) 1px, transparent 1px);
        background-size: 60px 60px;
      }

      .hero-wrap {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 5%;
        width: 100%;
        position: relative;
        z-index: 1;
      }

      .hero-pre {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        background: rgba(188, 219, 5, 0.08);
        border: 1px solid rgba(188, 219, 5, 0.2);
        color: #bcdb05;
        font-size: 0.62rem;
        font-weight: 700;
        padding: 4px 12px;
        border-radius: 100px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 18px;
      }

      .hero-h1 {
        font-family: 'Cabinet Grotesk', sans-serif;
        font-size: clamp(2.15rem, 4.45vw, 3.72rem);
        font-weight: 800;
        color: #ffffff;
        line-height: 1.01;
        letter-spacing: -0.045em;
        margin-bottom: 16px;
      }

      .hero-h1 .acc {
        color: #bcdb05;
        display: block;
      }

      .hero-sub {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.45);
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
        font-size: 0.82rem;
        font-family: inherit;
        border: none;
        cursor: pointer;
        transition: all 0.25s;
        white-space: nowrap;
      }

      .btn-lime {
        background: #bcdb05;
        color: #080f06;
      }

      .btn-lime:hover {
        background: #cde405;
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(188, 219, 5, 0.3);
      }

      /* STATS */
      .stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 14px;
        overflow: hidden;
        margin-top: 28px;
        box-shadow: 0 18px 46px rgba(0, 0, 0, 0.16);
      }

      .stat-item {
        background: rgba(255, 255, 255, 0.03);
        padding: 15px;
      }

      .stat-value {
        font-family: 'Cabinet Grotesk', sans-serif;
        font-size: 1.48rem;
        font-weight: 800;
        color: #ffffff;
        line-height: 1;
      }

      .stat-label {
        font-size: 0.64rem;
        color: rgba(255, 255, 255, 0.3);
        margin-top: 4px;
        line-height: 1.32;
      }

      /* RESPONSIVE */
      @media (max-width: 768px) {
        nav { padding: 0 16px; }
        .stats { grid-template-columns: 1fr 1fr; }
        #hero { padding: 92px 0 44px; }
      }

      @media (max-width: 480px) {
        .stats { grid-template-columns: 1fr; }
        .btn { width: 100%; justify-content: center; }
      }
    `;

    const wrapper = document.createElement('div');
    wrapper.className = 'root';
    wrapper.innerHTML = `
      <div class="progress-bar"></div>

      <nav id="nav">
        <a href="#" class="nav-logo">
          <img src="assets/images/logo-acopla.png" alt="ACOPLA" />
        </a>
      </nav>

      <section id="hero">
        <div class="hero-grid"></div>
        <div class="hero-wrap">
          <div class="hero-pre">
            <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #bcdb05;"></span>
            Para empresas com contas de telecom e tecnologia difíceis de explicar
          </div>

          <h1 class="hero-h1">
            Seu custo com telecom e tecnologia
            <span class="acc">pode estar maior</span>
            <span class="acc">do que precisa ser.</span>
          </h1>

          <p class="hero-sub">
            A ACOPLA / ACP TECH organiza, audita e transforma a gestão de tecnologias e telecomunicações da sua empresa com visão técnica, financeira e de mercado, atuando de forma orgânica, colocando a mão na massa para gerar resultado real.
          </p>

          <button class="btn btn-lime">Solicitar diagnóstico sem custo ↗</button>

          <div class="stats">
            <div class="stat-item">
              <div class="stat-value"><span data-counter="30">0</span>%</div>
              <div class="stat-label">de redução média em telecom e tecnologia</div>
            </div>
            <div class="stat-item">
              <div class="stat-value"><span data-counter="23">0</span>+</div>
              <div class="stat-label">anos acompanhando empresas de perto</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">R$ zero</div>
              <div class="stat-label">sem cobrança se não houver resultado comprovado</div>
            </div>
          </div>
        </div>
      </section>
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);

    // Setup interactions
    this.setupScrollProgress();
    this.setupNav();
    this.animateCounters();
  }

  setupScrollProgress() {
    const bar = this.shadowRoot.querySelector('.progress-bar');
    if (!bar) return;

    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = progress + '%';
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
  }

  setupNav() {
    const nav = this.shadowRoot.querySelector('nav');
    if (!nav) return;

    const updateNav = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', updateNav, { passive: true });
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
}

if (!customElements.get('acopla-lp-v2')) {
  customElements.define('acopla-lp-v2', AcoplaLpV2);
}
