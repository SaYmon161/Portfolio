import Vue from "vue";

const info = {
  template: "#slider__info",
  props: {
    work: Object
  }
};

const display = {
  template: "#slider__display",
  props: {
    work: Object
  }
};

const buttons = {
  template: "#slider__buttons",
  props: {
    works: Array,
    currentSlide: Number
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    },
    getSlide(direction) {
      let worksArray = [...this.works];
      switch (direction) {
        case "prev":
          const lastSlide = this.works[this.works.length - 1];
          worksArray.unshift(lastSlide);
          worksArray.pop();
          break;
        case "next":
          worksArray.push(worksArray[0]);
          worksArray.shift();
          break;
      }
      return worksArray[this.currentSlide];
    }
  }
};

new Vue({
  el: "#slider-component",
  components: {
    info,
    display,
    buttons
  },
  data: {
    works: [],
    currentWork: {},
    currentSlide: 0
  },
  created() {
    this.works = require("../../../data/works.json");
    this.currentWork = this.works[0];
  },
  methods: {
    handleSlide(direction) {
      this.currentSlide =
        direction === "next" ? ++this.currentSlide : --this.currentSlide;
      if (this.currentSlide > this.works.length - 1) {
        this.currentSlide = 0;
      } else if (this.currentSlide < 0) {
        this.currentSlide = this.works.length - 1;
      }
      this.currentWork = this.works[this.currentSlide];
      console.log(this.currentSlide);
    }
  },
  template: "#slider"
});
