document.addEventListener('DOMContentLoaded', () => {
  function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    if (viewId === 'main-view') {
      document.body.classList.remove('show-internal');
    } else {
      document.body.classList.add('show-internal');
    }
  }

  document.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      showView(button.getAttribute('data-view'));
    });
  });

  document.querySelectorAll('.btn-back').forEach(btn => {
    btn.addEventListener('click', () => showView('main-view'));
  });

  document.getElementById('btn-refresh').addEventListener('click', () => {
    if ('caches' in window) caches.keys().then(names => names.forEach(name => caches.delete(name)));
    window.location.reload(true);
  });
});
