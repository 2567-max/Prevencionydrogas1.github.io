document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('#menu a');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
