import genDropdown from "./dropdown";

const profile = document.querySelector("#profile");
const svg = `<svg x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
  <g>
    <defs>
      <path id="SVGID_1_" d="M218.5,218.5c-50,50-131,50-181,0c0,0,0,0,90.5-90.5L218.5,218.5z"/>
    </defs>
    <clipPath id="SVGID_2_">
      <use xlink:href="#SVGID_1_" overflow="visible"/>
    </clipPath>
    <path clip-path="url(#SVGID_2_)" d="M128,256C57.3,256,0,198.7,0,128c0,0,0,0,128,0V256z"/>
    <line clip-path="url(#SVGID_2_)" fill="none" x1="256" y1="0" x2="256" y2="0"/>
  </g>
</svg>`;

const header = document.createElement("DIV");
header.className = "profile-info";
header.innerHTML = [
  `<div class="profile-info__rank">`,
  [...Array(5)].map(() => svg).join(""),
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
