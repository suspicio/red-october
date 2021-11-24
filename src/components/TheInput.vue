<template>
  <div class="the__input">
    <input :placeholder="text" :value="value" :type="type" @input="onInput">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TheInput',
  props: {
    text: {
      type: String,
      default: ''
    },
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.the__input {
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    height: 50px;
    margin: 8px 0;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 0;
    padding-left: 16px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 130%;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    outline: none;

    &::placeholder {
      color: rgba(255,255,255,.5);
    }
  }
}

@media (max-width: 768px) {
  .the__input {
    input {
      height: 40px;
      margin: 4px 0;
      font-size: 14px;
    }
  }
}
</style>
