<template>
    <div id="app" @load="load">
        <div class="line-document"></div>
        <transition name="fade">
            <div class="preloader-block bg-dotty" v-if="loaderBlock">
                <img src="/img/load.svg"/>
            </div>
        </transition>
        <bg-wrapper/>
        <header-block/>
        <main>
            <fond-block/>
            <description-fond/>
            <div class="bg-dotty">
                <mission-fond/>
            </div>
            <team-block/>
            <div class="bg-dotty">
                <list-popular/>
            </div>
            <film-block/>
            <idea-film/>
            <div class="bg-dotty">
                <reference-block/>
            </div>
            <statistics-block :in-viewport-offset-top='-300' :in-viewport-once='true'/>
            <finance-films :in-viewport-offset-top='-300' :in-viewport-once='true'/>
            <div class="bg-dotty">
                <table-gtc :in-viewport-offset-top='-300' :in-viewport-once='true'/>
            </div>
            <terms-cooperation/>
            <div class="bg-dotty">
                <investor-income/>
            </div>
            <road-map/>
        </main>
        <footer-block/>
        <modal-apply/>
        <modal-presentation/>
        <modal-message/>
    </div>
</template>

<script>
  import HeaderBlock from 'components/header'

  import BgWrapper from 'components/bg-wrapper'
  import FondBlock from 'components/fond-bloсk'
  import DescriptionFond from 'components/description-fond'
  import MissionFond from 'components/mission-fond'
  import TeamBlock from 'components/team'
  import ListPopular from 'components/list-popular'
  import FilmBlock from 'components/film'
  import IdeaFilm from 'components/idea-film'
  import ReferenceBlock from 'components/reference'
  import StatisticsBlock from 'components/statistics'
  import FinanceFilms from 'components/finance-films'
  import TableGtc from 'components/table-gtc'
  import TermsCooperation from 'components/terms-cooperation'
  import InvestorIncome from 'components/investor-income'
  import RoadMap from 'components/road-map'

  import ModalApply from 'components/modals/apply'
  import ModalPresentation from 'components/modals/presentation'
  import ModalMessage from 'components/modals/message'

  import FooterBlock from 'components/footer'

  export default {
    name: 'app',
    components: {
      BgWrapper,
      HeaderBlock,
      FondBlock,
      DescriptionFond,
      MissionFond,
      TeamBlock,
      ListPopular,
      FilmBlock,
      IdeaFilm,
      ReferenceBlock,
      StatisticsBlock,
      FinanceFilms,
      TableGtc,
      TermsCooperation,
      InvestorIncome,
      RoadMap,
      FooterBlock,
      ModalApply,
      ModalPresentation,
      ModalMessage
    },
    data() {
      return {
        loaderBlock: true
      }
    },
    mounted() {
      window.addEventListener('load', () => {
        this.loaderBlock = false
      })
    }
  }
</script>

<style lang="less">
    @import "assets/less/main";
    #app {
        position: relative;
    }
    .preloader-block {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 20vh;
        }
    }
</style>
