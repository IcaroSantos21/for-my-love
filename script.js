(() => {
  const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // corações flutuando no fundo
  if (!reduz) {
    const box = document.getElementById('flutuantes');
    ['💙', '🩵', '♡', '✨', '💙', '🩵', '♡', '💙'].forEach((e, i) => {
      const s = document.createElement('span');
      s.textContent = e;
      s.style.left = 5 + i * 12 + Math.random() * 6 + '%';
      s.style.fontSize = 14 + Math.random() * 16 + 'px';
      s.style.animationDuration = 14 + Math.random() * 10 + 's';
      s.style.animationDelay = -Math.random() * 14 + 's';
      box.appendChild(s);
    });
  }

  // aparece ao rolar
  const itens = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((lista) => {
      lista.forEach((l) => { if (l.isIntersecting) { l.target.classList.add('visivel'); obs.unobserve(l.target); } });
    }, { threshold: 0.15 });
    itens.forEach((i) => obs.observe(i));
  } else {
    itens.forEach((i) => i.classList.add('visivel'));
  }

  // easter eggs: 3 corações escondidos
  const achados = new Set();
  const toast = document.getElementById('toast');
  const contador = document.getElementById('contador');
  let tt;

  function chuva(qtd) {
    for (let i = 0; i < qtd; i++) {
      const s = document.createElement('span');
      s.textContent = ['💍', '💙', '🩵', '✨'][i % 4];
      s.style.cssText = 'position:fixed;top:-2rem;z-index:60;pointer-events:none;left:' + Math.random() * 100 + 'vw;font-size:' + (18 + Math.random() * 20) + 'px;transition:transform ' + (3 + Math.random() * 2) + 's linear;';
      document.body.appendChild(s);
      requestAnimationFrame(() => requestAnimationFrame(() => { s.style.transform = 'translateY(110vh) rotate(40deg)'; }));
      setTimeout(() => s.remove(), 5500);
    }
  }

  document.querySelectorAll('.segredo').forEach((b) => {
    b.addEventListener('click', () => {
      const msg = b.dataset.msg;
      b.classList.add('achado');
      toast.textContent = msg;
      toast.classList.add('mostra');
      clearTimeout(tt);
      tt = setTimeout(() => toast.classList.remove('mostra'), 3200);
      achados.add(msg);
      contador.textContent = achados.size + ' de 3 encontrados';
      if (achados.size === 3) {
        setTimeout(() => { document.getElementById('modal').hidden = false; if (!reduz) chuva(40); }, 900);
      }
    });
  });
  document.getElementById('fechar').addEventListener('click', () => { document.getElementById('modal').hidden = true; });
})();
