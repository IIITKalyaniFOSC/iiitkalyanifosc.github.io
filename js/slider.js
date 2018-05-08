//For Event Slider
"use strict";
      function scrollSliderContent(amount) {
        document.getElementById("slider-content").scrollLeft += amount;
      }

      document.getElementById("right-slider-btn").onclick = function () { scrollSliderContent(200) };
      document.getElementById("left-slider-btn").onclick = function () { scrollSliderContent(-200) };
  });
