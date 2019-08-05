export default function(parent, { menu: menuItems, info, link }) {
  parent.classList.add("dropdown");

  const body = document.createElement("DIV");
  body.className = "dropdown__body";

  // info
  if (info) {
    const d = document.createElement("P");
    d.className = "dropdown-info";
    d.innerText = info;

    body.appendChild(d);
  }

  // menu
  if (menuItems) {
    const menu = document.createElement("UL");
    menu.className = "dropdown-menu";

    menuItems.forEach(({ title, icon, link: itemLink }) => {
      const li = document.createElement("LI");
      li.className = "dropdown-menu__item";

      li.innerHTML = [
        `<a class="dropdown-menu__link" href="${itemLink}">`,
        [
          `<i class="dropdown-menu__icon dropdown-menu__icon_${icon}"></i>`,
          `<span class="dropdown-menu__text">${title}</span>`
        ].join(""),
        "</a>"
      ].join("");

      menu.appendChild(li);
    });

    body.appendChild(menu);
  }

  // link
  if (link) {
    const d = document.createElement("DIV");
    d.className = "dropdown-footer";
    d.innerHTML = `<a class="dropdown-footer__link" href="${link.link}"><span>${link.text}</span></a>`;

    body.appendChild(d);
  }

  parent.appendChild(body);
}
// 1
