const cpf = document.querySelector("#cpf");

cpf.addEventListener("keypress", () => { // A Aciona o evento toda vez que for inserido algo no input
    let cpfLength = cpf.value.length

    if(cpfLength == 3 || cpfLength == 7){
        cpf.value += "."
    } else if (cpfLength == 11) {
        cpf.value += "-"
    }
})

/*  Verifica os caracteres digitado no input CPF e só permite escrever sé for númerico*/
var input = document.querySelector("#cpf");
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[0-9]';
    if (char.match(pattern)) {
      return true;
  }
}