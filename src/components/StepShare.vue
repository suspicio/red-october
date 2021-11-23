<template>
  <div class="step__shape">
    <div class="numbered__red-circle">{{ step }}</div>
    <div class="image__wrapper">
      <img :src="require(`../assets/${pathToImg}`)">
    </div>
    <h1>{{ heading }}</h1>
    <p> {{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'StepShare',
  props: {
    step: {
      type: Number,
      default: 1
    },
    pathToImg: {
      type: String,
      default: ''
    },
    heading: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.step__shape {
  position: relative;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 54px;

  h1 {
    font-family: Poiret One;
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    text-align: center;
    color: #BE400B;
  }

  p {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16.2px;
    line-height: 23px;
    text-align: center;
    color: #333333;

  }
}

.numbered__red-circle {
  height: 90px;
  width: 90px;
  background-color: #D02E26;
  text-align: center;
  color: white;
  font-family: Poiret One;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 53px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image__wrapper {
  display: flex;
  align-items: center;
  min-height: 300px;
}
</style>
