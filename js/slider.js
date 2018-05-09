"use strict";
  document.addEventListener('DOMContentLoaded',  function(){
      //For Event Slider
      function scrollSliderContent(amount) {
        document.getElementById("slider-content").scrollLeft += amount;
      }
      document.getElementById("right-slider-btn").onclick = function () { scrollSliderContent(200) };
      document.getElementById("left-slider-btn").onclick = function () { scrollSliderContent(-200) };
  });
