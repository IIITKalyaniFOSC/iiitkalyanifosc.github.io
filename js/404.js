//For Error 404
function colorstring(thecolor,thetext)
    {
    return '<font style=\"color:'+thecolor+'\">'+thetext+'</font>';
    }

window.addEventListener('load', function(){

	var indexcolor = Math.floor(Math.random()*10);
	var language = Math.floor(Math.random()*10);
	
    var language = {"cplusplus": colorstring("green","cout<<\"") + "The page you are trying to find does not exist on our website. You can try going to the homepage, view source on github, change the language of this message, or report a bug." +colorstring("green","\";")};
  
    var maintext = document.getElementById("mainmessage");
  
    maintext.innerHTML = language.cplusplus;
  
});
