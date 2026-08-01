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
// CÓDIGO DO BOTÃO ATUALIZAR APP
document.getElementById('btn-refresh').addEventListener('click', async () => {
  
  alert('Buscando atualização...');

  if ('serviceWorker' in navigator) {
    const reg = await navigator.serviceWorker.getRegistration();
    
    // 1. Força baixar novo sw.js
    await reg.update(); 
    
    // 2. Apaga cache velho
    const nomesCache = await caches.keys();
    await Promise.all(nomesCache.map(nome => caches.delete(nome)));
  }
  
  alert('Atualizado! Recarregando...');
  // 3. Recarrega sem cache
  window.location.reload(true); 
});
