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

  let music = new Audio({
    loop: true,
    volume: 1,
    src: ['https://www.youtube.com/embed/eG4IQQ9AM2g']
})

$(document).ready(function(){
  $("form").submit(function(){
      var text = document.getElementById("myText").value; 
    alert("Hi! I hope you have a wonderful day :)");

  });
});



