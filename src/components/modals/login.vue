<template>
    <modal name="login" transition="pop-out" height="auto" width="100%" :max-width="750" :adaptive="true">
        <div class="modal b-modal-apply">
            <div class="close-modal" @click="$modal.hide('login')" title="Close modal">×</div>
            <div class="title"><span class="gradient-text">{{t('Login')}}</span></div>
            <form class="form form--apply" action="">
                <div class="input-wrapper">
                    <input class="item" type="email" placeholder="E-mail">
                    <input class="item" type="password" :placeholder="t('Password')">
                </div>
                <a href="#" class="btn">{{t('Login')}}</a>
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
