<template>
    <modal name="piter" transition="pop-out" height="auto" width="100%" :max-width="850" :adaptive="true"
           :scrollable="true">
        <div class="modal modal-team b-modal-piter ">
            <div class="close-modal" @click="$modal.hide('piter')" title="Close modal">×</div>
            <p class="name-person">Питер Жмутский</p>
            <p class="job">{{t('Producer, director, actor, screenwriter, composer')}}</p>
            <p class="person-desc">{{t('Peter Zhmutsky is responsible for the strategic and creative vision of the company, and will also participate as a director / producer for selected projects.')}}</p>
            <p class="person-desc">{{t('Peter Zhmutsky has been working in the film industry for 22 years on both sides, both on camera and on camera. Thanks to his numerous international achievements and awards for the films he created, the United States government recognized P. Zhmutsky as an "extraordinary director" and granted him citizenship for his creative contribution to the development of the American film industry.')}}</p>
            <p class="person-desc">{{t('P. Zhmutsky worked on 25 motion pictures, mainly as a director, producer and actor. Many films by P. Zhmutsky won prestigious awards at the International Film Festivals. Some of his films were released in cinemas around the world, broadcast on major television channels, distributed on platforms such as Netflix, Amazon, On Demand, and sold on DVD / Blu-Ray media around the world, on different languages.')}}</p>
            <p class="person-desc">{{t('Living in Oklahoma, in 2015, P. Zhmutsky produced the Russian-American motion picture film "Ratpocalypse", which was later acquired by The Showtime Network, an American entertainment company. "Ratpocalypse" was the first 3D film filmed in Oklahoma, where stars such as Casper Van Dean and Catherine Oxenberg played the main role.')}}</p>
            <p class="person-desc">{{t('In 2017, P. Zhmutsky produced a movie that was released in cinemas - "Diamond Cartel", directed by Salamat Muhammad-Ali. Hollywood stars such as Armand Asante, Peter O\'Toole, Keri-Hiroyuki Tagawa, Michael Madsen, Tommy Lister, Bolo Yeng, Don "Dragon" Wilson and Olivier Gruner were shot in the film. The motion picture film was released in such countries as the USA, Great Britain, Australia and Kazakhstan.')}}</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
