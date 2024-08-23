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

const listaJogos = document.querySelectorAll('.jogo');
//console.log(jogo)

listaJogos.forEach((jogo) => {
    jogo.addEventListener('click', callBack)
    
})




function callBack(event){

    console.log(event.currentTarget);
    const tituloJogo = event.currentTarget.querySelector('.estadio').innerText;
    //console.log(tituloJogo);

    const dataJogo = event.currentTarget.querySelector('.data-jogo').innerText;
    const horarioJogo = event.currentTarget.querySelector('.horario-jogo').innerText;



    const mandante = event.currentTarget.querySelector('.time-mandante');
    //console.log(mandante);

    const visitante = event.currentTarget.querySelector('.time-visitante');
    //console.log(visitante);
    
    const nomeMandante = mandante.innerText;
    const nomeVisitante = visitante.innerText;

    //console.log(nomeMandante);
    //console.log(nomeVisitante);

    //const imgs = event.currentTarget.querySelectorAll('img.logo-escudo');
    //console.log(imgs[0]);
    //console.log(imgs[1]);


    const logoMandante = mandante.querySelector('img.logo-escudo').getAttribute('src');
    
    //console.log(logoMandante);
    
    const logoVisitante = visitante.querySelector('img.logo-escudo').getAttribute('src');
    
    //console.log(logoVisitante);


   


    const tituloJogoAlt = document.querySelector('.estadio-alt');
    tituloJogoAlt.innerHTML = tituloJogo;
    const dataJogoAlt = document.querySelector('.data-jogo-alt');
    dataJogoAlt.innerHTML = dataJogo;
    const horarioJogoAlt = document.querySelector('.horario-jogo-alt');
    horarioJogoAlt.innerHTML = horarioJogo;
    
    const mandanteAlt = document.querySelector('.nome-time-alt-m');
    const visitanteAlt = document.querySelector('.nome-time-alt-v');
    mandanteAlt.innerHTML = nomeMandante;
    visitanteAlt.innerHTML = nomeVisitante;
    
    const logoMandanteAlt = document.querySelector('img.logo-escudo-alt-m');
    logoMandanteAlt.setAttribute('src', logoMandante);
    const logoVisitanteAlt = document.querySelector('img.logo-escudo-alt-v');
    logoVisitanteAlt.setAttribute('src', logoVisitante);


    const listaTransmissao = event.currentTarget.querySelectorAll('li');
    console.log(listaTransmissao);
    const listaTransmissaoAlt = document.querySelector('.transmissao-alt');
    
    listaTransmissao.forEach((item) => {
        
        
        
        //cloneLi.classList.add('logo-transmissão-alt');
        //cloneLi.children[1].classList.remove('.logo-transmissão')
        console.log(item);
        //console.log(item.children[0]);
        const cloneLi = item.cloneNode(true);
        listaTransmissaoAlt.appendChild(cloneLi);
        
        const listaImg = listaTransmissaoAlt.querySelector('.logo-transmissao');
        listaImg.classList.remove('logo-transmissao');
        listaImg.classList.add('logo-transmissao-alt');
        console.log(listaTransmissaoAlt);
    })
    
    

}

const linksExternos = document.querySelectorAll('a[href^="https"]');
linksExternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})

function handleLink(event){
    event.preventDefault();
    
}

//const tituloJogo = document.querySelector('.estadio');
    //console.log(tituloJogo);


/*
const jogos = document.querySelector('.listaJogos')
jogos.addEventListener('click', callbackLista);

function callbackLista(event){
    console.log(event.target);
}*/

//
//const btnFecharJogo = document.querySelector('#fechar-jogo');
//const jogoAlt = document.getElementById('jogo-alt');

function fecharJogo(){
    if(jogoAlt.style.display == 'block'){
        jogoAlt.style.display = 'none'
    }
}