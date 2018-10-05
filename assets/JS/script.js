// HIDE THEM DIVS
$("#whoamiContainer").show();
$("#whatiknowContainer").hide();
$("#whatidoContainer").hide();
$("#whoareyouContainer").hide();
$("#sketchbookContainer").hide();

// SKETCHBOOK GALLERY DISPLAY
$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
});

//  REVEAL CLICKS
// who am i
$("#whoamiDiv").on("click", function () {
    $("#whoamiContainer").show();
    $("#whatiknowContainer").hide();
    $("#whoareyouContainer").hide();
    $("#whatidoContainer").hide();
    $("#sketchbookContainer").hide();
})
// what i know
$("#whatiknowDiv").on("click", function () {
    $("#whoamiContainer").hide();
    $("#whatiknowContainer").show();
    $("#whoareyouContainer").hide();
    $("#whatidoContainer").hide();
    $("#sketchbookContainer").hide();
})
// who are you
$("#whoareyouDiv").on("click", function () {
    $("#whoamiContainer").hide();
    $("#whatiknowContainer").hide();
    $("#whoareyouContainer").show();
    $("#whatidoContainer").hide();
    $("#sketchbookContainer").hide();
})
// what i do
$("#whatidoDiv").on("click", function () {
    $("#whoamiContainer").hide();
    $("#whatiknowContainer").hide();
    $("#whoareyouContainer").hide();
    $("#whatidoContainer").show();
    $("#sketchbookContainer").hide();
})
// sketchbook
$("#sketchbookDiv").on("click", function () {
    $("#whoamiContainer").hide();
    $("#whatiknowContainer").hide();
    $("#whoareyouContainer").hide();
    $("#whatidoContainer").hide();
    $("#sketchbookContainer").show();
})

$(".logoFloat").on("click", function () {
    $(this).css("display", "none");
    var data = $(this).attr("data-table");
    var alt = $(this).attr("alt");
    var newLog = $("<td>").text(alt);

    if (data === "language") {
        $("#language").append(newLog);
    } else if (data === "library") {
        $("#library").append(newLog);
    } else if (data === "programs") {
        $("#programs").append(newLog);
    }

    // $("#table").append(logoLog);


    // logoLog = $("<td>").text(alt);
    //     $("#table").append(logoLog);

})





