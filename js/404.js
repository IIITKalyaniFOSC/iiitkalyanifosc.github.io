//For Error 404 Page
function colorstring(thecolor,thetext)
    {
    return '<font style=\"color:'+thecolor+'\">'+thetext+'</font>';
    }

function changetext(){
	var colour = ["green", "blue","cyan","orange","red"];
	var message = "The page you are trying to find does not exist on our website. You can go to the homepage, view source on github, change the language of this message, or report a bug.";
	var indexcolor = Math.floor(Math.random()*colour.length);
	var language = [{"resultstring": colorstring(colour[indexcolor],"cout<<\"") + message +colorstring(colour[indexcolor],"\";")}
				   ];
	var indexlanguage = Math.floor(Math.random()*language.length);
    var maintext = document.getElementById("mainmessage");
    maintext.innerHTML = language[indexlanguage].resultstring;
  
}

window.onload = function() {
	changetext();
}
