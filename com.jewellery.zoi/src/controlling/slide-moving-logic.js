$(document).ready(function () {
    var currentIndex = 0;
    var slideCount = $('#-best-price-slide-holding-packet').length;
    var slideWidth = $('#-best-price-slide-holding-packet').width();
    var slides = $('#-best-price-slide-holding');

    function showSlide(index) {
        var offset = -index * slideWidth;
        slides.css('transform', 'translateX(' + offset + 'px)');
    }
    function RightSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }
    function LeftSlide() {
        if(currentIndex != 0){
            currentIndex = (currentIndex - 1) % slideCount;
            showSlide(currentIndex);
        }
    }

    $('#-best-price-leftBtn').click(function(){
        LeftSlide();
        console.log("Left button clicked");
    });
    $('#-best-price-rightBtn').click(function(){
        RightSlide();
    });

    showSlide(currentIndex);
});