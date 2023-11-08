$(document).ready(function(){

    $('#-type-of-material-list').hide();
    $('#-type-of-insert-list').hide();
    $('#-type-of-color-list').hide();
    $('#-type-of-sample-list').hide();
    $('#-type-of-sample-list-2').hide();
    $('#-type-of-sample-list-3').hide();

    $('#-type-of-material').click(function(){
        $('#-type-of-material-list').slideToggle('medium');
    });

    $('#-type-of-products').click(function(){
        $('#-type-of-products-list').slideToggle('medium');
    });

    $('#-type-of-insert').click(function(){
        $('#-type-of-insert-list').slideToggle('medium');
    });

    $('#-type-of-color').click(function(){
        $('#-type-of-color-list').slideToggle('medium');
    });

    $('#-type-of-sample').click(function(){
        $('#-type-of-sample-list').slideToggle('medium');
    });
    $('#-type-of-sample-2').click(function(){
        $('#-type-of-sample-list-2').slideToggle('medium');
    });
    $('#-type-of-sample-3').click(function(){
        $('#-type-of-sample-list-3').slideToggle('medium');
    });

});