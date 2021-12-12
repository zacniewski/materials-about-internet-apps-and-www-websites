#### Integracja Django3 z Vue.js 3 - CRUD
- projekt bazuje na [artykule](https://www.bezkoder.com/django-vue-js-rest-framework/) (zarys projektu):  
  - część [backendowa](https://www.bezkoder.com/django-crud-mysql-rest-framework/),  
  - część [frontendowa](https://www.bezkoder.com/vue-3-crud/), 
  - idea działania:  
  ![obrazek](https://www.bezkoder.com/wp-content/uploads/2020/03/django-vue-js-tutorial-rest-framework-crud-architecture.png)
  
##### Backend
- architektura:  
![obrazek](https://www.bezkoder.com/wp-content/uploads/2020/03/django-mysql-crud-rest-framework-archirecture.png)
- utworzenie i aktywacja środowiska wirtualnego,  
- instalacja Django 3.2.10 (LTS) oraz DRF,  
- utworzenie nowego projektu ('django_backend' tu na repo) i aplikacji 'tutorials',  
- dodanie wpisu o DRF w 'INSTALLED_APPS',  
- obsługa [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (instalacja pakietu oraz wpisy w pliku 'settings.py',  
- dodanie modelu Tutorial oraz 2-etapowa migracja,  
- utworzenie serializera dla modelu Tutorial,  
- 

##### Frontend