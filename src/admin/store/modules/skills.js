const skills = {
  state: {
    data: []
  },
  mutations: {
    fillUpSkills(state, skills) {
      state.data = skills;
    },
    addSkillToState(state, skill) {
      state.data.push(skill);
    },
    deleteSkillFromState(state, skillId) {
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].id === skillId) {
          const deleted = state.data.splice(i, 1);
        }
      }
    }
  },
  actions: {
    addNewSkill({ commit }, skill) {
      return this.$axios
        .post("/skills", skill)
        .then(response => {
          commit("addSkillToState", response.data);
        })
        .catch(e => console.log(e));
    },
    deleteCurrentSkill({ commit }, skillId) {
      this.$axios.delete(`/skills/${skillId}`).then(response => {
        commit("deleteSkillFromState", skillId);
      });
    },
    fetchSkills({ commit }) {
      return this.$axios
        .get("/skills/16")
        .then(response => {
          commit("fillUpSkills", response.data);
        })
        .catch(e => console.log(e));
    }
  }
};

export default skills;
