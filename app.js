$(document).ready(function(){
    $('.slider__list').slick(
        {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows: true,
            prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
            nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`,
            dots: true,
            centerMode: true,
            variableWidth: true,
            centerPadding: '60px',
            // autoplay: true,
            // autoplaySpeed: 1000,

        }
    );
  });


  