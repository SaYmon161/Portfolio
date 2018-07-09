import axios from "axios";

const blogList = document.querySelector(".blog__list");
const articles = document.querySelectorAll(".article");
const links = document.querySelectorAll(".blog__link");
const pullTag = document.querySelector(".blog__pull-tag");
let menuOpened = false;
let blogArticles;

axios.get("http://webdev-api.loftschool.com/posts/16").then(response => {
  blogArticles = response.data;
  console.log(response.data);
  for (let article of blogArticles) {
    const asideItem = document.createElement("li");
    const asideLink = document.createElement("a", { href: "#" });
    asideItem.classList.add("blog__item");
    asideLink.classList.add("blog__link");
    asideLink.setAttribute("href", "#");
    asideLink.setAttribute("data-name", `${article.title}`);
    asideItem.appendChild(asideLink);
    // console.log(asideLink);

    // console.log(asideItem);
    // asideItem.innerHTML = `
    // <a class="blog__link" href="#" data-name=${article.title}> ${
    //   article.title
    // } </a>
    // `;
    console.log(asideItem);
    blogList.appendChild(asideItem);
  }
});

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
    }, 1000);

    if (currentArticle.getBoundingClientRect().y > 50) {
      window.scrollBy(0, 10);
      scrollTime = setTimeout(tick, 1);
    }

    if (currentArticle.getBoundingClientRect().y < 0) {
      window.scrollBy(0, -10);
      scrollTime = setTimeout(tick, 1);
    }
  }, 10);
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

function openMenu() {
  pullTag.style.left = "212px";
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
  console.log(menuOpened);
});
