let randomNr1 = Math.floor(Math.random()*5);
let rabatBillede1 = "images/rabat" + randomNr1 + ".png";
// ("#et").addEventListener("click", changeBackground);

let randomNr2 = Math.floor(Math.random()*5);
let rabatBillede2 = "images/rabat" + randomNr2 + ".png";

let randomNr3 = Math.floor(Math.random()*5);
let rabatBillede3 = "images/rabat" + randomNr3 + ".png";

let randomNr4 = Math.floor(Math.random()*5);
let rabatBillede4 = "images/rabat" + randomNr4 + ".png";

let randomNr5 = Math.floor(Math.random()*5);
let rabatBillede5 = "images/rabat" + randomNr5 + ".png";

let randomNr6 = Math.floor(Math.random()*5);
let rabatBillede6 = "images/rabat" + randomNr6 + ".png";

let randomNr7 = Math.floor(Math.random()*5);
let rabatBillede7 = "images/rabat" + randomNr7 + ".png";

let randomNr8 = Math.floor(Math.random()*5);
let rabatBillede8 = "images/rabat" + randomNr8 + ".png";

let randomNr9 = Math.floor(Math.random()*5);
let rabatBillede9 = "images/rabat" + randomNr9 + ".png";



let alleRabatKnapper = document.querySelectorAll(".nyeKnapper").length;
var count = 0;

for (i = 0; i < alleRabatKnapper; i++) {
    document.querySelectorAll(".nyeKnapper")[i].addEventListener("click", changeBackground);
}

function changeBackground() {

    var valgtKnap = this.id;
   

    switch (valgtKnap) {
        case "et":
            this.style.backgroundImage = "url(" + rabatBillede1 + ")";
            break;

        case "to":
            this.style.backgroundImage = "url(" + rabatBillede2 + ")";
            break;

        case "tre":
            this.style.backgroundImage = "url(" + rabatBillede3 + ")";
            break;

        case "fire":
            this.style.backgroundImage = "url(" + rabatBillede4 + ")";
            break;

        case "fem":
            this.style.backgroundImage = "url(" + rabatBillede5 + ")";
            break;

        case "seks":
            this.style.backgroundImage = "url(" + rabatBillede6 + ")";
            break;

        case "syv":
            this.style.backgroundImage = "url(" + rabatBillede7 + ")";
            break;

        case "otte":
            this.style.backgroundImage = "url(" + rabatBillede8 + ")";
            break;

        case "ni":
            this.style.backgroundImage = "url(" + rabatBillede9 + ")";
            break;

        default: consoleLog(this);
    }
    count++;
    console.log(count);
    win();
}

function win(){
    let reward = count;
    if (reward == 3){
        document.getElementById("reward").innerHTML = "Congratulations! 🎁";
        document.getElementById("rewardInstructions").innerHTML = "Claim your reward in our coffeshop"
    }
}
