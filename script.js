//Botão

const botaoTopo = document.getElementById('botao-topo');

botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        botaoTopo.style.display = 'block';
    } else {
        botaoTopo.style.display = 'none';
    }
});

//card animation

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 1.0,
});

cards.forEach((card) => {
  observer.observe(card);
});

