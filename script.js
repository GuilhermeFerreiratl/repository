document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const mainView = document.getElementById('main-view'); // sua página 1
  const views = document.querySelectorAll('.view');
  const btnBack = document.querySelectorAll('.btn-back');

  // Clicou no botão do menu
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const viewId = button.getAttribute('data-view'); // só lê data-view
      
      // tira active de todos os botões
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Se o botão NÃO tem data-view, não faz nada
      if(!viewId) return;

      // esconde tudo
      mainView.style.display = 'none';
      views.forEach(v => v.classList.remove('active'));
      
      // mostra só a página clicada
      const targetView = document.getElementById(viewId);
      if(targetView){
        targetView.classList.add('active');
      }
    });
  });

  // Clicou em Voltar
  btnBack.forEach(btn => {
    btn.addEventListener('click', () => {
      views.forEach(v => v.classList.remove('active'));
      mainView.style.display = 'block';
      navButtons.forEach(b => b.classList.remove('active'));
    });
  });
});
