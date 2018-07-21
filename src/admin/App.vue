<template lang="pug">
  .wrapper
    router-view(name="header")
    router-view(name="tabs")
    .maincontent
      .container
        router-view
</template>



<script>
import headerComponent from "./components/header";
import tabs from "./components/tabs";
import about from "./components/about";
import blog from "./components/blog";

export default {
  components: {
    about,
    headerComponent,
    tabs,
    blog
  },
  data() {
    return {
      skills: []
    };
  }
};
</script>



<style lang="scss">
@import "normalize.css";

body,
html {
  height: 100%;
}

@media screen and (max-width: 320px) {
  body {
    width: 320px;
  }
}

body {
  font-family: "roboto", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  color: $text-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  overflow: hidden;
  height: 100%;
  position: relative;
  background: url("../assets/images/header/water-1920.jpg") center no-repeat /
    cover;
}

.container {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  position: relative;
}

.maincontent {
  background-color: rgba(white, 0.7);
  width: 100%;
  height: 100%;
}

button {
  border: 0;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
