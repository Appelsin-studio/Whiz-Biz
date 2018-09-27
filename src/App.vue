<template>
  <div id="app">
    <header-block/>
    <main>
      <bid-block/>
    </main>
    <footer-block/>
  </div>
</template>

<script>
import HeaderBlock from 'components/header'

import BidBlock from 'components/b-bid'

import FooterBlock from 'components/footer'
export default {
  name: 'app',
  components: {
    HeaderBlock,
    BidBlock,
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

  p {
    font-size: 10px;
    &.light {
      font-weight: 200;
    }
    &.regular {
      font-weight: 400;
    }
    &.bold {
      font-weight: 600;
    }
  }
</style>
