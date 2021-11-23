<template>
  <tbody>
  <tr v-for="(winner, index) in list" :key="index">
    <td>{{ winner.date }}</td>
    <td>{{ winner.name }}</td>
    <td>{{ winner.email }}</td>
    <td>{{ winner.prize }}</td>
  </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
tr {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #333333;
  margin-bottom: 23px;
  padding-bottom: 18px;

  td {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #333333;

    &:nth-child(1) {
      min-width: 153px;
    }

    &:nth-child(2) {
      min-width: 244px;
    }

    &:nth-child(3) {
      min-width: 334px;
    }

    &:nth-child(4) {
      min-width: 348px;
    }
  }
}
</style>
