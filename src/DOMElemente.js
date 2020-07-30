document.getElementsByTagName("tagName");   //findet alle Objekte eines Tags <p>
document.getElementById("elementID");          //findet genau ein Objekt
document.getElementsByClassName("column-a");  //findet alle Objekte einer Klasse
document.querySelectorAll(".sidebar p");        //findet alle Objekte eines Selektors

var newDiv = document.createElement("div");     //Element hinzufügen
var Text = document.createTextNode("This Text");   //Text hinzufügen
newDiv.appendChild(Text);                                //Text im Element einfügen
insertBefore(newElement, elementWhichShouldBehind);      //Text vor ein Element einfügen
replaceChild(newChild, swapChild);                       //Element mit einem anderen tauschen
removeChild(removeMe);                                   //Element entfernen

//DOM Attribute
getAttributes();        //Attribute auslesen
setAttributes();        //Attribute eingeben (CSS Stylesheet ändern)

//DOM innerHTML
//HTML Inhalt ändern
document.getElementById("h1").innerHTML = "h1 geändert";

//DOM innerText
//HTML Inhalt erhalten
var varName = document.getElementById("h1").innerText;

//DOM Style
document.getElementById("id").style.color="#fff"; //ändert den Style des Elements