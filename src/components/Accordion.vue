<template>
  <div
    ref="accordion"
    :class="{ 'g-accordion--active': !collapsed }"
    class="g-accordion"
  >
    <div
      ref="top"
      class="g-accordion__top"
      @click="collapse"
    >
      <span class="g-accordion__title">{{ title }}</span>
      <div class="g-accordion__toggle-icon"/>
    </div>
    <div ref="content" class="g-accordion__content">
      <template v-for="(elem, index) in text">
        <div v-html="elem" :key="index"></div>
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
      type: Array,
      default: () => []
    },
    urls: {
      type: Array,
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

    onResize () {
      if (this.collapsed) {
        this.$refs.accordion.style.height = `${this.$refs.top.offsetHeight}px`
      } else {
        this.$refs.accordion.style.height =
          `${(this.$refs.content.scrollHeight) + this.$refs.top.offsetHeight}px`
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
