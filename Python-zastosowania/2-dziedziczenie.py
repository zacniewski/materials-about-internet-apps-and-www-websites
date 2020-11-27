# Klasa startowa
class Dog:
    species = "Canis familiaris"

    def __init__(self, name, age, breed):
        self.name = name
        self.age = age
        self.breed = breed


dog1 = Dog("Reksio", 3, "Terier")
dog2 = Dog("Alex", 5, "Mieszaniec")
dog3 = Dog("Stefan", 6, "Pitbul")

"""
Do określenia klasy obiektu można skorzystać z funkcji type()
"""
print("dog1 jest klasy: ", type(dog1))

"""
Można też skorzystać z funkcji isinstance()
"""
print("Czy dog2 jest klasy Dog? ",isinstance(dog2, Dog))

"""
Ponieważ różne rasy psów wydają nieco inne odgłosy, 
można podać domyślną wartość dla argumentu dźwiękowego odpowiednich metod .speak (). 
Aby to zrobić, trzeba zastąpić .speak () w definicji klasy dla każdej rasy.

Aby przesłonić metodę zdefiniowaną w klasie nadrzędnej, należy zdefiniować metodę o tej samej nazwie w klasie podrzędnej. 
Oto jak to wygląda w przypadku klasy np. JackRussellTerrier
"""

# Klasa bazowa Dog2
class Dog2:
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} ma {self.age} lat"

    def speak(self, sound):
        return f"{self.name} szczeka {sound}"


# Klasa dziedzicząca po klasie Dog2
class JackRussellTerrier(Dog2):
    def speak(self, sound="Arrrr"): # parametr opcjonalny
        return f"{self.name} szczeka głośno {sound}"

jtr = JackRussellTerrier("Marian", 7)
print(jtr.speak())

# lub
print(jtr.speak("Auuuuu"))

"""
Załóżmy że nie chcemy, aby klasa JackRussellTerrier utraciła wszelkie zmiany, 
które mogą zostać wprowadzone w formatowaniu ciągu wyjściowego Dog.speak ().

Aby to zrobić, nadal musisz zdefiniować metodę .speak () w klasie potomnej JackRussellTerrier. 
Ale zamiast jawnie definiować łańcuch wyjściowy, musisz wywołać .speak () klasy Dog2 wewnątrz .speak () klasy potomnej, 
używając tych samych argumentów, które przekazałeś do JackRussellTerrier.speak ().
Możesz uzyskać dostęp do klasy nadrzędnej z wnętrza metody klasy potomnej za pomocą super ():
"""

class JackRussellTerrier2(Dog2):
    def speak(self, sound="Arffff"):
        return super().speak(sound) # zamiast modyfikacji w tym miejscu wywołujemy speak() z klasy nadrzędnej poprzez super()


jtr2 = JackRussellTerrier2("Piesiu", 5)
print("jtr2 jest klasy: ", type(jtr2))

print(jtr2.speak())
