function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let listaAtual = 0;

const listas = document.querySelectorAll(".tabela");
const titulos = document.querySelectorAll(".titulo-guia");

btnAvancar.addEventListener("click", function () {
    if (listaAtual === listas.length - 1) return;
    //const listaSelecionado = document.querySelector(".selecionado");
    //listaSelecionado.classList.remove("selecionado");
    removerLista();
    listaAtual++;
    listas[listaAtual].classList.add("selecionado");
    titulos[listaAtual].classList.add("titulo-selecionado");
});



btnVoltar.addEventListener("click", function () {
    if (listaAtual === 0) return;
    //const listaSelecionado = document.querySelector(".selecionado");
    //listaSelecionado.classList.remove("selecionado");
    removerLista();
    listaAtual--;
    listas[listaAtual].classList.add("selecionado");
    titulos[listaAtual].classList.add("titulo-selecionado");
});

function removerLista() {
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
console.log(listaJogos);

listaJogos.forEach((jogo) => {
    jogo.addEventListener('click', callBack)

})






function callBack(event) {

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

function fecharJogo() {
    if (jogoAlt.style.display == 'block') {
        jogoAlt.style.display = 'none'
    }
}

function jogoHoje() {
    fetch('assets/js/jogos.json')
        .then(response => response.json())
        .then(jogos => {
            const listaJogos = document.querySelector('#jogosHoje');
            //console.log(listaJogos);
            jogos.map(jogo => {
                const card = document.createElement("li");
                listaJogos.appendChild(card);
                const divJogo = document.createElement("div");
                card.appendChild(divJogo);
                divJogo.classList.add("jogo");
                const jogoHeading = document.createElement("div")
                divJogo.appendChild(jogoHeading);
                jogoHeading.classList.add("jogo-heading");
                const dataJogo = document.createElement("p")
                jogoHeading.appendChild(dataJogo);
                dataJogo.classList.add("data-jogo")
                dataJogo.textContent = jogo.dataJogo

                const estadio = document.createElement("p")
                jogoHeading.appendChild(estadio);
                estadio.classList.add("estadio")
                estadio.textContent = jogo.estadio

                const horaJogo = document.createElement("p")
                jogoHeading.appendChild(horaJogo);
                horaJogo.classList.add("horario-jogo")
                horaJogo.textContent = jogo.horaJogo

                const confronto = document.createElement("div");
                divJogo.appendChild(confronto);
                confronto.classList.add("confronto")
                const mandante = document.createElement("div")
                confronto.appendChild(mandante);
                mandante.classList.add("time-mandante")
                const nomeMandante = document.createElement("span")
                mandante.appendChild(nomeMandante)
                nomeMandante.classList.add("nome-time")
                nomeMandante.textContent = jogo.mandante.nome

                const logoMandante = document.createElement("span")
                mandante.appendChild(logoMandante)

                const imgMandante = document.createElement("img")
                logoMandante.appendChild(imgMandante)
                imgMandante.classList.add("logo-escudo")
                imgMandante.src = jogo.mandante.escudo
                imgMandante.alt = jogo.mandante.nome

                const versus = document.createElement("span")
                confronto.appendChild(versus);
                versus.classList.add("versus")
                versus.textContent = "X"

                const visitante = document.createElement("div")
                confronto.appendChild(visitante);
                visitante.classList.add("time-visitante")

                const logoVisitante = document.createElement("span")
                visitante.appendChild(logoVisitante)

                const imgVisitante = document.createElement("img")
                logoVisitante.appendChild(imgVisitante)
                imgVisitante.classList.add("logo-escudo")
                imgVisitante.src = jogo.visitante.escudo
                imgVisitante.alt = jogo.visitante.nome

                const nomeVisitante = document.createElement("span")
                visitante.appendChild(nomeVisitante)
                nomeVisitante.classList.add("nome-time")
                nomeVisitante.textContent = jogo.visitante.nome

                const transmissao = document.createElement("ul")
                divJogo.appendChild(transmissao);
                transmissao.classList.add("transmissao")
                for (var i = 0; i < jogo.transmissao.length; i++) {
                    const canal = document.createElement("li")
                    transmissao.appendChild(canal);
                    const linkCanal = document.createElement("a")
                    canal.appendChild(linkCanal)
                    linkCanal.href = jogo.transmissao[i].link
                    const logoCanal = document.createElement("img")
                    linkCanal.appendChild(logoCanal)
                    logoCanal.classList.add("logo-transmissao")
                    logoCanal.src = jogo.transmissao[i].logoCanal
                    logoCanal.alt = jogo.transmissao[i].nomeCanal
                    //linkCanal.preventDefault();
                }
                
            })
            const jogosSelecionados = document.querySelectorAll(".jogo")
            console.log(jogosSelecionados);
            jogosSelecionados.forEach((jogo) => {
                jogo.addEventListener('click', callBack)
            
            })
        })
}

jogoHoje();



function jogoAmanha() {
    fetch('assets/js/jogos.json')
        .then(response => response.json())
        .then(jogos => {
            const listaJogos = document.querySelector('#jogosAmanha');
            //console.log(listaJogos);
            jogos.map(jogo => {
                const card = document.createElement("li");
                listaJogos.appendChild(card);
                const divJogo = document.createElement("div");
                card.appendChild(divJogo);
                divJogo.classList.add("jogo");
                const jogoHeading = document.createElement("div")
                divJogo.appendChild(jogoHeading);
                jogoHeading.classList.add("jogo-heading");
                const dataJogo = document.createElement("p")
                jogoHeading.appendChild(dataJogo);
                dataJogo.classList.add("data-jogo")
                dataJogo.textContent = jogo.dataJogo

                const estadio = document.createElement("p")
                jogoHeading.appendChild(estadio);
                estadio.classList.add("estadio")
                estadio.textContent = jogo.estadio

                const horaJogo = document.createElement("p")
                jogoHeading.appendChild(horaJogo);
                horaJogo.classList.add("horario-jogo")
                horaJogo.textContent = jogo.horaJogo

                const confronto = document.createElement("div");
                divJogo.appendChild(confronto);
                confronto.classList.add("confronto")
                const mandante = document.createElement("div")
                confronto.appendChild(mandante);
                mandante.classList.add("time-mandante")
                const nomeMandante = document.createElement("span")
                mandante.appendChild(nomeMandante)
                nomeMandante.classList.add("nome-time")
                nomeMandante.textContent = jogo.mandante.nome

                const logoMandante = document.createElement("span")
                mandante.appendChild(logoMandante)

                const imgMandante = document.createElement("img")
                logoMandante.appendChild(imgMandante)
                imgMandante.classList.add("logo-escudo")
                imgMandante.src = jogo.mandante.escudo
                imgMandante.alt = jogo.mandante.nome

                const versus = document.createElement("span")
                confronto.appendChild(versus);
                versus.classList.add("versus")
                versus.textContent = "X"

                const visitante = document.createElement("div")
                confronto.appendChild(visitante);
                visitante.classList.add("time-visitante")

                const logoVisitante = document.createElement("span")
                visitante.appendChild(logoVisitante)

                const imgVisitante = document.createElement("img")
                logoVisitante.appendChild(imgVisitante)
                imgVisitante.classList.add("logo-escudo")
                imgVisitante.src = jogo.visitante.escudo
                imgVisitante.alt = jogo.visitante.nome

                const nomeVisitante = document.createElement("span")
                visitante.appendChild(nomeVisitante)
                nomeVisitante.classList.add("nome-time")
                nomeVisitante.textContent = jogo.visitante.nome

                const transmissao = document.createElement("ul")
                divJogo.appendChild(transmissao);
                transmissao.classList.add("transmissao")
                for (var i = 0; i < jogo.transmissao.length; i++) {
                    const canal = document.createElement("li")
                    transmissao.appendChild(canal);
                    const linkCanal = document.createElement("a")
                    canal.appendChild(linkCanal)
                    linkCanal.href = jogo.transmissao[i].link
                    const logoCanal = document.createElement("img")
                    linkCanal.appendChild(logoCanal)
                    logoCanal.classList.add("logo-transmissao")
                    logoCanal.src = jogo.transmissao[i].logoCanal
                    logoCanal.alt = jogo.transmissao[i].nomeCanal
                }
            })
        })
}

jogoAmanha();

const linksExternos = document.querySelectorAll('a[href^="https"]');
linksExternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})

function handleLink(event) {
    event.preventDefault();

}