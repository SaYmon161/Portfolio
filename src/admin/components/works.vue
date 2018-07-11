<template lang="pug">
  #works
    h1.works__title Страница "Мои работы"
    .works__block
      .works__content
        span.works__description Добавить работу
        input.works__input(
          v-model="newWork.title"
          type="text"
          placeholder="Название проекта"
          ref="input-title"
          )
        input.works__input(
          v-model="newWork.techs"
          type="text"
          placeholder="Технологии"
          ref="input-techs"
          )
        input.works__input(
          v-model="newWork.link"
          type="text"
          placeholder="Ссылка"
          ref="input-link"
          )
        label.works__label
          input.works__file(
            type="file"
            @change="addPhoto"
            )
          img.works__pic(src="../images/icons/loadfile.png")
          .works__text Загрузить картинку
        button.works__btn(@click="addWork") Добавить
      .works__right-block
        .works__description Добавленные статьи
        added-works(
          v-for="work in works"
          :key="work.title"
          :work="work"
          )
</template>

<script>
import addedWorks from "./added-works";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    addedWorks
  },
  data() {
    return {
      newWork: {
        title: "",
        techs: "",
        photo: "",
        link: ""
      }
    };
  },
  computed: {
    ...mapState({
      works: state => state.works.worksList
    })
  },
  created() {
    this.fetchWorks();
  },
  methods: {
    ...mapActions(["addNewWork", "fetchWorks"]),
    addPhoto(e) {
      const files = e.target.files;

      if (files.length === 0) return;

      this.newWork.photo = files[0];
    },
    addWork() {
      const inputTitle = this.$refs["input-title"];
      const inputTechs = this.$refs["input-techs"];
      const inputLink = this.$refs["input-link"];

      if (!this.newWork.title) {
        inputTitle.style.border = "1px solid red";
        return;
      } else {
        inputTitle.style.border = "";
      }

      if (!this.newWork.techs) {
        inputTechs.style.border = "1px solid red";
        return;
      } else {
        inputTechs.style.border = "";
      }

      if (!this.newWork.link) {
        inputLink.style.border = "1px solid red";
        return;
      } else {
        inputLink.style.border = "";
      }

      const formData = new FormData();

      Object.keys(this.newWork).forEach(prop => {
        formData.append(prop, this.newWork[prop]);
      });

      this.addNewWork(formData).then(r => {
        this.newWork.title = "";
        this.newWork.techs = "";
        this.newWork.link = "";
        this.newWork.photo = "";
      });
    }
  }
};
</script>

<style lang="scss">
#works {
  padding-top: 50px;
  width: 100%;
}

.works__block {
  display: flex;
}

.works__title {
  margin-bottom: 50px;
  font-size: 21px;
  font-weight: 500;
}

.works__content {
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-right: 10%;
}

.works__description {
  margin-bottom: 20px;
}

.works__input {
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

.works__text {
  color: #6c9c5a;
  font-weight: 400;
}

.works__label {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 70%;
  margin-bottom: 20px;
}

.works__file {
  position: absolute;
  left: -999999px;
}

.works__btn {
  width: 115px;
  height: 45px;
  background: #6c9c5a;
  color: white;
  border-radius: 6px;
  font-weight: 500;
}

.works__file {
  margin-bottom: 20px;
}

.works__right-block {
  width: 50%;
}
</style>
