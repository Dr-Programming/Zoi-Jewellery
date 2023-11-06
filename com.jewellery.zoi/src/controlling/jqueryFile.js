$(document).ready(function () {
    var currentIndex = 0;
    var slideCount = $('.slide-link-div-item').length;
    var slideWidth = $('.slide-link-div-item').width();
    var slides = $('.slide-link-div-packet');

    function showSlide(index) {
        var offset = -index * slideWidth;
        slides.css('transform', 'translateX(' + offset + 'px)');
    }

    function autoSlide() {
        if(currentIndex ==1){
            currentIndex = (currentIndex - 1) % slideCount;
        showSlide(currentIndex);
        }else{
            currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
        }
        
    }
    function RightSlide() {
        if (currentIndex <=1){
            currentIndex = (currentIndex + 1) % slideCount;
            showSlide(currentIndex);
        }
    }
    function LeftSlide() {
        if(currentIndex != 0){
            currentIndex = (currentIndex - 1) % slideCount;
            showSlide(currentIndex);
        }
    }

    $('#-slide-link-div-leftBtn').click(function(){
        LeftSlide();
    });
    $('#-slide-link-div-rightBtn').click(function(){
        RightSlide();
    });

    showSlide(currentIndex);

    setInterval(autoSlide, 3000);

    ////////////////////////////////////////////////////////////////
    $("#-best-price-toggle-div").hide();

    $("#-best-price-toogle-button").click(function(){
        //$("#extra-warp").toggle(200);
        $("#-best-price-toggle-div").slideToggle("medium");
    });

    $("#-new-item-toggle-div").hide();

    $("#-new-item-toogle-button").click(function(){
        //$("#extra-warp").toggle(200);
        $("#-new-item-toggle-div").slideToggle("medium");
    });

    $("#-hurry-buy-toggle-div").hide();

    $("#-hurry-buy-toogle-button").click(function(){
        //$("#extra-warp").toggle(200);
        $("#-hurry-buy-toggle-div").slideToggle("medium");
    });
});