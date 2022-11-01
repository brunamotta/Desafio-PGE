//campos a validar:
const cpf = document.getElementById('cpf');

//Máscara para formatar número de cpf
function maskCPF() {
    let strCPF = cpf.value;
    if (strCPF.length == 3 || strCPF.length == 7) cpf.value += ".";
    if (strCPF.length == 11) cpf.value += "-";
}

//solicita a validação a cada alteração na entrada:
cpf.addEventListener('input',function(){maskCPF()});


// se formulario estiver ok incluir no html do button os seguintes atributos: data-bs-toggle="modal" data-bs-target="#exampleModal"
