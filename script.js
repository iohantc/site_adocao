// -----------------------Script Petshop ---------------------

var quant = 0
function aviso_sacola() {
    alert("Item adicionado à sacola")
}

// ----------------------Script Validação do formulário-------------------------

function validaTel(){
    var telefone = document.getElementById('telefone').value
    if(telefone.length == 11){
        telefone = parseInt(telefone)
        if(telefone > 10000000000){
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
    var email = document.getElementById('email').value
        if((email.indexOf('@') > -1) && email.indexOf('.') > -1 ){ //verifica se o email tem o @
            validaTel() //Chama a função vadaTel()
        } 
        else{
            alert('Esse e-mail não existe!\nDigite um e-mail válido.')
        }
}

function validaNome() {
    var nome = document.getElementById('nome').value 
    if ((nome.length > 5) && nome.indexOf(" ") > -1) {
        validaEmail()
    }
    else {
        alert('Nome inválido!\nInsira seu nome completo.')
    }
}
