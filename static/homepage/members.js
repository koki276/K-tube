//clickイベント
//this構文

$(function(){

//モーダル１
    $('.jmpa').click(function(){
        $('.mdla').fadeIn();
    });

    $('.close-modal').click(function(){
        $('.mdla').fadeOut();
    });

//モーダル２
    $('.jmpb').click(function(){
        $('.mdlb').fadeIn();
    });

    $('.close-modal').click(function(){
        $('.mdlb').fadeOut();
    });

});