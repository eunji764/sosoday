
$("#categ").mouseover(function() {
    $(".submenu").stop().slideDown(100);
});

$("#categ").mouseleave(function() {
    $(".submenu").stop().slideUp(100);
});

$(".submenu>li").mouseover(function(){
    $(this).children(".subsubmenu").stop().fadeIn();
});

$(".submenu>li").mouseleave(function(){
    $(this).children(".subsubmenu").stop().fadeOut();
});


var imgs=2;
var now=0;

function start(){
   $(".imgs").eq(0).siblings().css({"display":"none"});
    setInterval(function(){slide()},5000);
}

function slide(){
    now= now==imgs?0:now+=1;
    $(".imgs").eq(now-1).css({"display":"none"});
    $(".imgs").eq(now).css({"display":"block"});
}

start();


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imgs");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}