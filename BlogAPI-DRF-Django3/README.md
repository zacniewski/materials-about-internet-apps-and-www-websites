## Blog API

### Projekt dotyczy lab. nr 4 i lab. nr 6 z "Aplikacji internetowych"

#### Kolejność działań (krok po kroku):  
- należy wykonywać zrzut ekranu na wybranym etapie projektu, tak by pokazać kolejne etapy swojej pracy,  
- utworzenie folderu na projekt,  
- utworzenie środowiska wirtualnego w ww. folderze i jego aktywacja,  
- instalacja Django (najlepiej wersja `3.2.10`, jest to ostatnia wersja LTS dla linii 3.x),  
- utworzenie projektu (w przykładzie nazwa projektu to `config`),  
- utworzenie apki (`posts` w przykładzie) i dodanie wpisu o niej w `INSTALLED_APPS,  
- pierwsza migracja (1-etapowa),  
- dodanie modelu `Post` w aplikacji `posts`,  
- migracja 2-etapowa,  
- dodanie modelu `Post` do panelu admina,  
- utworzenie 'superusera',  
- uruchomienie serwera deweloperskiego,  
- dodanie posta poprzez panel admina,  
- opcjonalne dodanie testów (plik `tests.py`) i uruchomienie testów `python manage.py test`,  

##### Django Rest Framework (DRF )
- instalacja Django Rest Framework i dodanie wpisu o nim w `INSTALLED_APPS`,  
- dodanie podstawowych zezwoleń (`AllowAny`) w ustawieniach,  
- dodanie wpisu (wzorca URL) w głównym pliku `urls.py`, dotyczącego adresów URL w aplikacji `posts`,  
- utworzenie pliku `urls.py` w aplikacji `posts` (adresy URL korzystają z widoków, których jeszcze nie ma!),  
- utworzenie pliku serializacji `serializers.py`w aplikacji `posts`,  
- utworzenie widoków listy i detali (plik `views.py`) bazujących na klasach (CBV), wykorzystujących uprzednio stworzony serializer,  
- sprawdzenie działania API, pod adresem określonym w plikach `urls.py` (powinien być już widoczny styl bazujący na DRF oraz powinna być 
możliwość dodawania postów w widoku listy oraz korekty postu w widoku detalu),  

##### Zezwolenia  
- utworzenie nowego usera, który nie jest adminem,  
- dodanie wzorca URL w głównym pliku `urls.py`, dotyczącego adresów URL korzystających z DRF,  
- pojawienie się opcji wylogowania i logowania,  
- dodanie zezwolenia `permission_classes` na poziomie widoku (w pliku `views.py`),  
- w pierwszej kolejności zezwolenie `IsAuthenticated` do sprawdzenia w ww. pliku,  
- usunięcie zezwolenia na poziomie widoku w pliku `views.py` i dodanie zezwolenia na poziomie projektu w pliku `settings.py`,  
- należy sprawdzić w działaniu pozostałe zezwolenia: `IsAdminUser` oraz `'`IsAuthenticatedOrReadOnly`,  
- dodanie własnych ("custom") zezwoleń w pliku `permissions.py` (plik wewnątrz apki 'posts'),  
- ww. zezwoleń należy użyć w pliku `views.py` w polu `permission_classes`,  

##### Uwierzytelnianie
- zapoznanie się z rodzajami uwierzytelnień (Basic, Session, Token), w tym ich wadami i zaletami,  
- dodanie ustawienia 'DEFAULT_AUTHENTICATION_CLASSES' w słowniku REST_FRAMEWORK (plik `settings.py`), 
- w pierwszej wersji należy dodać ustawienia `Basic` i `Session` oraz sprawdzić, czy projekt działa bez zmian,  
- dodanie obsługi tokenów: `TokenAuthentication` w 'DEFAULT_AUTHENTICATION_CLASSES' oraz `rest_framework.authtoken` w 'INSTALLED_APPS',  
- konieczna 1-etapowa migracja dla ze względu na `authtoken`,  
- sprawdzenie, czy w panelu admina pojawiła się grupa 'Tokens' (tzn., że migracja przebiegła prawidłowo),  
- dodawanie punktów końcowych (endpoints) do logowania, wylogowania itp. z użyciem `dj-rest-auth`,  
- dodanie wpisu do 'INSTALLED_APPS' oraz nowego wzorca URL w głównym pliku `urls.py` dla `dj-rest-auth`,  
- sprawdzenie ww. endpointów (login, logout, password reset),  

##### Rejestracja usera
- instalacja `django-allauth`,  
- dodanie wpisów w dla `django-allauth` w 'INSTALLED_APPS',  
- dodanie wbudowanego frameworka `sites` w 'INSTALLED_APPS',  
- 1-etapowa migracja,  
- dodanie nowego wzorca URL w głównym pliku `urls.py` dla rejestracji za pomocą `dj-rest-auth`,  
- sprawdzenie procesu rejestracji nowego usera za pomocą 'dj-rest-auth' (auth token + email w konsoli + nowy token w panelu admina),  


##### Viewsets
- utworzenie serializera dla modelu `User` w pliku `posts/serializers.py`,  
- utworzenie widoków dla listy userów i detali usera w pliku `views.py`,  
- dodanie adresów URL dla nowo utworzonych widoków i ich sprawdzenie,  
- zastąpienie widoków (CBV) odpowiednimi viewset'ami (wystąpią chwilowe błędy w konsoli),  
- uaktualnienie pliku `urls.py` poprze dodanie klasy `SimpleRouter` (błędy powinny zniknąć),  
- sprawdzenie zmian,

##### Schemas
- instalacja pakietów do obsługi OpenAPI,  
- generacji `openapi-schema`,  
- dodanie w głównym pliku `urls.py` obsługi schematu OpenAPI,  
- sprawdzenie ww. adresu URL,  
- instalacja pakietu do obsługi dokumentacji API,  
- dodanie w głównym pliku `urls.py` obsługi dokumentacji OpenAPI (drf_yasg, Swagger) i korekta poprzedniej wersji,  
- sprawdzenie endpoint'ów z dokumentacją. 
