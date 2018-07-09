<template lang="pug">
  .skills__row
    .skills-title {{type.name}}
    table
      skills-item(
        v-for="skill in skills"
        v-if="skill.category === type.id"
        :key="skill.id"
        :skill="skill"
      ).skills__item
      skills-item(
        :editmode="true"
        :typeId="type.id"
      ).skills__item

</template>



<script>
import skillsItem from "./skillsItem";

export default {
  components: {
    skillsItem
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    type: {
      type: Object,
      default: () => ({
        id: 0,
        name: "Frontend"
      })
    }
  }
};
</script>


<style lang="scss">
.skills__row {
  width: 350px;
  height: 100%;
  margin-bottom: 25px;
}

.skills-title {
  color: #566358;
  margin-bottom: 20px;
  font-weight: 500;
}
</style>
