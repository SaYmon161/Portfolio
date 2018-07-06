import Vue from "vue";

const authBtn = {
  props: {
    activeSide: String
  },
  template: "#auth-btn"
};

const sideA = {
  template: "#side-a"
};

const sideB = {
  template: "#side-b",
  data() {
    return {
      errorText: "Поле не может быть пустым!",
      login: "",
      pass: "",
      validLogin: "true",
      validPass: "true"
    };
  },
  methods: {
    submit() {
      if (!this.login || this.login === "") {
        this.validLogin = false;
        this.errorText = "Поле не может быть пустым!";
      } else {
        this.validLogin = true;
      }

      if (this.validLogin) {
        if (!this.pass || this.pass === "") {
          this.validPass = false;
          this.errorText = "Поле не может быть пустым!";
        } else {
          this.validPass = true;
        }
      }

      const timer = setTimeout(() => {
        this.validLogin = true;
        this.validPass = true;
      }, 3000);
    }
  }
};

new Vue({
  el: "#welcome-page-component",
  components: {
    sideA,
    sideB,
    authBtn
  },
  data: {
    activeSide: "sideA"
  },
  methods: {
    handleSideChange() {
      this.activeSide = this.activeSide === "sideA" ? "sideB" : "sideA";
    },
    outOfForm(e) {
      if (
        e.target.classList.contains("welcome-page") &&
        this.activeSide === "sideB"
      ) {
        this.handleSideChange();
      }
    }
  },
  template: "#welcome-page"
});
