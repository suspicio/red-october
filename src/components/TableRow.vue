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
      min-width: 140px;
    }

    &:nth-child(2) {
      min-width: 200px;
    }

    &:nth-child(3) {
      min-width: 310px;
    }

    &:nth-child(4) {
      min-width: 330px;
    }
  }
}
@media (max-width: 1024px) {
  td {
    font-size: 16px;

    &:nth-child(1) {
      min-width: 110px !important;
    }

    &:nth-child(2) {
      min-width: 180px !important;
    }

    &:nth-child(3) {
      min-width: 300px !important;
    }

    &:nth-child(4) {
      min-width: 300px !important;
    }
  }
}
@media (max-width: 768px) {
  tr {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    td {
      font-size: 15px;

      &:nth-child(1) {
        min-width: 0px;
      }

      &:nth-child(2) {
        min-width: 0px;
      }

      &:nth-child(3) {
        min-width: 0px;
      }

      &:nth-child(4) {
        min-width: 0px;
      }
    }
  }
}
</style>
