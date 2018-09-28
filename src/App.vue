<template>
  <div id="app">
    <header-block/>
    <main>
      <fond-block/>
      <div class="gradient-wrapper--top">
        <div class="gradient-wrapper">
          <description-fond/>
          <mission-fond/>
        </div>
      </div>
      <team-block/>
      <list-popular/>
    </main>
    <footer-block/>
  </div>
</template>

<script>
import HeaderBlock from 'components/header'

import FondBlock from 'components/fond-bloсk'
import DescriptionFond from 'components/description-fond'
import MissionFond from 'components/mission-fond'
import TeamBlock from 'components/team'
import ListPopular from 'components/list-popular'

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
    FooterBlock
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
  @import "assets/less/main";
  .gradient-wrpper {
    background: #0E0808;
  }
  .gradient-wrapper--top {
    position: relative;
    padding-top: 30vh;
    background: linear-gradient(to bottom, rgba(255, 255, 255,0) 0%, rgba(14,8,8,1) 12%);
    z-index: 50;
    overflow: hidden;
  }
</style>
