import React, { useState } from 'react';
import { BookOpen, Code, CheckCircle, Circle, Printer, MonitorPlay, ChevronRight, Menu, X } from 'lucide-react';

// --- BAZA DANYCH KURSU ---
const courseData = {
  html: {
    title: "HTML5 - Tworzenie Stron",
    icon: <MonitorPlay className="w-5 h-5 text-orange-500" />,
    lessons: [
      {
        id: "html_1",
        title: "Lekcja 1: Struktura dokumentu",
        theory: "HTML (HyperText Markup Language) to szkielet każdej strony internetowej. To on mówi przeglądarce, jak ma ułożyć tekst, gdzie wstawić obrazek, a gdzie przycisk. Każdy dokument HTML składa się z tagów (znaczników), które otaczają treści. Tagi najczęściej występują w parach: tag otwierający i zamykający.",
        code: `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Moja pierwsza strona</title>
</head>
<body>
    <h1>Witaj świecie!</h1>
    <p>To jest mój pierwszy akapit.</p>
</body>
</html>`,
        task: "Skopiuj powyższy kod, otwórz systemowy Notatnik, wklej go i zapisz jako 'index.html'. Otwórz plik w przeglądarce."
      },
      {
        id: "html_2",
        title: "Lekcja 2: Linki i Obrazy",
        theory: "Strona to nie tylko tekst. Prawdziwa moc Internetu to hiperłącza (linki) i multimedia. Do tworzenia linków używamy tagu <a>, a do obrazków tagu <img> (który nie ma zamknięcia!).",
        code: `<!-- Link do zewnętrznej strony -->
<a href="https://google.com">Przejdź do Google</a>

<!-- Wyświetlanie obrazka -->
<img src="logo.png" alt="Logo mojej strony">

<!-- Lista punktowana -->
<ul>
    <li>Punkt pierwszy</li>
    <li>Punkt drugi</li>
</ul>`,
        task: "Dodaj do swojej strony obrazek ze swoim ulubionym zwierzęciem oraz link do wikipedii o nim."
      },
      {
        id: "html_3",
        title: "Lekcja 3: Formularze i Tabele",
        theory: "Formularze to sposób na interakcję z użytkownikiem (logowanie, wyszukiwanie). Używamy tagu <form>, a w nim różnych typów <input>. Tabele służą do prezentacji danych tabelarycznych (nie do układania layoutu strony!).",
        code: `<!-- Formularz kontaktowy -->
<form action="/wyslij" method="POST">
    <label for="imie">Twoje imię:</label>
    <input type="text" id="imie" name="imie" required>
    
    <label for="haslo">Hasło:</label>
    <input type="password" id="haslo">
    
    <button type="submit">Wyślij</button>
</form>

<!-- Prosta tabela -->
<table border="1">
    <tr>
        <th>Produkt</th>
        <th>Cena</th>
    </tr>
    <tr>
        <td>Kawa</td>
        <td>15 zł</td>
    </tr>
</table>`,
        task: "Stwórz formularz rejestracji zawierający pola na e-mail, hasło oraz przycisk 'Zarejestruj się'."
      },
      {
        id: "html_4",
        title: "Lekcja 4: Semantyczny HTML5",
        theory: "Profesjonalny kod to taki, który rozumieją nie tylko ludzie, ale i maszyny (np. wyszukiwarka Google). Zamiast wszędzie używać bezimiennych pudełek (<div>), używamy tagów semantycznych, które nadają znaczenie sekcjom strony.",
        code: `<header>
    <h1>Logo i Nawigacja</h1>
    <nav>
        <a href="#home">Home</a> | <a href="#kontakt">Kontakt</a>
    </nav>
</header>

<main>
    <article>
        <h2>Główny artykuł na blogu</h2>
        <p>Treść artykułu...</p>
    </article>
    
    <section>
        <h2>Sekcja z komentarzami</h2>
        <!-- Komentarze -->
    </section>
</main>

<footer>
    <p>&copy; 2026 Moja Firma</p>
</footer>`,
        task: "Przebuduj swoją dotychczasową stronę tak, aby posiadała wyraźny nagłówek (<header>), główną treść (<main>) oraz stopkę (<footer>)."
      },
      {
        id: "html_5",
        title: "Lekcja 5: Poziom PRO - Dostępność (a11y) i Wideo",
        theory: "Strony muszą być dostępne dla osób niepełnosprawnych (np. używających czytników ekranu). Służą do tego atrybuty ARIA. Dodatkowo HTML5 pozwala na łatwe osadzanie multimediów prosto w przeglądarce.",
        code: `<!-- Dostępny przycisk z atrybutem aria-label -->
<button aria-label="Zamknij okno dialogowe">X</button>

<!-- Wideo odtwarzane bezpośrednio w przeglądarce -->
<video width="320" height="240" controls>
    <source src="film.mp4" type="video/mp4">
    Twój przeglądarka nie obsługuje tagu video.
</video>

<!-- Osadzanie mapy Google (iframe) -->
<iframe src="https://www.google.com/maps/embed?..." width="600" height="450" loading="lazy"></iframe>`,
        task: "Dodaj na swoją stronę przycisk z ikoną, który będzie miał odpowiedni atrybut 'aria-label', aby był czytelny dla niewidomych."
      }
    ]
  },
  python: {
    title: "Python 3 - Programowanie",
    icon: <Code className="w-5 h-5 text-blue-500" />,
    lessons: [
      {
        id: "py_1",
        title: "Lekcja 1: Zmienne i Print",
        theory: "Python to język bardzo przyjazny dla początkujących. Programy służą do przetwarzania danych. Aby przechować dane, używamy zmiennych (wyobraź je sobie jako pudełka z etykietami). Funkcja print() pozwala nam wyświetlić coś na ekranie.",
        code: `# To jest komentarz
imie = "Jan"           # Typ: String (tekst)
wiek = 25              # Typ: Integer (liczba całkowita)
temperatura = 36.6     # Typ: Float (ułamek)

print(f"Cześć, mam na imię {imie} i mam {wiek} lat.")

if wiek >= 18:
    print("Jesteś pełnoletni.")`,
        task: "Napisz program, który zapyta (lub po prostu zdefiniuje w zmiennych) o Twoje imię i ulubiony kolor, a następnie wypisze ładne powitanie."
      },
      {
        id: "py_2",
        title: "Lekcja 2: Listy i Pętle",
        theory: "Jeśli masz wiele danych (np. listę zakupów), używasz 'List'. Aby nie pisać tego samego kodu wiele razy dla każdego elementu listy, używamy 'Pętli' (np. pętli FOR).",
        code: `owoce = ["Jabłko", "Banan", "Truskawka"]

# Dodanie nowego elementu
owoce.append("Mango")

# Pętla wykonująca się dla każdego owocu
for owoc in owoce:
    print(f"Bardzo lubię jeść: {owoc}")
    
# Pętla while
licznik = 3
while licznik > 0:
    print(licznik)
    licznik = licznik - 1
print("Start!")`,
        task: "Stwórz listę swoich ulubionych filmów i użyj pętli 'for', aby wyświetlić ocenę 10/10 dla każdego z nich."
      },
      {
        id: "py_3",
        title: "Lekcja 3: Słowniki (Dictionaries)",
        theory: "Listy mają numerowane elementy. Słowniki pozwalają na przypisywanie wartości do konkretnych słów kluczowych (kluczy), co jest niezwykle przydatne przy tworzeniu np. profili użytkowników.",
        code: `# Tworzenie słownika
gracz = {
    "nick": "DragonSlayer",
    "poziom": 45,
    "punkty_hp": 100
}

# Pobieranie danych
print(f"Gracz {gracz['nick']} ma poziom {gracz['poziom']}.")

# Zmiana danych
gracz["punkty_hp"] -= 20
print(f"Otrzymałeś obrażenia! Zostało {gracz['punkty_hp']} HP.")`,
        task: "Stwórz słownik opisujący Twój ulubiony samochód (marka, model, rok produkcji) i wypisz te informacje na ekran."
      },
      {
        id: "py_4",
        title: "Lekcja 4: Własne Funkcje",
        theory: "Kiedy Twój kod staje się długi i zaczynasz go powtarzać, powinieneś stworzyć funkcję. Funkcja to nazwany blok kodu, który możesz wywołać w dowolnym momencie, przekazując mu argumenty.",
        code: `# Definiowanie funkcji 'przywitaj'
def przywitaj(imie, wiek):
    print(f"Witaj {imie}! Masz {wiek} lat.")
    
# Funkcja zwracająca wynik (return)
def pole_prostokata(a, b):
    wynik = a * b
    return wynik

# Wywoływanie funkcji
przywitaj("Anna", 30)
przywitaj("Piotr", 15)

pole = pole_prostokata(5, 10)
print(f"Pole wynosi: {pole}")`,
        task: "Napisz funkcję 'dodaj(a, b)', która przyjmie dwie liczby, doda je do siebie i zwróci wynik za pomocą instrukcji return."
      },
      {
        id: "py_5",
        title: "Lekcja 5: Programowanie Obiektowe (OOP)",
        theory: "Na profesjonalnym poziomie kod organizuje się w 'Klasy' i 'Obiekty'. Klasa to schemat (np. schemat budowy psa), a obiekt to konkretna instancja (np. Twój pies Azor).",
        code: `class Pies:
    # Metoda inicjalizująca (tzw. konstruktor)
    def __init__(self, imie, rasa):
        self.imie = imie
        self.rasa = rasa
        
    # Metoda (funkcja należąca do klasy)
    def szczekaj(self):
        print(f"{self.imie} mówi: Woof! Woof!")

# Tworzenie obiektów na podstawie klasy
moj_pies = Pies("Azor", "Owczarek")
inny_pies = Pies("Reksio", "Kundelek")

print(moj_pies.imie) # Wypisze: Azor
moj_pies.szczekaj()  # Wypisze: Azor mówi: Woof! Woof!`,
        task: "Zdefiniuj klasę 'Samochod', która przyjmuje w konstruktorze markę i kolor, a następnie stwórz metodę 'odpal_silnik()', która wypisze tekst 'Wrrrum!'."
      },
      {
        id: "py_6",
        title: "Lekcja 6: Poziom PRO - Obsługa Błędów i Pliki",
        theory: "Prawdziwe aplikacje czasem napotykają problemy (np. brak pliku na dysku). Zamiast pozwalać programowi na zawieszenie się ('crash'), 'łapiemy' błędy używając bloków try/except. ",
        code: `print("--- Czytanie plików ---")
try:
    # Próba otwarcia pliku
    with open("tajne_hasla.txt", "r") as plik:
        tresc = plik.read()
        print(tresc)
except FileNotFoundError:
    print("Ups! Nie znaleziono takiego pliku.")

print("--- Bezpieczne dzielenie ---")
try:
    wynik = 10 / 0
except ZeroDivisionError:
    print("Nie wolno dzielić przez zero!")
finally:
    print("Ten blok wykona się zawsze, niezależnie od błędów.")`,
        task: "Napisz program, który prosi użytkownika o wpisanie liczby (używając input()). Zabezpiecz go blokiem try/except ValueError, na wypadek gdyby użytkownik wpisał litery zamiast cyfr."
      }
    ]
  }
};

