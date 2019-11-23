
    
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
         AnswerOneButton.setAttribute("class","answer-button");

         let AnswerTwoButton = document.createElement("button");
         AnswerTwoButton.setAttribute("id","answer-2");
         AnswerTwoButton.setAttribute("class","answer-button");

         let AnswerThreeButton = document.createElement("button");
         AnswerThreeButton.setAttribute("id","answer-3");
         AnswerThreeButton.setAttribute("class","answer-button");

         let AnswerFourButton = document.createElement("button");
         AnswerFourButton.setAttribute("id", "answer-4");
         AnswerFourButton.setAttribute("class","answer-button");

         quizDiv.appendChild(mainQuestionHead);
         quizDiv.appendChild(AnswerOneButton);
         quizDiv.appendChild(AnswerTwoButton);
         quizDiv.appendChild(AnswerThreeButton);
         quizDiv.appendChild(AnswerFourButton);

         //variable declarations for easy access later
       let QuestionContent = document.getElementById("current-question");
        let Answer1Content = document.getElementById("answer-1") ;
        let Answer2Content = document.getElementById("answer-2");
        let Answer3Content = document.getElementById("answer-3");
        let Answer4Content = document.getElementById("answer-4");

        // start timer
        let timer = setInterval(function(){
        document.getElementById("time").innerHTML = TimeRemaining;
            let answered = false;
            answered = false;
            TimeRemaining--;
            let TimeRemainingValidator = TimeRemaining; //this is to make sure the event listeners fire only once
               
                //Event Listeners
                let answerTarget = document.getElementsByClassName("answer-button");
                answerTarget[0].addEventListener("click", function(){//a
                    if (answered === false){
                        answered = true;
                        if (questionCount === 1 || questionCount === 5){
                            questionCount+= 1;
                        }
                        else if (TimeRemainingValidator === TimeRemaining){
                            TimeRemaining -= 15;
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
                        }
                        else if (TimeRemainingValidator === TimeRemaining){
                            TimeRemaining -= 15;
                        }
                        else {console.log("prevented from firing twice")};
                    }
                        else {console.log("prevented from firing twice")};
                    });

                answerTarget[2].addEventListener("click", function(){//c
                    if (answered === false){
                        answered = true;
                        if (questionCount === 4){
                            questionCount+= 1;
                        }

                        else if (TimeRemainingValidator === TimeRemaining){
                            TimeRemaining -= 15;
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
                        }
                        else if (TimeRemainingValidator === TimeRemaining){
                            TimeRemaining -= 15;
                        }
                        else {console.log("prevented from firing twice")};
                    }
                        else {console.log("prevented from firing twice")};
                        });
                //end Event Listeners



                if (TimeRemaining < 0){
                    clearInterval(timer);
                    //write loss page
                    
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
                QuestionContent.innerHTML = question5.question // correct
                Answer1Content.innerHTML = question5.answer1 
                Answer2Content.innerHTML = question5.answer2
                Answer3Content.innerHTML = question5.answer3
                Answer4Content.innerHTML = question5.answer4
            }

            if (questionCount > 5){
                let Score = TimeRemaining;
                clearInterval(timer);
                
                //write high score page
            }
            console.log(questionCount);

            },1000);
    }

    
        
