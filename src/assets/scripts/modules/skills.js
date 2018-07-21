import Vue from "vue";
import axios from "axios";

const skill = {
  template: "#skill",
  props: {
    skill: {}
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const percent = (dashOffset * (100 - this.skill.percents)) / 100;
      const opacity = parseInt(
        getComputedStyle(circle).getPropertyValue("opacity")
      );
      const opacityValue =
        ((1 - opacity) * this.skill.percents) / 100 + opacity;
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
    skills: Array,
    type: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow: skillsRow
  },
  data: {
    skills: [],
    types: [
      { id: 0, name: "Frontend" },
      { id: 1, name: "Backend" },
      { id: 2, name: "Workflow" }
    ]
  },
  created() {
    axios.get("http://webdev-api.loftschool.com/skills/16").then(response => {
      this.skills = response.data;
    });
  },
  template: "#skills-list"
});
