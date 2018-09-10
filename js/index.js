$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    var items = $('.carousel-inner .item');
    $(window).on('resize', function(){
        var width = $(window).width();
        if(width>= 768) {
            $(items).each(function(index,value){
                var item = $(this);
                var imgSrc = item.data('largeImg');
                item.html($('<a class="pcImg" href="javascript:;"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            });
        }else {
            $(items).each(function(index,value){
                var item = $(this);
                var imgSrc = item.data('smallImg');
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'"></a>')
            });
        }
    }).trigger('resize');
    var startX,endX;
    var carousel_inner = $('.carousel_inner')[0];
    var carousel = $('.carousel');
    carousel_inner.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX = e.targetTouches[0].clientX;
        if(endX - clientX > 0) {
            carousel.carousel('prev');
        }
        else if(endX - clientX < 0) {
            carousel.carousel('next');
        }
    });
    
    var lis = $('.wjs-product .nav-tabs').find("li");
    var totalWidth = 0;
    lis.each(function(index,value){
        totalWidth += $(value).innerWidth();
    });
    $('.wjs-product .nav-tabs').width(totalWidth);
    var myScroll = new IScroll('.tabs-parent', {
        scrollX: true, scrollY: false
    });
})