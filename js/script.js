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
});
/***Cookie policy Home Popup Script end *****/
	

 
var counter = 1;

setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 3000);

/*** Subscription button feature *****/
function subscription(){
    document.getElementById("sub").innerHTML='<div class="subform" style="margin-right:200px; padding:10px 50px; position:relative; top:-40%"><img src="img/subimg.png" width="158px" height="129px" alt=""><button class="btn btn-sm btn-success text-white lbtn " style="transform: rotate(-90deg); width:200px; position:absolute; margin-left: -110%; margin-top: 60%;">Lets Make a Connection</button><p style="margin-bottom:25px;font-size:12px">Subscribe and get our exclusive offers delivered directly to your inbox</p><form action="" class="from-group"><input type="text" placeholder="Email / Phone Number" class="form-control"><input style="background:green; color:white; margin-top:20px" type="button" value="submit" style="margin-top:20px" class="form-control"></form> <img src="img/Ellipse.Png" style=" margin-top:88px; margin-left:200px"</div> ';
    document.getElementById("arw").innerHTML="";
    document.getElementById("arw2").innerHTML='<i class="fa-solid fa-angle-right" style="margin-left:150px; font-size:20px;font-weight:900"></i></span>';
}

function subscriptionclose(){
    
    document.getElementById("sub").innerHTML='';
    document.getElementById("subscrip").innerHTML=`<button class="btn btn-success text-white rs" onclick="subscription()" id="sbt" style="transform: rotate(-90deg);">Let's Make a Connection</button>
<a id="arw" onclick="subscription()"><span><i class="fa-solid fa-angle-left"></i></span></a> 
<a id="arw2" onclick="subscriptionclose()" class="close"></a> 


<div id="sub" style="margin-top: -50%;"></div>`;
    
}
