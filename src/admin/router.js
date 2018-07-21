import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

import about from "./components/about.vue";
import works from "./components/works.vue";
import blog from "./components/blog.vue";
import header from "./components/header.vue";
import tabs from "./components/tabs.vue";

const routes = [
  {
    path: "/",
    components: {
      default: about,
      tabs: tabs,
      header: header
    }
  },
  {
    path: "/works",
    components: {
      default: works,
      tabs: tabs,
      header: header
    }
  },
  {
    path: "/blog",
    components: {
      default: blog,
      tabs: tabs,
      header: header
    }
  }
];

const router = new VueRouter({ routes });

const guard = axios.create({
  baseURL: "http://webdev-api.loftschool.com/"
});

router.beforeEach((to, from, next) => {
  guard
    .get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      next();
    })
    .catch(error => {
      localStorage.removeItem("token");
      window.location.href = "//google.com";
    });
});

export default router;
