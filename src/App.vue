<template>
    <div id="app">
        <transition name="fade">
            <div class="preloader-block" v-if="loaderBlock">
                <img src="/img/load.svg"/>
            </div>
        </transition>
        <!--<bg-wrapper/>-->
        <header-block/>
        <main>
            <fond-block/>
            <description-fond/>
            <mission-fond/>
            <team-block/>
            <list-popular/>
            <film-block/>
            <idea-film/>
            <reference-block/>
            <statistics-block :in-viewport-offset-top='-800' :in-viewport-once='true'/>
            <finance-films :in-viewport-offset-top='-800' :in-viewport-once='true'/>
            <!--<table-gtc :in-viewport-offset-top='-800' :in-viewport-once='true'/>-->
            <terms-cooperation/>
            <investor-income/>
            <road-map/>
            <word-support/>
        </main>
        <footer-block/>
        <modal-apply/>
        <modal-presentation/>
        <modal-message/>
        <modal-login/>
        <modal-registration/>
        <modal-access/>
        <modal-salamat/>
        <modal-dinara/>
        <modal-frederickson/>
        <modal-piter/>
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
  import WordSupport from 'components/word-support'

  import ModalApply from 'components/modals/apply'
  import ModalPresentation from 'components/modals/presentation'
  import ModalMessage from 'components/modals/message'
  import ModalLogin from 'components/modals/login'
  import ModalRegistration from 'components/modals/registration'
  import ModalAccess from 'components/modals/access'

  import ModalSalamat from 'components/modals/team/salamat_modal'
  import ModalDinara from 'components/modals/team/dinara_modal'
  import ModalFrederickson from 'components/modals/team/frederickson_modal'
  import ModalPiter from 'components/modals/team/piter_modal'

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
      WordSupport,
      FooterBlock,
      ModalApply,
      ModalPresentation,
      ModalMessage,
      ModalLogin,
      ModalRegistration,
      ModalAccess,
      ModalSalamat,
      ModalDinara,
      ModalFrederickson,
      ModalPiter
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
        background: linear-gradient(to right, rgba(0, 17, 35, 1) 0%, rgba(0, 25, 60, 1) 17%,
        rgba(98, 0, 160, 1) 59%, rgba(159, 0, 127, 1) 98%);;
        img {
            width: 20vh;
        }
    }
</style>
