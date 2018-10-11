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
    $(".nav").css("text-shadow", "none");
    $("#whoamiDiv").css("text-shadow", "2px 2px pink")
    $("#whoamiContainer").show();
    $("#whatiknowContainer").hide();
    $("#whoareyouContainer").hide();
    $("#whatidoContainer").hide();
    $("#sketchbookContainer").hide();
})
// what i know
$("#whatiknowDiv").on("click", function () {
    $(".nav").css("text-shadow", "none");
    $("#whatiknowDiv").css("text-shadow", "2px 2px pink")
    $("#whoamiContainer").hide();
    $("#whatiknowContainer").show();
    $("#whoareyouContainer").hide();
    $("#whatidoContainer").hide();
    $("#sketchbookContainer").hide();
})
// what i do
$("#whatidoDiv").on("click", function () {
    $(".nav").css("text-shadow", "none");
    $("#whoamiContainer").hide();
    $("#whatiknowContainer").hide();
    $("#whoareyouContainer").hide();
    $("#whatidoContainer").show();
    $("#sketchbookContainer").hide();
    $("#whatidoDiv").css("text-shadow", "2px 2px pink")
})
// sketchbook
$("#sketchbookDiv").on("click", function () {
    $(".nav").css("text-shadow", "none");
    $("#sketchbookDiv").css("text-shadow", "2px 2px pink")
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
    $('.carousel').carousel();
  });

// ++WHO AM I++ INPUT DATA FROM INPUT FEILD SHARED TO FIREBASE
  var config = {
    apiKey: "AIzaSyDEXavw1owVThSnpVcXYfVvigHKlSxoyUI",
    authDomain: "io-contact.firebaseapp.com",
    databaseURL: "https://io-contact.firebaseio.com",
    projectId: "io-contact",
    storageBucket: "",
    messagingSenderId: "928268206661"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#infoSubmit").on("click", function (event) {
    event.preventDefault();

    let name = $("#name").val().trim();
    let company = $("#company").val().trim();
    let email = $("#email").val().trim();
    let details = $("#textarea1").val().trim();
    
    var newInput = {
        Name: name,
        Company: company,
        Email: email,
        Message: details
    };

    console.log(newInput);

    database.ref().push(newInput);

    $("#name").val("");
    $("#email").val("");
    $("#company").val("");
    $("#textarea1").val("");
})
// xxENDxx FIREBASE WHO AM I ABOUT ME WHATEVER