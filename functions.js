$(".spring-btn").click(function(){
    $(".tree").toggleClass("spring");
    $("body").toggleClass("spring");
    $(".tree-spring-green").toggleClass("spring");
  });

  $(".bloom-btn").click(function(){
    $(".tree").toggleClass("bloom");
    $("body").toggleClass("bloom");
    $(".tree-bloom").toggleClass("bloom");

  });

  $(".summer-btn").click(function(){
    $(".tree").toggleClass("summer");
    $("body").toggleClass("summer");
    $(".tree-summer").toggleClass("summer");

  });

  $(".fall1-btn").click(function(){
    $(".tree").toggleClass("fall1");
    $("body").toggleClass("fall1");
    $(".tree-fall1").toggleClass("fall1");

  });

  $(".fall2-btn").click(function(){
    $(".tree").toggleClass("fall2");
    $("body").toggleClass("fall2");
    $(".tree-fall2").toggleClass("fall2");

  });

  $(".winter-btn").click(function(){
    $(".tree").toggleClass("winter");
    $("body").toggleClass("winter");
    $(".tree-winter").toggleClass("winter");

  });


$( ".draggable" ).draggable({ 
   snap: true 
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



