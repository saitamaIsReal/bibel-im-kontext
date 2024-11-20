document.addEventListener("DOMContentLoaded", function () {
  const coll = document.querySelectorAll(".collapsible");

  // Toggle-Funktion für die collapsible-Bereiche
  coll.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});

let currentTag = "Alle"; // Verfolgt den aktuell ausgewählten Tag

function filterByTag(tag) {
  const verses = document.querySelectorAll(".verse");

  // Entfernt die aktive Klasse von allen Tag-Buttons
  deactivateTagButtons();

  if (tag === "Alle") {
    currentTag = "Alle";
    // Zeigt alle Verse an
    verses.forEach((verse) => (verse.style.display = "block"));
    return; // Beendet die Funktion hier
  }

  // Setzt das neue aktuelle Tag
  currentTag = tag;

  // Fügt die aktive Klasse nur für den gewählten Tag hinzu
  document
    .querySelectorAll(`.verse-tags button, .filter button`)
    .forEach((button) => {
      if (button.innerText === tag) {
        button.classList.add("active");
      }
    });

  // Zeigt oder versteckt Verse basierend auf dem gewählten Tag
  verses.forEach((verse) => {
    const tags = verse.getAttribute("data-tags").split(",");
    if (tags.includes(tag)) {
      verse.style.display = "block";
    } else {
      verse.style.display = "none";
    }
  });
}

function deactivateTagButtons() {
  document
    .querySelectorAll(".verse-tags button, .filter button")
    .forEach((button) => button.classList.remove("active"));
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInputElement = document.getElementById("searchInput");

  // Suche ausführen, wenn Enter gedrückt wird
  searchInputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchVerses();
    }
  });

  // Suche ausführen, wenn auf die Lupe geklickt wird
  document
    .querySelector('button[onclick="searchVerses()"]')
    .addEventListener("click", searchVerses);
});

function searchVerses() {
  const searchInputElement = document.getElementById("searchInput");
  if (!searchInputElement) {
    console.error("Eingabefeld mit ID 'searchInput' wurde nicht gefunden.");
    return;
  }

  const searchQuery = searchInputElement.value.toLowerCase();

  // Alle Verse-Container selektieren
  const verses = document.querySelectorAll(".verse");

  // Durch jeden Vers iterieren
  verses.forEach((verse) => {
    // Den gesamten Text des Vers-Containers abrufen
    const verseText = verse.innerText.toLowerCase();

    // Prüfen, ob der Text den Suchbegriff enthält
    if (verseText.includes(searchQuery)) {
      verse.style.display = "block"; // Zeigen, wenn Treffer
    } else {
      verse.style.display = "none"; // Verstecken, wenn kein Treffer
    }
  });
}
