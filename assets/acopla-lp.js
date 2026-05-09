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