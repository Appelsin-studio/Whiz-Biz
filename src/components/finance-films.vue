<template>
    <section class="b-finance-films">
        <div class="container">
            <p class="g-number">10</p>
            <p class="g-caption-section">
                <span class="red">Кинобизнес входит в топ5</span>
                <span>доходных индустрий</span>
            </p>
            <div class="pie">
                <img src="/img/pie.png" alt="">
            </div>
        </div>
    </section>
</template>
<script>
  export  default {
    data () {
      return {

      }
    }
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-finance-films {
        padding: 150px 0 50px;
        color: #000;
        .g-number {
            color: #cccccc;
        }
        .g-caption-section {
            margin-bottom: 110px;
            .line-after--left(-30px, 25%, #ccc);
            span {
                display: block;
            }
        }
        .pie {
            text-align: center;
        }
    }
</style>
