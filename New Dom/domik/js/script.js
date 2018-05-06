var  div;
var myDuymem = document.getElementById("duyme");
var myDuymem2 = document.getElementById("duyme2");
var cntnr = document.getElementById("container");
var xPos;
var yPos;

var myClasses = document.getElementsByClassName("cavo");

var myEventim = myDuymem.addEventListener("click",function(){
div = document.createElement("div");
div.setAttribute("style","width:100px; height:80px; border-radius:100%; background-color:aqua; position:absolute;");
div.setAttribute("class","cavo");
div.style.left = Math.random() * 1000 + "px";
div.style.top = Math.random() * 1000 + "px";
cntnr.appendChild(div);

});


cntnr.addEventListener("click",function(c){
xPos = event.clientX;
yPos = event.clientY;

document.getElementById("position3").innerHTML = xPos + " " + yPos;

})


cntnr.addEventListener("click",function(event){

for (var i = 0; i < myClasses.length;i++){
 

 console.log(myClasses[i].style.left = xPos+"px");
  console.log(myClasses[i].style.top = yPos+"px");
  
  console.log(myClasses[i].style.transition = "1s ease");

//     div.style.left = xPos + "px";
// div.style.top = yPos + "px";
  
}


document.getElementById("position").innerHTML = xPos + " " + yPos;

});