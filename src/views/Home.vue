<template>
  <div>
    <div class="header-section">
      <div class="float-section">
        <FloatSection />
        <div class="wrapper">
          <div class="container">
            <div class="header-inner">
              <div class="brand">PINGPING</div>
              <p>PROTOFOLILS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="photo-overlay" :class="{ nonOverlay: state.scrollTop > 56 }"> -->
    <PhotoSection />
    <!-- </div> -->
  </div>
</template>

<script scss scopes>
import FloatSection from '../components/FloatSection';
import PhotoSection from '../components/PhotoSection';
import { users } from '../assets/users';
import { onMounted, reactive } from 'vue';
export default {
  components: { PhotoSection, FloatSection },
  name: 'Home',
  setup() {
    let state = reactive({
      scrollTop: 0,
      isActive: true,
    });
    // @wheel.event 用transition 變換Ｙ軸
    // const flyScroll = computed(() => {
    //   return {
    //     transform: `translate3d(0px, ${-state.scrollY}px, 0px)`,
    //   };
    // });

    // function trf(evt) {
    //   console.log(evt);
    //   if (state.scrollY + evt.deltaY > 0) {
    //     state.scrollY += evt.deltaY * 0.9;
    //   } else {
    //     state.scrollY = 0;
    //   }
    // }
    function bgcss(url) {
      return {
        'background-image': 'url(' + url + ')',
        'background-position': 'center center',
        'background-size': 'cover',
      };
    }
    onMounted(() => {
      window.addEventListener(
        'scroll',
        () => {
          state.scrollTop =
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            document.querySelector('.element').scrollTop;
          // console.log(state.scrollTop);
        },
        true
      );
    });
    return {
      users,
      bgcss,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-section {
  position: relative;
  .wrapper {
    background-color: #f3f5fa;
    min-height: 700px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    .container {
      width: 100%;
      align-self: center;
      .header-inner {
        margin-right: 60px;
        margin-left: 60px;
        align-self: center;
        position: relative;
        pointer-events: none;
        .brand {
          font-family: solano-gothic-pro-mvb, sans-serif;
          font-size: 16vw;
          line-height: 0.9;
          text-transform: uppercase;
          display: flex;
          justify-content: center;
          z-index: 2;
        }
        p {
          display: flex;
          justify-content: center;

          z-index: 2;
        }
      }
    }
  }
}
.photo-overlay {
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 1;
}
.nonOverlay {
  z-index: -1;
  transition: 5s;

  background-color: transparent;
}
@media (max-width: 576px) {
  .container {
    transform: scale(0.8);
  }
}
</style>
