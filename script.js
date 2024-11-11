document.addEventListener("DOMContentLoaded", function () {
  const coll = document.querySelectorAll(".collapsible");

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

function filterVerses() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const verses = document.getElementsByClassName("verse");

  for (let i = 0; i < verses.length; i++) {
    const button = verses[i].getElementsByClassName("collapsible")[0];
    const text = button.textContent.toLowerCase();

    if (text.includes(searchInput)) {
      verses[i].style.display = "";
    } else {
      verses[i].style.display = "none";
    }
  }
}
