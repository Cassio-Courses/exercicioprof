var btn = document.querySelector("btn");
var input = document.querySelector("input");
var img = document.querySelector("img");

// Valida o input não permitindo que passe de 12 imagens.
input.addEventListener("focusout", function() {
  if (this.value > 12) {
    this.value = 12;
  } else if (this.value < 0) {
    this.value = 0;
  }
});
/**
 * @param recebe valor do input
 */
btn.addEventListener(function(inputValue) {});

function deleteImages(array = []) {
  var tamanhoArray = array.length; // vai deletar o ultimo
  if (tamanhoArray > 0) {
    img[tamanhoArray].remove();
    deleteImages(img - 1);
  }
}
deleteImages(img);
