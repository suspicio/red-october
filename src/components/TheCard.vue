<template>
  <div class="the__card">
    <div class="card__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCard'
}
</script>

<style lang="scss" scoped>
.the__card {
  background-color: white;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  z-index: 1;

  .card__wrapper {
    padding: 32px;
  }
}
</style>
