<template>
    <modal name="piter" transition="pop-out" height="auto" width="100%" :max-width="750" :adaptive="true">
        <div class="modal modal-team b-modal-piter ">
            <div class="close-modal" @click="$modal.hide('piter')" title="Close modal">×</div>
            <p class="name-person">Питер Жмутский</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
