function sum(a, b) {
    return a + b;
}


function sumAndLog(a, b) {
    const result = sum(a, b);
    console.log('Wykonano sumowanie');
    return result;
}

sumAndLog(5, 6);
    
/*
Innym sposobem stworzenia funkcji jest napisanie tzw. wyrażenia funkcyjnego w postaci:
*/

const name = function name () {
// polecenia wewnątrz funkcji name
};

/*
Także w tym przypadku nazwa funkcji po słowie function nie jest wymagana. W praktyce kiedy
deklaruje się funkcję w pierwszy z pokazanych tu sposobów, najczęściej podaje się nazwę,
natomiast gdy tworzymy wyrażenie funkcyjne, to zazwyczaj stosujemy tzw. funkcję anonimową,
czyli nieposiadającą jawnie przypisanej nazwy po słowie function.
Co ciekawe, gdy tworzymy funkcję jako wyrażenie funkcyjne, czyli — w pewnym uproszczeniu
— funkcję przypisaną do zmiennej, to aby ją wywołać, musimy użyć nazwy tej zmiennej, a nie
nazwy wskazanej po słowie function:
*/

const fn2 = function suma1 (a, b) {
    console.log("Wykonano fn2");
    return a + b;
};

//suma1(5, 5); // Uncaught ReferenceError: suma1 is not defined
fn2(5, 5); //10

/*
Wywołanie funkcji po nazwie 'suma1' powoduje zgłoszenie błędu, gdyż nasza funkcja jest dostępna
pod nazwą zmiennej, do jakiej została przypisana, czyli w naszym przypadku fn.
Stosując wyrażenia funkcyjne najczęściej używa się tzw. funkcji anonimowych, czyli zapisu
z pominięciem nazwy:
*/ 

const fn3 = function (a, b) {
    console.log("Wykonano fn3 = ", a + b);
    return a + b;
};

fn3(44, 62)
/*
lub zapisu określanego jako arrow function (tzw. funkcje strzałkowe), które zapisuje się jako:
*/
const suma_arrow = (a, b) => {
    console.log("Wykonano suma_arrow");
    return a + b;
};

suma_arrow(22, 4.5);

/*
Jeśli funkcja nie zawiera instrukcji return , to domyślnie jest zwracana wartość undefined.
*/

/* 
Funkcja może posiadać kilka instrukcji return, co jest często wykorzystywane np. w instrukcjach
warunkowych:
*/

function divide (a, b) {
    if (b !== 0) {
        return a / b;
    }
    return "Nie dziel przez zero!";
}

console.log(divide(8, 3));
console.log(divide(2, -3.0));
console.log(divide(8, 0));

/* 
Jednym ze sposobów tworzenia obiektów jest użycie zapisu z nawiasami klamrowymi 
i podanie kolejno nazw pól i ich wartości. 
Poniższy funkcja przyjmuje jako parametr obiekt user i zwraca nowy obiekt,
zawierający tylko wybrane elementy:
*/

function getUserPersonalData (user) {
    return {
        username: user.name,
        user_age: user.age,
        user_token: user.token
    };
}
// definiujemy przykładowego użytkownika:
const someUser = {
    name: 'Artur',
    age: '21',
    token: 'xyz'
};

const gpd = getUserPersonalData(someUser); 
console.log(gpd);

    


