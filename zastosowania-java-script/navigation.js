/*
<a class="dropdown-item" href="index.html">Tryb ścisły + funkcje</a>
<a class="dropdown-item" href="event-handling.html">Obsługa zdarzeń</a>
<a class="dropdown-item" href="object-event.html">Obiekt 'event'</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="mouse-moves-and-clicks.html">Zdarzenia ruchu i kliknięć myszką</a>
*/

let menu_div = document.getElementsByClassName('dropdown-menu')[0];

let aTag0 = document.createElement('a');
aTag0.setAttribute('href',"ponowne-wprowadzenie-do-JavaScript.html");
aTag0.textContent= "Ponowne wprowadzenie do JS";
aTag0.className = "dropdown-item";
menu_div.appendChild(aTag0);

let aTag = document.createElement('a');
aTag.setAttribute('href',"index.html");
aTag.textContent= "Tryb ścisły + funkcje";
aTag.className = "dropdown-item";
menu_div.appendChild(aTag);

let aTag2 = document.createElement('a');
aTag2.setAttribute('href',"event-handling.html");
aTag2.textContent= "Obsługa zdarzeń";
aTag2.className = "dropdown-item";
menu_div.appendChild(aTag2);

let aTag3 = document.createElement('a');
aTag3.setAttribute('href',"object-event.html");
aTag3.textContent= "Obiekt 'event'";
aTag3.className = "dropdown-item";
menu_div.appendChild(aTag3);

let aTag4 = document.createElement('a');
aTag4.setAttribute('href',"mouse-moves-and-clicks.html");
aTag4.textContent= "Zdarzenia ruchu i kliknięć myszką";
aTag4.className = "dropdown-item";
menu_div.appendChild(aTag4);

let aTag5 = document.createElement('a');
aTag5.setAttribute('href',"async.html");
aTag5.textContent= "Asynchroniczność - part I";
aTag5.className = "dropdown-item";
menu_div.appendChild(aTag5);

let aTag6 = document.createElement('a');
aTag6.setAttribute('href',"async-2.html");
aTag6.textContent= "Asynchroniczność - part II";
aTag6.className = "dropdown-item";
menu_div.appendChild(aTag6);


