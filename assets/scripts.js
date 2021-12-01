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
            2000:{
                items:5
            }
        }
    });
    
    //Preloader
    preloaderFadeOutTime = 20000;
    function hidePreloader() {
        var preloader = $('#pre-loader');
        preloader.fadeOut(preloaderFadeOutTime);
        $('#after-load').removeClass('d-none');
    }
    hidePreloader();
    
});
  
