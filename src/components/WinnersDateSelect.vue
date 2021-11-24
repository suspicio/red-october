<template>
  <div class="winners__date-select" :class="{active: myKey === activeKey}" @click="$emit('select')">
    <h1>{{ date }}</h1>
    <p>{{ subDate }}</p>
  </div>
</template>

<script>
export default {
  name: 'WinnersDateSelect',
  props: {
    date: {
      type: String,
      default: '7 сентебря'
    },
    subDate: {
      type: String,
      default: 'чеки с 1 по 6 сентября'
    },
    myKey: {
      type: Number,
      default: 0
    },
    activeKey: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  background-color: #D12E27 !important;

  h1 {
    color: white !important;
  }

  p {
    color: white !important;
  }
}

.winners__date-select {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 207px;
  height: 79px;
  border-radius: 100px;
  background-color: #F8E577;
  margin: 0 5px;

  h1 {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    padding-bottom: 10px;
    margin-top: -5px;
    color: #D02E26;
  }

  p {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 130%;
    text-align: center;
    color: #091E16;
  }
}

@media (max-width: 768px) {
  .winners__date-select {
    width: 121px;
    height: 45px;

    h1 {
      font-size: 12px;
      padding-bottom: 0;
    }

    p {
      font-size: 10px;
    }
  }
}
</style>
