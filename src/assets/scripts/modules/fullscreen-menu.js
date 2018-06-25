import Vue from "vue";

new Vue({
  el: "#fullscreen-menu",
  data: {
    changed: false
  },
  methods: {
    openMenu() {
      this.changed = !this.changed;
    }
  }
});
