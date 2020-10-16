<template>
  <form
    class="create-twoot-panel"
    @submit.prevent="createNewTwoot"
    :class="{ '--exceeded': newTwootCharacterCount > 180 }"
  >
    <label for="newTwoot"
      ><strong>MESSAGE</strong>({{ newTwootCharacterCount }}/180)</label
    >
    <textarea
      id="newTwoot"
      rows="4"
      @keyup.enter="createNewTwoot"
      v-model="state.newTwootContent"
    />

    <div class="create-twoot-panel-submit">
      <div class="create-twoot-type">
        <label for="newTwootType"><strong>Type: </strong></label>
        <select id="newTwootType" v-model="state.selectedTwootType">
          <option
            :value="option.value"
            v-for="(option, index) in state.twootTypes"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>

      <button>SUBMIT</button>
    </div>
  </form>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "CreateTwootPanel",
  setup(props, ctx) {
    const state = reactive({
      newTwootContent: "",
      selectedTwootType: "instant",
      twootTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant Twoot" },
      ],
    });

    const newTwootCharacterCount = computed(() => state.newTwootContent.length);

    function createNewTwoot() {
      if (state.newTwootContent && state.selectedTwootType !== "draft") {
        ctx.emit("add-twoot", state.newTwootContent);
        console.log(state.newTwootCharacterCount);
        state.newTwootContent = "";
      }
    }

    return {
      state,
      newTwootCharacterCount,
      createNewTwoot,
    };
  },
};
</script>

<style lang="scss" scoped>
.create-twoot-panel {
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  textarea {
    border: 1px solid #dfe3e8;
    border-radius: 5px;
    outline: none;
  }
  .create-twoot-panel-submit {
    display: flex;
    justify-content: space-between;
    .create-twoot-type {
      padding: 10px 0;
    }

    button {
      padding: 5px 20px;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: #4d595c;
      color: black;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
    }
  }
  &.--exceeded {
    color: red;
    border-color: red;
    .create-twoot-panel-submit {
      button {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>