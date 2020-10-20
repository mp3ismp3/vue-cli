<template>
  <div class="photo-section" v-for="user in users" :key="user.id">
    <div class="container">
      <div class="photo-list">
        <a class="photo" :style="bgcss(user.cover)">
          <div class="photo-text">
            <router-link
              :to="{ name: 'UserProfile', params: { userId: user.id } }"
              :key="user.id"
            >
              <h1>{{ user.username }}</h1>
            </router-link>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { users } from '../assets/users';
// import { onMounted } from 'vue';
export default {
  // props: {
  //   scrollTop: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  setup() {
    function bgcss(url) {
      return {
        'background-image': 'url(' + url + ')',
        'background-position': 'center center',
        'background-size': 'cover',
      };
    }

    return {
      bgcss,
      users,
    };
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
.photo-section {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
  justify-content: center;
  .container {
    .photo {
      height: 500px;
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .photo-text {
        position: absolute;
        text-align: center;
        flex-direction: column;
        color: rosybrown;
        font-size: 30px;
        justify-content: center;
        transition: 0.5s;
        opacity: 0.6;
        &:hover {
          opacity: 1;
          color: #a6eac5;
          transform: scale(1.2, 1.1);
        }
        h1 {
          text-transform: uppercase;
          font-family: 'Monoton', cursive;
          justify-content: center;
          transform: translateX(-25%);
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
