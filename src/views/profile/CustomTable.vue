<template>
  <div class="table__wrapper">
    <div v-if="!formattedTableData || formattedTableData.length === 0" class="no__checks">
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
    <div v-else class="table__inner-wrapper">
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
          <th>ID чека</th>
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
            <div v-if="typeof item.date === 'string'">{{ item.date.substr(8, 2)[0] === '0' ? item.date.substr(9, 1) : item.date.substr(8, 2) }} декабря</div>
            <div v-else></div>
          </td>
          <td v-if="!small">
            <div v-if="item.registeredDate !== undefined">{{ item.registeredDate.substr(8, 2)[0] === '0' ? item.registeredDate.substr(9, 1) : item.registeredDate.substr(8, 2) }} декабря</div>
            <div v-else></div>
          </td>
          <td v-if="!small">
            <div>{{ item.actionDate }}</div>
          </td>
          <td>
            <div>
              <StatusButton
                :type="item.isWin ? 'win' : item.status"
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

  created () {
    this.$root.$on('getTableData', this.getTableData)
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
.table__inner-wrapper {
  max-height: 412px;
  overflow: auto;
}

.header__table {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 130%;
    text-transform: uppercase;
    color: #091E16;
  }

  .button__add {
    width: 180px !important;
  }
}

.table__wrapper {
  max-height: 500px;
  min-width: 0;
  width: 100%;

  .no__checks {
    overflow: visible;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 64px auto;
    text-align: center;

    h2 {
      margin: 24px 0 9px 0;
      text-transform: uppercase;
      font-size: 30px;
      line-height: 130%;
    }

    p {
      margin-bottom: 48px;
      font-size: 18px;
      line-height: 130%;
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
  /* width */
  ::-webkit-scrollbar {
    width: 1px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .table__inner-wrapper {
    max-height: 315px;
    overflow: auto;

  }

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
    max-height: 379px;

    .no__checks {
      h2, p {
        font-size: 14px;
        line-height: 130%;
      }

      p {
        margin-bottom: 24px;
      }

      .the__button {
        font-size: 14px;
        line-height: 100%;
        font-weight: 400;
      }
    }
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
