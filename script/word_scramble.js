import {
    words,
    answer,
    meaning
} from './word_dictionary.js';


$(".scramble").hide();
document.querySelector(".start").addEventListener("click", function(key){
    $(".start").slideUp();
    $(".scramble").slideDown();
    var timeLimit=12;
    var timeRemaining = setInterval(timeOut, 1000);

    function timeOut(){
        if (timeLimit === -1) {
            $(".note").html("<span>Reached Time Limit</span>, Try next word.").hide().delay(200).fadeIn();
            var audio = new Audio("../audio/countdown2.mp3");
            audio.play();
            clearInterval(timeRemaining);
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

    var randWord = Math.floor(Math.random()*words.length);

    function wordScramble(){
        var randWord = Math.floor(Math.random()*words.length);
        document.querySelector("#word").innerHTML = words[randWord];
        document.querySelector("#hint").innerHTML = "<b>HINT: </b>" + meaning[randWord];

    };

    function clicked(){
        var inputAnswer = document.getElementById("answer").value.toUpperCase();
        if(inputAnswer===answer[randWord]){
            $(".note").html("<span>Congragulations</span>, you got the answer.").hide().delay(200).fadeIn();
            $("input,#btn1").hide();
            clearInterval(timeRemaining);
            var audio = new Audio("../audio/countdown2.mp3");
            audio.play();
        }
        else if(inputAnswer===""){
            $(".note").html("<span>No Answer</span>, Enter your answer to check.").hide().delay(200).fadeIn();
            $("span").css("color", "red");
            var audio = new Audio("../audio/countdown2.mp3");
            audio.play();
        }
        else{
            $(".note").html("<span>Incorrect</span>, you got the wrong answer. Try next word").hide().delay(200).fadeIn();
            $("span").css("color", "red");
            $("input,#btn1").hide();
            clearInterval(timeRemaining);
            var audio = new Audio("../audio/countdown2.mp3");
            audio.play();
        }
    };

    document.querySelector("#btn1").addEventListener("click", clicked);
    $(document).keydown(function(event) {
    if (event.keyCode == 13) {
        clicked();
    }
    });

    document.querySelector("#btn2").addEventListener("click", function(){
        wordScramble();
        $("input,#btn1").show();
    });

});
 






