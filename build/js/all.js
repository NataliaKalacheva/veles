"use strict";

var btn = document.querySelector(".navbar__btn-open");
var navbar = document.querySelector(".navbar__list");
var closeBtn = document.querySelector(".navbar__btn-close");
if (navbar.classList.contains("navbar__list--active")) navbar.classList.remove("navbar__list--active");
btn.addEventListener("click", function () {
  navbar.classList.add("navbar__list--active");
  closeBtn.classList.add("navbar__btn-close--active");
});
closeBtn.addEventListener("click", function () {
  navbar.classList.remove("navbar__list--active");
  closeBtn.classList.remove("navbar__btn-close--active");
});
"use strict";
"use strict";

$(document).ready(function () {
  $(".intro__slider").slick({
    prevArrow: ".arrow__prev",
    nextArrow: ".arrow__next",
    dots: true,
    infinite: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    speed: 300
  });
});
$(document).ready(function () {
  $(".additional__slider").slick({
    arrows: true,
    prevArrow: ".additional__prev",
    nextArrow: ".additional__next",
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }]
  });
});
"use strict";

var reviewsItems = [{
  number: 1,
  img: "img/reviews/item01.jpg",
  title: "«Шальные годы» Монпарнаса",
  text: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
}, {
  number: 2,
  img: "img/reviews/item02.jpg",
  title: "Анатомия за 30 секунд",
  text: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
}, {
  number: 3,
  img: "img/reviews/item03.jpg",
  title: "Русские балетные сезоны",
  text: "В Новом Иерусалиме стартовал необычный культурно-развлекательный  спектакль, который покажут в новом театре"
}, {
  number: 4,
  img: "img/reviews/item04.jpg",
  title: "Сферические чудаки",
  text: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»"
}, {
  number: 1,
  img: "img/reviews/item01.jpg",
  title: "«Шальные годы» Монпарнаса",
  text: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
}, {
  number: 1,
  img: "img/reviews/item01.jpg",
  title: "«Шальные годы» Монпарнаса",
  text: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
}, {
  number: 1,
  img: "img/reviews/item01.jpg",
  title: "«Шальные годы» Монпарнаса",
  text: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
}, {
  number: 1,
  img: "img/reviews/item01.jpg",
  title: "«Шальные годы» Монпарнаса",
  text: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»"
}, {
  number: 2,
  img: "img/reviews/item02.jpg",
  title: "Анатомия за 30 секунд",
  text: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
}, {
  number: 2,
  img: "img/reviews/item02.jpg",
  title: "Анатомия за 30 секунд",
  text: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
}, {
  number: 2,
  img: "img/reviews/item02.jpg",
  title: "Анатомия за 30 секунд",
  text: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
}, {
  number: 2,
  img: "img/reviews/item02.jpg",
  title: "Анатомия за 30 секунд",
  text: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос"
}];
var reviewsList = document.querySelector(".reviews__list");
var paginationWrapper = document.getElementById("pagination");
var currentPage = 1;
var rows = 4;

function renderItems(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = "";
  page--;
  var start = rowsPerPage * page;
  var end = start + rowsPerPage;
  var paginatedItems = items.slice(start, end);
  var template = createTemplate(paginatedItems);
  wrapper.insertAdjacentHTML("afterbegin", template);
}

function createTemplate(items) {
  var fragment = "";
  items.forEach(function (item) {
    var template = "<li class=\"reviews__item\">\n    <div class=\"reviews__img article__img\">\n      <a href=\"\"><img class=\"\" src=\"".concat(item.img, "\"/></a>\n    </div>\n    <div class=\"reviews__content\">\n      <a href=\"\">\n        <h3 class=\"reviews__content__title\">").concat(item.title, "</h3>\n      </a>\n      <p class=\"\">").concat(item.text, "</p>\n    </div>\n  </li>");
    fragment += template;
  });
  return fragment;
}

function setupPagination(items, wrapper, rowsPerPage) {
  wrapper.innerHTML = "";
  var pageCount = Math.ceil(items.length / rowsPerPage);
  var template = document.createDocumentFragment();

  for (var i = 1; i < pageCount + 1; i++) {
    var btn = paginationButton(i, items);
    template.appendChild(btn);
  }

  wrapper.appendChild(template);
}

function paginationButton(page, items) {
  var button = document.createElement("button");
  button.innerText = page;
  if (currentPage == page) button.classList.add("active");
  button.addEventListener("click", function () {
    currentPage = page;
    renderItems(items, reviewsList, rows, currentPage);
    var currentBtn = document.querySelector("#pagination button.active");
    currentBtn.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}

renderItems(reviewsItems, reviewsList, rows, currentPage);
setupPagination(reviewsItems, paginationWrapper, rows);
//# sourceMappingURL=all.js.map
