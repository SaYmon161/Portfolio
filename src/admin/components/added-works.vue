<template lang="pug">
  .work
    h3.work__title {{work.title}}
    button(@click="deleteWork").works__btn Удалить
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    work: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(["deleteCurrentWork"]),
    deleteWork() {
      this.deleteCurrentWork(this.work.id);
    }
  }
};
</script>


<style lang="scss">
.work {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.work__title {
  width: 70%;
  font-size: 18px;
}
</style>
