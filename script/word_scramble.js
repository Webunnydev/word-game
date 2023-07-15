import {
    words,
    answer,
    meaning
} from './word_dictionary.js';


$(".scramble").hide();
document.querySelector(".start").addEventListener("click", function(){
    $(".start").slideUp();
    $(".scramble").slideDown();
})
 
var randWord = Math.floor(Math.random()*words.length);

function wordScramble(){
    document.querySelector("#word").innerHTML = words[randWord];
    document.querySelector("#hint").innerHTML = "<b>HINT: </b>" + meaning[randWord];

    var value = document.querySelector("#value");
    if (value === answer[randWord]){
        alert("correct");
    }
}
wordScramble();