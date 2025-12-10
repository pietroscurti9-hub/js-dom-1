// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e 
//  accanto un bottone con la scritta
// “Accendi”.

// Al click del bottone, la lampadina dovrà accendersi 
// (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre
// in allegato)


const button = document.getElementById("interruttore")
const img = document.querySelector(".lampadina")

let isOn = false

button.addEventListener("click", () => {


    if (isOn === false) {
        img.src = "./img/yellow_lamp.png"
        isOn = true
        console.log("accesa");
    } else {
        img.src = "./img/white_lamp.png"
        isOn = false
        console.log("spenta");

    }
 }
)



















