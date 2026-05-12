// Extracted from index.html. This file powers the local/static landing page.
// SCROLL PROGRESS
const sp = document.getElementById('sp');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  sp.style.width = pct + '%';
}, {passive:true});

// NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, {passive:true});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
  });
});

// REVEAL
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); ro.unobserve(e.target); } });
}, {threshold:.1});
document.querySelectorAll('[data-r]').forEach(el => ro.observe(el));

// COUNTER ANIMATION (hero)
function animCounter(el, target, suffix) {
  const dur = 1800, start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target) + (suffix || '');
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
window.addEventListener('load', () => {
  document.querySelectorAll('[data-counter]').forEach(el => {
    if (parseInt(el.dataset.counter) === 0) return; // R$ zero — não animar
    animCounter(el, parseInt(el.dataset.counter), '');
  });
});

// BAR CHART ANIMATION
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.rb-fill, .dcb-fill').forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, i * 130);
      });
      barObs.unobserve(e.target);
    }
  });
}, {threshold:.2});
const resSec = document.getElementById('res-sec');
if (resSec) barObs.observe(resSec);

const difCard = document.getElementById('dif-card');
if (difCard) {
  const difObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.dcb-fill').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, i * 200 + 300);
        });
        difObs.unobserve(e.target);
      }
    });
  }, {threshold:.3});
  difObs.observe(difCard);
}

// WIX IFRAME — ajuste automático de altura via postMessage
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'wix-form-height') {
    const iframe = document.getElementById('wix-form-iframe');
    if (iframe && e.data.height > 200) {
      iframe.style.minHeight = e.data.height + 'px';
      iframe.style.height    = e.data.height + 'px';
    }
  }
});

// WHATSAPP EM EMBED MOBILE
// Se a LP estiver dentro de um iframe alto, position:fixed fica preso ao iframe.
// Quando o parent é acessível, reposicionamos o botão em relação ao viewport real.
function initEmbedFloatingWhatsapp() {
  const button = document.querySelector('.float-wa');
  if (!button || window.parent === window) return;

  let parentWindow;
  let frame;
  try {
    parentWindow = window.parent;
    frame = window.frameElement;
    if (!parentWindow || !frame) return;
    void parentWindow.innerHeight;
    void frame.getBoundingClientRect();
  } catch (err) {
    return;
  }

  let raf = 0;
  const update = () => {
    raf = 0;

    try {
      const rect = frame.getBoundingClientRect();
      const visualViewport = parentWindow.visualViewport;
      const viewportHeight = visualViewport ? visualViewport.height : parentWindow.innerHeight;
      const viewportTop = visualViewport ? visualViewport.offsetTop : 0;
      const margin = Math.max(14, parseFloat(getComputedStyle(button).right) || 14);
      const buttonHeight = button.offsetHeight || 52;
      const documentHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const desiredTop = viewportTop - rect.top + viewportHeight - buttonHeight - margin;
      const maxTop = Math.max(margin, documentHeight - buttonHeight - margin);
      const nextTop = Math.min(Math.max(margin, desiredTop), maxTop);

      button.classList.add('is-embed-fixed');
      button.style.setProperty('--float-wa-top', nextTop + 'px');
    } catch (err) {
      button.classList.remove('is-embed-fixed');
      button.style.removeProperty('--float-wa-top');
    }
  };

  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  const listen = (target, eventName) => {
    try {
      target.addEventListener(eventName, schedule, { passive: true });
    } catch (err) {}
  };

  listen(parentWindow, 'scroll');
  listen(parentWindow, 'resize');
  listen(window, 'resize');
  listen(window, 'load');
  if (parentWindow.visualViewport) {
    listen(parentWindow.visualViewport, 'resize');
    listen(parentWindow.visualViewport, 'scroll');
  }
  if (window.ResizeObserver) {
    new ResizeObserver(schedule).observe(document.body);
  }

  schedule();
}

initEmbedFloatingWhatsapp();

document.querySelectorAll('.fq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const a = item.querySelector('.fq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.fq').forEach(f => {
      f.classList.remove('open');
      f.querySelector('.fq-a').style.maxHeight = '0';
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});
