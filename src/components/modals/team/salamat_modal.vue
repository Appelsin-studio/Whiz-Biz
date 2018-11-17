<template>
    <modal name="salamat" transition="pop-out" height="auto" width="100%" :max-width="750" :adaptive="true">
        <div class="modal modal-team b-modal-salamat ">
            <div class="close-modal" @click="$modal.hide('salamat')" title="Close modal">×</div>
            <p class="name-person">Саламат Мухаммед-Али</p>
            <p class="job">{{t('Kazakhstan filmmaker')}}</p>
            <p class="person-desc">{{t('Responsible for the leadership and strategic vision of the company, controls the comprehensive development of the brand and franchise. He worked as a technical director in the TV company "MIK-TV". Produced and directed, music videos, national commercials, as well as social and documentary films. The founder of the rock band "Epoch". The 3D-animated video clip of Salamat Mohammed-Ali received the "Audience Award" and the award from the TV channel number 1 "Kazakhstan". The video clip "Aynaldym Elim" won the 1st place in the nomination "The Best Music Video of Kazakhstan" on the topic of patriotism. He worked as a stage director in the projects of the Education Fund of President Nursultan Nazarbayev "Intellectual Olympiads", "IQ - Action", which won in international television competitions. The creator of the movie "The whole world at our feet" / "Diamond cartel". At the Balkan Film Festival "ART Amphora" 2016, he was awarded two main prizes - the best feature film and the best directing work. He is currently developing several feature films and television series with Gray Frederickson and Peter Zhmutsky.')}}</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
