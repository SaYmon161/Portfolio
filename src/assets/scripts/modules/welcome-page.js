import Vue from "vue";
import axios from "axios";

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
      user: {
        name: "",
        password: ""
      },
      validLogin: "true",
      validPass: "true",
      errorShow: "false",
      capcha: [false, "notSure"]
    };
  },
  methods: {
    login() {
      axios
        .post("http://webdev-api.loftschool.com/login", this.user)
        .then(response => {
          if (response.status == 200) {
            const ttl = Math.round(Date.now() / 1000 + response.data.ttl);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("ttl", ttl);

            window.location.href = "/admin";
          }
        });
    },
    submit() {
      if (!this.user.name || this.user.name === "") {
        this.validLogin = false;
        this.errorShow = true;
        this.errorText = "Поле не может быть пустым!";
      } else {
        this.errorShow = false;
        this.validLogin = true;
      }

      if (this.validLogin) {
        if (!this.user.password || this.user.password === "") {
          this.validPass = false;
          this.errorShow = true;
          this.errorText = "Поле не может быть пустым!";
        } else {
          this.errorShow = false;
          this.validPass = true;
        }
      }

      if (
        this.validLogin &&
        this.validPass &&
        this.capcha[0] &&
        this.capcha[1] === "yes"
      )
        this.login();

      const timer = setTimeout(() => {
        this.errorShow = false;
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
  data() {
    return {
      activeSide: "sideA"
    };
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
