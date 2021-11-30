<template>
  <div v-if="user" class="profile__page">
    <TheHeader
      :is-bg-red="true"
    ></TheHeader>
    <win-prize v-if="isWinPrizeVisible" @activate="isWinPrizeVisible = false" @enter="onWinPrizeEnter" />
    <CheckRegistrationOptions v-if="isActiveCheckRegOpt" @activate="activateCheckRegOpt"
                              @manual="activateManualCheck"></CheckRegistrationOptions>
    <ManualCheckEnter v-if="isActiveManualCheck" @activate="activateManualCheck"></ManualCheckEnter>
    <PersonalData v-if="isActivePersonalData" @activate="activatePersonalData"></PersonalData>
    <div class="g-container w-100">
      <div class="wrapper">
        <div class="left__side">
          <TheCard class="mb">
            <div v-if="!editMode" class="profile__info">
              <div class="profile__info-wrapper">
                <div class="image__small-wrapper">
                  <div class="g-profile__picture">
                    {{user.firstName.toString().toUpperCase().substr(0, 1)}}{{user.lastName.toString().toUpperCase().substr(0, 1)}}
                  </div>
                  <p v-if="small">{{ user.firstName }}<br/>{{ user.lastName }}</p>
                </div>
                <div class="text__block">
                  <p v-if="!small">{{ user.firstName }} {{ user.lastName }}</p>
                  <p v-if="user.email">{{ user.email }}</p>
                  <p v-if="user.phone">+7 {{ russianNoPrefix(user.phone) }}</p>
                </div>
              </div>
              <div class="edit__button" @click="switchEdit">
                <svg fill="none" height="28" viewBox="0 0 24 28" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.552 19.3333L18.0747 5.81062L16.1893 3.92528L2.66667 17.448V19.3333H4.552ZM5.95023 21.7071C5.76269 21.8946 5.50834 22 5.24312 22H1C0.447715 22 0 21.5522 0 21V16.7568C0 16.4916 0.105357 16.2373 0.292893 16.0497L15.2467 1.09595C15.4967 0.845987 15.8358 0.705566 16.1893 0.705566C16.5429 0.705566 16.882 0.845987 17.132 1.09595L20.904 4.86795C21.154 5.11799 21.2944 5.45706 21.2944 5.81062C21.2944 6.16417 21.154 6.50325 20.904 6.75328L5.95023 21.7071ZM0 26C0 25.2636 0.596954 24.6666 1.33333 24.6666H22.6667C23.403 24.6666 24 25.2636 24 26C24 26.7363 23.403 27.3333 22.6667 27.3333H1.33333C0.596954 27.3333 0 26.7363 0 26Z"
                    fill="#091E16"/>
                </svg>
              </div>
            </div>
            <div v-else class="profile__edit">
              <div class="profile__info-wrapper">
                <div class="g-profile__picture">
                  {{user.firstName.toString().toUpperCase().substr(0, 1)}}{{user.lastName.toString().toUpperCase().substr(0, 1)}}
                </div>
                <div class="text__block2">
                  <div class="the__input">
                    <input v-model="firstName" placeholder="Имя">
                  </div>
                  <div class="the__input">
                    <input v-model="lastName" placeholder="Фамилия">
                  </div>
                  <div class="the__input">
                    <input v-model="email" placeholder="Почта">
                  </div>
                  <div class="save__cancel">
                    <TheButton
                      :bg-color="'red'"
                      :color="'white'"
                      :event="updateUserProfile"
                      :is-big="small"
                      :is-long="true"
                      :is-rounded="true"
                      :text="'СОХРАНИТЬ'"
                      class="szsm"
                    >
                    </TheButton>
                    <p @click="switchEdit">Отмена</p>
                  </div>
                </div>
              </div>
            </div>
          </TheCard>
          <TheCard v-if="isWin">
            <PrizeBox @activate="activatePersonalData"></PrizeBox>
          </TheCard>
        </div>
        <div class="right__side">
          <TheCard :style="{padding: small ? '-16px' : '0'}">
            <CustomTable @activate="activateCheckRegOpt"></CustomTable>
          </TheCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheCard from '@/components/TheCard'
import TheButton from '@/components/TheButton'
import CustomTable from '@/views/profile/CustomTable'
import { mapActions, mapGetters, mapState } from 'vuex'
import { russianNoPrefix } from '@/utils/formattedPhoneNumbers'
import PrizeBox from '@/components/PrizeBox'
import CheckRegistrationOptions from '@/views/CheckRegister/CheckRegistrationOptions'
import ManualCheckEnter from '@/views/CheckRegister/ManualCheckEnter'
import PersonalData from '@/views/profile/PersonalData'
import WinPrize from '@/components/WinPrize'

