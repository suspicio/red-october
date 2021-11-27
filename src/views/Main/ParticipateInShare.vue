<template>
  <div class="participate__in-share">
    <CentralizedHeading :text="'Участвуй в акции'"></CentralizedHeading>
    <div class="centralized">
      <div class="red__line"></div>
      <StepShare
        :step="1"
        heading="Покупай"
        path-to-img='share1.png'
        :text="`конфеты «Красный Октябрь»\n в сети «Магнит»`"
      ></StepShare>

      <StepShare
        :step="2"
        heading="Регистрируй"
        path-to-img='share2.png'
        text="чек и получи доступ
              к подборке советских фильмов в онлайн-кинотеатре IVI"
      ></StepShare>

      <StepShare
        :step="3"
        heading="Участвуй"
        path-to-img='share3.png'
        text="в розыгрыше ежедневных и еженедельных призов"
      ></StepShare>

      <StepShare
        :step="4"
        heading="Присоединяйся"
        path-to-img='share4.png'
        text="к спецпроекту в соц.сети, повторяй фото своих родителей и выигрывай крутые советские артефакты"
      ></StepShare>
    </div>
  </div>
</template>

<script>
import CentralizedHeading from '@/components/CentralizedHeading'
import StepShare from '@/components/StepShare'

export default {
  name: 'ParticipateInShare',
  components: {
    StepShare,
    CentralizedHeading
  }
}
</script>

<style scoped>
.participate__in-share {
  background-color: #F3E6DA;
  height: fit-content;
  position: relative;
}

.centralized {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 50px;
}

.red__line {
  position: absolute;
  width: 700px;
  z-index: 0;
  height: 1px;
  background-color: #D02E26;
  margin-top: 99px;
}

@media (max-width: 768px) {
  .centralized {
    flex-direction: column;
    align-items: center;
  }

  .red__line {
    display: none;
  }
}
</style>
