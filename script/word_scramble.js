$(".scramble").hide();
document.querySelector(".start").addEventListener("click", function(){
    $(".start").slideUp();
    $(".scramble").slideDown();
})