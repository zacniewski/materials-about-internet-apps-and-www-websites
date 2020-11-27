import requests

from bs4 import BeautifulSoup

odpowiedz = requests.get("https://pl.wikipedia.org/wiki/Zygmunt_III_Waza")
print("odpowiedź = \n", odpowiedz)
print("odpowiedź tekstowa = \n", odpowiedz.text)

html_doc = """<html>
<head>
    <title>Moja pierwsza strona!</title>
</head>
<body>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere elit at malesuada tempor. Donec eget ligula in ante auctor luctus. Phasellus iaculis porttitor gravida. Donec eget sem lorem. Morbi a libero imperdiet, viverra tellus ac, consequat tortor. Suspendisse nibh massa, accumsan non neque a, vestibulum commodo dui.</p>
<p>Phasellus vestibulum ut <br>erat sit amet ullamcorper. Nam at elit feugiat, dapibus ante vitae, ullamcorper dui. Nunc rutrum at nibh tincidunt mattis. In finibus sed ante vel mollis. Donec at semper metus. Aenean quis consectetur risus. Sed suscipit felis sed ex pretium euismod. In fermentum mi a odio porttitor, dapibus aliquet leo accumsan. Suspendisse pretium augue et faucibus euismod. Quisque risus metus, ultricies nec tortor at, efficitur convallis nunc.</p>
<ul>
    <li>Pierwszy punkt</li>
    <li>Drugi punkt</li>
    <li>Trzeci punkt</li>
</ul>
<ol>
    <li>Pierwszy punkt</li>
    <li>Drugi punkt</li>
    <li>Trzeci punkt</li>
</ol>
<table border="3" bgcolor="#ff00ff" class="tabela blog">
    <tr><th>Naglowek 1</th><th>Naglowek 2</th></tr>
    <tr><td>komorka 11</td><td>komorka 12</td></tr>
    <tr><td>komorka 21</td><td>komorka 22</td></tr>
</table>
<a href="http://google.pl">Arcyciekawa strona</a>
</body>
</html>"""

soup = BeautifulSoup(html_doc, "html.parser")

# title
print("TITLE")
print(soup.title)
print(soup.title.name)
print(soup.title.string)
print(soup.title.text)
print(soup.title.contents)
print("\n")

# ul
print("UL")
print(soup.ul.text)
print("\n")


# atrybuty
print("ATRYBUTY")
print(soup.table["border"])
print(soup.table.has_attr("border"))
print(soup.table.has_attr("href"))
print(soup.table.attrs)
print("\n")


# find
print("FIND")
print(soup.find_all("p"))
print(soup.find(border="3"))
print(soup.find(class_="tabela"))
print(soup.find(href=True))
print("\n")

# next
print("NEXT")
print(soup.tr.next_element)
print(soup.tr.next_sibling)
print(soup.tr.next_sibling.next_sibling)