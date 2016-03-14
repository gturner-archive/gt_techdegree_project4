/*jslint browser: true*/
/*global $, jQuery, alert*/
var thisImage;
var thisImageText;

$(".photoView").append("<a class='linkBackButton' href='#'><img class='backButton' src='img/arrowleft.png'></a>");
$(".photoView").append("<a class='linkNextButton' href='#'><img class='nextButton' src='img/arrowright.png'></a>");
$(".photoView").append("<a class='linkCloseButton' href='#'><img class='closeButton' src='img/close-icon.png'></a>");

$("#liveSearch").keyup(function() {
    var search = $(this).val();
    console.log(search);
    $(".gallery img").each(function() {
    console.log($(this).attr("alt").search);
        var searchAttr = $(this).attr("alt");
        if(searchAttr.toLowerCase().search(search.toLowerCase()) > -1) {
            $(this).show();
        } else {
            $(this).fadeOut();
        }
    });
});

$(".gallery a").on("click", function(event) {
    event.preventDefault();
    var $imgSource = $(this).attr("href");
    var $imgText = $(this).children().text();
    thisImage = $(this);
    thisImageText = $(this).children().text();
    $(".shade").show();
    $(".shadeImg").attr("src", $imgSource);  
    $(".shade p").text($imgText);
});

$(".ytvid").on("click", function(event) {
    event.preventDefault();
    console.log("hello");
});

$(".linkCloseButton").on("click", function(event) {
    event.preventDefault();
    $(".shade").hide();
});

$(".linkNextButton").on("click", function() {
    event.preventDefault();
    if(thisImage.next().attr("href") !== undefined) {
        var nextSource = $(thisImage).next().attr("href");
        var nextText = $(thisImage).next().children().text();
        console.log(nextSource);
        $(".shadeImg").attr("src", nextSource);
        $(".shade p").text(nextText);
        thisImage = thisImage.next();
    } else {console.log("Hi!")}
});

$(".linkBackButton").on("click", function(event) {
    event.preventDefault();
    if(thisImage.prev().attr("href") !== undefined) {
        var prevSource = $(thisImage).prev().attr("href");
        var prevText = $(thisImage).prev().children().text();
        console.log(prevText);
        console.log(prevSource);
        $(".shadeImg").attr("src", prevSource);
        $(".shade p").text(prevText);
        thisImage = thisImage.prev();
    } else {console.log("Sorry!")}
});