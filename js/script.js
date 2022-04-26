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



function service(evt, service) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(service).style.display = "block";
  evt.currentTarget.className += " active";


}

