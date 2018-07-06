import Vue from "vue";

new Vue({
  el: "#message",
  data() {
    return {
      errorText: "Поле не может быть пустым!",
      name: "",
      email: "",
      message: "",
      validName: "true",
      validEmail: "true"
    };
  },
  methods: {
    submit() {
      const regexp = /@/;
      if (!this.name || this.name === "") {
        this.validName = false;
        this.errorText = "Поле не может быть пустым!";
      } else {
        this.validName = true;
      }

      if (this.validName) {
        if (!this.email || this.email === "") {
          this.validEmail = false;
          this.errorText = "Поле не может быть пустым!";
        } else if (!regexp.test(this.email)) {
          this.validEmail = false;
          this.errorText = 'Email должен содержать знак "@"!';
        } else {
          this.errorText = "Поле не может быть пустым!";
          this.validEmail = true;
        }
      }

      const timer = setTimeout(() => {
        this.validName = true;
        this.validEmail = true;
      }, 3000);
    }
  }
});
