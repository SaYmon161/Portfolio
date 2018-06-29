import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const percent = (dashOffset * (100 - this.skillPercent)) / 100;
      const opacity = parseInt(
        getComputedStyle(circle).getPropertyValue("opacity")
      );
      const opacityValue = ((1 - opacity) * this.skillPercent) / 100 + opacity;
      const skillRow = this.$root.$refs["skillList"];
      window.addEventListener("scroll", () => {
        const posTop = skillRow.getBoundingClientRect().top.toFixed(10);
        if (posTop <= 300) {
          circle.style.opacity = opacityValue;
          circle.style.strokeDashoffset = percent;
        }
      });
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill: skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow: skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../data/skills.json");
    this.skills = data;
  },
  template: "#skills-list"
});
