<template>
  <div class="wrapper">
    <div class="fly-section">
      <div class="fly-photos" v-for="(photo, index) in imgList" :key="index">
        <div class="fly-photo" :class="photo.trans">
          <img :src="photo.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
export default {
  props: {
    scrollY: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const state = reactive({
      scrollTop: 0,
    });

    const imgList = [
      {
        name: 'photo-1',
        url: 'ping/img1.jpg',
        trans: 'trans-1',
      },
      {
        name: 'photo-2',
        url: 'ping/img2.jpg',
        trans: 'trans-2',
      },
      {
        name: 'photo-3',
        url: 'ping/img3.jpg',
        trans: 'trans-3',
      },
      {
        name: 'photo-4',
        url: 'ping/img4.jpg',
        trans: 'trans-4',
      },
    ];

    onMounted(() => {
      window.addEventListener(
        'scroll',
        () => {
          state.scrollTop =
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            document.querySelector('.element').scrollTop;
        },
        true
      );
    });

    return {
      imgList,
    };
  },
};
</script>

<style lang="scss" scoped>
.fly-section {
  //   overflow: hidden;
  min-height: 800px;
  width: 100%;
  height: 100%;
  position: relative;

  .fly-photo {
    position: absolute;
    transition: linear;
    left: 50%;
    right: 50%;
    img {
      width: 25vw;
    }
  }
  .trans-1 {
    z-index: 1;
  }
  .trans-2 {
    z-index: 2;
  }
  .trans-3 {
    z-index: 3;
  }
  .trans-4 {
    z-index: 4;
  }
}
</style>
