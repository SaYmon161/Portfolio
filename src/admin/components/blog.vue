<template lang="pug">
  #blog
    h1.blog__title Страница "Блог"
    .blog__block
      .blog__content
        span.blog__description Добавить запись
        input.blog__input(
          v-model="newArticle.title"
          type="text"
          placeholder="Название"
          ref="input-title"
          )
        input.blog__input(
          v-model="newArticle.date"
          type="text"
          placeholder="Дата"
          ref="input-date"
          )
        textarea(
          v-model="newArticle.content"
          placeholder="Содержание"
          ref="input-content"
          ).blog__text
        button.blog__btn(@click="addArticle") Добавить
      .blog__right-block
        .blog__description Добавленные статьи
        added-articles(
          v-for="article in articles"
          :key="article.title"
          :article="article"
          )
</template>

<script>
import addedArticles from "./added-articles";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    addedArticles
  },
  data() {
    return {
      newArticle: {
        title: "",
        date: "",
        content: ""
      }
    };
  },
  computed: {
    ...mapState({
      articles: state => state.blog.articlesList
    })
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    ...mapActions(["addNewArticle", "fetchArticles"]),
    addArticle() {
      const inputTitle = this.$refs["input-title"];
      const inputDate = this.$refs["input-date"];
      const inputContent = this.$refs["input-content"];

      if (!this.newArticle.title) {
        inputTitle.style.border = "1px solid red";
        return;
      } else {
        inputTitle.style.border = "";
      }

      if (!this.newArticle.date) {
        inputDate.style.border = "1px solid red";
        return;
      } else {
        inputDate.style.border = "";
      }

      if (!this.newArticle.content) {
        inputContent.style.border = "1px solid red";
        return;
      } else {
        inputContent.style.border = "";
      }

      this.addNewArticle(this.newArticle).then(r => {
        this.newArticle.title = "";
        this.newArticle.date = "";
        this.newArticle.content = "";
      });
    }
  }
};
</script>


<style lang="scss">
#blog {
  padding-top: 50px;
}

.blog__block {
  display: flex;
}

.blog__title {
  margin-bottom: 50px;
  font-size: 21px;
  font-weight: 500;
}

.blog__content {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 10%;
}

.blog__description {
  margin-bottom: 20px;
}

.blog__input {
  width: 300px;
  height: 45px;
  padding: 20px 20px;
  border-radius: 5px;
  border: 0;
  margin-bottom: 20px;
  &:focus {
    outline-color: #6c9c5a;
  }
}

.blog__text {
  resize: none;
  width: 500px;
  height: 166px;
  font-size: 16px;
  padding: 17px 20px;
  border-radius: 6px;
  margin-bottom: 30px;
  overflow: hidden;
  background-color: #fff;
  &:focus {
    outline-color: #6c9c5a;
  }
}

.blog__btn {
  width: 115px;
  height: 45px;
  background: #6c9c5a;
  color: white;
  border-radius: 6px;
  font-weight: 500;
}

.blog__right-block {
  width: 50%;
}
</style>
