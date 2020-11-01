/*
<a class="dropdown-item" href="index.html">Tryb ścisły + funkcje</a>
<a class="dropdown-item" href="event-handling.html">Obsługa zdarzeń</a>
<a class="dropdown-item" href="object-event.html">Obiekt 'event'</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="mouse-moves-and-clicks.html">Zdarzenia ruchu i kliknięć myszką</a>
*/

let menu_div = document.getElementsByClassName('dropdown-menu')[0];
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
