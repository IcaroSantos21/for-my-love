(() => {
  const $ = (id) => document.getElementById(id);

  function chuva(qtd = 40) {
    const box = $('chuva');
    const emojis = ['💙', '🩵', '♡', '💌'];
    for (let i = 0; i < qtd; i++) {
      const s = document.createElement('span');
      s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      s.style.left = Math.random() * 100 + '%';
      s.style.fontSize = 16 + Math.random() * 22 + 'px';
      s.style.animationDuration = 3 + Math.random() * 3 + 's';
      s.style.animationDelay = Math.random() * 1.2 + 's';
      box.appendChild(s);
      setTimeout(() => s.remove(), 7500);
    }
  }

  // conversa: cada mensagem aparece depois de "digitando..."
  const msgs = [...document.querySelectorAll('#conversa .msg')];
  const status = document.querySelector('.topo small');
  let i = 0, terminou = false, timer;

  function terminar() {
    if (terminou) return;
    terminou = true;
    clearTimeout(timer);
    document.querySelectorAll('.digitando').forEach((d) => d.remove());
    msgs.forEach((m) => { m.hidden = false; });
    status.textContent = 'online';
    chuva(25);
    $('pular').hidden = true;
    $('depois').hidden = false;
    setTimeout(() => $('depois').scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
  }

  function proxima() {
    if (terminou) return;
    if (i >= msgs.length) return terminar();
    const dots = document.createElement('div');
    dots.className = 'digitando';
    dots.innerHTML = '<i></i><i></i><i></i>';
    msgs[i].before(dots);
    const tam = msgs[i].textContent.length;
    timer = setTimeout(() => {
      dots.remove();
      msgs[i].hidden = false;
      msgs[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
      i++;
      timer = setTimeout(proxima, 500);
    }, Math.min(700 + tam * 18, 1800));
  }

  const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  $('pular').addEventListener('click', terminar);
  if (reduz) terminar(); else proxima();

  // easter egg: toca 5 vezes na foto de perfil do topo
  let toques = 0, t2;
  $('segredo').addEventListener('click', () => {
    toques++;
    clearTimeout(t2);
    t2 = setTimeout(() => { toques = 0; }, 1500);
    if (toques >= 5) {
      toques = 0;
      $('modal').hidden = false;
      chuva(50);
    }
  });
  $('fechar').addEventListener('click', () => { $('modal').hidden = true; });
})();
