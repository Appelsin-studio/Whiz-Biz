<template>
  <div id="app">
    <p class="light">Hello World</p>
    <p class="regular">Hello World</p>
    <p class="bold">Hello World</p>
  </div>
</template>

<script>
  import Vue from 'vue'

export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
  @import "assets/less/main.less";
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
