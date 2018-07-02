import preload from "./modules/preloader";

document.addEventListener("DOMContentLoaded", e => {
  console.log(1);
  preload().loaded();
});

import "./modules/example";
import "./modules/skills";
import "./modules/fullscreen-menu";
import "./modules/parallax";
