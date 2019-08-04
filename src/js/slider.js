import EmblaCarousel from "embla-carousel";

const containerSelector = "#background";
const btnSelector = ".bg-slider__btn";
const arrowSelector = ".bg-slider__arrow";

const container = document.querySelector(containerSelector);

// slider items
let currentItem = 3;
const sliderItems = [
  {
    title: "Hawk",
    alias: "hawk",
    preview: 0,
    items: [1, 2]
  },
  {
    title: "Mirage 2000",
    alias: "mirage-2000c",
    preview: 0,
    items: [1, 2]
  },
  {
    title: "Yak-52",
    alias: "yak-52",
    preview: 0,
    items: [1, 2]
  },
  {
    title: "F/A-18C",
    alias: "fa-18c",
    preview: 0,
    items: [1, 2, 3]
  },
  {
    title: "C-101 Aviojet",
    alias: "c-101",
    preview: 0,
    items: [1, 2]
  },
  {
    title: "MiG-15",
    alias: "mig-15",
    preview: 0,
    items: [1, 2],
    payable: true
  },
  {
    title: "L-39C",
    alias: "l-39c",
    preview: 0,
    items: [1, 2]
  }
];

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
