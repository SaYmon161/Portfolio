<template lang="pug">
  .article
    h3.article__title {{article.title}}
    button(@click="deleteArticle").blog__btn Удалить
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(["deleteCurrentArticle"]),
    deleteArticle() {
      this.deleteCurrentArticle(this.article.id);
    }
  }
};
</script>


<style lang="scss">
.article {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.article__title {
  width: 70%;
  font-size: 18px;
}
</style>
