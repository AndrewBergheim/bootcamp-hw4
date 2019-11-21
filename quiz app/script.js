
    function quiz(){
        // Remove button
        document.getElementById("starting-content").remove();
        //initialize timer variable
        let TimeRemaining = 75;
        
         //initialize quiz html here
         let quizDiv = document.getElementById("quiz-content");
         let mainQuestionHead = document.createElement("h1");
         mainQuestionHead.setAttribute("id","current-question")

         let AnswerOneButton = document.createElement("button");
         AnswerOneButton.setAttribute("id","answer-1");

         let AnswerTwoButton = document.createElement("button");
         AnswerTwoButton.setAttribute("id","answer-2");

         let AnswerThreeButton = document.createElement("button");
         AnswerThreeButton.setAttribute("id","answer-3");

         let AnswerFourButton = document.createElement("button");
         AnswerFourButton.setAttribute("id", "answer-4");

         quizDiv.appendChild(mainQuestionHead);
         quizDiv.appendChild(AnswerOneButton);
         quizDiv.appendChild(AnswerTwoButton);
         quizDiv.appendChild(AnswerThreeButton);
         quizDiv.appendChild(AnswerFourButton);

        // start timer
        var timer = setInterval(function(){
        document.getElementById("time").innerHTML = TimeRemaining;
             TimeRemaining--;
                    
               
                //quiz conditionals

                if (TimeRemaining < 0){
                    clearInterval(timer);
                    //write score page html here
                    
            }

            },1000);
        //add question
        
    }

    
        
