document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const content = document.getElementById("content");
  const menuInicio = document.getElementById("menu-inicio");

  // Verifica se a intro já foi exibida na sessão
  const introExibida = sessionStorage.getItem("introExibida");

  if (window.innerWidth <= 768) {
      // Se for um dispositivo móvel, esconde a intro imediatamente
      intro.style.display = "none";
      content.style.display = "block";
  } else if (introExibida) {
      // Se a intro já foi exibida, pula direto para o conteúdo
      intro.style.display = "none";
      content.style.display = "block";
  } else {
      // Exibe a intro e esconde depois de 3 segundos
      content.style.display = "none";
      setTimeout(() => {
          intro.style.display = "none";
          content.style.display = "block";
          sessionStorage.setItem("introExibida", "true"); // Marca como exibida
      }, 3000);
  }

  // Evita que a intro reapareça ao clicar no menu "Início"
  menuInicio.addEventListener("click", (e) => {
      e.preventDefault();
      intro.style.display = "none";
      content.style.display = "block";
  });
});
