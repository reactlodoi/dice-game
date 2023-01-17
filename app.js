var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

// dom objectig querySelector gsen funktseer haina.
// window.document.querySelector("#score-0").textContent = dice;

// tuhain html iig uurchluh
// document.querySelector("#score-0").innerHTML = "<em>YES!</em>";

// program ehlel

// DOM mod butetsees getElementById() ni querySelector() hamaagu iluu hurdan haidag.
// querySelector dotor haihda #score-0 gej haij bsan bol id aar ni haij bga uyed teghgu
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

// eventinha nerig argument dotor bichij ugnu, hajuud ni tuhain hiigdeh funktsig bichij ugnu
document.querySelector(".btn-roll").addEventListener("click", shooShid);

// ene funktsig anynemous buyu nergu funkts bolgoj bolno.
function shooShid(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    if(diceNumber !== 1){
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // shoo 1 buusan uyed
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        // olon classuudas active gsen classig hasaj ulaan tsegiig shiljuuleh
        // document.querySelector(".player-0-panel").classList.remove("active");
        // document.querySelector(".player-1-panel").classList.add("active");
        // toggle funkts ni tuhain class bval nemne bhgu bol ustgana.
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        diceDom.style.display = "none";
    }
}