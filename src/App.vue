<template>
  <div id="app">
    <PhoneNav class="phone_nav" />
    <div class="nav" :class="{ shrink: showNav }">
      <nav class="nav1" @wheel.prevent="event">
        <div class="left">
          <router-link to="/">SHOP</router-link>
        </div>
        <div class="mid">
          <router-link to="/">PINGPING</router-link>
        </div>
        <div class="right">
          <router-link to="/about">ABOUT</router-link>
          <router-link to="/contact">CONTACT</router-link>
        </div>
      </nav>
      <nav class="nav2">
        <div class="botton" @click="showNav = !showNav">
          <img src="/img/arrow.svg" width="50" height="50" />
        </div>
      </nav>
      <router-view v-slot="slotProps" :key="key">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import PhoneNav from './components/PhoneNav';
import Footer from './components/Footer';
// import { useStore } from "vuex";
import { reactive, ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
  components: { PhoneNav, Footer },
  name: 'App',
  setup() {
    const route = useRoute();
    const path = computed(() => route.fullPath);

    // const store = useStore();
    // const user = computed(() => store.state.User.user);
    const showNav = ref(false);
    const state = reactive({ path, route });

    // window.route = useRoute();
    // window.router = useRouter();

    watch(
      () => state.path,
      () => {
        console.log(route.name);
        showNav.value = false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    );

    return {
      showNav,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;
  .phone_nav {
    position: relative;
  }
  .nav {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #f3f5fa;
    overflow: hidden;

    .nav1 {
      width: 100%;
      justify-content: center;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(9, 2fr);
      height: 80px;
      background-color: transparent;
      font-weight: bold;
      position: fixed;
      padding-right: 5%;
      box-sizing: border-box;
      z-index: 100;
      .left {
        grid-column: 2 / 3;
      }
      .mid {
        grid-column: 5 / 6;
      }
      .right {
        grid-column: 8 / 10;
      }
    }
    .nav2 {
      z-index: 100;

      .botton {
        display: inline-block;
      }
    }
  }
  .shrink {
    transition: 0.5s;
    transform: translateY(200px);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 -15px 10px rgba(black, 0.2);
  }
  .route-enter-from,
  .route-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  .route-enter-active,
  .route-leave-active {
    transition: all 0.3s ease;
  }
  .route-enter-to,
  .route-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  @media (min-width: 576px) {
    .nav2 {
      visibility: hidden;
    }
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }
  @media (max-width: 576px) {
    .nav1 {
      visibility: hidden;
    }
  }
}
</style>
