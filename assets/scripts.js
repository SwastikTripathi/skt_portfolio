$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1200:{
                items:5
            }
        }
    });


});
  
