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
    
    $('#button').click(function(){
        $.ajax({
            url: "mail.php",
            type: "POST",
            dataType: "html",
            data: $('#mForm').serialize(),
            success: function(response) {
                alert('Письмо успешно отправлено!');
            },
            error: function(response) {
                alert('Ошибка отправки письма!');
            }
        });
        
        $(':input','#mForm')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
    });

    
});