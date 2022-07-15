$(document).on('ready', function () {
    $(".slide").slick({
        dots: true,
        slidesToShow: 1,    
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        //원래 8000
        speed:800,
        pauseOnHover:true,
        easing:'linear',
        infinite:true,
        loop:true,
        loopAdditionalSlides : 1,
        draggable : true
    });


    const idx = $('.slick-dots li button').text();
    




    $('slick-prev').click(function(){
        if(idx>=1)
        $(this).addClass('back');
        $(this).slick('slickPause');
        // console.log(idx);
    })
});