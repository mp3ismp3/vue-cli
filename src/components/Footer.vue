<template>
  <div class="footer-section">
    <div class="social-media-container">
      <h1 class="brand">PING PING</h1>
      <div class="icon-container">
        <p>FOLLOW US</p>
        <a
          href="https://www.facebook.com/profile.php?id=100007045383519"
          target="_blank"
          ><img src="/img/facebook-brands.svg" width="30" height="30"
        /></a>
        <a href="https://www.instagram.com/mp3ismp3/" target="_blank"
          ><img src="/img/instagram-brands.svg" width="30" height="30"
        /></a>
        <a href="https://twitter.com/home?lang=zh-tw" target="_blank"
          ><img src="/img/twitter-brands.svg" width="30" height="30"
        /></a>
        <a
          href="https://github.com/mp3ismp3/vue3-composition-api"
          target="_blank"
          ><img src="/img/github-brands.svg" width="30" height="30"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.footer-section {
  background-color: #fff;
  min-height: 200px;
  width: 100%;
  padding-top: 5%;
  .social-media-container {
    text-align: center;
    .brand {
      width: 100%;
      font-weight: bold;
      font-size: 30px;
      font-family: "Satisfy", cursive;
    }
    .icon-container {
      img {
        margin-right: 30px;
      }
    }
  }
}
</style>