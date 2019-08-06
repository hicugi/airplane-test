import genDropdown from "./dropdown";

const profile = document.querySelector("#profile");

const header = document.createElement("DIV");
header.className = "profile-info";
header.innerHTML = [
  `<div class="profile-info__rank">`,
  [...Array(5)].map(() => `<i></i>`).join(""),
  `</div>`,
  `<div class="profile-info__body">`,
  `<div class="profile-info__description">`,
  `<div class="profile-info__title">Login User</div>`,
  `<div class="profile-info__subtitle">User Rank: <span>Lieutenant</span></div>`,
  `</div>`,
  `</div>`
].join("");

genDropdown(profile, {
  variant: "right",

  header,
  menu: [
    {
      title: "Logbook",
      icon: "contacts",
      link: "#"
    },
    {
      title: "Setup aircraft",
      icon: "cog",
      link: "#"
    },
    {
      title: "Setup controls",
      icon: "joystick",
      link: "#"
    }
  ]
});
