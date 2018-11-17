<template>
    <modal name="frederickson" transition="pop-out" height="auto" width="100%" :max-width="750" :adaptive="true">
        <div class="modal modal-team b-modal-frederickson ">
            <div class="close-modal" @click="$modal.hide('frederickson')" title="Close modal">×</div>
            <p class="name-person">Грэй Фредериксон</p>
            <p class="job">{{t('Awarded the biggest international film producer, screenwriter and actor')}}</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
