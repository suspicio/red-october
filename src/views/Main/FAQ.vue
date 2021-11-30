<template>
  <div class="faq">
    <centralized-heading
      :text="'FAQ'"
      :text-color="'#FFFFFF'"
    ></centralized-heading>
    <div class="faq__wrapper">
      <Accordion v-for="(elem, index) in list" :key="index"
                 :text="elem.text"
                 :title="elem.title"
                 :url="elem.urls"
      />
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion'
import CentralizedHeading from '@/components/CentralizedHeading'

export default {
  name: 'FAQ',
  components: {
    CentralizedHeading,
    Accordion
  },
  data () {
    return {
      list: require('../../content/FaqInfo.json')
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  width: 100%;
  background-color: #D12E27;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    width: 80%;
    margin-top: 50px;

    Accordion {
      margin: 0 15px;
    }
  }
}
</style>
