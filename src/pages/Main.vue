<template>
  <div class="main">
    <TheHeader @activate="registrationVisible"></TheHeader>
    <Registration v-if="isRegistrationActive" @activate="registrationVisible"
                  @activateLogIn="activateLogIn"></Registration>
    <LogIn v-if="isActiveLogIn" @activateForgot="activateForgot" @activateLogIn="activateLogIn"></LogIn>
    <ForgotPass v-if="isActiveForgot" @activateForgot="activateForgot"></ForgotPass>
    <CheckRegistrationOptions v-if="isActiveCheckRegOpt" @activate="activateCheckRegOpt"
                              @manual="activateManualCheck"></CheckRegistrationOptions>
    <ManualCheckEnter v-if="isActiveManualCheck" @activate="activateManualCheck"></ManualCheckEnter>
    <CheckLoader v-if="isLoading" @activate="activateLoading"></CheckLoader>
    <CheckStatus
      :button-text="'ЛИЧНЫЙ КАБИНЕТ'"
      :header-text="'Чек зарегистрирован'"
      :is-ok="true"
      :under-text="'Пожалуйста, сохраните чек до конца акции'"
      v-if="isLoading"
    ></CheckStatus>
    <CheckRegistration
      @activateOptions="activateCheckRegOpt"
    ></CheckRegistration>
    <ParticipateInShare></ParticipateInShare>
    <WinThePrize></WinThePrize>
    <SpecialProject></SpecialProject>
    <TheParticipants></TheParticipants>
    <ProductionInAction></ProductionInAction>
    <TheWinners v-if="false"></TheWinners>
    <TheFooter v-if="false"/>
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

export default {
  name: 'Main',
  components: {
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
      isLoading: false
    }
  },
  methods: {
    registrationVisible () {
      this.isRegistrationActive = !this.isRegistrationActive
    },

    activateLogIn () {
      this.isActiveLogIn = !this.isActiveLogIn
    },

    activateForgot () {
      this.isActiveForgot = !this.isActiveForgot
    },

    activateCheckRegOpt () {
      this.isActiveCheckRegOpt = !this.isActiveCheckRegOpt
    },

    activateManualCheck () {
      this.isActiveManualCheck = !this.isActiveManualCheck
    },

    activateLoading () {
      this.isLoading = !this.isLoading
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
