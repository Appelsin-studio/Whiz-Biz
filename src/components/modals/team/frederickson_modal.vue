<template>
    <modal name="frederickson" transition="pop-out" height="auto" width="100%" :max-width="850" :adaptive="true"
           :scrollable="true">
        <div class="modal modal-team b-modal-frederickson ">
            <div class="close-modal" @click="$modal.hide('frederickson')" title="Close modal">×</div>
            <p class="name-person">Грэй Фредериксон</p>
            <p class="job">{{t('Producer, screenwriter, actor')}}</p>
            <p class="person-desc">{{t('Gray Frederickson is responsible for producing film and television projects. G. Frederickson, one of the key links of our company, is an Oscar winner, whose films have earned more than $ 1 billion.')}}</p>
            <p class="person-desc">{{t('Being the winner of the American Academy Film Award for more than 55 years of his film career, G. Frederickson is an honorary member of the following organizations: Academy of Motion Picture Arts and Sciences, Television Academy of Arts and Sciences, Directors Guild of America, Screen Actors Guild. With great honor, the three films of G. Frederickson entered the list of the 100 best films of the American Film Institute. Frederickson received an Oscar for outstanding producer contribution to the film "The Godfather 2". Mr. Frederickson was also nominated by the American Academy of Motion Picture Arts and Sciences for his outstanding production contribution to the Apocalypse Now movie. In 2007, he also won an Emmy Award for his production contribution to the documentary "Dream Big Dream, Life and Time of Robert S. Kerr."')}}</p>
            <p class="person-desc">{{t('Mr. Frederickson, began his 20-year partnership with Francis Ford Coppola as an associate producer of the Oscar-winning film "The Godfather". He also produced the movie "From the Heart," and "Outcasts", which are part of the famous studio Zoetrope, Francis Coppola. Frederickson was the co-producer of the Oscar-winning film "The Godfather. Part 3 ".')}}</p>
            <p class="person-desc">{{t('In 2000, G. Frederickson founded a training program for "Technicians / film and video production specialists" at Oklahoma City College. He is also one of the owners and executive vice president of Cinema Management Group, an international film sales organization headquartered in Los Angeles.')}}</p>
        </div>
    </modal>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
