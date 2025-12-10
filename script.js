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


    if (isOn === false) {
        img.src = "./img/yellow_lamp.png"
        button.innerText = "Spegni"

        isOn = true

        console.log("accesa");
    } else {
        img.src = "./img/white_lamp.png"
        button.innerText = "Accendi"
        isOn = false
        console.log("spenta");

    }
}
);

button.addEventListener("mouseenter", () => {

    if (isOn === false) {
        button.style.filter = "brightness(1)";
    } else {
        button.style.filter = "brightness(0.7)";
    }


    button.addEventListener("mouseleave", () => {

        if (isOn === true) {
            button.style.filter = "brightness(1)";
        } else {
            button.style.filter = "brightness(0.7)";
        }
    }
    )


    console.log("Mouse sopra il bottone");

}
);






















