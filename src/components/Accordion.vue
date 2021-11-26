<template>
  <div
    ref="accordion"
    :class="{ 'g-accordion--active': !collapsed }"
    class="g-accordion"
    @click="collapse"
  >
    <div
      ref="top"
      class="g-accordion__top"
      @click="onToggle"
    >
      <span class="g-accordion__title">{{ title }}</span>
      <div class="g-accordion__toggle-icon"/>
    </div>
    <div ref="content" class="g-accordion__content">
      <template v-if="!text">
        <slot/>
      </template>
      <template v-else>
        {{ text }}
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',

  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    contentMaxHeight: {
      type: Number,
      default: null
    }
  },

  data () {
    return {
      collapsed: true
    }
  },

  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()

    this.$watch(vm => [
      vm.title,
      vm.text,
      vm.collapsed
    ], () => {
      this.onResize()
    })
  },

  methods: {
    collapse () {
      this.collapsed = !this.collapsed
    },

    onToggle () {
      this.$emit('toggle')
    },

    onResize () {
      if (this.collapsed) {
        this.$refs.accordion.style.height = `${this.$refs.top.offsetHeight}px`
      } else {
        if (this.contentMaxHeight) {
          this.$refs.content.style.maxHeight = `${this.contentMaxHeight}px`
        }
        this.$refs.accordion.style.height =
          `${(
            (
              this.contentMaxHeight && this.contentMaxHeight < this.$refs.content.scrollHeight
                ? this.contentMaxHeight
                : false
            ) || this.$refs.content.scrollHeight) + this.$refs.top.offsetHeight}px`
      }
    }
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style lang="scss">
@import '../assets/styles/accordion';
</style>
