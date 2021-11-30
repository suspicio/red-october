<template>
  <div class="main">
    <TheHeader @activate="registrationVisible"></TheHeader>
    <Registration v-if="isRegistrationActive" @activate="registrationVisible"
                  @activateLogIn="activateLogIn"></Registration>
    <LogIn v-if="isActiveLogIn" :isNumber="isNumberShown" :number="numberPass" @activateForgot="activateForgot"
           @activateLogIn="activateLogIn"></LogIn>
    <ForgotPass v-if="isActiveForgot" @activateForgot="activateForgot" @sendToNumber="sendPass"></ForgotPass>
    <CheckRegistrationOptions v-if="isActiveCheckRegOpt" @activate="activateCheckRegOpt"
                              @manual="activateManualCheck" @qrcode="activateQRCode"></CheckRegistrationOptions>
    <ManualCheckEnter v-if="isActiveManualCheck" @activate="activateManualCheck" @checkStatus="checkStatus"></ManualCheckEnter>
    <CheckLoader v-if="isLoading" @activate="activateLoading" @checkStatus="checkStatus"></CheckLoader>
    <QRCodeReader v-if="isActiveQR" @activate="activateQRCode"/>
    <CheckStatus
      v-if="!isLoading && isSended"
      :activate="activateStatus"
      :button-text="'ЛИЧНЫЙ КАБИНЕТ'"
      :header-text="'Чек зарегистрирован'"
      :is-ok="true"
      :under-text="'Пожалуйста, сохраните чек до конца акции'"
    ></CheckStatus>
    <CheckRegistration
      @activateOptions="activateCheckRegOpt"
    ></CheckRegistration>
    <ParticipateInShare />
    <WinThePrize />
    <SpecialProject id="gallery" />
    <TheParticipants v-if="false" />
    <ProductionInAction />
    <TheWinners v-if="!!winners" id="winners" :winners="winners"></TheWinners>
    <FAQ id="faq"/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import CheckRegistration from '@/views/Main/CheckRegistration'
import ParticipateInShare from '@/views/Main/ParticipateInShare'
import WinThePrize from '@/views/Main/WinThePrize'
import SpecialProject from '@/views/Main/SpecialProject'
import TheParticipants from '@/views/Main/TheParticipants'
import ProductionInAction from '@/views/Main/ProductionInAction'
import TheFooter from '@/components/TheFooter'
import TheWinners from '@/views/Main/TheWinners'
import Registration from '@/views/Auth/Registration'
import LogIn from '@/views/Auth/LogIn'
import ForgotPass from '@/views/Auth/ForgotPass'
import CheckRegistrationOptions from '@/views/CheckRegister/CheckRegistrationOptions'
import ManualCheckEnter from '@/views/CheckRegister/ManualCheckEnter'
import CheckLoader from '@/views/CheckRegister/CheckLoader'
import CheckStatus from '@/views/CheckRegister/CheckStatus'
import { mapState } from 'vuex'
import FAQ from '@/views/Main/FAQ'
import QRCodeReader from '@/views/CheckRegister/QRCodeReader'

export default {
  name: 'Main',
  components: {
    QRCodeReader,
    FAQ,
    CheckStatus,
    CheckLoader,
    ManualCheckEnter,
    CheckRegistrationOptions,
    ForgotPass,
    LogIn,
    Registration,
    TheParticipants,
    TheFooter,
    ProductionInAction,
    TheWinners,
    SpecialProject,
    WinThePrize,
    ParticipateInShare,
    CheckRegistration,
    TheHeader
  },
  data () {
    return {
      isRegistrationActive: false,
      isActiveLogIn: false,
      isActiveForgot: false,
      isActiveCheckRegOpt: false,
      isActiveManualCheck: false,
      isLoading: false,
      isSended: false,
      isActiveQR: false,
      isNumberShown: false,
      numberPass: ''
    }
  },

  computed: {
    ...mapState({
      user: state => state.user,
      winners: state => state.winners
    })
  },

  methods: {
    registrationVisible () {
      this.isNumberShown = false
      this.isRegistrationActive = !this.isRegistrationActive
    },

    activateLogIn () {
      this.isNumberShown = false
      this.isActiveLogIn = !this.isActiveLogIn
    },

    activateForgot () {
      this.isNumberShown = false
      this.isActiveForgot = !this.isActiveForgot
    },

    activateCheckRegOpt () {
      this.isNumberShown = false
      if (this.user) {
        this.isActiveCheckRegOpt = !this.isActiveCheckRegOpt
      } else {
        this.isRegistrationActive = true
      }
    },

    activateManualCheck () {
      this.isNumberShown = false
      this.isActiveManualCheck = !this.isActiveManualCheck
    },

    activateQRCode () {
      this.isActiveQR = !this.isActiveQR
    },

    checkStatus (promise) {
      this.activateManualCheck()
      this.isLoading = true
      promise.then(data => {
        this.isLoading = false
      })
    },

    activateLoading () {
      this.isNumberShown = false
      this.isLoading = !this.isLoading
    },

    sendPass (number) {
      this.isActiveForgot = !this.isActiveForgot
      this.isActiveLogIn = !this.isActiveLogIn
      this.isNumberShown = true
      this.numberPass = number
    },

    sendStatus (data) {
      console.log(data)
    },

    activateStatus () {
      this.isSended = !this.isSended
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  flex-direction: column;
}
</style>
