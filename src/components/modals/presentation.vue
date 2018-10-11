<template>
    <modal name="presentation" transition="pop-out" height="auto" width="100%" :max-width="920" :adaptive="true"
           classes="modal-default">
        <div class="modal b-modal-presentation">
            <div class="close-modal" @click="hide" title="Close modal">×</div>
            <div class="title">{{t('Sign up for a')}} <span class="gradient-text">{{t('presentation')}}</span></div>
            <form class="form form--apply" action="">
                <div class="input-wrapper">
                    <input class="item" type="text" :placeholder="t('Name')">
                    <input class="item" type="tel" :placeholder="t('Phone')">
                    <input class="item" type="email" placeholder="E-mail">
                    <input class="item" type="text" :placeholder="t('Your comment')">
                </div>
                <a href="#" class="btn">{{t('Send')}}</a>
            </form>
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
        this.$modal.hide('presentation');
      }
    }
  }
</script>
