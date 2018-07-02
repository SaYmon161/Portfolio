import Vue from "vue";

const info = {
  template: "#slider__info",
  props: {
    work: Object
  },
  methods: {
    callback(eventName) {
      console.log(eventName);
    },
    skillsAnimate(el, done) {
      const sentence = el.innerText.trim();
      const splitSpan = sentence
        .split("")
        .map(function(item) {
          return `
            <span class="${item === " " ? "whitespace" : ""}">${item}</span>
          `;
        })
        .join("");
      el.innerHTML = splitSpan;

      const words = Array.from(el.children);

      let i = 0;
      function animate(words) {
        const currentLetter = words[i];

        let timer = setTimeout(() => {
          animate(words);
        }, 20);

        currentLetter.classList.add("animated-flip");

        i++;

        if (i >= words.length) {
          clearTimeout(timer);
          done();
        }
      }

      animate(words);
    }
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
