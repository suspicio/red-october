<template>
  <div :class="{big__input: big, 'no-margin': noMargin}" class="the__input">
    <textarea-autosize
      v-if="isTextarea"
      :value="copyValue"
      :rows="textareaRows"
      :max-rows="textareaRows > textareaMaxRows ? textareaRows : textareaMaxRows"
      :placeholder="text"
      @input="onInput"
    />
    <input v-else-if="isPhone" v-maska="'+7 (###) ###-##-##'" :placeholder="text" :type="type" :value="copyValue"
           @input="onInput">
    <input v-else :placeholder="text" :type="type" :value="copyValue" @input="onInput">
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
    },
    big: {
      type: Boolean,
      default: false
    },
    isPhone: {
      type: Boolean,
      default: false
    },
    isTextarea: {
      type: Boolean,
      default: false
    },
    textareaRows: {
      type: Number,
      default: 3
    },
    textareaMaxRows: {
      type: Number,
      default: 3
    },
    maxCharacters: {
      type: Number,
      default: null
    },
    noMargin: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      copyValue: ''
    }
  },

  created () {
    if (this.isPhone) {
      this.copyValue = ' ' + this.value
    }
  },

  methods: {
    onInput (e) {
      if (this.isTextarea) {
        this.$emit('input', this.maxCharacters ? e.slice(0, this.maxCharacters) : e)
        this.copyValue = this.maxCharacters ? e.slice(0, this.maxCharacters) : e
      } else {
        this.$emit('input', e.target.value)
        this.copyValue = e.target.value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.big__input {
  input {
    height: 100px !important;

    &::placeholder {
      position: absolute;
      top: 5px;
    }
  }
}

.the__input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input, textarea {
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
      color: rgba(255, 255, 255, .5);
    }
  }

  textarea {
    padding: 14px 16px;
  }

  &.no-margin {
    input {
      margin: 0 !important;
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
