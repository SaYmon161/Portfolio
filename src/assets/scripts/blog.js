import preload from "./modules/preloader";

document.addEventListener("DOMContentLoaded", e => {
  preload().loaded();
});

import "./modules/fullscreen-menu";
import "./modules/parallax";
import "./modules/articles";
