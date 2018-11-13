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
                <div class="checkbox">
                    <input id="entersite_remmember" type="checkbox">
                    <label for="entersite_remmember">{{t('Remember me')}}</label>
                </div>
                <div class="helpers">
                    <a href="#" class="registration" @click.prevent="$modal.show('registration')">{{t('Sign Up')}}</a>
                    <a href="#" class="access" @click.prevent="$modal.show('access')">{{t('Access recovery')}}</a>
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
