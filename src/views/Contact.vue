<template>
  <div class="contact-section">
    <div class="container">
      <div class="contact-text">
        <h1>GET IN TOUCH</h1>
        <p>
          Enter your message in the form to send a message, or follow PingPing
          on social:
        </p>
      </div>
      <div class="contact-form">
        <TwootItem v-for="twoot in state.msg" :key="twoot.id" :twoot="twoot" />
        <CreateTwootPanel @add-twoot="addTwoot" />
      </div>
    </div>
  </div>
</template>

<script>
import TwootItem from '../components/TwootItem';
import CreateTwootPanel from '../components/CreateTwootPanel';
import { message } from '../assets/message';
import { reactive } from 'vue';
export default {
  components: { TwootItem, CreateTwootPanel },
  name: 'Contact',
  setup() {
    const state = reactive({
      msg: message,
    });
    function addTwoot(twoot) {
      state.msg.unshift({
        id: state.msg.length + 1,
        content: twoot,
      });
    }
    return {
      addTwoot,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-section {
  min-height: 700px;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    .contact-text {
      flex: 50%;
      text-align: center;
      font-size: 20px;
      margin-left: 10%;
      margin-right: 10%;
    }
    .contact-form {
      flex: 50%;
      text-align: center;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
}
</style>
