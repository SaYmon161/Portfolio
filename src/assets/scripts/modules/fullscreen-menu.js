import Vue from "vue";

new Vue({
  el: "#fullscreen-menu",
  data: {
    changed: false,
    menu: [
      {
        name: "Мои работы",
        link: "my-works.html"
      },
      {
        name: "Обо мне",
        link: "about.html"
      },
      {
        name: "Блог",
        link: "blog.html"
      },
      {
        name: "Авторизация",
        link: "index.html"
      }
    ]
  }
});
