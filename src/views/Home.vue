<template>
  <div class="header-section">
    <div class="container">
      <div class="header-inner">
        <h1>PINGjPING</h1>
        <p>PROTOFOLILS</p>
      </div>
    </div>
  </div>
  <PhotoSection />
</template>

<script scss scopes>
import PhotoSection from "../components/PhotoSection";
import { users } from "../assets/users";
export default {
  components: { PhotoSection },
  name: "Home",
  setup() {
    function bgcss(url) {
      return {
        "background-image": "url(" + url + ")",
        "background-position": "center center",
        "background-size": "cover",
      };
    }
    return {
      users,
      bgcss,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-section {
  background-color: #f3f5fa;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
  width: 100vw;
  height: 100vh;
  .container {
    width: 100%;
    .header-inner {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      min-height: 400px;
      margin-right: 60px;
      margin-left: 60px;
      h1 {
        margin-top: 0px;
        margin-bottom: 20px;
        font-family: solano-gothic-pro-mvb, sans-serif;
        font-size: 16vw;
        line-height: 0.9;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
      }
      p {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
