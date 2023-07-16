import {
    words,
    answer,
    meaning
} from './word_dictionary.js';


$(".scramble").hide();
document.querySelector(".start").addEventListener("click", function(){
    $(".start").slideUp();
    $(".scramble").slideDown();
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
        $(".note").html("<span>Congragulations</span>, you got the answer.").hide().delay(200).fadeIn();
    }
    else if(inputAnswer===""){
        $(".note").html("<span>No Answer</span>").hide().delay(200).fadeIn();
        $("span").css("color", "red");
    }
    else{
        $(".note").html("<span>Incorrect</span>, you got the wrong answer.").hide().delay(200).fadeIn();
        $("span").css("color", "red");
    }
});

