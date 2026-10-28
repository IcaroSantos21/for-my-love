(() => {
  const $ = (id) => document.getElementById(id);

  // chuva de corações
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

  // envelope
  $('abrir').addEventListener('click', () => {
    $('envelope').classList.add('aberto');
    document.body.classList.remove('trancado');
    chuva(18);
  });

  // pilha de fotos
  const fotos = [...document.querySelectorAll('.polaroid')];
  let ordem = fotos.map((_, i) => i);
  function pintaPilha() {
    ordem.forEach((fotoIdx, pos) => { fotos[fotoIdx].dataset.pos = pos; });
  }
  pintaPilha();
  $('pilha').addEventListener('click', () => {
    ordem.push(ordem.shift());
    pintaPilha();
  });

  // botão "Não" que foge (é só brincadeira)
  const nao = $('nao');
  const sim = $('sim');
  const piada = $('piada');
  const frases = [
    'Ué, o botão fugiu 😅',
    'Quase! Tenta de novo 😏',
    'Esse botão tá com defeito, juro',
    'Vc tá tentando clicar no não? Sério?',
    'Desiste, o sim tá ficando maior 👀',
    'Não tem como, o destino já decidiu 💙',
    'Vai, clica no sim logo, bobinha'
  ];
  let tentativas = 0;

  function foge(e) {
    if (e) e.preventDefault();
    tentativas++;
    const w = nao.offsetWidth, h = nao.offsetHeight;
    const maxX = window.innerWidth - w - 12;
    const maxY = window.innerHeight - h - 12;
    nao.classList.add('solto');
    nao.style.left = Math.max(12, Math.random() * maxX) + 'px';
    nao.style.top = Math.max(12, Math.random() * maxY) + 'px';
    sim.style.transform = 'scale(' + Math.min(1 + tentativas * 0.08, 1.7) + ')';
    piada.textContent = frases[Math.min(tentativas - 1, frases.length - 1)];
  }
  ['pointerenter', 'pointerdown', 'touchstart', 'focus'].forEach((ev) => nao.addEventListener(ev, foge));
  nao.addEventListener('click', (e) => { e.preventDefault(); foge(); });

  sim.addEventListener('click', () => {
    $('resposta').hidden = false;
    nao.hidden = true;
    sim.hidden = true;
    piada.textContent = '';
    chuva(70);
  });

  // easter egg: toca 5 vezes no coraçãozinho do rodapé
  let toques = 0, timer;
  $('segredo').addEventListener('click', () => {
    toques++;
    clearTimeout(timer);
    timer = setTimeout(() => { toques = 0; }, 1500);
    if (toques >= 5) {
      toques = 0;
      $('modal').hidden = false;
      chuva(50);
    }
  });
  $('fechar').addEventListener('click', () => { $('modal').hidden = true; });
})();
