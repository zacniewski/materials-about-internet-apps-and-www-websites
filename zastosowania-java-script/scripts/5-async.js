/*
Równoległość a asynchroniczność

Asynchroniczność oznacza wykonywanie jakichś operacji jakby w tle, bez blokowania
głównego wątku aplikacji. W języku JavaScript wszystkie zdarzenia są wykonywane zgodnie
z tzw. kolejką zdarzeń. Nie mamy możliwości wykonywania operacji równolegle, jak w innych
językach programowania. Ważne jest dokładne rozróżnienie akcji równoległych i asynchronicz-
nych. Równoległość polega na wykonywaniu kilku operacji równocześnie, w tej samej chwi-
li, co oznacza dostępność kilku wątków dla aplikacji. W procesie asynchronicznym natomiast
wszystkie operacje są wykonywane kolejno jedna po drugiej w jednym wątku, jednak możemy
oczekiwać na zakończenie operacji asynchronicznej bez długotrwałego blokowania tego wątku.
/*

/*
Przykład asynchroniczności nr 1

Załóżmy, że chcemy wykorzystać kamerę z urządzenia użytkownika. 
Aby móc z niej skorzystać, musimy wcześniej uzyskać zgodę użytkownika,
o którą zostanie poproszony przy próbie uzyskania dostępu do urządzenia. Gdy użytkownik
wyrazi zgodę na udostępnienie kamery, w praktyce minie jeszcze chwila, czasami nawet
rzędu 2 – 3 sekund, zanim obraz z kamery będzie można faktycznie wykorzystywać w aplikacji.
Musi bowiem nastąpić m.in. zainicjalizowanie obsługi kamery w przeglądarce, nawiązanie
połączenia z urządzeniem itp. Gdybyśmy całą operację wykonywali synchronicznie, to po
udzieleniu zgody aplikacja zostałaby na krótką chwilę zablokowana, a użytkownik nie
mógłby nic w niej zrobić. Nie jest to dobre podejście i w nowoczesnych aplikacjach warto
do minimum ograniczać wszelkie blokowanie aplikacji. Na naszej stronie możemy mieć
bowiem wiele innych elementów, z których użytkownik mógłby w tym czasie korzystać.
Rozwiązaniem tego problemu jest właśnie asynchroniczność. Po uzyskaniu zgody na dostęp
do urządzenia moglibyśmy bez blokowania strony wyświetlić w naszej aplikacji informację,
że trwa wczytywanie obrazu, a następnie po zakończeniu inicjalizacji połączenia z kamerą
po prostu pokazać obraz. To właśnie jest asynchroniczność. Pierwszym elementem jest udziele-
nie zgody, po czym następuje inicjalizacja połączenia z urządzeniem — rozpoczęcie akcji
asynchronicznej. Następnie oczekujemy na jej zakończenie — powodzeniem lub porażką —
a w tym czasie mogą być wykonywane kolejne operacje z kolejki zdarzeń, np. animacje na
stronie, inne akcje asynchroniczne itp. Gdy połączenie zostanie nawiązane lub odrzucone,
nasza akcja ponownie trafia do kolejki zdarzeń i możemy odpowiednio obsłużyć takie sytuacje,
pokazując nagranie z kamery lub informację o błędzie.
*/

/*
Przykład asynchroniczności nr 2

Innym przykładem w aplikacjach internetowych, chyba najczęściej spotykanym, jest wykony-
wanie asynchronicznych zapytań do serwera. Załóżmy, że mamy stronę z koszykiem użyt-
kownika i chcemy pobrać z serwera listę produktów, które aktualnie się w nim znajdują.
W tym celu po wejściu na stronę koszyka wykonujemy zapytanie do serwera, rozpoczynając
tym samym akcję asynchroniczną. Po jej inicjalizacji możemy na przykład wyświetlić in-
formację Trwa wczytywanie produktów.... Taka operacja może trwać kilka sekund, w czasie
których nie chcemy blokować użytkownikowi strony. Po otrzymaniu odpowiedzi z serwera
nasza akcja ponownie trafia do kolejki zdarzeń. Na podstawie zwróconych danych (np. obiektu
JSON) odpowiednio modyfikujemy drzewo DOM i wyświetlamy produkty znajdujące się
w koszyku. Jeśli odpowiedź zakończy się błędem, obsługujemy taką sytuację, wyświetlając
komunikat.
*/

