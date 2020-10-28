/*

Rejestrując nasłuchiwanie na jakieś zdarzenie, często będziemy musieli również pobrać parame-
try tego zdarzenia, takie jak pozycja myszki, referencja do elementu, na którym wystąpiło
zdarzenie itp. W tym celu możemy wykorzystać specjalny obiekt event, który jest para-
metrem każdej funkcji uruchamianej jako obsługa zdarzenia
*/

const btn = document.getElementById('btn');
btn.addEventListener('click', event => {
    console.log(event.target.textContent);
});

/*
Tym razem nasza funkcja, będąca drugim parametrem metody addEventListener , wykorzystuje
obiekt event. Oczywiście jego nazwa może być dowolna, ale przyjęło się, że najczęściej jest tu
stosowana pojedyncza litera e lub właśnie słowo event. Jest to jednak tylko nieobligatoryjna
konwencja.
Co zawiera taki obiekt? Otóż całkiem sporo ciekawych parametrów, wśród których znajduje
się np. pole target. Przechowuje ono referencję do elementu, na którym zostało wykryte
dane zdarzenie; u nas jest to zdarzenie click. Istnieje również pole o nazwie currentTarget,
lecz omówimy je dokładniej w dalszej części rozdziału, gdy będziemy analizować problem
tzw. propagacji zdarzeń. Na razie w zupełności wystarczy nam pole target.
Skoro jest to referencja do klikniętego elementu, to — jak każda referencja DOM — posiada
również pole textContent, które w tym przypadku zawiera po prostu treść napisu widniejącą na
przycisku <button>. Gdy uruchomimy ten kod w przeglądarce, to po kliknięciu przycisku
w konsoli zobaczymy napis z guzika
*/