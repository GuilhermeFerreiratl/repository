document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.game-card, .nav-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = button.getAttribute('data-view');
      if(!viewId) return;
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById(viewId).classList.add('active');
    });
  });
  document.querySelectorAll('.btn-back').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById('main-view').classList.add('active');
    });
  });
});
