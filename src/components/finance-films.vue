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
        .sm-block({
            padding: 120px 0 40px;
        });
        .xs-block({
            padding: 80px 0 40px;
        });
        .g-number {
            color: #cccccc;
        }
        .g-caption-section {
            margin-bottom: 110px;
            max-width: 650px;
            .line-after--left(-30px, 25%, #ccc);
            .sm-block({
                margin-bottom: 80px;
            });
        }
        .pie {
            text-align: center;
        }
    }
</style>
