document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const mainView = document.getElementById('main-view');
  const views = document.querySelectorAll('.view');
  const btnBack = document.querySelectorAll('.btn-back');

  // Alterna entre abas
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const categoryName = button.getAttribute('data-category');
      const viewId = button.getAttribute('data-view'); // <-- ISSO AQUI É O SEGREDO

      views.forEach(v => v.classList.remove('active'));
      mainView.classList.remove('active');
      
      document.getElementById(viewId).classList.add('active');
      document.getElementById(viewId).querySelector('.section-title').textContent = categoryName;
    });
  });

  // Botão voltar - agora funciona pra todas
  btnBack.forEach(btn => {
    btn.addEventListener('click', () => {
      views.forEach(v => v.classList.remove('active'));
      mainView.classList.add('active');
      navButtons.forEach(b => b.classList.remove('active'));
    });
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
