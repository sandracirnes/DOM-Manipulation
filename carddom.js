/*
 * [X] Crear tarjeta
 * [X] Crear secciones p/tarjeta
 * Img
 * Nombre, desc, edad, lista de algo
 * [X] Insertar en la tarjeta
 * [x] Mostrar dentro de div.container
 * [X] Crear funciones reutilizables
 * [X] Funciones para crear items
 * [X] Funciones para inyectar texto
 * [X] Funciones para renderizar
 * [] Multiples usuarios
 */

const CARDS_CONTAINER = document.querySelector("#card-container");
const USERS = [
  {
    id: 1,
    username: "booklover123",
    description: "Avid reader and coffee enthusiast.",
    age: 29,
    fav_books: {
      books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"],
    },
  },
  {
    id: 2,
    username: "literature_junkie",
    description: "Poetry lover and amateur writer.",
    age: 35,
    fav_books: {
      books: ["The Great Gatsby", "Invisible Man", "Beloved"],
    },
  },
];

// Crear secciones
function createElements() {
  const cardObj = {
    name_section: document.createElement("h3"),
    desc_section: document.createElement("p"),
    age_section: document.createElement("p"),
    book_section: document.createElement("div"),
  };
  return cardObj;
}

// Crear tarjeta
// Inyectamos info
function injectData(obj, user) {
  const bookList = user.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
  });

  obj.name_section.textContent = user.username;
  obj.desc_section.textContent = user.desc;
  obj.age_section.textContent = user.age;
  obj.book_section.append(...bookList);
  renderCard(obj);
}

function renderCard(cardObj) {
  const card = document.createElement("div");
  card.append(
    cardObj.name_section,
    cardObj.desc_section,
    cardObj.age_section,
    cardObj.book_section,
  );
  card.className = "div-creado";
  CARDS_CONTAINER.appendChild(card);
}

USERS.forEach((user) => {
  const cardData = createElements();
  injectData(cardData, user);
});