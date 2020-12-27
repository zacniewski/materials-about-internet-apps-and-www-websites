### Pomocne linki przy instalacji narzędzi

- [instalacja NodeJS](https://aimweb.pl/jak-zainstalowac-nodejs-i-npm/),
- sprawdzenie poprawności instalacji za pomocą komend `node -v` i `npm -v`,
- [instalacja 'create-react-app'](https://pl.reactjs.org/docs/create-a-new-react-app.html#create-react-app), na stronie są również inne 'zestawy narzędziowe', np. [Gatsby](https://pl.reactjs.org/docs/create-a-new-react-app.html#gatsby),
- najświeższa wersja [dokumentacji 'create-react-app'](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md),

### Porady i informacje

- do pliku .gitignore dobrze jest dodać linię `node_modules/`, żeby nie wysyłacć na repo niepotrzebnych plików o sporej wadze,
- w gałęzi [main] naszego repozytorium znajduje się wersja końcowa aplikacji, poszczególne etapy budowy aplikacji znajdują się w gałęziach postaci `cra/numer_zagadnienia - nazwa_zagadnienia`, np. [tutaj](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/01-HelloWorld/React-pierwsze-kroki)

### Dokumentacja

- główne [koncepcje](https://reactjs.org/docs/hello-world.html) w React.js,
- praca z narzędziem [create-react-app](https://create-react-app.dev/docs/getting-started),
- co nowego w [ES6](https://www.w3schools.com/js/js_es6.asp),
- podstawowe [pojęcia](https://pl.reactjs.org/docs/glossary.html) w React.

### Zagadnienia

1. instalacja pakietu create-react-app
   ![cra](images/instalacja_cra.png)

2. tworzenie aplikacji za pomocą create-react-app
   ![apka](images/tworzenie_apki.png)


    * celem aplikacji będzie wyświetlanie najważniejszych wydarzeń dotyczących naszego dnia (pracy, nauki, itp.).

3. struktura projektu
   ![struktura](images/struktura.png)


    - index.js jako plik "wejściowy" (import modułów i komponentów)
    - App.js zawiera komponent ```App``` i importuje CSSy z pliku ```App.css```  i może zawierać importy niezbędnych mu modułów i plików,
    - osobne plik .js i .css do komponentów.

4. [JSX](https://reactjs.org/docs/introducing-jsx.html) - kod HTML wewnątrz JavaScript


    - przykład:

![jsx1](images/jsx1.png) - użycie fukcji i obiektów JS przed tworzeniem komponentów  
 ![jsx2](images/jsx2.png) - błąd w składni natychmiast jest wyświetlany zarówno w konsoli jak i w przeglądarce

5. komponenty w React.js


    - komponenty funkcyjne i komponenty klasowe: [przykład z dokumentacji](https://reactjs.org/docs/components-and-props.html),
    ![komponenty](images/components.png)
    - własny komponent Hello (plik Hello.jsx) w gałęzi [01](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/01-HelloWorld/React-pierwsze-kroki) i sprawdzenie poprawności działania (```npm start```).

6. upraszczanie projektu, czyli usunięcie zbędnych plików (gałąź [02](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/02-czyszczenie-projektu/React-pierwsze-kroki))

7. Komponent Countdown
    - zwracamy tylko jeden element HTML! (sprawdzić co będzie, gdy zwracamy wiecej)
    - 'App' jako konwencja nazewnicza (zamiast 'Hello') w gałęzi [03](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/03-komponenty-i-props/React-pierwsze-kroki/react-pierwsze-kroki/src),
    - class vs className w przypadku atrybutów, czyli [różnice](https://pl.reactjs.org/docs/dom-elements.html) w atrybutach HTML i React DOM, ważne przykłady!

8. zagnieżdżanie komponentów (gałąź nr [04](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/04-zagniezdzanie-komponentow/React-pierwsze-kroki/react-pierwsze-kroki/src))


    - nowy plik Countdown.jsx z komponentem + import w pliku App.js
    - nowy plik Countdown2.jsx z komponentem + import w pliku App.js
    - teraz komponenty wyświetlają statyczną informację, jak to zmienić?

9. Props (właściwości, w gałęzi nr [05](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/05-props/React-pierwsze-kroki/react-pierwsze-kroki/src))


    - props (od ang. properties = pol. właściwości) są danymi wejściowymi dla reactowych komponentów. Przekazuje się je z komponentów nadrzędnych do ich potomków. Właściwości props są tylko do odczytu. Nie należy ich w jakikolwiek sposób modyfikować,

10. PropTypes


    - gwarancja odpowiedniego typu danych w gałęzi nr [06](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/06-proptypes/React-pierwsze-kroki),
    - dla niewłaściwego typu otrzymujemy ostrzeżenie:

![proptype](images/proptypes-warning.png)

11. State (stan) w gałęzi [07](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/07-state/React-pierwsze-kroki)


    - komponent potrzebuje własnego stanu (state), gdy powiązane z nim dane zmieniają się w czasie. Na przykład, komponent Checkbox w zmiennej isChecked mógłby śledzić, czy jest zaznaczony, a komponent NewsFeed mógłby przechowywać pobrane posty w fetchedPosts,
    - najistotniejszą różnicą pomiędzy state i props jest to, że właściwości props są dostarczane przez komponent nadrzędny, a stanem state zarządza sam komponent. Komponent nie może modyfikować swoich właściwości props, ale może zmieniać swój stan state,
    - zamiast funkcji musimy użyć klasy dziedziczącej z klasy Component,
    - w state zapisujemy te elementy, które będą się zmieniać w czasie "pracy" aplikacji, w naszym przypadku możemy utworzyć odpowiednie struktury danych,
    - tworzymy konstruktor i wywołujemy metodę super(), w celu udostępniania i korzystania z funkcji klasy po której nasz obiekt dziedziczy.

12. Generowanie komponentów w gałęzi [08](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/08-generowanie-komponentow/React-pierwsze-kroki)


    - używamy funkcji [map()](https://www.w3schools.com/jsref/jsref_map.asp) do iteracji po wszystkich elementach struktury danych w state, tym samym możemy wygenerować odpowiednią liczbę komponentów,
    - możemy otrzymać ostrzeżenie w konsoli:
    ![key warning](images/key-warning.png)
    - wirtualny DOM renderuje tylko zmiany, które powstały w czasie działania aplikacji,
    - każdy komponent musi mieć unikalne 'id', stąd ww. warning i konieczność dopisania właściwości 'key'.

12. React Dev Tools


    - rozszerzenie do przeglądarki,
    - w konsoli mamy nowe zakładki: "Components" i "Profiler".

13. CSS


    - CSS dla komponentów i CSS główny w gałęzi [09](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/09-css/React-pierwsze-kroki)

14. Komponent edycji wydarzenia w gałęzi [10](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/10-komponent-edycji-wydarzenia/React-pierwsze-kroki)


    - komponenty React'owe można wykorzystywać z [Material-UI](https://material-ui.com/),
    - [obsługa](https://upmostly.com/tutorials/react-onchange-events-with-examples) zmiany wartości input'a w React (onchange w JS, onChange w React),
    - właściwość zdarzenia ['target'](https://www.w3schools.com/jsref/event_target.asp)
    - [obsługa zdarzeń](https://pl.reactjs.org/docs/handling-events.html) w React, pod linkiem omówione jest (użyte w przykładzie) m.in. onClick,
    - przesyłanie funkcji do komponentów:

      - w komponencie nadrzędnym definiujemy funkcję onSave (gałąź nr [11](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/11-edycja-wydarzenia-part1/React-pierwsze-kroki)):
      ``` 
      <EditEvent onSave={() => alert("Klik działa bez zarzutu!")} />
      ```
      - nazwa onSave jest wymyslona przez nas, może byc oczwyiśie inna,
      - korzystamy z niej w komponencie potomnym:
      ```
      <Button onClick={() => props.onSave()}>OK</Button>
      ```
      - należy pamiętać o nawiasach () przy nazwie funkcji!
      - wcześniej w apkach webowych "stan" aplikacji był umieszczony w HTMLu (jego atrybutach). Mozna było odczytac wartości określonych atrybutów i je modyfikować, wyświetlać itp. W React.js mamy "po prostu" stan (state), gdzie będzie nasze źródło danych,
    - odczytywanie wartości z pól formularza z wykorzystaniem [onChange](https://pl.reactjs.org/docs/dom-elements.html), na razie tylko w komponencie potomnym EditEvent:
      - dodajemy reactowy atrybut onChange w znaczniku 'input':
      ```
      onChange={(e) => console.log(e.target.value) }
      ```
      - możemy w konsoli wyświetlić też obiekt z odpowiednimi informacjami:
      ```
      onChange={(e) => console.log({ [e.target.name]: e.target.value } )
      ```
    - odczytywanie wartości z pól formularza z wykorzystaniem props (czyli przesyłanie danych z komponentu nadrzędnego do potomnego):
      - tworzymy funkcje pomocniczą w komponencie nadrzędnym:
      ```
      handleEditEvent(val) {
          console.log(val);
      }
      ```
      - dowiązujemy ww. funkcję do instancji klasy za pomocą metody bind():
      ```
          this.handleEditEvent = this.handleEditEvent.bind(this);
      ```
      - robimy dowiązanie wewnątrz klasy (np. w konstruktorze, jak w przykładzie na repo),
      - praktyczne wytłumaczenie metody [bind()](https://typeofweb.com/poprawne-bindowanie-funkcji-react-js/) wraz z ciekawym obejściem jej używania w create-react-app poprzez użycie funkcji strzałkowych w odpowiednim miejscu,
      - w oficjalnej [dokumentacji React'a](https://pl.reactjs.org/docs/handling-events.html) też jest o tym rozsądnie napisane,
      - teraz możemy wykorzystać naszą funkcję w komponencie nadrzędnym, tworząc atrybut o nazwie np. onInputChange:
      ``` 
      <EditEvent 
          onInputChange={val => this.handleEditEvent(val)} 
                ...        
       />
      ```
      - z kolei w komponencie potomny EditEvent zmieniany obsługę zdarzenia onChange, na taką która wykorzystuje naszą ww. funkcję onInputChange:
      ```
      onChange={e =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
      ```

15. Proste nadpisanie stanu [12](https://github.com/zacniewski/materials-about-internet-apps-and-www-websites/tree/cra/12-proste-nadpisanie-stanu/React-pierwsze-kroki)

  - w stanie (```this.state```) tworzymy pole editedEvents na zmiany naszych wydarzeń:
  ```
  events: [
        { id: 0, name: "śniadanie", hour: "07", minute: "00" },
        { id: 1, name: "obiad", hour: "15", minute: "00" },
        { id: 2, name: "kolacja", hour: "19", minute: "00" }
      ],
      editedEvent: ""
  ```
  - w funkcji handleEditEvent robimy zmianę na:
  ```
  handleEditEvent(val) {
    this.setState({ editedEvents: val });
  }
  ```
  - korzystamy z metody [setState()](https://pl.reactjs.org/docs/state-and-lifecycle.html) do zmiany stanu komponentu,
  - w ww. linku w przyjemny sposób podana jest metodologia przejścia z 'props' na 'state',
  - po wpisaniu czegokolwiek w pole formularza korzystające z metody handleEditEvent i skorzystaniu z React Dev Tools w konsoli przeglądarki, widzimy że w stanie pojawił się nowy wpis:  
  ![editedEvents](images/editedEvents.png)  
  - udało nam się zmienić stan komponentu :smiley:,  
  - problemem jest to, że funkcja handleEditEvent powoduje wpisanie do pola editedEvent **tylko** aktualnie zmienianej wartości w polu formularza,

16. Użycie Object.assign 

  * [dokumentacja](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Object/assign) MDN,
  