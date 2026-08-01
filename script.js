navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Esconde todas as views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    // Mostra a view correta
    const category = button.textContent.trim();
    if (category === "GrupoW1") {
      document.getElementById('grupoW1-view').classList.add('active');
    } else if (category === "Clube777") {
      document.getElementById('clube777-view').classList.add('active');
    } else if (category === "Clube888") {
      document.getElementById('clube888-view').classList.add('active');
    } else {
      document.getElementById('category-view').classList.add('active');
    }
  });
});
