// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e 
//  accanto un bottone con la scritta
// “Accendi”.

// Al click del bottone, la lampadina dovrà accendersi 
// (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre
// in allegato)


// richiamo le classi degli elementi in html attribuendo loro in una variabile
const button = document.querySelector(".interruttore")
const img = document.querySelector(".lampadina")


// creo una variabile standard con valore booleano per tenere traccia e  
// modificare i valori delle classi
let isOn = false


//  quando clicco il bottone
button.addEventListener("click", () => {

    // se la lampadina è spenta [isOn === false], 
    // sovrascrivi la sorgente dell'immagine, 
    //  il testo del bottone in "Spegni" e cambia il valore in true 
    if (isOn === false) {
        img.src = "./img/yellow_lamp.png"
        button.style = "box-shadow: 5px 0px 10px 5px rgb(0, 0, 0, 0.25)";
        button.innerText = "Spegni"
        isOn = true
        console.log("accesa");

        // altrimenti se la lampadina è accesa [isOn === true], quando clicco il bottone, 
        // rimetti la sorgente dell'immagine precedente, 
        // socrascrivi il testo "Accendi" nel bottone  e cambia il valore in false
    } else {
        img.src = "./img/white_lamp.png"
        button.style = "box-shadow: 5px 0px 10px 5px rgb(0, 0, 0, 0)";
        button.innerText = "Accendi"
        isOn = false
        console.log("spenta");

    }
}
);
// quando ho il puntatore sulla costante button
button.addEventListener("mouseenter", () => {
    // se la lampadina è spenta, modifica lo stile dell'elemento aumentando la luminosità
    // altrimenti diminiuscila
    if (isOn === false) {
        button.style.filter = "brightness(1)";
    } else {
        button.style.filter = "brightness(0.7)";
    }

    // quando tolgo il puntatore dalla costante button
    button.addEventListener("mouseleave", () => {
        // se la lampadina è accesa, modifica lo stile dell'elemento diminuendo la luminosità
        // altrimenti aumentala
        if (isOn === true) {
            button.style.filter = "brightness(1)";
        } else {
            button.style.filter = "brightness(0.7)";
        }
    }
    )
}
);


























