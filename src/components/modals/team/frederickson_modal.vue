<template>
    <modal name="frederickson" transition="pop-out" height="auto" width="100%" :max-width="750" :adaptive="true">
        <div class="modal modal-team b-modal-frederickson ">
            <div class="close-modal" @click="$modal.hide('frederickson')" title="Close modal">×</div>
            <p class="name-person">Грей Фредериксон</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
