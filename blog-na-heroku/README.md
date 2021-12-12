#### Prosta integracja Django + Vue.js
- przykład bazuje na [tutorialu](https://vsupalov.com/vue-js-in-django-template/) "Vue.js In A Django Template", 
- dodany został widok onazwie 'random_items':  
```python
def random_items(request):
    names = ("bob", "dan", "jack", "lizzy", "susan")

    items = []
    for i in range(100):
        items.append({
            "name": random.choice(names),
            "age": random.randint(20, 80),
            "url": "https://example.com",
        })

    return render(request, 'blog/vue_list.html', {"items_json": json.dumps(items)})
```  

- dodano wpi w pliku 'urls.py':  
```python
    path('random-items/', views.random_items, name='random_items')
```  
- utworzono szablon o nazwie 'vue_list.html':  
```angular2html
{% if items_json %}
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script type='text/javascript'>
    let people = {{ items_json|safe }};
  </script>

  <div id="app">
    [[message]]

    <ul>
      <li v-for="person in people">
        <a v-bind:href="person.url">[[ person.name ]]</a> <button v-on:click="greet(person.name)">hey</button>
      </li>
    </ul>
  </div>

  <script>
    let app = new Vue({
      delimiters: ['[[', ']]'],
      el: '#app',
      data: {
          message: 'Hello Vue!',
          people: people,
      },
      methods: {
          greet: function(name) {
              console.log('Hello from ' + name + '!')
          }
      }
    });
  </script>
{% else %}
  <p>No items available.</p>
{% endif %}
```  

