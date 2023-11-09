//Funzione per creare il tabellone
const numeriTabellone = 76
const creaTabellone = function(n){
    const tabelloneContenitore = document.getElementById("tabellone")
    for (let i = 0; i < n; i++) {
        const cellaContenitore = document.createElement("div");
        const cellaNumero = document.createElement("h3")
        cellaNumero.innerText = i + 1
        cellaContenitore.appendChild(cellaNumero)
        tabelloneContenitore.appendChild(cellaContenitore)
    }
}

creaTabellone(numeriTabellone)

//Funzione per estrarre un numero
const estrazioneNumero = function(){
    const numeroEstratto = Math.round(Math.random() * 76);
    console.log(numeroEstratto)
}

const bottone = document.getElementById("estrazioneNumero")
bottone.addEventListener('click', estrazioneNumero)

//Funzione per selezionare la casella
