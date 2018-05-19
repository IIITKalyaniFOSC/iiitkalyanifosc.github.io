"use strict";
document.addEventListener('DOMContentLoaded',  function(){
  document.getElementById('tab-group').className = 'ready';
  var headerClass = 'tab-header',
      contentClass = 'tab-content';
  var tabHeaders = document.getElementsByClassName(headerClass);
  for(var i=0; i<tabHeaders.length; i++){
    tabHeaders[i].addEventListener('click', activateTab);
  }
  function activateTab(event){
    var currId = this.id,  
        contentId = currId.replace('header', 'content'); 
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
});
