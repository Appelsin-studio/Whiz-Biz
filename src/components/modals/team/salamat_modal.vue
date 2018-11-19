<template>
    <modal name="salamat" transition="pop-out" height="auto" width="100%" :max-width="850" :adaptive="true"
           :scrollable="true">
        <div class="modal modal-team b-modal-salamat ">
            <div class="close-modal" @click="$modal.hide('salamat')" title="Close modal">×</div>
            <p class="name-person">Саламат Мухаммед-Али</p>
            <p class="job">{{t('Kazakhstan filmmaker')}}</p>
            <p class="person-desc">     {{t('Responsible for the company\'s strategic vision, controls the comprehensive development of the brand and the franchise.')}}</p>
            <p class="person-desc">{{t('He worked as a technical director in the TV company "MIK-TV". Produced and directed, music videos, national commercials, as well as social and documentary films. The founder of the rock band "Epoch".')}}</p>
            <p class="person-desc">{{t('The 3D-animated video clip of Salamat Mohammed-Ali received the "Audience Award" and the award from the TV channel number 1 "Kazakhstan". The video clip "Aynaldym Elim" won the 1st place in the nomination "The Best Music Video of Kazakhstan" on the topic of patriotism. He worked as a stage director in the projects of the Education Fund of President Nursultan Nazarbayev "Intellectual Olympiads", "IQ - Action", which won in international television competitions.')}}</p>
            <p class="person-desc">{{t('Salamat, the creator of the movie "The whole world at our feet" / "Diamond cartel". Hollywood stars such as Armand Assante, Peter O\'Toole, Keri-Hiroyuki Tagawa, Michael Madsen, Tommy Lister, Bolo Yeng, Don "Dragon" Wilson and Olivier Gruner were shot in the film. A motion picture film was released in the US, UK, Australia, North America and Kazakhstan.')}}</p>
            <p class="person-desc">{{t('At the Balkan Film Festival "ART Amphora" 2016, he was awarded two main prizes - the best feature film and the best directing work. He is currently developing several feature films and television series with Gray Frederickson and Peter Zhmutsky.')}}</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
