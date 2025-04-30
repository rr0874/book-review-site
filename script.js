function getGenreFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("genre");
}

function displayBooks(genre) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Rating:</strong> ${book.rating}</p>
    `;

    card.addEventListener("click", () => {
      document.getElementById("modalTitle").textContent = book.title;
      document.getElementById("modalAuthor").innerHTML = `<strong>Author:</strong> ${book.author}`;
      document.getElementById("modalRating").innerHTML = `<strong>Rating:</strong> ${book.rating}`;
      document.getElementById("modalAbstract").textContent = book.abstract;
      document.getElementById("abstractModal").style.display = "block";
    });

    bookList.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close-btn");
  const modal = document.getElementById("abstractModal");

  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
  };

  const genre = getGenreFromURL();
  const genreTitle = document.getElementById("genreTitle");
  genreTitle.textContent = `${genre.charAt(0).toUpperCase() + genre.slice(1)} Books`;

  displayBooks(genre);
});
function goHome() {
  window.location.href = "index.html"; // change if your main page has a different name
}

function goBack() {
  window.history.back();
}


