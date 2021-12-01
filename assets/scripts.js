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
    
    $(document).ready(function() {
        //Preloader
        preloaderFadeOutTime = 2000;
        function hidePreloader() {
            var preloader = $('#pre-loader');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });


});
  
