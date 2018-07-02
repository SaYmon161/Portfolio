const MobileDetect = require("mobile-detect");
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const parallax = (function() {
  let bg = document.querySelector(".header__picture");
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

if (!isMobile || window.innerWidth > 768) {
  window.addEventListener("scroll", () => {
    let wScroll = window.pageYOffset;

    parallax.init(wScroll);
  });
}
