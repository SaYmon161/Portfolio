export default function preloader() {
  const loader = document.querySelector(".preloader");
  const images = document.querySelectorAll("img");
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.height = "100%";

  return {
    loaded() {
      let imgLoaded = 0;
      if (images.length === 0) {
        wrapper.style.height = "";
        loader.classList.add("hide");
        return;
      }

      for (let item of images) {
        const shadowImg = new Image();
        shadowImg.onload = e => {
          imgLoaded++;
          if (imgLoaded === images.length) {
            wrapper.style.height = "";
            loader.classList.add("hide");
          }
        };
        shadowImg.src = item.getAttribute("src");
        // let i = 0;
        // let timer = setInterval(function count() {
        //   i++;
        //   if (i >= 100) {
        //     clearInterval(timer);
        //   }
        // }, 10);
      }
    }
  };
}
