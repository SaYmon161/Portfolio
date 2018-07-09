const works = {
  state: {
    worksList: []
  },
  mutations: {
    addWorkToState(state, work) {
      state.worksList.push(work);
    },
    fillUpWorks(state, works) {
      state.worksList = works;
    },
    deleteWorkFromState(state, worksId) {
      for (let i = 0; i < state.worksList.length; i++) {
        if (state.worksList[i].id === worksId) {
          state.worksList.splice(i, 1);
        }
      }
    }
  },
  actions: {
    addNewWork({ commit }, work) {
      console.log(work);

      return this.$axios
        .post("/works", work)
        .then(response => {
          commit("addWorkToState", response.data);
        })
        .catch(e => console.error(e));
    },
    fetchWorks({ commit }) {
      return this.$axios
        .get("/works/16")
        .then(response => {
          commit("fillUpWorks", response.data);
        })
        .catch(e => console.log(e));
    },
    deleteCurrentWork({ commit }, workId) {
      this.$axios.delete(`/works/${workId}`).then(response => {
        commit("deleteWorkFromState", workId);
      });
    }
  }
};

export default works;
