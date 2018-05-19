"use strict";
document.addEventListener('DOMContentLoaded',  function(){
  
  var rightSliderButtons = document.getElementsByClassName("right-slider-btn");
  for (var i=0;i<rightSliderButtons.length;i++)
  {
    rightSliderButtons[i].addEventListener('click', function () { 
      var contentDiv = this.parentNode.getElementsByClassName('slider-content');
      contentDiv[0].scrollLeft += 200; 
    });
  }

  var leftSliderButtons = document.getElementsByClassName("left-slider-btn");
  for (var i=0;i<leftSliderButtons.length;i++)
  {
    leftSliderButtons[i].addEventListener('click', function () { 
      var contentDiv = this.parentNode.getElementsByClassName('slider-content');
      contentDiv[0].scrollLeft -= 200; 
    });
  }
});
