$(document).ready(function() {
    
    var originalTop = $('.breadcrumb-wrapper').offset().top;
    
    checkSubnav(originalTop);
    
    $(window).scroll(function() {
        checkSubnav(originalTop);
    });
    
    $('#pageTopLink').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        
        return false;
    });
    
    $(window).resize(function() {
        $.colorbox.resize({width: '95%', height: '95%'});
    });
    
});

function checkSubnav(elTop) {
    if($(window).scrollTop() >= elTop) {
        $('body').addClass('breadcrumb-fixed');
        $('#pageTopLink').show();
    } else {
        $('body').removeClass('breadcrumb-fixed');
        $('#pageTopLink').hide();
    }
}