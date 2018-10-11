<template>
    <modal name="message" transition="pop-out" height="auto" width="100%" :max-width="950" :adaptive="true"
           classes="modal-default">
        <div class="modal b-modal-message">
            <div class="close-modal" @click="hide" title="Close modal">×</div>
            <div class="title">{{t('Your message')}} <span class="gradient-text">{{t('has been sent')}}!</span></div>
            <p class="message-text">{{t('We will contact you shortly for further details')}}</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin],
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
