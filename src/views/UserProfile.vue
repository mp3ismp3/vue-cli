<template>
  <div class="item-main-profile">
    <div class="item-wrapper">
      <div
        class="item-pic"
        v-html="img(state.user.connect, state.user.cover)"
      ></div>
      <div class="item-text">
        <h1>{{ state.user.itemName }}</h1>
        <p>{{ state.user.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '../assets/users';

export default {
  name: 'UserProfile',

  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    const state = reactive({
      user: users[userId.value - 1] || users[0],
    });

    function img(url, pic) {
      return `<a href="${url}" target="_blank" ><img src="${pic}" height="350" width="300" /></a>`;
    }

    return {
      state,
      userId,
      img,
    };
  },
};
</script>

<style lang="scss" scoped>
.item-main-profile {
  min-height: 700px;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .item-wrapper {
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    justify-content: center;
    width: 100%;

    .item-pic {
      flex: 50%;
      text-align: center;
    }
    .item-text {
      align-self: center;
      flex: 50%;
      text-align: center;
    }
  }
}
@media (max-width: 576px) {
  .item-main-profile {
    justify-content: center;
    .item-wrapper {
      transform: scale(0.7);
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
}
</style>
