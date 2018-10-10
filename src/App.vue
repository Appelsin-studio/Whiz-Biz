<template>
    <div id="app">
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
            <statistics-block/>
            <finance-films/>
            <table-gtc/>
            <terms-cooperation/>
            <investor-income/>
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
      return {}
    }
  }
</script>

<style lang="less">
    @import "assets/less/main";
</style>
