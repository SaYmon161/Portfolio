let linkNav = document.querySelectorAll(".arrow-scroll__link");
let speed = 1;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function(e) {
      e.preventDefault();
      let currentPos = window.pageYOffset;
      let hash = this.href.replace(/[^#]*(.*)/, "$1");
      let scrollToEl = document.querySelector(hash);
      let topPos = scrollToEl.getBoundingClientRect().top;
      let start = null;

      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        let progress = time - start;
        let scrollAmount =
          topPos < 0
            ? Math.max(currentPos - progress / speed, currentPos + topPos)
            : Math.min(currentPos + progress / speed, currentPos + topPos);
        window.scrollTo(0, scrollAmount);
        if (scrollAmount != currentPos + topPos) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    },
    false
  );
}
