// Store default value
localStorage.setItem("clickedSubject", "Wybierz przedmiot z tabeli po prawej!");
// Display default value
document.getElementById("clickedSubject").innerHTML = localStorage.getItem("clickedSubject");

$(document).ready(function(){
  $("#plan td").click(function(){
    $(this).css("background-color", "yellow");
    // set badge value from local storage
    $(this).html(localStorage.getItem("clickedSubject") );
  });

  $("#dane td").click(function(){
    // set local storage
    localStorage.setItem("clickedSubject", $(this).text() );
    document.getElementById("clickedSubject").innerHTML = localStorage.getItem("clickedSubject");

  });


});

var table_dane = $('#dane').tableToJSON();
console.log(table_dane);