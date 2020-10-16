<template>
  <div class="navigation">
    <ul>
      <li><router-link to="/">PING</router-link></li>
      <li><router-link to="/about">about</router-link></li>
      <li><router-link to="/contact">contact</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: dimgray;
  padding: 16px;
  box-sizing: border-box;
  ul {
    list-style: none;
    li {
      margin-bottom: 16px;
      text-transform: uppercase;
    }
    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      &:hover,
      &.router-link-exact-active {
        text-decoration: underline;
      }
    }
  }
}
</style>