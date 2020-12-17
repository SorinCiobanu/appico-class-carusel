$(document).ready(function(){
    $('.s-carusel').slick({
        infinite: true,
        slidesToShow: 5,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    arrows: false,
                }
            },
        ]
    });
  });