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
    
    //Preloader
    preloaderFadeOutTime = 5000;
    function hidePreloader() {
        var preloader = $('#pre-loader');
        preloader.fadeOut(preloaderFadeOutTime);
        $('#after-load').removeClass('d-none');
        $("#pre-loader-bg").remove();
    }
    hidePreloader();
    
});
  
