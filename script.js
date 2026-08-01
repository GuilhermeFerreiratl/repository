document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.view');
  const btnRefresh = document.getElementById('btn-refresh');

  // Alterna entre views
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active de todas as views
      views.forEach(v => v.classList.remove('active'));
      // Mostra a view correspondente
      const targetId = button.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Botão voltar
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-back')) {
      views.forEach(v => v.classList.remove('active'));
      document.getElementById('main-view').classList.add('active');
    }
  });

  // Botão de atualizar
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
