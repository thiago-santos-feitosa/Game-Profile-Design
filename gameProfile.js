const slides = document.querySelectorAll('[data-js="carousel-item"]')
const nextButton = document.querySelector('[data-js="carousel-button-next"]')
const prevButton = document.querySelector('[data-js="carousel-button-prev"]')

let SlideIndex = 0;

nextButton.addEventListener('click', ()=> {

    if (SlideIndex === slides.length-1){
        SlideIndex = 0;
    } else {
        SlideIndex ++
    }

    slides.forEach(slides => {
        slides.classList.remove('game-carousel-item-visible')        
    })

    slides[SlideIndex].classList.add('game-carousel-item-visible')
})

prevButton.addEventListener('click', ()=> {

    if(SlideIndex === 0){
        SlideIndex === slides.length -1;
    }else{
        SlideIndex--
    }

    slides.forEach(slides => {
        slides.classList.remove('game-carousel-item-visible')
    })
    slides[SlideIndex].classList.add('game-carousel-item-visible')
})

// BACK TO TOP
$(document).ready(function() {
    $("#back-to-top").css("display", "none");

  $("body").scroll(function() {
    if($("body").scrollTop === 0) {
        $("#back-to-top").css("display", "none");
    } 
    else{
        $("#back-to-top").css("display", "block");
    }
  });

  $("#back-to-top").click(function() {
    $("html, body").animate({scrollTop:0}, 800);
  })
})
// var btn = $("#back-to-top");

// btn.click(function() {
//     $("html, body").animate({scrollTop:0}, 'slow');
// });