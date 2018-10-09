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



var smash = $("#whatiknowContainer");
smash.mousedown(function () {
    smash.css('cursor', 'url(images/smash2.png), auto');
})
smash.mouseup(function () {
    smash.css('cursor', 'url(images/smash.png), auto');
})

$(".logoFloat").on("click", function () {
    $(this).css("display", "none");

    var data = $(this).attr("data-table");
    var alt = $(this).attr("alt");
    var newLog = $("<td>").text(alt);

    if (data === "language") {
        $("#language").append(newLog);
        // smash.css('cursor', 'url(images/smash2.png), auto');
    } else if (data === "library") {
        $("#library").append(newLog);
        // smash.css('cursor', 'url(../../images/smash2.png)');
    } else if (data === "programs") {
        $("#programs").append(newLog);
        // smash.css('cursor', 'url(../../images/smash2.png)');
    }

})

// ++START++ THINGS IVE DONE

$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});
$(document).ready(function(){
    $('.carousel').carousel({shift: 0});
  });
