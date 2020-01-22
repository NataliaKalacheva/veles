const reviewsItems = [
  {
    number: 1,
    img: "/img/reviews/item01.jpg",
    title: "«Шальные годы» Монпарнаса",
    text:
      "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
  },
  {
    number: 2,
    img: "/img/reviews/item02.jpg",
    title: "Анатомия за 30 секунд",
    text:
      "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
  },
  {
    number: 3,
    img: "/img/reviews/item03.jpg",
    title: "Русские балетные сезоны",
    text:
      "В Новом Иерусалиме стартовал необычный культурно-развлекательный  спектакль, который покажут в новом театре"
  },
  {
    number: 4,
    img: "/img/reviews/item04.jpg",
    title: "Сферические чудаки",
    text:
      "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»"
  },
  {
    number: 1,
    img: "/img/reviews/item01.jpg",
    title: "«Шальные годы» Монпарнаса",
    text:
      "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
  },
  {
    number: 1,
    img: "/img/reviews/item01.jpg",
    title: "«Шальные годы» Монпарнаса",
    text:
      "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
  },
  {
    number: 1,
    img: "/img/reviews/item01.jpg",
    title: "«Шальные годы» Монпарнаса",
    text:
      "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
  },
  {
    number: 1,
    img: "/img/reviews/item01.jpg",
    title: "«Шальные годы» Монпарнаса",
    text:
      "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
  },
  {
    number: 2,
    img: "/img/reviews/item02.jpg",
    title: "Анатомия за 30 секунд",
    text:
      "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
  },
  {
    number: 2,
    img: "/img/reviews/item02.jpg",
    title: "Анатомия за 30 секунд",
    text:
      "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
  },
  {
    number: 2,
    img: "/img/reviews/item02.jpg",
    title: "Анатомия за 30 секунд",
    text:
      "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
  },
  {
    number: 2,
    img: "/img/reviews/item02.jpg",
    title: "Анатомия за 30 секунд",
    text:
      "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
  }
];

const reviewsList = document.querySelector(".reviews__list");
const paginationWrapper = document.getElementById("pagination");

let currentPage = 1;
let rows = 4;

function renderItems(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rowsPerPage * page;
  let end = start + rowsPerPage;
  let paginatedItems = items.slice(start, end);

  let template = createTemplate(paginatedItems);
  wrapper.insertAdjacentHTML("afterbegin", template);
}

function createTemplate(items) {
  let fragment = "";

  items.forEach(item => {
    let template = `<li class="reviews__item">
    <div class="reviews__img article__img">
      <a href=""><img class="" src="${item.img}"/></a>
    </div>
    <div class="reviews__content">
      <a href="">
        <h3 class="reviews__content__title">${item.title}</h3>
      </a>
      <p class="">${item.text}</p>
    </div>
  </li>`;
    fragment += template;
  });
  return fragment;
}

function setupPagination(items, wrapper, rowsPerPage) {
  wrapper.innerHTML = "";

  let pageCount = Math.ceil(items.length / rowsPerPage);
  let template = document.createDocumentFragment();

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButton(i, items);
    template.appendChild(btn);
  }

  wrapper.appendChild(template);
}

function paginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (currentPage == page) button.classList.add("active");

  button.addEventListener("click", function() {
    currentPage = page;
    renderItems(items, reviewsList, rows, currentPage);

    let currentBtn = document.querySelector("#pagination button.active");
    currentBtn.classList.remove("active");
    button.classList.add("active");
  });

  return button;
}

renderItems(reviewsItems, reviewsList, rows, currentPage);
setupPagination(reviewsItems, paginationWrapper, rows);
