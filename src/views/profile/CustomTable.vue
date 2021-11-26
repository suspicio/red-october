<template>
  <div class="table__wrapper">
    <div v-if="!formattedTableData" class="no__checks">
      <img src="@/assets/no_checks.svg">
      <h2>Зарегистрированных чеков нет</h2>
      <p>Добавляйте чеки, получайте призы</p>
      <TheButton
        :bg-color="'red'"
        :color="'white'"
        :event="activate"
        :is-long="false"
        :is-rounded="true"
        :text="'ДОБАВИТЬ ЧЕК'"
      ></TheButton>
    </div>
    <div v-else>
      <div class="header__table">
        <h1>
          ЗАРЕГИСТРИРОВАННЫЕ ЧЕКИ
        </h1>
        <TheButton
          :bg-color="'#B8140D'"
          :color="'#FFFFFF'"
          :event="activate"
          :is-big="false"
          :is-long="true"
          :is-rounded="true"
          :text="'ДОБАВИТЬ ЧЕК'"
          class="button__add"
        >
        </TheButton>
      </div>
      <table>
        <thead>
        <tr>
          <th>Номер чека</th>
          <th v-if="!small">Дата покупки</th>
          <th v-if="!small">Зарегистрирован</th>
          <th v-if="!small">Розыгрыш</th>
          <th>Статус</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in formattedTableData" :key="index">
          <td>
            <div>{{ item.checkId }}</div>
          </td>
          <td v-if="!small">
            <div>{{ item.date }}</div>
          </td>
          <td v-if="!small">
            <div>{{ item.registeredDate.substring(0, 10) }}</div>
          </td>
          <td v-if="!small">
            <div>{{ item.actionDate }}</div>
          </td>
          <td>
            <div>
              <StatusButton
                :type="item.status"
              ></StatusButton>
            </div>
          </td>
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

  components: {
    StatusButton,
    TheButton
  },

  data () {
    return {
      list: null,
      small: false
    }
  },

  mounted () {
    window.addEventListener('resize', this.onResize, true)
    this.small = window.innerWidth <= 1000
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
    },

    onResize () {
      this.small = window.innerWidth <= 1000
    },

    activate () {
      this.$emit('activate')
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize, true)
  }
}
</script>

<style lang="scss" scoped>
.header__table {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    font-family: Zen Kaku Gothic New;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 130%;
    text-transform: uppercase;
    color: #091E16;
  }

  .button__add {
    width: 180px;
  }
}

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

@media (max-width: 768px) {
  .header__table {
    flex-direction: column;

    h1 {
      font-size: 14px;
      margin-bottom: 14px;
    }

    .button__add {
      width: 255px;
      justify-content: center;
    }
  }
}

@media (max-width: 530px) {
  .table__wrapper {
    max-width: 230px;
    max-height: 379px;
  }

  th {
    font-size: 14px;
    padding-right: 30px !important;
  }

  td {
    div {
      font-size: 14px;
    }
  }

  .button__add {
    width: 218px !important;
  }
}
</style>
