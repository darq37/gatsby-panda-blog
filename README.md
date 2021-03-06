# Gatsby-panda-blog
Aplikacja na zaliczenie przedmiotu Web Development

## Omawiana Aplikacja
Jest to Aplikacja blogowa, pozwalająca użytkownikowi na przeglądanie, komentowanie i dodawanie postów. Zbudowana  jako Single-Page Application oparty na frameworku Gatsby.

### Gatsby
Jest to darmowy, open-source framework bazowany na React.JS, pozwalający na budowanie szybkich i intuicyjnych aplikacji internetowych.

 ### Struktura Aplikacji
 ![Struktura aplikacji](https://i.imgur.com/HS0F7PU.png)
 #### Components
 Podfolder, gdzie znajdują się komponenty Reacta, które nie są poszczególnymi stronami oraz pliki *.css*.
 #### Images
 Miejsce na statyczne pliki z obrazami używanymi w aplikacji.
 #### Pages
 Jedno z najważniejszych miejsc w strukturze aplikacji. Składowane są tu komponenty Reacta, które następnie są przedtwarzane na end-pointy w aplikacji.
 #### Templates
 Subfolder mieszczący pliki, będące podstawą renderowania pojedyńczego posta na blogu.
 #### Utils
Miejsce na pliki dotyczące użytecznych wtyczek (w aplikacji używam typography, pomagającego stylizować komponenty).
##### Gasby-config.js
Plik mieszczący wszelką konfiguracje aplikacji w Gatsby. To  z jego poziomu mamy dostęp do instalacji wtyczek, ich konfiguracji, zależności, mapowania obiektów.
##### Gatsby-node.js
Plik pozwalający na używanie bogatego Gatsby-Node API, pozwalającego na m. in. proceduralne, dynamiczne tworzenie stron, dodawanie węzłów do GraphQL, używanego przez Gatsby, 
### Aplikacja
Odpalanie aplikacji wymaga wpisania jednej komendy -  startuje ona wszelkie potrzebne moduły i buduje stronę.
![enter image description here](https://i.imgur.com/uMXMCFs.png)
Widok strony tytułowej to prosty ekran z wyświetlonymi wszystkimi postami, uszeregowanymi wg daty dodania:
![enter image description here](https://i.imgur.com/MWlab47.png)
Po kliknięciu na pojedyńczy post, przechodzimy do niego. Każdy z nich ma unikalny URL, oparty na jego ID w bazie danych.
![https://i.imgur.com/KsYkZ0y.png](https://i.imgur.com/KsYkZ0y.png)
Korzystam z bazy danych MongoDB. Umieszczone tam dane mają prostą strukturę: każdy rekord posiada własne ID oraz plik Markdown.
Pliki Markdown z bazy danych pobierane są poprzez plugin **gatsby-source-mongodb**.
Każdy post posiada sekcję komentarzy hostowaną przez serwis Disqus. Pozwala on na dodawanie i odczyt komentarzy, a także ich moderację i statystyki poprzez panel administratora.
Dodawanie nowych postó odbywa się poprzez dołączenie ich do bazy danych. Niestety nie udało mi się tego dobrze zaimplementować i na ten czas przycisk **dodaj post** powraca nas do strony głównej.
### Kod aplikacji
##### Strona główna
![enter image description here](https://i.imgur.com/P1fvqKX.png)![enter image description here](https://i.imgur.com/lr5zvBF.png)
Gatsby pozwala na bardzo fajne użycie języka zapytań GraphQL w celu wyciągnięcia danych z bazy danych. Odpowiednie zapytanie wrzuca nam wszelkie dane do Reactowego props.data, skąd mamy do nich dostęp z poziomu aplikacji.
Strona tytułowa aplikacji zawiera tytuł, liczbę postów na stronie oraz listę poszczególnych postów będącą jednocześnie listą specjalnych komponentów Gatsby Link pozwalających na łatwe przemieszczanie się po stronie.  **Link to = node. id** przemieszcza nas do odpowiednich węzłów, w oparciu o ich id z bazy danych. 
#### blog-post.js
Plik bazowy, w oparciu o który opierają się wszystkie posty na stronie.
![enter image description here](https://i.imgur.com/SCGfB0m.png)
Ma on bardzo prostą budowę - w pojedyńczym divie jest tylko tytuł oraz kontent posta, wyciągnięty z bazy danych odpowiednim zapytaniem oraz Komponent Disquss, renderujący sekcję komentarzy.
#### Layout
Jest to komponent mieszący się w podfolderze Components, ![enter image description here](https://i.imgur.com/wg6haKz.png)
Jak inne komponenty w Gatsby, ma on własne zapytanie GraphQL, pozwalający na wyciągnięcie, tym razem, metadanych o stronie, zapisanych w pliku ***gatsby-config.js***.
Komponent Layout odpowiada za renderowanie komponentów-dzieci pod sobą, oraz za pasek nawigacyjny strony. 
### Podsumowanie
Jest to dość prosta aplikacja oparta na frameworku Gatsby, pozwalająca na odczytywanie, zapis postów blogowych do bazy danych. Kod aplikacji zamieszczam na githubie do przejrzenia. Strona została również umieszczona na GitHub Pages.
[Strona na GitHub Pages](https://darq37.github.io/gatsby-panda-blog/)
[Repozytorium na GitHubie](https://github.com/darq37/gatsby-panda-blog)
