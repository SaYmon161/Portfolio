const parallax = (function() {
  let bg = document.querySelector("picture");
  let heroContent = document.querySelector(".hero__content");

  return {
    move: function(block, scrollAmount, speedCoef) {
      let style = block.style;

      let strafe = -(scrollAmount / speedCoef) + "%";
      style.transform = `translate3d(0, ${strafe}, 0)`;
    },

    init(wScroll) {
      this.move(bg, wScroll, 50);
      this.move(heroContent, wScroll, 15);
    }
  };
})();

const scrollHandler = function() {
  let wScroll = window.pageYOffset;
  parallax.init(wScroll);
};

if (window.innerWidth > 768) {
  window.addEventListener("scroll", scrollHandler);
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    window.removeEventListener("scroll", scrollHandler);
  }
});
