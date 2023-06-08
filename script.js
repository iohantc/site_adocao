// -----------------------Script Petshop ---------------------

var quant = 0
function aviso_sacola() {
    alert("Item adicionado à sacola")
}

function valida_email() {

    emailregex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
    telefoneregex = /([A-Z])\w+/g;


}

function validaNome() {
    var nome = document.getElementById('nome').value
    if (nome.indexOf(" ") > -1) {
        alert('certo')
    }
    else {
        return false
    }
}
