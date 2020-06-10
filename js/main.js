$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        navContainerClass: ['inner__slider-nav'],
        navClass: ['inner__slider-left', 'inner__slider-right'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('#mForm').submit(function(e){
        e.preventDefault();
        $.ajax({
          url: "mail.php",
          type: "POST",
          data: $('#mForm').serialize(),
          success: function(response) {
            //обработка успешной отправки
          },
          error: function(response) {
            //обработка ошибок при отправке
         }
        });
    });
});