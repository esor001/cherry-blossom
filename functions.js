$(".dark-btn").click(function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  });
//   don't have to us . for toggle class
$(".glow-btn").click(function(){
    $(".box").toggleClass("glow");
  });

$(".spin-btn").click(function(){
    $(".box").toggleClass("spin");
    // $(".ufo").removeClass("show");

  });

$(".reveal-btn").click(function(){
    $(".ufo").css({
        "opacity":"1"
    });
    $(".reveal-btn").hide();
  });

$( ".draggable" ).draggable({ 
   snap: true 
});

$(".hint-btn").click(function(){
  $(".hint").css({
    "opacity":"1"
  });
  $(".hint-btn").hide();
});

$(".reveal-btn").click(function(){
    $(".puzzle").css({
        "opacity":"1"
    });
    $(".reveal-btn").hide();
  });

