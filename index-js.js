"use strict";


  document.addEventListener('DOMContentLoaded',  function(){
      // For Tab Group
      document.getElementById('tab-group').className = 'ready';

      var headerClass = 'tab-header',
          contentClass = 'tab-content';

      var tabHeaders = document.getElementsByClassName(headerClass);
      for(var i=0; i<tabHeaders.length; i++){
        tabHeaders[i].addEventListener('click', activateTab);
      }

      function activateTab(event){
        var currId = this.id,  //i.e - tab-header-1
            contentId = currId.replace('header', 'content');   //result: tab-content-1
            deactivateAllTabs();
            document.getElementById(currId).className = headerClass +' active';
            document.getElementById(contentId).className = contentClass +' active';
      }

      function deactivateAllTabs(){
        var tabHeader = document.getElementsByClassName(headerClass),
            tabContents = document.getElementsByClassName(contentClass);

        for(var i=0;i<tabHeaders.length;i++){
          tabHeader[i].className = headerClass;
          tabContents[i].className = contentClass;
        }
      }

      //For Event Slider
      function scrollSliderContent(amount) {
        document.getElementById("slider-content").scrollLeft += amount;
      }

      document.getElementById("right-slider-btn").onclick = function () { scrollSliderContent(200) };
      document.getElementById("left-slider-btn").onclick = function () { scrollSliderContent(-200) };
  });