/* 
Czym jest tzw. obiekt Promise?

Otóż jest to tzw. przyszła wartość, nieznana w trakcie
tworzenia obiektu. W przykładzie z kamerą obiektem Promise będzie odpowiedź urządzenia
— pozytywna bądź negatywna, w zależności od tego, czy udało się nawiązać poprawne połą-
czenie. W drugim przypadku obiekt Promise będzie rozumiany jako przyszła wartość odpowie-
dzi z serwera — albo pozytywnej, zawierającej listę przedmiotów z koszyka, albo negatyw-
nej, spowodowanej błędem. W literaturze i wielu poradnikach stosowane jest tłumaczenie
obiektu Promise jako „obietnicy”. W tej książce będziemy również stosować to określenie w celu
zachowania spójności z innymi źródłami, jednak w praktyce nie jest ono do końca poprawne.
Obietnicę należy więc rozumieć jako pewność, że otrzymamy jakąś przyszłą wartość. Obiecu-
jemy, że jakaś wartość się pojawi, nie obiecujemy jednak w żadnym wypadku, jaka ona będzie
— pozytywna czy negatywna. Istotny jest sam fakt oczekiwania na tzw. przyszłą, nieznaną
na początku wartość.
*/

/*
Tworzenie obietnic

Aby stworzyć nową obietnicę, wykorzystujemy konstruktor obiektu Promise, a jako parametr
przekazujemy mu funkcję pobierającą dwa argumenty: resolve oraz reject. Oczywiście nazwy
tych argumentów mogą być dowolne, lecz przyjęło się raczej stosować właśnie takie nazewnic-
two i zachęcam Cię, abyś też trzymał się tej zasady. Resolve i reject to funkcje, które wywo-
łujemy w odpowiednim momencie dla pozytywnego lub negatywnego rozwiązania obietnicy
(resolve), np. gdy wystąpi błąd (reject). Aby lepiej to zobrazować, przejdźmy do przykładu:
*/

function getArticle(id) {
    return new Promise((resolve, reject) => {
        if (id === '123') {
            resolve({title: 'Podstawy JavaScript', author: 'Jan Kowalski'});
        } else {
            reject('Nie znaleziono artykułu o takim id.');
        }
    });
}

/*
 W jaki sposób możemy teraz wykorzystać funkcję getArticle?
 */

getArticle('123').then(data => console.log(data));
getArticle('bzzz').then(data => console.log(data));


/*
Funkcja getArticle pobiera jeden parametr, którym jest identyfikator szukanego artykułu, i na
tej podstawie zwraca jego tytuł i autora lub informację, że artykułu nie znaleziono. W realnej
aplikacji prawdopodobnie znalazłoby się tutaj zapytanie skierowane do serwera i sprawdzenie,
czy szukany artykuł znajduje się w bazie danych. Zauważ jednak, że wewnątrz funkcji
getArticle zwracamy obiekt Promise, czyli nową obietnicę. W jej wnętrzu weryfikujemy
istnienie artykułu, co na potrzeby prostego przykładu robimy poprzez zwykłe przyrównanie
identyfikatora do przykładowej wartości 123. Dla takiego identyfikatora wywołujemy funkcję
resolve, a dla innego funkcję reject.

Funkcja resolve przyjmuje jako parametr dane, które następnie będzie można wykorzystać
np. w celu wyświetlenia artykułu na stronie. Może to być obiekt, tablica, liczba, ciąg znakowy itp.
Najczęściej spotkamy się z przekazywaniem obiektów, choć w niektórych przypadkach będą to
także typy proste, zależnie od konkretnej sytuacji i potrzeby.
Funkcja reject przyjmuje jako parametr dane, które zostaną zwrócone jako obietnica zakoń-
czona niepowodzeniem. Często przekazuje się tutaj ciąg znakowy opisujący problem, co można
łatwo np. wyświetlić użytkownikowi. Może to jednak być również każdy inny typ, np. obiekt za-
wierający bardziej szczegółowe informacje o błędzie.

*/