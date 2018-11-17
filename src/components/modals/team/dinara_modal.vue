<template>
    <modal name="dinara" transition="pop-out" height="auto" width="100%" :max-width="750" :adaptive="true">
        <div class="modal modal-team b-modal-salamat ">
            <div class="close-modal" @click="$modal.hide('dinara')" title="Close modal">×</div>
            <p class="name-person">Динара Батырова</p>
            <p class="job">{{t('Entrepreneur, cryptoinvestor and film producer')}}</p>
            <p class="person-desc">{{t('Dinara Batyrova, responsible for marketing and oversees the full development of the brand and franchise.')}}</p>
            <p class="person-desc">{{t('Dinara, Ph.D., engineer. Professional activities: entrepreneur, cryptoinvestor, producer of the film project Ghost Town Projects: Architectural and construction objects, buildings and structures of Astana and Almaty.')}}</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
