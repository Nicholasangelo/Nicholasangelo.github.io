// var gallery = {
//     barb:"images/barb.png",
//     boots:"imagesboots.png",
//     cowangie:"images/cowangie.jpg",
//     dinofiiInfo:"images/dinofiiInfo.png"
// }

// for (let i = 0; i < gallery.length; i++) {
//     $(".option").append.attr("style", "Background-image:url(" + [i] + ");");

// }
// HIDE THEM DIVS
$("#sketchbookContainer").hide();
$("#whoareyouContainer").hide();


// SKETCHBOOK DISPLAY
$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
});

//  REVEAL CLICKS
$("#sketchbookDiv").on("click", function () {
    $("#sketchbookContainer").show();
    //  $("#sketchbookContainer").hide();
    $("#whoareyouContainer").hide();
})
$("#whoareyouDiv").on("click", function () {
    $("#whoareyouContainer").show();
    $("#sketchbookContainer").hide();
    // $("#whoareyouContainer").hide();
})