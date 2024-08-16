function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}

/*var tabela1 = document.querySelector('#tabela-1')
var tabela2 = document.querySelector('#tabela-2')
var tabela3 = document.querySelector('#tabela-3')
var titleGuia1 = document.querySelector('#title-guia1')
var titleGuia2 = document.querySelector('#title-guia2')*/

/*function clickVoltar(){
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
}*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let listaAtual = 0;

const listas = document.querySelectorAll(".tabela");
const titulos = document.querySelectorAll(".titulo-guia");

btnAvancar.addEventListener("click", function(){
    if (listaAtual === listas.length - 1) return;
    //const listaSelecionado = document.querySelector(".selecionado");
    //listaSelecionado.classList.remove("selecionado");
    removerLista();
    listaAtual++;
    listas[listaAtual].classList.add("selecionado");
    titulos[listaAtual].classList.add("titulo-selecionado");
});



btnVoltar.addEventListener("click", function(){
    if (listaAtual === 0) return;
    //const listaSelecionado = document.querySelector(".selecionado");
    //listaSelecionado.classList.remove("selecionado");
    removerLista();
    listaAtual--;
    listas[listaAtual].classList.add("selecionado");
    titulos[listaAtual].classList.add("titulo-selecionado");
});

function removerLista(){
    const listaSelecionado = document.querySelector(".selecionado");
    listaSelecionado.classList.remove("selecionado");
    const tituloSelecionado = document.querySelector(".titulo-selecionado");
    tituloSelecionado.classList.remove("titulo-selecionado");
}

/*var jogo = document.querySelectorAll('.jogo');
jogo.addEventListener('click', adicionaClasse());

function adicionaClasse(){
    jogo.classList.add('selecionado');
}

function abrirJogo(){

}*/