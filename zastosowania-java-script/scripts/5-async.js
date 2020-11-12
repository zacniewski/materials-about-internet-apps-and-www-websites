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

getArticle('123').then(data => console.log("example 1:", data));
getArticle('bzzz').catch(data => console.log("example 1:",data));


/*
Funkcja getArticle pobiera jeden parametr, którym jest identyfikator szukanego artykułu, i na
tej podstawie zwraca jego tytuł i autora lub informację, że artykułu nie znaleziono. W realnej
aplikacji prawdopodobnie znalazłoby się tutaj zapytanie skierowane do serwera i sprawdzenie,
czy szukany artykuł znajduje się w bazie danych. 

Zauważ jednak, że wewnątrz funkcji
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

Funkcja getArticle zwraca obiekt Promise, który posiada trzy podstawowe metody: then,
catch oraz finally. Metoda then służy do obsługi sytuacji, w której obietnica została rozwiązana
z powodzeniem. Przy tworzeniu obietnicy ustawiamy moment jej pozytywnego rozwiązania,
wywołując metodę resolve , której możemy przekazać dowolny parametr. W naszym przypadku
parametrem tym był obiekt zawierający dwa pola: title oraz author. Aby skorzystać z tych
danych, musimy wywołać metodę then na obietnicy, czyli na obiekcie zwróconym przez
funkcję getArticle.

Metoda then może przyjąć jeden parametr, którym jest funkcja zawierająca wartość użytą
podczas wywołania metody resolve przy tworzeniu tej obietnicy. 

W naszym wypadku obiekt data w metodzie then zawiera więc obiekt z polem title oraz author.
Jeśli wywołamy funkcję getArticle, przekazując jej jako parametr ciąg inny niż 123, to
zgodnie z implementacją tej funkcji wpadniemy nie w wywołanie metody resolve, lecz w wy-
wołanie metody reject, która jako parametr przyjmuje ciąg znakowy informujący o braku
artykułu o wskazanym identyfikatorze. 

Aby przechwycić moment rozwiązania obietnicy niepowodzeniem (czyli wywołania reject), 
musimy obsłużyć ten przypadek metodą catch.
Metoda ta również jako parametr przyjmuje wartość przekazaną do metody reject przy
tworzeniu obietnicy.
Ważne, abyś zapamiętał, że dobrą praktyką jest zawsze obsługiwanie obu sytuacji, czyli
pozytywnego i negatywnego rozwiązania obietnicy. Jeśli wpadniemy w metodę then , wywo-
łując funkcję getArticle, to metoda catch nie zostanie w ogóle wywołana. Podobnie w przy-
padku niepowodzenia wywołanie metody catch sprawia, że metoda then w ogóle nie zostaje
uruchomiona.
Sprawa ta nieco się komplikuje przy bardziej rozbudowanych sytuacjach i wielokrotnych
wywołaniach then/ catch, ale w większości prostych przypadków trafimy na scenariusz podobny
do przedstawionego powyżej. Aby móc obsłużyć oba przypadki, musimy więc zaimplementować
zarówno metodę then, jak i catch:
*/

getArticle('123')
    .then(data => console.log("example 2:",data))
    .catch(error => console.log("example 2:",error))

/*
W tym przypadku podobny efekt możemy uzyskać poprzez użycie tylko metody then, dzięki
wykorzystaniu faktu, że może ona pobierać dwa parametry — funkcję dla rozwiązania pozytyw-
nego oraz negatywnego (drugi parametr):
*/

getArticle('123').then(
    data => console.log("example 3:",data),
    error => console.log("example 3:",error)
);

/*
Oba warianty są poprawne, choć wiele osób uważa, że zapis z jawnym wywołaniem then i catch
jest nieco czytelniejszy i ułatwia szybką analizę kodu. Warto poćwiczyć pracę z obietnicami,
stosując oba warianty, aby mieć świadomość ich istnienia, a później wybrać ten, który bardziej
Ci odpowiada lub który jest przyjęty np. w danym zespole programistów czy w konkretnym
projekcie.

Czasami zdarza się, że chcemy wywołać jakąś akcję zarówno w metodzie then, jak i catch.
Jednym z przykładów może być np. asynchroniczne wczytywanie danych z serwera. Po rozpo-
częciu pobierania danych w wielu aplikacjach możemy zobaczyć informację Trwa pobieranie
danych... czy wersję graficzną (tzw. preloader). Po otrzymaniu odpowiedzi z serwera musimy
obsłużyć przypadek pozytywny (np. wyświetlenie danych użytkownikowi) oraz niepowodzenie

(np. błąd na serwerze, przekroczenie dopuszczalnego czasu na odpowiedź itp.), pokazując
odpowiedni komunikat o błędzie. W obu przypadkach chcemy jednak przestać wyświetlać in-
formację o trwającym pobieraniu danych. Akcję jej ukrywania możemy więc powielić w meto-
dzie then oraz catch lub wykorzystać w tym celu metodę finally:
*/

