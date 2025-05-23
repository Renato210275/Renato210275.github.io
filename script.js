// Função para animação de rolagem
const elements = document.querySelectorAll('.fade');

const showOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
