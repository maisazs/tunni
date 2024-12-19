  const open = document.getElementById('open');
  const menu = document.getElementById('menu');
  const close = document.getElementById('close');

  // Abre o menu
  menu.addEventListener('click', () => {
    sideMenu.classList.remove('right-[-100%]');
    sideMenu.classList.add('right-0');
  });

  // Fecha o menu
  close.addEventListener('click', () => {
    sideMenu.classList.remove('right-0');
    sideMenu.classList.add('right-[-100%]');
  });