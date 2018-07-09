<template lang="pug">
  tr(v-if="!editmode").skill__table-row
    td {{skill.title}}
    td
      span {{skill.percents}}%
    td
      button(@click="deleteSkill").about__btn Удалить
  tr(v-else).skill__table-row
    td
      input(type="text" v-model="newSkill.title").skill__input.skill__title-input
    td
      input(type="text" v-model="newSkill.percents").skill__input.skill__percent-input
      span %
    td
      button(@click="addSkill").about__btn Добавить
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    typeId: {
      type: Number,
      default: 0
    },
    skill: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions(["addNewSkill", "deleteCurrentSkill"]),
    addSkill() {
      this.addNewSkill(this.newSkill).then(r => {
        this.newSkill.title = "";
        this.newSkill.percents = "";
      });
    },
    deleteSkill() {
      this.deleteCurrentSkill(this.skill.id);
    }
  }
};
</script>


<style lang="scss">
.skill__table-row {
  height: 35px;
  margin-bottom: 10px;
  font-weight: 400;
}

.skill__input {
  height: 35px;
  padding: 20px 20px;
  border-radius: 5px;
  border: 0;
  &:focus {
    outline-color: #6c9c5a;
  }
}

.skill__title-input {
  width: 100px;
}

.skill__percent-input {
  width: 50px;
}

.about__btn {
  width: 115px;
  height: 45px;
  background: #6c9c5a;
  color: white;
  border-radius: 6px;
  font-weight: 500;
}
</style>
