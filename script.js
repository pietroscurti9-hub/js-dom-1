// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e 
//  accanto un bottone con la scritta
// “Accendi”.

// Al click del bottone, la lampadina dovrà accendersi 
// (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre
// in allegato)


const button = document.querySelector(".interruttore")
const img = document.querySelector(".lampadina")

let isOn = false

button.addEventListener("click", () => {
// se la lampadina è spenta, quando clicco cambia la sorgente dell'immagine, 
// il valore in true e il testo del bottone in "Spegni"
    if (isOn === false) {
        img.src = "./img/yellow_lamp.png"
        button.innerText = "Spegni"
        isOn = true
        console.log("accesa");

// altrimenti se la lampadina è accesa, quando clicco rimetti la sorgente dell'immagine precedente, 
// il valore in false e rimetti il testo "Accendi" nel bottone
    } else {
        img.src = "./img/white_lamp.png"
        button.innerText = "Accendi"
        isOn = false
        console.log("spenta");

    }
  }
);
// quando ho il puntatore sull'elemento button
button.addEventListener("mouseenter", () => {
// se la lampadina è spenta [isOn === false], modifica lo stile aumentando la luminosità
// altrimenti diminiuscila
    if (isOn === false) {
        button.style.filter = "brightness(1)";
    } else {
        button.style.filter = "brightness(0.7)";
    }


    button.addEventListener("mouseleave", () => {
// se la lampadina è accesa [isOn === true], modifica lo stile diminuendo la luminosità
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


    























