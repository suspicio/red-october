<template>
  <div class="participate__in-share">
    <CentralizedHeading :text="'Участвуй в акции'"></CentralizedHeading>
    <div class="centralized">
      <div class="red__line"></div>
      <StepShare
        :step="1"
        :text="`конфеты «Красный Октябрь»\n в сети «Магнит»`"
        heading="Покупай"
        path-to-img='share1.png'
      ></StepShare>

      <StepShare
        :step="2"
        heading="Регистрируй"
        path-to-img='share2.png'
        text="чек и получи доступ
              к&nbsp;подборке советских фильмов в онлайн-кинотеатре IVI"
      ></StepShare>

      <StepShare
        :step="3"
        heading="Участвуй"
        path-to-img='share3.png'
        text="в розыгрыше ретро поездки в&nbsp;Москву и других ценных призов"
      ></StepShare>

      <StepShare
        :step="4"
        heading="Присоединяйся"
        path-to-img='share4.png'
        text="к конкурсу #РетроЧелленджМагнит в&nbsp;Instagram и повторяй новогоднее фото своих родителей. Победители, которых выберут известные блогеры, получат сертификат на покупку стильной советской мебели"
      ></StepShare>
    </div>
    <div class="actions-rules">
      <a href="https://magnit.krasniy-oktyabr.ru/api/rules.pdf" target="_blank" download="rules.pdf">Правила акции</a>
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

<style lang="scss" scoped>
.participate__in-share {
  background-color: #F3E6DA;
  height: fit-content;
  position: relative;

  .actions-rules {
    display: flex;
    width: 147px;
    height: 36px;
    margin: 0 auto 20px;
    justify-content: center;
    align-items: center;
    border-radius: 111px;

    a {
      font-family: 'Zen Kaku Gothic New', sans-serif;
      font-size: 16px;
      line-height: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      text-decoration: underline dashed 1px;
      color: #D02E26;
    }
  }
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
