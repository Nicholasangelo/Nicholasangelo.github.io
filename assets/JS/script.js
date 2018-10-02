// var gallery = {
//     barb:"images/barb.png",
//     boots:"imagesboots.png",
//     cowangie:"images/cowangie.jpg",
//     dinofiiInfo:"images/dinofiiInfo.png"
// }

// for (let i = 0; i < gallery.length; i++) {
//     $(".option").append.attr("style", "Background-image:url(" + [i] + ");");
    
// }
$("#sketchbookContainer").hide();

$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
 });

 $("#sketchbookDiv").on("click", function() {
     $("#sketchbookContainer").show();
 })