export default function App() {
  const [activeModule, setActiveModule] = useState('html');
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentModule = courseData[activeModule];
  const currentLesson = currentModule.lessons[activeLessonIndex];

  const toggleLessonComplete = (lessonId) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      return newSet;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* Mobile Menu Button - Ukryte podczas drukowania */}
      <div className="md:hidden absolute top-4 left-4 z-50 print:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-white rounded-md shadow-sm">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Ukryte podczas drukowania */}
      <aside className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transition-transform duration-300 ease-in-out
        fixed md:static w-64 h-full bg-white border-r border-gray-200 z-40 flex flex-col print:hidden
      `}>
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="text-indigo-600" />
            CodeMaster
          </h1>
          <p className="text-xs text-gray-500 mt-1">Twój kombajn edukacyjny</p>
        </div>

        <div className="overflow-y-auto flex-1 py-4">
          {Object.entries(courseData).map(([modKey, modData]) => (
            <div key={modKey} className="mb-6">
              <div className="px-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                {modData.icon}
                {modData.title}
              </div>
              <ul className="space-y-1">
                {modData.lessons.map((lesson, index) => {
                  const isCompleted = completedLessons.has(lesson.id);
                  const isActive = activeModule === modKey && activeLessonIndex === index;
                  
                  return (
                    <li key={lesson.id}>
                      <button
                        onClick={() => {
                          setActiveModule(modKey);
                          setActiveLessonIndex(index);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-6 py-2 text-sm text-left transition-colors ${
                          isActive ? 'bg-indigo-50 text-indigo-700 font-medium border-r-4 border-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-300" />
                        )}
                        <span className="truncate">{lesson.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Pasek postępu */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-xs font-medium text-gray-500 mb-2">Twój postęp</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${(completedLessons.size / (courseData.html.lessons.length + courseData.python.lessons.length)) * 100}%` }}
            ></div>
          </div>
          <div className="text-xs text-right mt-1 text-gray-500">
            {completedLessons.size} / {courseData.html.lessons.length + courseData.python.lessons.length} lekcji
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-50 w-full print:bg-white print:overflow-visible">
        
        {/* Topbar - Ukryte podczas drukowania */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center print:hidden pl-16 md:pl-8">
          <div className="flex items-center text-sm text-gray-500">
            <span>{currentModule.title}</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-medium text-gray-900">{currentLesson.title}</span>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium transition-colors"
          >
            <Printer className="w-4 h-4" />
            Drukuj lekcję
          </button>
        </header>

        {/* Zawartość lekcji - To będzie drukowane */}
        <article className="max-w-4xl mx-auto p-8 md:p-12 print:p-0 print:max-w-none">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 print:text-black">
            {currentLesson.title}
          </h1>
          
          <div className="prose prose-indigo max-w-none mb-10 text-gray-700 leading-relaxed print:text-black">
            <h3 className="text-xl font-semibold mb-3 border-b pb-2 print:border-black">Teoria</h3>
            <p className="whitespace-pre-line">{currentLesson.theory}</p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 print:text-black">
              <Code className="w-5 h-5 print:hidden" /> 
              Przykład kodu
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 md:p-6 shadow-md overflow-x-auto print:bg-white print:border print:border-gray-400 print:shadow-none print:text-black">
              <pre className="text-gray-100 font-mono text-sm print:text-black print:whitespace-pre-wrap">
                <code>{currentLesson.code}</code>
              </pre>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-12 print:bg-white print:border-l-4 print:border-black print:p-4">
            <h3 className="text-lg font-bold text-indigo-900 mb-2 print:text-black">Zadanie praktyczne:</h3>
            <p className="text-indigo-800 print:text-black">{currentLesson.task}</p>
          </div>

          {/* Przycisk ukończenia - Ukryte na wydruku */}
          <div className="flex justify-center border-t border-gray-200 pt-8 print:hidden">
            <button 
              onClick={() => toggleLessonComplete(currentLesson.id)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-md ${
                completedLessons.has(currentLesson.id) 
                ? 'bg-green-100 text-green-700 border-2 border-green-500' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              <CheckCircle className={`w-6 h-6 ${completedLessons.has(currentLesson.id) ? 'text-green-600' : 'text-white'}`} />
              {completedLessons.has(currentLesson.id) ? 'Lekcja ukończona! Odznacz' : 'Oznacz lekcję jako ukończoną'}
            </button>
          </div>

        </article>
      </main>

    </div>
  );
}