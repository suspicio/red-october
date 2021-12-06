<template>
  <div class="status__button">
    <div class="common lose" v-if="type === 'error'">
      <p>Чек отклонен</p>
    </div>
    <div class="common win" v-else-if="type === 'win'">
      <p>Победа</p>
    </div>
    <div class="common waiting" v-else>
      <p>Ожидает розыгрыша</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusButton',
  props: {
    type: {
      type: String,
      default: 'waiting'
    }
  }
}
</script>

<style lang="scss" scoped>
.status__button {
  width: 131px;
  margin-bottom: 15px;

  .common {
    width: fit-content;
    height: 30px;
    font-family: Zen Kaku Gothic New;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 130%;
    display: flex;
    align-items: flex-end;
    text-align: center;
    border-radius: 8px;

    p {
      margin: 8px;
    }
  }

  .waiting {
    background-color: #F8E577;
    color: black;
  }

  .win {
    background-color: #E00900;
    color: #FFFFFF;
  }

  .lose {
    background-color: #091E16;
    color: #FFFFFF;
  }
}
</style>
