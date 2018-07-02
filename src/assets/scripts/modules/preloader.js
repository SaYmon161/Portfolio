export default function preloader() {
  const loader = document.querySelector(".preloader");
  const images = document.querySelectorAll("img");

  return {
    loaded() {
      console.log(2);

      let imgLoaded = 0;
      if (images.length === 0) {
        loader.classList.add("hide");
        return;
      }

      console.log(images);

      for (let item of images) {
        console.log(item);
        item.onload = function() {
          console.log(3);
          imgLoaded++;
          console.log(imgLoaded);

          if (imgLoaded === images.length) {
            loader.classList.add("hide");
          }
        };
      }
    }
  };
}