getArticle('1235')
    .then(data => console.log("example 4:",data))
    .catch(error => console.log("example 4:",error))
    .finally(() => console.log('example 4 - koniec pobierania'));

/*
Praca z obietnicami przy użyciu składni async/await

Mając funkcję getArticle, możemy jej użyć również w nieco inny sposób, wykorzystując
nowszą składnię async/await. Na początek jednak zróbmy kolejną funkcję, której zadaniem
będzie ustawienie parametrów pobranego artykułu:
*/
function setArticleData5(id) {
    getArticle(id)
        .then(data => console.log("example 5:",data.title))
        .catch(error => console.log("example 5:",error))
}

setArticleData5('123');  // Podstawy JavaScript
setArticleData5('1234');
/*
Funkcja ta w swojej implementacji wywołuje funkcję getArticle, obsługując odpowiednio
metody then i catch. W naszym przypadku wyświetli ona po prostu tytuł artykułu w konsoli.

W aplikacji mogłaby natomiast służyć na przykład do ustawienia danych służących do odświe-
żenia strony i wyświetlenia zaktualizowanego tytułu czy innych parametrów artykułu.
Nie musimy jednak jawnie wywoływać metod then oraz catch. Możemy skorzystać z tzw.
funkcji asynchronicznych:
*/

async function setArticleData6(id) {
    const article = await getArticle(id);
    console.log("example 6:",article.title);
}

console.log("example 6:",setArticleData6('123')); // Podstawy JavaScript

/*
Zauważ dwa istotne elementy — słowo kluczowe async dodane przed deklaracją funkcji setArticleData oraz, 
co jest warunkiem koniecznym, aby móc wykorzystać drugie słowo kluczowe await, 
użyte już w implementacji funkcji. 

Zapis:
const article = await getArticle(id);

powoduje poczekanie na rozwiązanie obietnicy zwracanej przez metodę getArticle (o czym
mówi nam słowo await ), a następnie przypisanie rezultatu obietnicy do stałej article.
W stałej tej znajdzie się więc nasz obiekt data z poprzedniego przykładu, gdzie używaliśmy
jawnie metody then. 

Wiele osób preferuje zapis z użyciem składni async/await, argumentując
to większą czytelnością kodu. Na pierwszy rzut oka może on sprawiać wrażenie synchro-
nicznego, gdyż metoda console.log — a dokładniej kolejna instrukcja po await — zostanie
wywołana dopiero po rozwiązaniu tej obietnicy. W praktyce jednak jest to tylko nieco inna
składnia, a sama obietnica nadal jest rozwiązywana asynchronicznie, jak przy jawnym użyciu
metody then.

Oba warianty są poprawne i mogą być stosowane zamiennie, warto jednak zacho-
wać spójność w obrębie jednego projektu, by ułatwić czytanie i analizowanie kodu. Ponadto
używając tej składni, pamiętajmy, aby obowiązkowo deklarować funkcje ze słowem async
wraz ze słowem await przy wywołaniu funkcji zwracającej obietnicę. 

Jeśli wywołamy metodę await, lecz zapomnimy o dodaniu słowa async, to dostaniemy odpowiedni komunikat błędu
w konsoli:

Uncaught SyntaxError: await is only valid in async function

Taki przypadek szybko zostanie więc wykryty i naprawiony. Gorzej jednak, gdy funkcję zadekla-
rujemy co prawda jako async, lecz zapomnimy o słowie await:
*/ 
async function setArticleData7(id) {
    const article = getArticle(id); // brak słowa await
    console.log("example 7:",article.title);
}

setArticleData7('123'); // undefined
/* 
Tym razem w konsoli nie pojawi się błąd, ale nie zobaczymy też oczekiwanego tytułu artykułu,
tylko wartość undefined. W tym przypadku w stałej article zostaje przypisany obiekt zwrócony
przez metodę getArticle, czyli obiekt Promise. Nie obsługujemy jednak w żaden sposób rezul-
tatu rozwiązania tej obietnicy, gdyż nie ma ani słowa await, ani jawnego wywołania metody
then . W związku z tym article zawiera po prostu obiekt Promise, który nie posiada oczywiście
metody title, a jak wiemy, próba odczytu nieistniejącego pola z obiektu zwraca właśnie
wartość undefined.

*/