// Recebe os dados que serão utilizados no script
var btn = document.querySelector("button");
var input = document.querySelector("input");
var txt = document.querySelector("#mensagem");

// A tela iniciar atribue 12 ao valor
window.onload = () => {
  input.value = 12;
};

// Valida o input não permitindo que passe de 12 imagens ou menos de 0.
input.addEventListener("focusout", function() {
  if (this.value > 12) {
    this.value = 12;
  } else if (this.value < 0) {
    this.value = 0;
  }
});
/**
 * Ao clicar no botão vai executar a função de deletar imagens
 * E também foi adicionado validação para não permitir que input fique vazio
 */
btn.addEventListener("click", function() {
  console.log(input.value);
  if (input.value === "") {
    alert("POAMIGAO COLOCA O VALOR AI NÉ BRO");
  } else {
    deleteImages(input.value);
    txt.textContent = "Atualize a aplicação para iniciar novamente :)";
  }
});

/**
 * Função vai deletar as imagens que o cliente não deseja que seja mantido
 * Utilizando recursividade
 */

function deleteImages() {
  var img = document.querySelectorAll("img");
  var tamanhoArray = img.length;
  // Vai deletar a quantidade de imagens que o usuário desejar
  if (input.value < tamanhoArray) {
    img[tamanhoArray - 1].remove();
    // Função vai se chamar (recursividade)
    deleteImages(input.value);
  }
}


