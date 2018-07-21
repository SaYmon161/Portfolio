<template lang="pug">
  #about.about
    h2.about__title Страница "Обо мне"
    .skills
      skills-row(
        v-for="type in types"
        :key="type.name"
        :type="type"
        :skills="skills"
      )
</template>



<script>
import skillsRow from "./skillsRow";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    skillsRow
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" }
      ]
    };
  },
  computed: {
    ...mapState({
      skills: state => state.skills.data
    })
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions(["fetchSkills", "refreshToken"]),
    refresh() {
      this.refreshToken();
    }
  }
};
</script>


<style lang="scss">
.about {
  padding-top: 50px;
}

.about__title {
  font-size: 21px;
  font-weight: 500;
  color: #566358;
  margin-bottom: 46px;
}

.skills {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
}
</style>
