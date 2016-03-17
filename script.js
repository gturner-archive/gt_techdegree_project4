/*jslint browser: true*/
/*global $, jQuery, alert*/
var thisImage;
var thisImageText;

$(".photoView").append("<a class='linkBackButton' href='#'><img class='backButton' src='img/arrowleft.png'></a>");
$(".photoView").append("<a class='linkNextButton' href='#'><img class='nextButton' src='img/arrowright.png'></a>");
$(".photoView").append("<a class='linkCloseButton' href='#'><img class='closeButton' src='img/close-icon.png'></a>");

//Searching

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

//Creating lightbox on click

$(".gallery a").on("click", function(event) {
    event.preventDefault();
    console.log($(this).hasClass("ytvid"));
    if($(this).hasClass("ytvid") == true) {
        $(".shadeVid").show();
        $(".shadeImg").hide();
        var $imgSource = $(this).attr("href");
        var $imgText = $(this).children().text();
        thisImage = $(this);
        thisImageText = $(this).children().text();
        $(".shade").show();
        $(".shadeVid").attr("src", $imgSource);  
        $(".shade p").text($imgText);
    } else {
        $(".shadeImg").show();
        $(".shadeVid").hide();
        var $imgSource = $(this).attr("href");
        var $imgText = $(this).children().text();
        thisImage = $(this);
        thisImageText = $(this).children().text();
        $(".shade").show();
        $(".shadeImg").attr("src", $imgSource);  
        $(".shade p").text($imgText);
    }
});

//Creating targets for navigating and closing lightbox

$(".linkCloseButton").on("click", function(event) {
    event.preventDefault();
    $(".shade").hide();
});

$(".linkNextButton").on("click", function() {
    event.preventDefault();
    if(thisImage.next().attr("href") !== undefined && thisImage.next().hasClass("ytvid") == true) {
        $(".shadeImg").hide();
        $(".shadeVid").show();
        var nextSource = $(thisImage).next().attr("href");
        var nextText = $(thisImage).next().children().text();
        console.log(nextText);
        console.log(nextSource);
        $(".shadeElement").attr("src", nextSource);
        $(".shade p").text(nextText);
        thisImage = thisImage.next();
    } else if(thisImage.next().attr("href") !== undefined) {
        console.log("YOYOYO");
        $(".shadeVid").hide();
        $(".shadeImg").show();
        var nextSource = $(thisImage).next().attr("href");
        var nextText = $(thisImage).next().children().text();
        console.log(nextText);
        console.log(nextSource);
        $(".shadeElement").attr("src", nextSource);
        $(".shade p").text(nextText);
        thisImage = thisImage.next();
    }
});

$(".linkBackButton").on("click", function(event) {
    event.preventDefault();
    if(thisImage.prev().attr("href") !== undefined && thisImage.prev().hasClass("ytvid") == true) {
        $(".shadeImg").hide();
        $(".shadeVid").show();
        var prevSource = $(thisImage).prev().attr("href");
        var prevText = $(thisImage).prev().children().text();
        console.log(prevText);
        console.log(prevSource);
        $(".shadeElement").attr("src", prevSource);
        $(".shade p").text(prevText);
        thisImage = thisImage.prev();
    } else if(thisImage.prev().attr("href") !== undefined)  {
        $(".shadeVid").hide();
        $(".shadeImg").show();
        var prevSource = $(thisImage).prev().attr("href");
        var prevText = $(thisImage).prev().children().text();
        console.log(prevText);
        console.log(prevSource);
        $(".shadeElement").attr("src", prevSource);
        $(".shade p").text(prevText);
        thisImage = thisImage.prev();
    }
});

//Binding buttons for navigating lightbox

Mousetrap.bind('left', function() {
    if($('.shade').is(':visible')) {
        event.preventDefault();
        if(thisImage.prev().attr("href") !== undefined && thisImage.prev().hasClass("ytvid") == true) {
            $(".shadeImg").hide();
            $(".shadeVid").show();
            var prevSource = $(thisImage).prev().attr("href");
            var prevText = $(thisImage).prev().children().text();
            console.log(prevText);
            console.log(prevSource);
            $(".shadeElement").attr("src", prevSource);
            $(".shade p").text(prevText);
            thisImage = thisImage.prev();
        } else if(thisImage.prev().attr("href") !== undefined)  {
            $(".shadeVid").hide();
            $(".shadeImg").show();
            var prevSource = $(thisImage).prev().attr("href");
            var prevText = $(thisImage).prev().children().text();
            console.log(prevText);
            console.log(prevSource);
            $(".shadeElement").attr("src", prevSource);
            $(".shade p").text(prevText);
            thisImage = thisImage.prev();
        } else {console.log("help!")}
    }
});

Mousetrap.bind('right', function() {
    if($('.shade').is(':visible')) {
        event.preventDefault();
        if(thisImage.next().attr("href") !== undefined && thisImage.next().hasClass("ytvid") == true) {
            $(".shadeImg").hide();
            $(".shadeVid").show();
            var nextSource = $(thisImage).next().attr("href");
            var nextText = $(thisImage).next().children().text();
            console.log(nextText);
            console.log(nextSource);
            $(".shadeElement").attr("src", nextSource);
            $(".shade p").text(nextText);
            thisImage = thisImage.next();
        } else if(thisImage.next().attr("href") !== undefined) {
            $(".shadeVid").hide();
            $(".shadeImg").show();
            var nextSource = $(thisImage).next().attr("href");
            var nextText = $(thisImage).next().children().text();
            console.log(nextText);
            console.log(nextSource);
            $(".shadeElement").attr("src", nextSource);
            $(".shade p").text(nextText);
            thisImage = thisImage.next();
        }
    }
});