export default {
  name: 'Profile',
  components: {
    WinPrize,
    PersonalData,
    CheckRegistrationOptions,
    ManualCheckEnter,
    PrizeBox,
    CustomTable,
    TheButton,
    TheCard,
    TheHeader
  },

  data () {
    return {
      isWinPrizeVisible: false,
      editMode: false,
      small: false,
      isActiveManualCheck: false,
      isActiveCheckRegOpt: false,
      isActivePersonalData: false,
      firstName: this.user?.firstName || '',
      lastName: this.user?.lastName || '',
      email: this.user?.email || ''
    }
  },

  created () {
    if (!localStorage.getItem('sid')) {
      // eslint-disable-next-line no-unused-expressions
      this.$router.push('/')?.catch(() => {})
    } else {
      this.initData()
    }
  },

  mounted () {
    this.small = window.innerWidth <= 768
  },

  watch: {
    user () {
      if (this.user) {
        this.initData()
      }
    }
  },

  computed: {
    ...mapState({
      user: state => state.user
    }),
    ...mapGetters(['lastUserWin']),

    isWin () {
      return !!this.lastUserWin
    }
  },

  methods: {
    ...mapActions(['editProfile']),

    russianNoPrefix,

    updateUserProfile () {
      this.editProfile({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      })
      this.switchEdit()
    },

    initData () {
      this.firstName = this.user?.firstName || ''
      this.lastName = this.user?.lastName || ''
      this.email = this.user?.email || ''
      if (this.user && !this.user.personals) {
        this.isWinPrizeVisible = true
      }
    },

    switchEdit () {
      this.editMode = !this.editMode
    },

    activateCheckRegOpt () {
      this.isActiveCheckRegOpt = !this.isActiveCheckRegOpt
    },

    activateManualCheck () {
      this.isActiveManualCheck = !this.isActiveManualCheck
    },

    activatePersonalData () {
      this.isActivePersonalData = !this.isActivePersonalData
    },

    onWinPrizeEnter () {
      this.isActivePersonalData = true
      this.isWinPrizeVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.profile__page {
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: #F3E6DA;

  .g-container {
    display: flex;
    justify-content: center;
    padding: 150px 42px 0px;
  }
}

.profile__info {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  .edit__button {
    position: absolute;
    right: 0;
    top: 0;
    color: #091E16;
    cursor: pointer;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    width: 375px;

    .g-profile__picture {
      width: 96px;
      height: 96px;
    }

    .text__block {
      margin-top: 16px;

      p {
        &:nth-child(1) {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 130%;
          color: #B8140D;
          padding-bottom: 10px;
          text-transform: capitalize;
        }

        &:nth-child(2) {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 130%;
          color: #091E16;
        }

        &:nth-child(3) {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 130%;
          color: #091E16;
        }
      }
    }
  }
}

.wrapper {
  display: flex;
}

.the__input {
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    height: 50px;
    margin: 8px 0;
    border-radius: 10px;
    background: rgba(255, 0, 0, 0.1);
    border: 0;
    color: black;
    opacity: 1;
    padding-left: 16px;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 130%;
  }
}

.save__cancel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  TheButton {
    color: white;
  }

  p {
    font-family: Zen Kaku Gothic New;
    font-style: normal;
    font-weight: normal;
    font-size: 18px !important;
    line-height: 130%;
    color: #B8140D !important;
    text-decoration: underline dashed 1px;
    margin: 0 24px;
    cursor: pointer;
  }
}

.left__side {
  display: flex;
  flex-direction: column;
  margin-right: 21px;

  .mb {
    margin-bottom: 17px;
  }
}

.right__side {
  margin-bottom: 20px;
}

.image__small-wrapper {
  text-transform: capitalize;
}

@media (max-width: 1300px) {
  .profile__info {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .wrapper {
    display: flex !important;
    flex-direction: column !important;
  }

  .left__side {
    margin-bottom: 25px;
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .text__block2 {
    .save__cancel {
      flex-direction: column;
      margin-top: 21px;

      .szsm {
        height: 40px;
        margin-bottom: 5px;
      }

      p {
        color: #B8140D !important;
      }
    }
  }

  .g-container {
    display: flex;
    padding: 120px 15px 0px !important;
  }

  .profile__info-wrapper {
    width: 226px;
    padding-right: 0;
  }

  .left__side {
    margin-right: 0;
  }

  .g-profile__picture {
    width: 68px !important;
    height: 68px !important;
    margin-left: 0;

    img {
      width: 68px;
      height: 68px;
    }
  }

  .image__small-wrapper {
    display: flex;
    text-align: left;
    align-items: center;

    p {
      font-family: 'Zen Kaku Gothic New', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 130%;
      margin-left: 8px;
      color: #B8140D;
      text-transform: capitalize;
    }
  }

  .text__block {
    margin-top: 6px;

    p {
      &:nth-child(1) {
        font-size: 14px !important;
        color: #091E16 !important;
      }

      &:nth-child(2) {
        font-size: 14px !important;
        color: #091E16 !important;
      }
    }
  }
}
</style>
