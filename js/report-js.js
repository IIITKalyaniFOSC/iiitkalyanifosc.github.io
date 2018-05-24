var countClick = 0;

window.addEventListener('mouseup',function(event){
  var overlay = document.getElementById("overlay");
  var overlay2 = document.getElementById("overlay2");
  if(countClick==1){
    if(event.target == overlay ){
      document.getElementById("content").style.filter = "";
      overlay.style.display = "none";
      countClick = 0;
    }
  }
});
function popUp(){
  var overlay = document.getElementById("overlay");
  if(countClick == 0){
    overlay.style.display = "block";
    document.getElementById("content").style.filter = "blur(5px)";
    countClick =1;
  }
  else{
    overlay.style.display = "none";
    countClick = 0;
  }
}
