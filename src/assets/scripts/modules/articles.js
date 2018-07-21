import Vue from "vue";
import axios from "axios";

const asideMenu = {
  template: "#aside-menu",
  props: {
    articles: Array
  }
};

const articlesSection = {
  template: "#articles-section",
  props: {
    articles: Array
  },
  methods: {
    stringDate(unixDate) {
      const date = new Date(unixDate * 1000);
      const year = date.getFullYear();
      const month = zeroFill(date.getMonth() + 1, 2);
      const day = zeroFill(date.getDate(), 2);
      return `${day}.${month}.${year}`;

      function zeroFill(num, len) {
        return (Array(len).join("0") + num).slice(-len);
      }
    }
  }
};

new Vue({
  el: "#blog-app",
  components: {
    asideMenu: asideMenu,
    articlesSection: articlesSection
  },
  data: {
    articles: []
  },
  created() {
    axios.get("http://webdev-api.loftschool.com/posts/16").then(response => {
      this.articles = response.data;
    });
  },
  updated() {
    const blogList = document.querySelector(".blog__list");
    const articles = document.querySelectorAll(".article");
    const links = document.querySelectorAll(".blog__link");
    const pullTag = document.querySelector(".blog__pull-tag");
    let menuOpened = false;

    links[0].parentElement.classList.add("blog__item--active");

    function fixed() {
      blogList.parentElement.getBoundingClientRect().top <= 0
        ? blogList.classList.add("blog__list--fixed")
        : blogList.classList.remove("blog__list--fixed");
    }

    function checkCurrentArticle() {
      for (let i = 0; i < articles.length; i++) {
        if (
          articles[i].getBoundingClientRect().y < 300 &&
          articles[i].getBoundingClientRect().y >
            -articles[i].getBoundingClientRect().height &&
          articles[i].getAttribute("data-name") ===
            links[i].getAttribute("data-name")
        ) {
          const prevArticle = links[i].parentElement.previousElementSibling;
          const nextArticle = links[i].parentElement.nextElementSibling;

          if (typeof prevArticle !== "undefined" && prevArticle !== null) {
            prevArticle.classList.remove("blog__item--active");
          }
          if (typeof nextArticle !== "undefined" && nextArticle !== null) {
            nextArticle.classList.remove("blog__item--active");
          }

          links[i].parentElement.classList.add("blog__item--active");
        }
      }
    }

    function toArticle(name) {
      let currentArticle;

      for (let item of articles) {
        if (name === item.getAttribute("data-name")) currentArticle = item;
      }

      let scrollTime = setTimeout(function tick() {
        setInterval(() => {
          clearTimeout(scrollTime);
        }, 1500);

        if (currentArticle.getBoundingClientRect().y > 50) {
          window.scrollBy(0, 10);
          scrollTime = setTimeout(tick, 1);
        }

        if (currentArticle.getBoundingClientRect().y < 0) {
          window.scrollBy(0, -10);
          scrollTime = setTimeout(tick, 1);
        }
      }, 1);
    }

    fixed();

    window.addEventListener("scroll", e => {
      fixed();
      checkCurrentArticle();
    });

    blogList.addEventListener("click", e => {
      e.preventDefault();
      if (e.target.classList.contains("blog__link")) {
        toArticle(e.target.getAttribute("data-name"));
      }
      closeMenu();
    });

    let windowWidth = window.innerWidth;

    window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;
    });

    function openMenu() {
      pullTag.style.left = windowWidth * 0.7 - 40 + "px";
      blogList.style.left = "0";
      menuOpened = true;
    }

    function closeMenu() {
      pullTag.style.left = "";
      blogList.style.left = "";
      menuOpened = false;
    }

    pullTag.addEventListener("click", e => {
      if (!menuOpened) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  },
  template: "#articles"
});
