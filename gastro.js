const y = document.getElementById('y');
const menuMovil = document.getElementById('menu-movil');

y.addEventListener('click', () => {
  menuMovil.classList.toggle('activo');
});
