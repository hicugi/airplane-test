const items = ["Random Single Mission", "Multiplayer", "PvP"];

const select = document.querySelector("#startSelect");
select.innerHTML = [
  `<button class="start-select__title"></button>`,
  `<ul class="start-select__list">`,
  ["Random Single Mission", "Multiplayer", "PvP"]
    .map(item => `<li><button>${item}</button></li>`)
    .join(""),
  `</ul>`
].join("");

function onSelect(index) {
  const item = items[index];
  const btn = document.querySelector(".start-select__title");
  const cls = "active";

  btn.innerText = item;

  const options = document.querySelectorAll(".start-select__list li");
  const option = options[index];

  [...options].forEach(el => {
    el.classList.remove(cls);
  });
  option.classList.add(cls);
}
onSelect(0);

[...document.querySelectorAll(".start-select__list button")].forEach(
  (el, index) => {
    el.addEventListener("click", () => onSelect(index));
  }
);
