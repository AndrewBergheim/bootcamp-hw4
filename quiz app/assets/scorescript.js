let highname = localStorage.getItem("highname");
let highscore = localStorage.getItem("highscore");
let scores = JSON.parse(localStorage.getItem("scores"));
let names = JSON.parse(localStorage.getItem("names"));
if (highscore > 0){
document.getElementById("highscore").innerHTML = ("The current high score is " + highscore + " by " + highname);
}

else{
    document.getElementById("highscore").innerHTML ="No scores available!";
    document.getElementById("scorehead").innerHTML ="Take the quiz and come back later!";
}

for (let i = 0; i < scores.length; i++){
    listItem = document.createElement("li");
    listItem.textContent = (names[i] + " - " + scores[i]);
    document.getElementById("scorelist").appendChild(listItem);
}
document.getElementById("clearbutton").addEventListener("click", function(){
localStorage.clear();
let scorelist = document.getElementById('scorelist');
scorelist.parentNode.removeChild(scorelist);
document.getElementById("highscore").innerHTML ="No scores available!";
document.getElementById("scorehead").innerHTML ="Take the quiz and come back later!";
});