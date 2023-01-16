var activePlayer = 1;

var scores = [0, 0];

var roundScore = 0;

var dice = Math.floor(Math.random() * 6 + 1);

// dom objectig querySelector gsen funktseer haina.
// window.document.querySelector("#score-0").textContent = dice;

// tuhain html iig uurchluh
// document.querySelector("#score-0").innerHTML = "<em>YES!</em>";

// program ehlel
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";