$(document).ready(function(){

    // $('#hero').hover(function() {
    //     $('header').css('background-image', 'url("./assets/images/maxresdefault.jpg")');},
    //     function() {
    //         $('header').css('background-image', 'none');
    //     }
    // );

    $('.owl-carousel').owlCarousel({
        items:5,
        loop:true,
        margin:10,
        merge:true,
        responsive:{
            678:{
                mergeFit:true
            },
            1000:{
                mergeFit:false
            }
        }
    });
});