
const menuBtn = document.querySelector('.category'),
      topMenu = document.querySelector('.u_menu'),
      menu = document.querySelector('.menu'),
      navMenu = document.querySelector('.nav')

let width

window.addEventListener('resize', ()=> {
  width = window.innerWidth
  if(width > 1024){
    menu.style.display='none'
    topMenu.style.display='flex'
    navMenu.style.display='flex'
  } else {
    menu.style.display='none'
    topMenu.style.display='none'
    navMenu.style.display='none'
  }
})

menuBtn.addEventListener('mouseover',()=>{
  if ( width > 1024){menu.style.display='block'}
})

menuBtn.addEventListener('mouseleave',()=>{
  if ( width > 1024){menu.style.display='none'}
})

menuBtn.addEventListener('click',()=>{
  if (width <= 1024){
    if(menu.style.display === 'block'){
      menu.style.display='none'
      topMenu.style.display='none'
      navMenu.style.display='none'
    }else {
      menu.style.display='block'
      topMenu.style.display='flex'
      navMenu.style.display='flex'
    }
  }
})


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