<template>
    <modal name="message" transition="pop-out" height="auto" width="100%" :max-width="950" :adaptive="true"
           classes="modal-default">
        <div class="modal b-modal-message">
            <div class="close-modal" @click="hide" title="Close modal">×</div>
            <div class="title">Ваше сообщение <span class="gradient-text">отправлено!</span></div>
            <p class="message-text">Мы свяжемся с вами в ближайшее
                время для уточнения деталей</p>
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
        this.$modal.hide('message');
      }
    }
  }
</script>
