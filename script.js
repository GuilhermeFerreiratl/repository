document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const mainView = document.getElementById('main-view');
  const categoryView = document.getElementById('category-view');
  const categoryTitle = document.getElementById('category-title');
  const btnBack = document.getElementById('btn-back');

  // Alterna entre abas e carrega a Segunda Tela ao clicar em QUALQUER item do menu
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Atualiza estado ativo no menu
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const categoryName = button.getAttribute('data-category');
      
      // Atualiza o título da segunda tela com o nome do menu clicado
      categoryTitle.textContent = categoryName;

      // Alterna exibição das abas
      mainView.classList.remove('active');
      categoryView.classList.add('active');
    });
  });

  // Funcionalidade do Botão Voltar (Retorna para a tela principal de jogos)
  btnBack.addEventListener('click', () => {
    categoryView.classList.remove('active');
    mainView.classList.add('active');
  });

  // Registro do Service Worker para suporte a PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado:', reg.scope))
      .catch(err => console.error('Erro ao registrar Service Worker:', err));
  }
});
