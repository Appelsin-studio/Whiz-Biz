<template>
    <modal name="presentation" transition="pop-out" height="auto" width="100%" :max-width="920" :adaptive="true"
           classes="modal-default">
        <div class="modal b-modal-presentation">
            <div class="close-modal" @click="hide" title="Close modal">×</div>
            <div class="title">Записаться на <span class="gradient-text">презентацию</span></div>
            <form class="form form--apply" action="">
                <div class="input-wrapper">
                    <input class="item" type="text" placeholder="Имя">
                    <input class="item" type="tel" placeholder="Телефон">
                    <input class="item" type="email" placeholder="E-mail">
                    <input class="item" type="text" placeholder="Ваш комментарий">
                </div>
                <a href="#" class="btn">Отправить</a>
            </form>
        </div>
    </modal>
</template>
<script>

  export default {
    data () {
      return {
      }
    },
    methods: {
      hide () {
        this.$modal.hide('presentation');
      }
    }
  }
</script>
