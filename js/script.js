/***Cookie policy Home Popup Script start *****/
window.addEventListener("load",function(){
setTimeout(
    function open(event){
        document.querySelector(".popup").style.
        display="block";
    },
    1000
)
});

document.querySelector("#close").addEventListener
("click", function(){
    document.querySelector(".popup").style.display=
    "none";
});/***Cookie policy Home Popup Script end *****/

var $slider = $('.slider'); 
var $slide = 'li'; 
var $transition_time = 1000; 
var $time_between_slides = 4000; 
function slides(){ 
  return $slider.find($slide);
}

slides().fadeOut();
slides().first().addClass('active');
slides().first().fadeIn($transition_time);

$function = function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }

$interval = setInterval($function, $transition_time +  $time_between_slides );

$("img").on("mouseover",function(){
 clearInterval($interval);
});

$("img").on("mouseout",function(){
  $interval = setInterval($function, $transition_time +  $time_between_slides );
});

 