import genDropdown from "./dropdown";

const items = [
  {
    title: "MAC",
    description: "Modern Air Combat",
    active: true,
    dropdown: {
      menu: [
        {
          title: "Game options",
          icon: "cog",
          link: "#"
        },
        {
          title: "Encyclopedia",
          icon: "book",
          link: "#"
        },
        {
          title: "Shop",
          icon: "shop",
          link: "#"
        },
        {
          title: "Exit",
          icon: "sign-out",
          link: "#"
        }
      ]
    }
  },
  {
    title: "FL",
    description: "Flying Legend",
    dropdown: {
      info: "Lorem Ipsum is simply dummy text of the printing",
      link: {
        text: "Buy Game",
        link: "#"
      }
    }
  },
  {
    title: "DCS",
    description: "Digital Combat Simulator",
    dropdown: {
      info: "Lorem Ipsum is simply dummy text of the printing",
      link: {
        text: "Run Game",
        link: "#"
      }
    }
  }
];

const nav = document.querySelector("#nav");
const navList = document.createElement("UL");
navList.className = "nav__list";

items.forEach(({ title, description, active, dropdown }) => {
  const navItem = document.createElement("LI");
  navItem.className = "nav-item";

  if (active) {
    navItem.classList.add("nav-item--active");
  }

  navItem.innerHTML = [
    `<div class="nav-item__header">`,
    `<span class="nav-item__title">${title}</span>`,
    `<span class="nav-item__subtitle">${description}</span>`,
    `</div>`
  ].join("");

  genDropdown(navItem, dropdown);
  navList.appendChild(navItem);
});
nav.appendChild(navList);
