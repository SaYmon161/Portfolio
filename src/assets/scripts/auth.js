import preloader from "./modules/preloader";

document.addEventListener("DOMContentLoaded", e => {
  preloader().loaded();
});

import "./modules/welcome-page";
