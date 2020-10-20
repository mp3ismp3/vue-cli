<template>
  <div class="twoot-item">
    <div class="user-profile__twoot">
      <div class="twoot-item__user"><p>MSG</p></div>
      <div class="twoot-item__content">
        <p>{{ twoot.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwootItem',
  props: {
    twoot: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.twoot-item {
  padding: 20px;
  background-color: white;
  border: 1px solid #dfe3e8;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  .twoot-item__content {
    text-align: justify;
  }

  &:hover {
    transform: scale(1.1, 1.1);
  }

  .twoot-item__user {
    font-weight: bold;
  }
}
</style>
