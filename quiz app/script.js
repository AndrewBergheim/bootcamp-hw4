
    function quiz(){
        // Remove button
        document.getElementById("starting-content").remove();
        //initialize timer variable
        let TimeRemaining = 75;
        
        // start timer
        var timer = setInterval(function(){
        document.getElementById("time").innerHTML = TimeRemaining;
             TimeRemaining--;
                    if (TimeRemaining < 0){
                        clearInterval(timer);
                        //write score page html here
                }
                //initialize quiz html here
                
                //quiz conditionals


            },1000);
        //add question
        
    }

    
        
