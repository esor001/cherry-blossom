$(".spring-btn").click(function(){
    $(".tree").toggleClass("spring");
    $("body").toggleClass("spring");
    $(".tree-spring-green").toggleClass("spring");
  });

  $(".bloom-btn").click(function(){
    $(".tree").toggleClass("bloom");
    $("body").toggleClass("bloom");
    $(".tree-bloom").toggleClass("bloom");
    $(".petals").toggleClass("bloom");


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
    $(".snow").toggleClass("winter");

  });


  $( ".drag" ).draggable();

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

$('.play').click(function(){
  var $this = $(this);
  var id = $this.attr('id').replace(/btn/, '');
  $this.toggleClass('active');
  if($this.hasClass('active')){
      $this.text('pause'); 
      $('audio[id^="sound"]')[id-1].play();        
  } else {
      $this.text('play');
      $('audio[id^="sound"]')[id-1].pause();
  }
});


TweenLite.set("#container",{perspective:600})
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 60;
var warp = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'petals snow'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   warp.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};



