<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">
        twooter
        </div>
      </router-link>

      <div class="navigation__user">
        {{ user.username}}
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',

  data() {
    return {
      user: {
        username: '_YengPingCheng'
      }
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: #FBFE37;
    color: black;
    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }
  }
}

</style>
