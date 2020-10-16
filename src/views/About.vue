<template>
  <div class="about-section">
    <div class="container">
      <div class="about-pic">
        <img src="/img/me.png" />
      </div>
      <div class="about-text">
        <h2>CHENG YEN PING</h2>
        <p>
          Having immersed himself in the footwear industry, he now captures
          imagery for fashion labels and footwear companies throughout various
          settings. Having clients like Adidas, Finish Line, and Reebok, Vince
          feels this is only the beginning of a long journey. Feel free to reach
          out and contact him with any questions or inquires.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-section {
  min-height: 500px;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
      img {
        height: 400px;
        width: 300px;
        align-self: center;
      }
    }
    .about-text {
      flex: 50%;
      text-align: center;
      line-height: 30px;
      min-width: 10%;
      align-self: center;
    }
  }
}

// @media (max-width: 576px) {
//   .container {
//     flex-direction: column;
//   }
// }
</style>
