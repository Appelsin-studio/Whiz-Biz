<template>
    <modal name="dinara" transition="pop-out" height="auto" width="100%" :max-width="750" :adaptive="true">
        <div class="modal modal-team b-modal-salamat ">
            <div class="close-modal" @click="$modal.hide('dinara')" title="Close modal">×</div>
            <p class="name-person">Динара Батырова</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
