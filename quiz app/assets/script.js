

if (localStorage["scores"] == null){
    var nameArray = [];
    var scoreArray = [];
}

else{
    let storedNames = localStorage.getItem("names")
    let storedScores = localStorage.getItem("scores")
    var nameArray = JSON.parse(storedNames);
    var scoreArray = JSON.parse(storedScores);
};

    
function quiz(){
    // Remove button
    document.getElementById("starting-content").remove();
    //initialize timer variable
    let TimeRemaining = 75;
    let questionCount = 1;
    
        //initialize quiz html here
        let quizDiv = document.getElementById("quiz-content");
        let mainQuestionHead = document.createElement("h1");
        mainQuestionHead.setAttribute("id","current-question")

        let AnswerOneButton = document.createElement("button");
        AnswerOneButton.setAttribute("id","answer-1");
        AnswerOneButton.setAttribute("class","btn btn-info answer-button");

        let AnswerTwoButton = document.createElement("button");
        AnswerTwoButton.setAttribute("id","answer-2");
        AnswerTwoButton.setAttribute("class","btn btn-info answer-button");

        let AnswerThreeButton = document.createElement("button");
        AnswerThreeButton.setAttribute("id","answer-3");
        AnswerThreeButton.setAttribute("class","btn btn-info answer-button");

        let AnswerFourButton = document.createElement("button");
        AnswerFourButton.setAttribute("id", "answer-4");
        AnswerFourButton.setAttribute("class","btn btn-info answer-button");

        let feedbackSpan = document.createElement("span");
        feedbackSpan.setAttribute("id", "feedback");

        quizDiv.appendChild(mainQuestionHead);
        quizDiv.appendChild(AnswerOneButton);
        quizDiv.appendChild(AnswerTwoButton);
        quizDiv.appendChild(AnswerThreeButton);
        quizDiv.appendChild(AnswerFourButton);
        quizDiv.appendChild(feedbackSpan);

        //variable declarations for easy access later
    let QuestionContent = document.getElementById("current-question");
    let Answer1Content = document.getElementById("answer-1") ;
    let Answer2Content = document.getElementById("answer-2");
    let Answer3Content = document.getElementById("answer-3");
    let Answer4Content = document.getElementById("answer-4");
    let answered = false; //this is to make sure the event listeners fire only once
    let TimeRemainingValidator = TimeRemaining; //this is to make sure the event listeners fire only once
        
    //Event Listeners
        let answerTarget = document.getElementsByClassName("answer-button");

        answerTarget[0].addEventListener("click", function(){//a
            if (answered === false){
                answered = true;
                if (questionCount === 1){
                    questionCount+= 1;
                    feedbackSpan.innerHTML = "Correct!";
                }
                else if (TimeRemainingValidator === TimeRemaining){
                    TimeRemaining -= 15;
                    feedbackSpan.innerHTML = "Wrong Answer!";
                }
                else {console.log("prevented from firing twice")};

            }
        else {console.log("prevented from firing twice")};
            });

        answerTarget[1].addEventListener("click", function(){//b
            if (answered === false){
                answered = true;
                if (questionCount === 3){
                    questionCount+= 1;
                    feedbackSpan.innerHTML = "Correct!";
                }
                else if (TimeRemainingValidator === TimeRemaining){
                    TimeRemaining -= 15;
                    feedbackSpan.innerHTML = "Wrong Answer!";
                }
                else {console.log("prevented from firing twice")};
            }
        else {console.log("prevented from firing twice")};
            });

        answerTarget[2].addEventListener("click", function(){//c
            if (answered === false){
                answered = true;
                if (questionCount === 4 || questionCount === 5){
                    questionCount+= 1;
                    feedbackSpan.innerHTML = "Correct!";
                }

                else if (TimeRemainingValidator === TimeRemaining){
                    TimeRemaining -= 15;
                    feedbackSpan.innerHTML = "Wrong Answer!";
                }
                else {console.log("prevented from firing twice")};
            }
        else {console.log("prevented from firing twice")};
            });

        answerTarget[3].addEventListener("click", function(){//d
            if (answered === false){
                answered = true;
                if (questionCount === 2){
                    questionCount+= 1;
                    feedbackSpan.innerHTML = "Correct!";
                }
                else if (TimeRemainingValidator === TimeRemaining){
                    TimeRemaining -= 15;
                    feedbackSpan.innerHTML = "Wrong Answer!";
                }
                else {console.log("prevented from firing twice")};
            }
        else {console.log("prevented from firing twice")};
                });
        //end Event Listeners

    // start timer
    let timer = setInterval(function(){
    document.getElementById("time").innerHTML = TimeRemaining;
    feedbackSpan.innerHTML = "";
        answered = false;
        TimeRemaining--;
        TimeRemainingValidator = TimeRemaining;
            if (TimeRemaining < 0){
                clearInterval(timer);
                //write loss page
                document.getElementById("quiz-content").remove();
                document.getElementById("scorespan").innerHTML = "YOU LOSE"
                
        }
        //add question
        if (questionCount === 1){
            QuestionContent.innerHTML = question1.question
            Answer1Content.innerHTML = question1.answer1 // correct
            Answer2Content.innerHTML = question1.answer2
            Answer3Content.innerHTML = question1.answer3
            Answer4Content.innerHTML = question1.answer4
            }

        if (questionCount === 2){
            QuestionContent.innerHTML = question2.question
            Answer1Content.innerHTML = question2.answer1 
            Answer2Content.innerHTML = question2.answer2
            Answer3Content.innerHTML = question2.answer3
            Answer4Content.innerHTML = question2.answer4// correct
        }

        if (questionCount === 3){
            QuestionContent.innerHTML = question3.question
            Answer1Content.innerHTML = question3.answer1 
            Answer2Content.innerHTML = question3.answer2 //correct
            Answer3Content.innerHTML = question3.answer3
            Answer4Content.innerHTML = question3.answer4
        }

        if (questionCount === 4){
            QuestionContent.innerHTML = question4.question
            Answer1Content.innerHTML = question4.answer1 
            Answer2Content.innerHTML = question4.answer2
            Answer3Content.innerHTML = question4.answer3 // correct
            Answer4Content.innerHTML = question4.answer4
        }

        if (questionCount === 5){
            QuestionContent.innerHTML = question5.question 
            Answer1Content.innerHTML = question5.answer1 
            Answer2Content.innerHTML = question5.answer2
            Answer3Content.innerHTML = question5.answer3 // correct
            Answer4Content.innerHTML = question5.answer4
        }

        if (questionCount > 5){
            let score = TimeRemaining;
            clearInterval(timer);
            

            //write high score page
            document.getElementById("quiz-content").remove();
            let scorediv = document.getElementById("scorediv");
            let initialInput = document.createElement("input");
            initialInput.setAttribute("id", "initial-input");
            
            let submitButton = document.createElement("button");
            submitButton.setAttribute("id", "submit-button");
            submitButton.setAttribute("class", "btn btn-info");
            submitButton.innerHTML = "Submit";
            let submitHeading = document.createElement("h1");
            submitHeading.innerHTML = "You win! Your score is " + score + ". Enter your initials below to add this to your high scores!"
            
            //submit function
            
            
            scorediv.appendChild(submitHeading);
            scorediv.appendChild(initialInput);
            scorediv.appendChild(submitButton);
            

            document.getElementById("submit-button").addEventListener("click", function(){
                if (document.getElementById("initial-input").value != ""){
                    //localStorage.setItem(document.getElementById("initial-input").value, score)
                    nameArray.push(document.getElementById("initial-input").value);
                    scoreArray.push(score);
                    let nameString = JSON.stringify(nameArray);
                    let scoreString = JSON.stringify(scoreArray);
                    localStorage.setItem("names", nameString);
                    localStorage.setItem("scores", scoreString);
                    //overall high score
                    if (localStorage.getItem("highscore") == null ||localStorage.getItem("highscore") < score){
                        localStorage.setItem("highscore", score);
                        localStorage.setItem("highname", document.getElementById("initial-input").value);
                    } 
                    window.location.href = "scorelist.html";
                    
                }
            });

            


        }
        console.log(questionCount);

        },1000);
}

    
        
