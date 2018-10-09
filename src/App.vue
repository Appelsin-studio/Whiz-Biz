<template>
    <div id="app">
        <main>
            <full-page ref="fullpage" :options="fullPageOptions" id="fullpage">
                <section class="section-fullpage">
                    <header-block/>
                    <fond-block/>
                </section>
                <section class="section-fullpage">
                    <description-fond/>
                    <mission-fond/>
                </section>
                <section class="section-fullpage">
                    <team-block/>
                </section>
                <section class="section-fullpage">
                    <list-popular/>
                </section>
                <section class="section-fullpage">
                    <film-block/>
                </section>
                <section class="section-fullpage">
                    <idea-film/>
                </section>
                <section class="section-fullpage">
                    <reference-block/>
                </section>
                <section class="section-fullpage">
                    <statistics-block/>
                </section>
                <section class="section-fullpage">
                    <finance-films/>
                </section>
                <section class="section-fullpage">
                    <table-gtc/>
                </section>
                <section class="section-fullpage">
                    <terms-cooperation/>
                </section>
                <section class="section-fullpage">
                    <investor-income/>
                </section>
                <section class="section-fullpage">
                    <road-map/>
                </section>
                <section class="section-fullpage fp-auto-height">
                    <footer-block/>
                </section>
            </full-page>
        </main>
        <modal-apply/>
        <modal-presentation/>
        <modal-message/>
    </div>
</template>

<script>
  import Vue from 'vue'
  import HeaderBlock from 'components/header'

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

  import VueFullPage from 'vue-fullpage.js'
  import 'fullpage.js/vendors/scrolloverflow.min'

  Vue.use(VueFullPage)
  export default {
    name: 'app',
    components: {
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
        fullPageOptions: {
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          scrollBar: false,
          responsiveWidth: 320,
          sectionSelector: '.section-fullpage',
          scrollOverflow: true
        }
      }
    }
  }
</script>

<style lang="less">
    @import "~fullpage.js/dist/fullpage.min.css";
    @import "assets/less/main";
</style>
