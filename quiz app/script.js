
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

         //variable declarations for easy access later
       let QuestionContent = document.getElementById("current-question")
        let Answer1Content = document.getElementById("answer-1")
        let Answer2Content = document.getElementById("answer-2")
        let Answer3Content = document.getElementById("answer-3")
        let Answer4Content = document.getElementById("answer-4")

        // start timer
        var timer = setInterval(function(){
        document.getElementById("time").innerHTML = TimeRemaining;
             TimeRemaining--;
                    
               
                //quiz conditionals

                if (TimeRemaining < 0){
                    clearInterval(timer);
                    //write score page html here
                    
            }
            //add question
            if (questionCount = 1){
                QuestionContent.innerHTML = question1.question
                Answer1Content.innerHTML = question1.answer1
                Answer2Content.innerHTML = question1.answer2
                Answer3Content.innerHTML = question1.answer3
                Answer4Content.innerHTML = question1.answer4
            }

            },1000);
        
        
    }

    
        
