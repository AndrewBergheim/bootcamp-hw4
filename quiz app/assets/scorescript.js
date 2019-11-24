let highname = localStorage.getItem("highname");
let highscore = localStorage.getItem("highscore");
let scores = JSON.parse(localStorage.getItem("scores"));
let names = JSON.parse(localStorage.getItem("names"));
if (highscore > 0){
document.getElementById("highscore").innerHTML = ("The current high score is " + highscore + " by " + highname);
}

for (let i = 0; i < scores.length; i++){
    listItem = document.createElement("li");
    listItem.textContent = (names[i] + " - " + scores[i]);
    document.getElementById("scorelist").appendChild(listItem);
}