<template lang="pug">
  nav.nav
    ul.nav__list
      li.nav__item(v-for="tab in tabs")
        router-link(
          :to="tab.href"
          tag="a"
        ).nav__link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Блог", href: "/blog" }
      ]
    };
  }
};
</script>


<style lang="scss">
.nav {
  width: 100%;
  height: 60px;
  background-color: #f0efe9;
}

.nav__list {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav__item {
  width: 180px;
  height: 100%;
  border-right: 3px solid white;
  &--active {
    background-color: #fff;
    & .nav__link {
      color: #6c9c5a;
      cursor: default;
      &:hover {
        color: #6c9c5a;
      }
    }
  }
}

.nav__link {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #7e867d;
  &:hover {
    color: #a5afa3;
  }
}
</style>
