<template>
  <div
    id="elem-container"
    @mousemove.capture="coordinate"
    class="float-section"
  >
    <div
      class="intro-pos"
      :class="item.name"
      :key="index"
      v-for="(item, index) in imgList"
    >
      <div
        class="photo"
        :class="item.trans"
        :style="{
          transform: `translate3d(${state.mouthX}px, ${state.mouthY}px, 0px)`,
        }"
      >
        <img :src="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      mouthX: 0,
      mouthY: 0,
    });
    function coordinate(evt) {
      let elem = document.getElementById('elem-container');
      let height = window.getComputedStyle(elem, null).height;
      let width = window.getComputedStyle(elem, null).width;
      state.mouthX = (parseInt(evt.clientX) - parseInt(width) / 2) / 5.5;
      state.mouthY = (parseInt(evt.clientY) - parseInt(height) / 2) / 5.5;
    }

    const imgList = [
      {
        name: 'photo-1',
        url: 'zijie/img1.jpg',
        trans: 'trans-1',
      },
      {
        name: 'photo-2',
        url: 'zijie/img2.jpg',
      },
      {
        name: 'photo-3',
        url: 'zijie/img3.jpg',
      },
      {
        name: 'photo-4',
        url: 'zijie/img4.jpg',
      },
      {
        name: 'photo-5',
        url: 'zijie/img5.jpg',
      },
      {
        name: 'photo-6',
        trans: 'trans-6',
        url: 'zijie/img6.jpg',
      },
      {
        name: 'photo-7',
        url: 'zijie/img7.jpg',
      },
      {
        name: 'photo-8',
        url: 'zijie/img8.jpg',
      },
      {
        name: 'photo-9',
        trans: 'trans-9',
        url: 'zijie/img9.jpg',
      },
      {
        name: 'photo-10',
        trans: 'trans-10',
        url: 'zijie/img10.gif',
      },
      {
        name: 'photo-11',
        trans: 'trans-11',
        url: 'zijie/img11.gif',
      },
    ];
    onMounted(() => {
      coordinate;
    });

    return {
      imgList,
      state,
      coordinate,
    };
  },
};
</script>

<style lang="scss" scoped>
.float-section {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .intro-pos {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .photo {
      z-index: 1;
      display: flex;
      justify-content: center;
      position: relative;
      transition: 0.2s ease-out;
      img {
        width: 10vw;
      }
    }
    .trans-1 {
      transition-duration: 0.1s;
    }
    .trans-6 {
      transition-duration: 0.2s;
    }
    .trans-9 {
      transition-duration: 0.3s;
    }
    .trans-10 {
      transition-duration: 0.4s;
    }
    .trans-11 {
      transition-duration: 0.5s;
    }
  }
  .photo-1 {
    margin-top: -40vh;
    margin-left: 10vh;
  }
  .photo-2 {
    margin-top: 50vh;
    margin-left: 60vh;
  }
  .photo-3 {
    margin-top: 20vh;
    margin-left: -30vh;
  }
  .photo-4 {
    margin-top: -40vh;
    margin-left: 70vh;
  }
  .photo-5 {
    margin-top: -40vh;
    margin-left: -60vh;
  }
  .photo-6 {
    margin-top: -50vh;
    margin-left: 40vh;
  }
  .photo-7 {
    margin-top: -10vh;
    margin-left: -15vh;
    transition-delay: 1s;
  }
  .photo-8 {
    margin-top: 0vh;
    margin-left: 70vh;
  }
  .photo-9 {
    margin-top: 30vh;
    margin-left: 30vh;
  }
  .photo-10 {
    margin-top: 20vh;
    margin-left: -80vh;
  }
  .photo-11 {
    margin-top: -10vh;
    margin-left: 15vh;
    img {
      width: 150px;
    }
  }
}
</style>
