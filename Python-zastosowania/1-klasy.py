class Dog:
    def __init__(self, name, age):  # 'name' i 'age' to parametry
        self.name = name  # atrybut 'name'(po lewej) ma przypisaną wartość 'parametru 'name' (tę z prawej)
        self.age = age

# utworzenie obiektu klasy Dog        
dog1 = Dog("Burek", 4)
print(f"{dog1.name} ma {dog1.age} lata")

"""
__init__ to konstruktor, czyli ustawia początkowy stan obiektu 
poprzez przypisanie wartości właściwości obiektu. 
Oznacza to, że .__ init __ () inicjuje każdą nową instancję klasy.

Atrybuty utworzone w .__ init __ () nazywane są atrybutami instancji. 
Wartość atrybutu instancji jest specyficzna dla konkretnego wystąpienia klasy. 
Wszystkie obiekty Dog mają nazwę i wiek, 
ale wartości atrybutów 'name' i 'age' będą się różnić w zależności od obiektu (instancji) klasy Dog.
"""

"""
Z drugiej strony atrybuty klasy to atrybuty, które mają tę samą wartość dla wszystkich instancji klas. 
Możesz zdefiniować atrybut klasy, przypisując wartość do nazwy zmiennej poza .__ init __ ().
Na przykład następująca klasa Dog ma atrybut klasy o nazwie gatunki z wartością „Canis familiaris:
"""

class Dog2: 
    # atrybut klasy
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age


# utworzenie obiektu klasy Dog2        
dog2 = Dog2("Reks", 3)
dog2a = Dog2("Duży Reks", 32)

print(f"{dog2.name} ma {dog2.age} lata i należy do gatunku {dog2.species}")
print(f"{dog2a.name} ma {dog2a.age} lata i należy do gatunku {dog2a.species}")


"""
Jedną z największych zalet używania klas do organizowania danych jest to, 
że instancje mają zagwarantowane atrybuty, których oczekujesz. 
Wszystkie instancje klasy Dog mają atrybuty .species, .name i .age, 
więc możesz używać tych atrybutów z pewnością, wiedząc, że zawsze zwrócą wartość.

Chociaż atrybuty na pewno istnieją, ich wartości można zmieniać dynamicznie.
Co w innych językach programowania jest do osiągnięcia za pomocą setterów/getterów.
"""
dog2.age = 5
dog2.species = "Kundelos"
print(f"{dog2.name} ma {dog2.age} lata i należy do gatunku {dog2.species}")

"""
Metody instancji to funkcje zdefiniowane wewnątrz klasy i mogą być wywoływane tylko z instancji tej klasy. 
Podobnie jak .__ init __ (), pierwszym parametrem metody instancji jest zawsze self.
"""

class Dog3:
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Metoda instancji
    def description(self):
        return f"{self.name} ma {self.age} lata"

    # Metoda instancji
    def speak(self, sound):
        return f"{self.name} szczeka {sound}"


# utworzenie obiektu klasy Dog3        
dog3 = Dog3("Reksio", 2)
print(dog3.description())
print(dog3.speak("Hau, hau"))

"""
Żeby uprościć drukowanie informacji o obiektach można zdefiniować specjalną metode instancji, czyli __str__()
Należy jej użyć zamiast metody description()
"""

class Dog4:
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Metoda instancji
    def __str__(self):
        return f"{self.name} ma {self.age} lat"

    # Metoda instancji
    def speak(self, sound):
        return f"{self.name} mówi {sound}"


dog4 = Dog4("Pusia", 9)
print(dog4)
