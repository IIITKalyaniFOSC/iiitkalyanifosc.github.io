//For Responsive Navigation Bar.
  var clickCount=0;
  function showNavBar(){
    if(clickCount==0){
      clickCount=1;
    document.getElementById("drop-ul").className = "drop-dwn active";
    document.getElementById("menu-btn").className = "fas fa-caret-square-up";
    }
  else if(clickCount==1){
    clickCount=0;
    document.getElementById("drop-ul").className = " drop-dwn not-active";
    document.getElementById("menu-btn").className = "fas fa-caret-square-down";
  }
}