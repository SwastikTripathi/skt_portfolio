$(document).ready(function(){

    var typed = new Typed('#typed-welcome',  {
        strings: ["Sentence 1", "Amazing", "wow"],
        typeSpeed = 30;
    });
    
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
            2000:{
                items:5
            }
        }
    });
    
    setTimeout(function(){
        $('#pre-loader-bg').addClass('d-none');
        $('#pre-loader-bg').css('height', '0');
        $('#after-load').css('display', 'block');
    }, 3000);
    
    //Preloader
//     preloaderFadeOutTime = 5000;
//     function hidePreloader() {
//         var preloader = $('#pre-loader-bg');
//         preloader.fadeOut(preloaderFadeOutTime);
//         $('#after-load').css({"display": "block"});
//         $('#pre-loader-bg').css({"display": "none", "height": "0"});
//     }
//     hidePreloader();
    
});
  
