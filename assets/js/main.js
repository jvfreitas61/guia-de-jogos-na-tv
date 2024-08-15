function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}

var tabela1 = document.querySelector('#tabela-1')
var tabela2 = document.querySelector('#tabela-2')
var tabela3 = document.querySelector('#tabela-3')
var titleGuia1 = document.querySelector('#title-guia1')
var titleGuia2 = document.querySelector('#title-guia2')

function clickVoltar(){
    if(tabela2.style.display = 'block'){
        tabela2.style.display = 'none'
        titleGuia2.style.display = 'none'
        titleGuia1.style.display = 'block'
        tabela1.style.display = 'block'
    }
}

function clickAvancar(){
    if(tabela1.style.display = 'block'){
        tabela1.style.display = 'none'
        titleGuia1.style.display = 'none'
        titleGuia2.style.display = 'block'
        tabela2.style.display = 'block'
    }
}

/*var jogo = document.querySelectorAll('.jogo');
jogo.addEventListener('click', adicionaClasse());

function adicionaClasse(){
    jogo.classList.add('selecionado');
}

function abrirJogo(){

}*/