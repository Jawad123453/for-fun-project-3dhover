let doit=document.getElementById("doit");
let donot=document.getElementById("donot");
let btn1=document.getElementById("btn1");

btn1.onclick=function(){
  donot.style.display="none";
  doit.style.display="flex";
}
btn2.onclick=function(){
  donot.style.display="flex";
  doit.style.display="none";
}