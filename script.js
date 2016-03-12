/*jslint browser: true*/
/*global $, jQuery, alert*/

$("#liveSearch").keyup(function() {
    var search = $(this).val();
    
    $(".gallery img").each(function() {
       if(search !== $(this).attr("alt")) {
           $(this).hide;
       } else {
           $(this).show;
       }
    });
});

$(".gallery a").on("click", function(event) {
    event.preventDefault();
    var $imgSource = $(this).attr("href");
    var $imgText = $(this).next().text();
    $(".shade").show();
    $(".shade img").attr("src", $imgSource);  
    $(".shade p").text($imgText);
});

$(".shade").on("click", function() {
    $(".shade").hide();
});

