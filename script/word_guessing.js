import {
    guessing,
    answer,
    meaning
} from './word_dictionary.js';


$(".scramble").hide();
document.querySelector(".start").addEventListener("click", function(key){
    $(".start").slideUp();
    $(".scramble").slideDown();

    function triggered(){
        document.querySelector("#btn2").disabled=true;
        var timeLimit=30;
        var timeRemaining = setInterval(timeOut, 1000);
    
        function timeOut(){
            if (timeLimit === -1) {
                $(".note").html("<span>Reached Time Limit</span>, Try next word.").hide().delay(200).fadeIn();
                var audio = new Audio("../audio/countdown2.mp3");
                audio.play();
                clearInterval(timeRemaining);
                document.querySelector("#btn2").disabled=false;
            }
            else {
                $("#time").html(timeLimit + "s");
                if(timeLimit<=10){
                    $("#time").css("background-color", "red",) 
                }
                else{
                    $("#time").html(timeLimit + "s");
                }
                var audio = new Audio("../audio/countdown.mp3");
                audio.play();
                timeLimit--;
            }
         };
    
        var randWord = Math.floor(Math.random()*guessing.length);
    
        function wordScramble(){
            document.querySelector("#word").innerHTML = guessing[randWord];
            document.querySelector("#hint").innerHTML = "<b>HINT: </b>" + meaning[randWord];
        };
        wordScramble();
    
        function clicked(){
            var audio = new Audio("../audio/countdown2.mp3");
            audio.play();
            var inputAnswer = document.getElementById("answer").value.toUpperCase();
            if(inputAnswer===answer[randWord]){
                $(".note").html("<span>Congragulations</span>, you got the answer.").hide().delay(200).fadeIn();
                $("input,#btn1").hide();
                clearInterval(timeRemaining);
                document.querySelector("#btn2").disabled=false;
            }
            else if(inputAnswer===""){
                $(".note").html("<span>No Answer</span>, Enter your answer to check.").hide().delay(200).fadeIn();
                $("span").css("color", "red");
            }
            else{
                $(".note").html("<span>Incorrect</span>, you got the wrong answer. Try next word").hide().delay(200).fadeIn();
                $("span").css("color", "red");
                $("input,#btn1").hide();
                clearInterval(timeRemaining);
                document.querySelector("#btn2").disabled=false;
            }
        };
    
        document.querySelector("#btn1").addEventListener("click", clicked);
        $(document).keydown(function(event) {
        if (event.keyCode == 13) {
            clicked();
        }
        });

    };
    triggered();

    document.querySelector("#btn2").addEventListener("click", function(){
        $(".note").html("<span>Answer</span> is displayed here.");
        triggered();
        $("input,#btn1").show();
        document.getElementById("answer").value ='';
    });

});
 






