const blog = {
  state: {
    articlesList: []
  },
  mutations: {
    addArticleToState(state, article) {
      state.articlesList.push(article);
    },
    fillUpArticles(state, articles) {
      state.articlesList = articles;
    },
    deleteArticleFromState(state, articleId) {
      for (let i = 0; i < state.articlesList.length; i++) {
        if (state.articlesList[i].id === articleId) {
          state.articlesList.splice(i, 1);
        }
      }
    }
  },
  actions: {
    addNewArticle({ commit }, article) {
      console.log(article);

      return this.$axios
        .post("/posts", article)
        .then(response => {
          commit("addArticleToState", response.data);
        })
        .catch(e => console.error(e));
    },
    fetchArticles({ commit }) {
      return this.$axios
        .get("/posts/16")
        .then(response => {
          commit("fillUpArticles", response.data);
        })
        .catch(e => console.log(e));
    },
    deleteCurrentArticle({ commit }, articleId) {
      this.$axios.delete(`/posts/${articleId}`).then(response => {
        commit("deleteArticleFromState", articleId);
      });
    }
  }
};

export default blog;
