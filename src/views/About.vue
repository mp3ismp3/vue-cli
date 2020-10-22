<template>
  <div class="about-section" @wheel.prevent="trf">
    <div class="container">
      <div class="about-pic">
        <div class="phone-photo">
          <img class="photo" src="/img/me.png" />
        </div>
        <img
          class="trans-0 dn"
          src="/img/me.png"
          @wheel.prevent="trf"
          :style="flyScroll"
        />
        <img
          class="trans-1 dn"
          src="/ping/img1.jpg"
          @wheel.prevent="trf"
          :style="flyScroll1"
        />
        <img
          class="trans-2 dn"
          src="/ping/img2.jpg"
          @wheel.prevent="trf"
          :style="flyScroll2"
        />
        <img class="trans-3 dn" src="/ping/img3.jpg" @wheel.prevent="trf" />
      </div>
      <div class="about-text">
        <h2>CHENG YEN PING</h2>
        <p>
          It’s a pleasure to meet you. My name is Yen Ping Cheng. I graduated
          from TTU University with a Bachelor's degree in Electrical
          Engineering, but I have great passion to work in the Front End Design.
          In the near future, I hope I could be professional and strong, hoping
          join you, l'll make all-out effort .
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  setup() {
    let state = reactive({
      scrollY: 1,
      isActive: false,
    });
    const flyScroll = computed(() => {
      console.log(state.scrollY);
      return {
        transform: `translate3d(0px, ${-state.scrollY}px, 0px)`,
      };
    });
    const flyScroll1 = computed(() => {
      if (state.scrollY > 625) {
        let y = state.scrollY - 625;
        return {
          transform: `translate3d(0px, ${-y}px, 0px)`,
        };
      }
    });
    const flyScroll2 = computed(() => {
      if (state.scrollY > 1250) {
        let y = state.scrollY - 1250;
        return {
          transform: `translate3d(0px, ${-y}px, 0px)`,
        };
      }
    });
    // const flyScroll3 = computed(() => {
    //   if (state.scrollY > 1875) {
    //     let y = state.scrollY - 1875;
    //     return {
    //       transform: `translate3d(0px, ${-y}px, 0px)`,
    //     };
    //   }
    // });

    function trf(evt) {
      // console.log(evt);
      if (state.scrollY + evt.deltaY > 0) {
        state.scrollY += evt.deltaY;
      } else {
        state.scrollY = 0;
      }
    }
    function order() {
      // if (state.scrollY> 625)
    }
    return {
      trf,
      flyScroll,
      flyScroll1,
      flyScroll2,

      order,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-section {
  min-height: 800px;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .container {
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: center;
    min-height: 500px;
    .about-pic {
      flex: 50%;
      display: flex;
      justify-content: center;

      min-width: 10%;
      position: relative;
      img.trans-0 {
        z-index: 5;
      }
      img.trans-1 {
        z-index: 4;
        margin-left: 10px;
        margin-top: -10px;
      }
      img.trans-2 {
        z-index: 3;
        margin-left: -10px;
        margin-top: 10px;
      }
      img.trans-3 {
        z-index: 2;
      }

      img {
        position: absolute;
        left: 0;
        height: 400px;
        width: 300px;
        transition: ease-in;
      }
    }
    .about-text {
      flex: 50%;
      text-align: center;
      line-height: 30px;
      min-width: 10%;
      align-self: center;
      p {
        text-align: justify;
      }
    }
  }
}
@media (max-width: 576px) {
  .about-section {
    justify-content: center;
    .about-pic {
      position: static;
      .phone-photo {
        height: 400px;
        width: 300px;
      }
      .dn {
        display: none;
      }
    }
  }
}
</style>
