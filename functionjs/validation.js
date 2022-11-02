//campos a validar:
const nome = document.getElementById('input1stName');
const sobrenome = document.getElementById('input2ndName');
const email = document.getElementById('inputEmail4');
const cpf = document.getElementById('cpf');
const nascimento = document.getElementById('inputDate');
const genero = document.getElementById('autoSizingSelect');
const aceite = document.getElementById('gridCheck');
//Máscara para formatar número de cpf
function maskCPF() {
    let strCPF = cpf.value;
    if (strCPF.length == 3 || strCPF.length == 7) cpf.value += ".";
    if (strCPF.length == 11) cpf.value += "-";
}
// verifica se o formulário foi preenchindo e retorna as informações no modal
function aparecerModal() {
    if(nome.value == '' || sobrenome.value == '' || email.value == '' || cpf.value == '' || nascimento.value == '' || genero.value == '' || aceite.value == '') {
        alert('You need to fill all the blank spaces!')
    } else {
        let novobotao = document.getElementById('botao')
        novobotao.setAttribute("data-bs-toggle","modal")
        novobotao.setAttribute("data-bs-target","#exampleModal")
        //passar informações dos campos para o modal
        const dados = document.createElement('p')
        dados.textContent = ` We received your registration! `
        const mostranome = document.createElement('p')
        mostranome.textContent = `Name: ${nome.value} ${sobrenome.value}`
        const mostraemail = document.createElement('p')
        mostraemail.textContent = `Email: ${email.value}`
        const mostracpf = document.createElement('p')
        mostracpf.textContent = `CPF: ${cpf.value}`
        const mostranasc = document.createElement('p')
        mostranasc.textContent = `Birth date: ${nascimento.value}`
        const mostragenero = document.createElement('p')
        mostragenero.textContent = `Gender: ${genero.options[genero.selectedIndex].text}`
        const dadosNoModal = document.getElementById('dadosNoModal')
        dadosNoModal.innerHTML = ''
        dadosNoModal.appendChild(dados)
        dados.classList.add("fs-6")
        dadosNoModal.appendChild(mostranome)
        mostranome.classList.add("fs-6")
        dadosNoModal.appendChild(mostraemail)
        mostraemail.classList.add("fs-6")
        dadosNoModal.appendChild(mostracpf)
        mostracpf.classList.add("fs-6")
        dadosNoModal.appendChild(mostranasc)
        mostranasc.classList.add("fs-6")
        dadosNoModal.appendChild(mostragenero)
        mostragenero.classList.add("fs-6")
    }
}
//formata o cpf automaticamente conforme o usuário digita:
cpf.addEventListener('input',function(){maskCPF()});