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
      validLogin: true,
      validPass: true,
      unauthorized: false,
      errorShow: false,
      robotDetected: false,
      capcha: [false, "notSure"]
    };
  },
  created() {
    this.errorShow = false;
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
        })
        .catch(e => {
          if (e.response.status === 401) {
            this.errorShow = true;
            this.unauthorized = true;
            this.errorText = "Неверный логин или пароль!";
            this.clearForm();
            const timer = setTimeout(() => {
              this.errorShow = false;
            }, 3000);
          }
        });
    },
    submit() {
      if (!this.user.name || this.user.name === "") {
        this.validLogin = false;
        this.errorShow = true;
        this.errorText = "Поле не может быть пустым!";
        this.clearForm();
        const timer = setTimeout(() => {
          this.errorShow = false;
        }, 3000);
        return;
      } else {
        this.validLogin = true;
      }

      if (this.validLogin) {
        if (!this.user.password || this.user.password === "") {
          this.validPass = false;
          this.errorText = "Поле не может быть пустым!";
          this.errorShow = true;
          this.clearForm();
          const timer = setTimeout(() => {
            this.errorShow = false;
          }, 3000);
          return;
        } else {
          this.validPass = true;
        }
      }

      if (this.capcha[0] && this.capcha[1] === "yes") {
        this.login();
      } else {
        this.robotDetected = true;
        this.clearForm();
        const timer = setTimeout(() => {
          this.errorShow = false;
        }, 3000);
        return;
      }
    },
    clearForm() {
      this.user.name = "";
      this.user.password = "";
      this.capcha[0] = false;
      this.capcha[1] = "notSure";
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
