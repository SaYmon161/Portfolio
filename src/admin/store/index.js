import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skills from "./modules/skills";
import user from "./modules/user";
import blog from "./modules/blog";
import works from "./modules/works";

export default new Vuex.Store({
  modules: {
    skills,
    user,
    blog,
    works
  }
});
