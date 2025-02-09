// Funzione startGame che gestisce la logica del gioco
function startGame() {
    alert("Benvenuto in AkiLaRosa! Rispondi con 'si' o 'no' alle domande!");

    let personaggi = [
        { nome: "Giulia", femmina: "si", alto: "no", pelato: "no", giovane: "si" },
        { nome: "Attilio", femmina: "no", alto: "no", pelato: "si", giovane: "no" },
        { nome: "Paolona", femmina: "si", alto: "si", pelato: "no", giovane: "no" },
        { nome: "Agrippazzu", femmina: "no", alto: "no", pelato: "si", giovane: "no" },
        { nome: "Eveee", femmina: "si", alto: "no", pelato: "no", giovane: "no" },
        { nome: "Maccu u poccu", femmina: "no", alto: "si", pelato: "no", giovane: "si" },
        { nome: "Siliotta", femmina: "si", alto: "no", pelato: "no", giovane: "si" },
        { nome: "Ninni", femmina: "no", alto: "no", pelato: "si", giovane: "no" },
        { nome: "Ciccio", femmina: "no", alto: "no", pelato: "no", giovane: "si" },
        { nome: "Chiara", femmina: "si", alto: "no", pelato: "no", giovane: "si" },
        { nome: "Roberto", femmina: "no", alto: "si", pelato: "no", giovane: "no" },
        { nome: "Mattia", femmina: "no", alto: "si", pelato: "si", giovane: "si" },
        { nome: "Vincenzo", femmina: "no", alto: "si", pelato: "si", giovane: "no" }
    ];

    // Funzione per chiedere risposte con "si" o "no"
    function chiedi(domanda) {
        let risposta = prompt(domanda + "(si/no)").toLowerCase();
        return risposta === "si";
    }

    // Chiediamo le caratteristiche del "caro"
    let femmina = chiedi(" Il tuo caro è femmina?");
    let alto = chiedi(" Il tuo caro è alto?");
    let pelato = chiedi(" Il tuo caro è pelato?");
    let giovane = chiedi(" Il tuo caro è giovane?");

    // Filtriamo i personaggi in base alle risposte
    let filtrati = personaggi.filter(p =>
        p.femmina === (femmina ? "si" : "no") &&
        p.alto === (alto ? "si" : "no") &&
        p.pelato === (pelato ? "si" : "no") &&
        p.giovane === (giovane ? "si" : "no")
    );

    // Mostriamo il risultato
    if (filtrati.length === 1) {
        alert("Il tuo caro è " + filtrati[0].nome + "!");
    } else if (filtrati.length > 1) {
        alert("Potrebbe essere uno di questi: " + filtrati.map(p => p.nome).join(","));
    } else {
        alert("Au nu sacciu!");
    }
}

// Collegamento del click del pulsante alla funzione startGame
document.getElementById('startButton').addEventListener('click', startGame);
