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

    function AjaxFormRequest(formMain,url) {
        jQuery.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: jQuery("#"+formMain).serialize(),
            success: function(response) {
                alert('Письмо успешно отправлено!');
            },
            error: function(response) {
                alert('Ошибка отправки письма!');
            }
        });
        
        /*$(':input','#formMain')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');*/
    }
});
