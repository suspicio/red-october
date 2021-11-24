<template>
  <div class="table__wrapper">
    <div v-if="!formattedTableData" class="no__checks">
      <img src="@/assets/no_checks.svg">
      <h2>Зарегистрированных чеков нет</h2>
      <p>Добавляйте чеки, получайте призы</p>
      <TheButton
        :bg-color="'red'"
        :color="'white'"
        :is-long="false"
        :is-rounded="true"
        :text="'ДОБАВИТЬ ЧЕК'"
      ></TheButton>
    </div>
    <div v-else>
      <table>
        <thead>
        <tr>
          <th>Номер чека</th>
          <th>Дата покупки</th>
          <th>Зарегистрирован</th>
          <th>Розыгрыш</th>
          <th>Статус</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in formattedTableData" :key="index">
          <td><div>{{item.checkId}}</div></td>
          <td><div>{{item.date}}</div></td>
          <td><div>{{item.registeredDate}}</div></td>
          <td><div>{{item.actionDate}}</div></td>
          <td><div><StatusButton
            :type="item.status"
          ></StatusButton></div></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton'
import StatusButton from '@/components/StatusButton'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CustomTable',

  components: { StatusButton, TheButton },

  data () {
    return {
      list: null
    }
  },

  mounted () {
    if (this.user) {
      this.getTableData()
    }
  },

  watch: {
    user () {
      if (this.user) {
        this.getTableData()
      }
    }
  },

  computed: {
    ...mapState({
      user: state => state.user
    }),

    formattedTableData () {
      return this.list
    }
  },

  methods: {
    ...mapActions(['getUserChecks']),

    getTableData () {
      this.getUserChecks()
        .then(res => {
          this.list = res
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.table__wrapper {
  max-width: 888px;
  max-height: 500px;

  .no__checks {
    width: fit-content;
    overflow: visible;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 64px 227px;

    h2 {
      width: max-content;
      margin: 24px 0 9px 0;
    }

    p {
      margin-bottom: 48px;
    }
  }
}

table {
  border-collapse: collapse;
  thead {
    border-bottom: 1px solid #091E16;
    tr {
      th {
        font-family: Zen Kaku Gothic New;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 130%;
        text-align: left;
        padding-right: 60px;
        opacity: 0.5;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(9, 30, 22, 0.2);
      }
    }
  }

  tbody {
    tr {
      height: 27px;
      width: fit-content;
      padding-bottom: 25px;
      td {
        div {
          font-family: Zen Kaku Gothic New;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 130%;
          text-align: left;
          color: #091E16;
          display: flex;
          justify-content: left;
          align-items: flex-start;
          padding-top: 10px;
        }
      }
    }
  }
}
</style>
