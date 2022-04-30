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


// social Icon start

	

function twitterShow() {
  document.getElementById("twitter").innerHTML=' — <i class="fa-brands fa-twitter"></i> — Twitter ';
  document.getElementById("twt").style.transform="rotate(-90deg)";
  document.getElementById("twt").style.margin="50px 0px 50px -50px";
    document.getElementById("facebook").innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
    document.getElementById("linkedin").innerHTML = '<i class="fa-brands fa-linkedin-in"></i>';
    document.getElementById("youtube").innerHTML = '<i class="fa-brands fa-youtube"></i>';
    
}

function twitterOut() {
  document.getElementById("twitter").innerHTML = '<i class="fa-brands fa-twitter"></i>';
  document.getElementById("twt").style.transform="rotate(0deg)";
  document.getElementById("twt").style.margin="0px 0px 0px 0px";
//   document.getElementById("facebook").innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
}

function FacebookShow() {
 
 document.getElementById("facebook").innerHTML = ' — <i class="fa-brands fa-facebook-f"></i>— Facebook ';
 document.getElementById("fb").style.transform="rotate(-90deg)";
  document.getElementById("fb").style.margin="50px 0px 50px -50px";
    document.getElementById("twitter").innerHTML = '<i class="fa-brands fa-twitter"></i>';
    document.getElementById("linkedin").innerHTML = '<i class="fa-brands fa-linkedin-in"></i>';
    document.getElementById("youtube").innerHTML = '<i class="fa-brands fa-youtube"></i>';
}

function FacebookOut() {

 document.getElementById("facebook").innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
 document.getElementById("fb").style.transform="rotate(0deg)";
  document.getElementById("fb").style.margin="0px 0px 0px 0px";
}

function LinkedInShow() {
 
 document.getElementById("linkedin").innerHTML = ' — <i class="fa-brands fa-linkedin-in"></i> — LinkedIn ';
 document.getElementById("lnk").style.transform="rotate(-90deg)";
  document.getElementById("lnk").style.margin="50px 0px 50px -50px";
    document.getElementById("facebook").innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
    document.getElementById("twitter").innerHTML = '<i class="fa-brands fa-twitter"></i>';
    document.getElementById("youtube").innerHTML = '<i class="fa-brands fa-youtube"></i>';
}
function LinkedInOut() {

 document.getElementById("linkedin").innerHTML = '<i class="fa-brands fa-linkedin-in"></i>';
 document.getElementById("lnk").style.transform="rotate(0deg)";
  document.getElementById("lnk").style.margin="0px 0px 0px 0px";
}

function YoutubeShow() {
 
 document.getElementById("youtube").innerHTML = '— <i class="fa-brands fa-youtube"></i> — Youtube';
 document.getElementById("ytb").style.transform="rotate(-90deg)";
  document.getElementById("ytb").style.margin="50px 0px 50px -50px";
    document.getElementById("facebook").innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
    document.getElementById("linkedin").innerHTML = '<i class="fa-brands fa-linkedin-in"></i>';
    document.getElementById("twitter").innerHTML = '<i class="fa-brands fa-twitter"></i>';
}

function YoutubeOut() {

 document.getElementById("youtube").innerHTML = '<i class="fa-brands fa-youtube"></i>';
 document.getElementById("ytb").style.transform="rotate(0deg)";
  document.getElementById("ytb").style.margin="0px 0px 0px 0px";
}

//ENd  Social

