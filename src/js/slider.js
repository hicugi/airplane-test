import EmblaCarousel from "embla-carousel";
import sliderItems from "./items";

const containerSelector = "#background";
const btnSelector = ".bg-slider__btn";
const arrowSelector = ".bg-slider__arrow";

const container = document.querySelector(containerSelector);

// slider items
let currentItem = 3;

function onSelectItem(index) {
  currentItem = index;

  container.innerHTML = "";

  // container
  const slider = document.createElement("DIV");
  slider.className = "bg-slider";

  // viewport
  const sliderContainer = document.createElement("UL");
  sliderContainer.className = "bg-slider__container";

  // nav
  const sliderNav = document.createElement("DIV");
  sliderNav.className = "bg-slider__nav";

  // arrows
  const sliderArrow = document.createElement("DIV");
  sliderArrow.className = "bg-slider__arrows";
  const cls = arrowSelector.substr(1);
  sliderArrow.innerHTML = `<button class="${cls} ${cls}_prev"></button><button class="${cls} ${cls}_next"></button>`;
  container.appendChild(sliderArrow);

  // images
  const { title, alias, items } = sliderItems[index];
  items.forEach(image => {
    const link = `/assets/img/items/${alias}/${image}.`;

    const li = document.createElement("LI");
    li.className = "bg-slider__item";

    const picture = document.createElement("PICTURE");
    const source = document.createElement("SOURCE");

    source.setAttribute("type", "image/webp");
    source.setAttribute("srcset", `${link}webp`);

    // image
    const img = document.createElement("IMG");
    img.setAttribute("type", "image/jpg");
    img.setAttribute("srcset", `${link}jpg`);
    img.setAttribute("alt", title);

    // nav
    const btn = document.createElement("BUTTON");
    btn.className = btnSelector.substr(1);
    sliderNav.appendChild(btn);

    picture.appendChild(source);
    picture.appendChild(img);
    li.appendChild(picture);

    sliderContainer.appendChild(li);
  });

  slider.append(sliderContainer);
  container.appendChild(sliderNav);
  container.append(slider);

  // init plugin
  const options = { loop: false };
  const embla = EmblaCarousel(slider, options);

  // btn navigate
  sliderNav.querySelectorAll("button").forEach((el, i) => {
    el.addEventListener("click", () => embla.scrollTo(i), false);
  });

  // arrows
  document
    .querySelector(`${arrowSelector}_prev`)
    .addEventListener("click", embla.scrollPrev);
  document
    .querySelector(`${arrowSelector}_next`)
    .addEventListener("click", embla.scrollNext);

  embla.on("select", () => {
    const i = embla.selectedScrollSnap();
    const btns = document.querySelectorAll(btnSelector);
    const btn = btns[i];

    const value = `${btnSelector.substr(1)}--active`;

    btns.forEach(el => {
      el.classList.remove(value);
    });

    if (!btn) return;
    btn.classList.add(value);
  });
}

onSelectItem(currentItem);

// catalog
const catalogSlider = document.querySelector(".catalog-slider");
const catalogItems = document.querySelector(".catalog-viewport");

sliderItems.forEach(({ title, alias, preview, payable }, index) => {
  const li = document.createElement("LI");
  const link = `/assets/img/items/${alias}/${preview}.`;
  li.className = "catalog-item";

  let buy = "";
  if (payable) {
    li.classList.add("catalog-item--payable");
    buy = [
      `<div class="catalog-buy">`,
      `<p class="catalog-buy__text">Buy to unlock</p>`,
      `<button class="catalog-buy__btn">Buy</button>`,
      `</div>`
    ].join("");
  } else {
    li.addEventListener("click", () => onSelectItem(index));
  }

  li.innerHTML = [
    `<div class="catalog-item__image">`,
    [
      `<picture>`,
      `<source srcset="${link}webp" type="image/webp">`,
      `<img src="${link}jpg" type="image/jpg" alt="${title}">`,
      `</picture>`,
      buy
    ].join(""),
    `</div>`,
    `<h3 class="catalog-item__title">${title}</h3>`
  ].join("");

  catalogItems.appendChild(li);
});
const emblaCatalog = EmblaCarousel(catalogSlider, {
  slidesToScroll: 7
});

// btns
{
  const catalogContainer = document.querySelector(".catalog__container");
  const catalogPrev = document.createElement("BUTTON");
  const catalogNext = document.createElement("BUTTON");

  catalogPrev.className = "catalog__arrow catalog__arrow_prev";
  catalogNext.className = "catalog__arrow catalog__arrow_next";

  catalogPrev.addEventListener("click", emblaCatalog.scrollPrev);
  catalogNext.addEventListener("click", emblaCatalog.scrollNext);

  catalogContainer.appendChild(catalogPrev);
  catalogContainer.appendChild(catalogNext);
}
