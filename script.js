(() => {
  const track = document.querySelector('.track');
  const slides = [...document.querySelectorAll('.slide')];
  const dots = [...document.querySelectorAll('.dot')];
  let current = 0;
  function show(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-pressed', String(i === current));
    });
  }
  document.querySelector('.prev').addEventListener('click', () => show(current - 1));
  document.querySelector('.next').addEventListener('click', () => show(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));

  // As datas são pessoais: não inventamos respostas certas.
  // Este formulário apenas verifica os campos e não envia dados a um servidor.
  const quiz = document.getElementById('quiz');
  const feedback = document.getElementById('feedback');
  quiz.addEventListener('submit', event => {
    event.preventDefault();
    const first = document.getElementById('a1');
    const second = document.getElementById('a2');
    if (!first.value.trim() || !second.value.trim()) {
      feedback.textContent = 'Preenche as duas lembranças, meu amorzinho. 💗';
      (!first.value.trim() ? first : second).focus();
      return;
    }
    feedback.textContent = 'Respostas guardadas com carinho! O mais importante é a nossa história. 💞';
  });
})();