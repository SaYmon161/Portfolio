<template lang="pug">
  header.header
    .container
      .header__content
        .header__title Панель администрирования
        a.header__link(href="/index.html") Вернуться на сайт
</template>

<style lang="scss">
.header {
  height: 80px;
  width: 100%;
  background-color: #6c9c5a;
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.header__title {
  color: #ffffff;
  font-weight: 500;
  font-size: 28px;
}

.header__link {
  color: #dae4d7;
  text-decoration: underline;
  font-weight: 500;
  &:hover {
    text-decoration: none;
    color: #ffffff6c;
  }
}
</style>
