<template>
  <div class="the__winners">
    <div class="g-container">
      <CentralizedHeading
        class="size"
        :text="'Победители'"
        :text-color="'black'"
      ></CentralizedHeading>
      <SlidableContent style="margin-top: 47px; margin-bottom: 50px">
        <WinnersDateSelect
          v-for="(item, index) in winners"
          :key="index"
          :my-key="index"
          :active-key="activeIndex"
          :date="item.date"
          :sub-date="item.subDate"
          @select="activate(index)"
        ></WinnersDateSelect>
      </SlidableContent>
      <table>
          <TableRow
            :list="winners[activeIndex].winners"
          ></TableRow>
      </table>
    </div>
  </div>
</template>

<script>
import CentralizedHeading from '@/components/CentralizedHeading'
import SlidableContent from '@/components/SlidableContent'
import WinnersDateSelect from '@/components/WinnersDateSelect'
import TableRow from '@/components/TableRow'

export default {
  name: 'TheWinners',
  components: {
    TableRow,
    WinnersDateSelect,
    SlidableContent,
    CentralizedHeading
  },
  props: {
    winners: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    activate (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.the__winners {
  position: relative;
  width: 100%;
  height: fit-content;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 105px;

  .heading__slide {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .size {
    font-size: 22px;
  }

  .the__winners {
    flex-direction: column;
  }
}
</style>
