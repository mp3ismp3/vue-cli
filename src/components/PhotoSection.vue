<template>
  <div
    class="photo-section"
    v-for="user in users"
    :key="user.id"
    :style="bgcolor"
  >
    <div class="container">
      <div class="photo-list">
        <a class="photo" :style="bgcss(user.cover)">
          <div class="photo-text" :class="user.name">
            <router-link
              :to="{ name: 'UserProfile', params: { userId: user.id } }"
              :key="user.id"
            >
              <h1>{{ user.itemName }}</h1>
            </router-link>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { users } from '../assets/users';
import { onMounted, reactive, computed } from 'vue';
export default {
  setup() {
    let state = reactive({
      color: '',
      scrollTop: 0,
      isActive: true,
    });
    const bgcolor = computed(() => {
      if (state.scrollTop < 429) {
        state.color = '#f3f5fa';
      } else if (state.scrollTop < 1200) {
        state.color = '#8C9EB1  ';
      } else if (state.scrollTop < 1950) {
        state.color = '#38485A ';
      } else if (state.scrollTop < 2740) {
        state.color = '#D5D51B';
      } else if (state.scrollTop < 3500) {
        state.color = '#71F9FF';
      } else if (state.scrollTop < 4220) {
        state.color = '#FFF700';
      } else {
        state.color = '#E1E1DD ';
      }
      return {
        'background-color': `${state.color}`,
      };
    });
    function bgcss(url) {
      return {
        'background-image': 'url(' + url + ')',
        'background-position': 'center center',
        'background-size': 'cover',
      };
    }
    // function scroll() {
    //   console.log(state.scrollTop);
    //   if (state.scrollTop < 1560) {
    //     state.color = '#A5ADA9';
    //   } else if (state.scrollTop < 2300) {
    //     state.color = '#A99883';
    //   } else if (state.scrollTop < 3050) {
    //     state.color = '#A2A3FF';
    //   } else if (state.scrollTop < 3800) {
    //     state.color = '#71F9FF';
    //   } else if (state.scrollTop < 4555) {
    //     state.color = '#FFBC71';
    //   }
    // }
    onMounted(() => {
      window.addEventListener(
        'scroll',
        () => {
          state.scrollTop =
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            document.querySelector('.element').scrollTop;
          console.log(state.scrollTop);
        },
        true
      );
    });
    return {
      bgcss,
      users,
      bgcolor,
      scroll,
    };
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');
.photo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 750px;
  justify-content: center;
  transition: 0.2s;
  .container {
    .photo {
      height: 500px;
      width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: center;
      .trans-1 {
        color: #3e3d28;
        // transform: translateX(-50vh);
      }
      .trans-2 {
        color: #726ead;
        // margin-left: ;
      }
      .trans-3 {
        color: #b52795;
        // margin-left: ;
      }
      .trans-4 {
        // margin-left: ;
      }
      .trans-5 {
        // margin-left: ;
      }
      .trans-6 {
        // margin-left: ;
        color: #0274d9;
      }
      .photo-text {
        position: absolute;
        text-align: center;
        font-family: 'Bungee Shade', cursive;
        font-size: 30px;
        transition: 0.5s;
        opacity: 1;
        &:hover {
          transform: scale(1.2, 1.1);
        }
        h1 {
          text-transform: uppercase;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .photo {
    transform: scale(0.8);
    .photo-text {
      transform: scale(0.8);
      &:hover {
        transform: scale(1, 1.1);
      }
    }
  }
}
</style>
