<template>
  <div class="about-section">
    <div class="container">
      <div class="about-pic">
        <img src="/img/me.png" />
      </div>
      <div class="about-text">
        <h2>CHENG YEN PING</h2>
        <p>
          It’s a pleasure to meet you. My name is Yen Ping Cheng.I graduated
          from TTU University with a Bachelor's degree in Electrical
          Engineering,but I have great passion to work in the Front End
          Design.In the near future, I hope I could be professional and strong
          ,hopeing join you ,l'll make all-out effort .
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
@media (max-width: 576px) {
  .about-section {
    margin-top: 20%;
  }
}
</style>
