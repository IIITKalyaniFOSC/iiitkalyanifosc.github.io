//project image gallery
function showPreview(src,name){
  unfade();
  //src = http://127.0.0.1:8000/img/project1.jpg
  var n = src.search("project");
  var newSrc = src.slice(n,n+8);
  var http = src.slice(0,n);
  var index = src.slice(n+7,n+8);
  document.getElementById("preview-img").src = http+newSrc+".png";
  if(index=='x'){
    document.getElementById("preview-text").innerHTML = "Hold on, this is coming soon. Star this repository and fork it to contribute and to stay tuned.";
  }
  else{
  document.getElementById("preview-text").innerHTML = document.getElementsByClassName("slider-text")[parseInt(index)-1].innerHTML  ;
}
}
// JsAnimations
function unfade() {
    element = document.getElementById("preview-img");
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 35);
}

//For Responsive Navigation Bar.
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

}
