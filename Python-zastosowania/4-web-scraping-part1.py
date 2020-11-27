import requests

from bs4 import BeautifulSoup

odpowiedz = requests.get("https://pl.wikipedia.org/wiki/Zygmunt_III_Waza")
print("odpowiedź = \n", odpowiedz)
print("odpowiedź tekstowa = \n", odpowiedz.text)
