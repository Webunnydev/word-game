import {
    words,
    answer,
    meaning
} from './word_dictionary.js';


$(".scramble").hide();
document.querySelector(".start").addEventListener("click", function(){
    $(".start").slideUp();
    $(".scramble").slideDown();
    var timeLimit=30;
    setInterval (function (){

        if (timeLimit === -1) {
            alert("Hello");
        }
        else {
            $("#time").html(timeLimit + "s");
            if(timeLimit<=10){
                $("#time").css("background-color", "red",);
            }
            else{
                $("#time").html(timeLimit + "s");
            }
            var audio = new Audio("../audio/countdown.mp3");
            audio.play();
            timeLimit--;
        }
     },1000)
});
 
var randWord = Math.floor(Math.random()*words.length);

function wordScramble(){
    document.querySelector("#word").innerHTML = words[randWord];
    document.querySelector("#hint").innerHTML = "<b>HINT: </b>" + meaning[randWord];


}
wordScramble();

document.querySelector("#btn1").addEventListener("click", function(){
    var inputAnswer = document.getElementById("answer").value.toUpperCase();
    if(inputAnswer===answer[randWord]){
        $(".note").html("<span>Congragulations</span>, you got the answer. Try again").hide().delay(200).fadeIn();
 
    }
    else if(inputAnswer===""){
        $(".note").html("<span>No Answer</span>, Enter your answer to check.").hide().delay(200).fadeIn();
        $("span").css("color", "red");
     
    }
    else{
        $(".note").html("<span>Incorrect</span>, you got the wrong answer.").hide().delay(200).fadeIn();
        $("span").css("color", "red");

 
    }
});


 
 




