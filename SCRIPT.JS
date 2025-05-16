// Tablica (lista) do przechowywania nastrojów
const moods = [];

// Pobierz formularz i listę HTML
const moodForm = document.getElementById('moodForm');
const moodList = document.getElementById('moodList');

// Obsługa zdarzenia „submit” formularza
moodForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Zatrzymanie domyślnego przeładowania strony

  const mood = document.getElementById('mood').value; // Wybrany nastrój
  const note = document.getElementById('note').value.trim(); // Notatka
  const date = new Date().toISOString().split('T')[0]; // Dzisiejsza data (YYYY-MM-DD)

  if (!mood) return; // Jeśli nie wybrano nastroju → przerwij

  // Dodaj nowy obiekt do listy nastrojów
  moods.push({ date, mood, note });

  // Wyświetl zaktualizowaną listę
  renderMoods();

  // Wyczyść formularz
  moodForm.reset();
});

// Funkcja renderująca nastroje na stronie
function renderMoods() {
  moodList.innerHTML = ""; // Wyczyść listę

  // Wyświetl nastroje w odwrotnej kolejności (ostatnie na górze)
  moods.slice().reverse().forEach(entry => {
    const item = document.createElement('li'); // Utwórz element listy
    item.className = "list-group-item"; // Klasa Bootstrap
    item.textContent = `${entry.date} – ${entry.mood} → ${entry.note}`;
    moodList.appendChild(item); // Dodaj element do listy
  });
}
