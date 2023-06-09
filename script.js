// -----------------------Script Petshop ---------------------

var quant = 0
function aviso_sacola() {
    alert("Item adicionado à sacola")
}

// ----------------------Script Validação do formulário-------------------------

function validaTel(){
    var telefone = document.getElementById('telefone').value //chama o input telefone
    if(telefone.length == 11){ //aqui ele verifca se tem 11 caracteres
        telefone = parseInt(telefone) //aqui ele vai passar para inteiro as string
        if(telefone > 10000000000){ //aqui fazer a verificação de tem numero
            alert('Enviado!')
        }
        else{
            alert('Telefone inválido.\nInsira um telefone válido.')
        }
    }
    else{
        alert('Telefone inválido.\nInsira um telefone válido.')
    }
}

function validaEmail(){
    var email = document.getElementById('email').value //chama o email
        if((email.indexOf('@') > -1) && email.indexOf('.') > -1 ){ //verifica se o email tem o @
            validaTel() //Chama a função vadaTel()
        } 
        else{
            alert('Esse e-mail não existe!\nDigite um e-mail válido.')
        }
}

function validaNome() {
    var nome = document.getElementById('nome').value  //chama o nome
    if ((nome.length > 5) && nome.indexOf(" ") > -1) { //verefica se contem espaços
        validaEmail()
    }
    else {
        alert('Nome inválido!\nInsira seu nome completo.')
    }
}
