from django.db.models import Q
from django.views.generic import ListView, DetailView # new

from .models import Book

class BookListView(ListView):
    model = Book
    context_object_name = 'book_list'
    template_name = 'books/book_list.html'


class BookDetailView(DetailView): # new
    model = Book
    context_object_name = 'book' # new
    template_name = 'books/book_detail.html'


class SearchResultsListView(ListView): # new
    model = Book
    context_object_name = 'book_list'
    template_name = 'books/search_results.html'
    # queryset = Book.objects.filter(title__icontains='pi')

    def get_queryset(self): # new
        query = self.request.GET.get('q')
        return Book.objects.filter(
            Q(title__icontains=query) | Q(author__icontains=query)
        )