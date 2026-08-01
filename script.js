document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const mainView = document.getElementById('main-view');
  const categoryView = document.getElementById('category-view');
  const categoryTitle = document.getElementById('category-title');
  const btnBack = document.getElementById('btn-back');

  // Alterna entre abas
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const categoryName = button.getAttribute('data-category');
      categoryTitle.textContent = categoryName;

      mainView.classList.remove('active');
      categoryView.classList.add('active');
    });
  });

  // Botão voltar
  btnBack.addEventListener('click', () => {
    categoryView.classList.remove('active');
    mainView.classList.add('active');
  });

  // Botão de atualizar
  const btnRefresh = document.getElementById('btn-refresh');
  btnRefresh.addEventListener('click', () => {
    caches.keys().then(keys => {
      keys.forEach(key => caches.delete(key));
    });
    location.reload(true);
  });

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado:', reg.scope))
      .catch(err => console.error('Erro ao registrar Service Worker:', err));
  }
});
