import preloader from "./modules/preloader";

document.addEventListener("DOMContentLoaded", e => {
  console.log(1);
  preloader().loaded();
});

import "./modules/webgl";
import "./modules/index-flip";
