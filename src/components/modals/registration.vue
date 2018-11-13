<template>
    <modal name="registration" transition="pop-out" height="auto" width="100%" :max-width="750" :adaptive="true" @before-open="$modal.hide('login')">
        <div class="modal b-modal-registration">
            <div class="close-modal" @click="$modal.hide('registration')" title="Close modal">×</div>
            <div class="title"><span class="gradient-text">{{t('Sign Up')}}</span></div>
            <form class="form form--apply" action="">
                <div class="input-wrapper">
                    <input class="item" type="text" :placeholder="t('Name')">
                    <input class="item" type="email" placeholder="E-mail">
                </div>
                <a href="#" class="btn">{{t('Confirm')}}</a>
            </form>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
