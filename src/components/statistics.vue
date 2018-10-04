<template>
    <section class="b-statistics">
        <div class="container">
            <p class="g-number">09</p>
            <p class="g-caption-section">
                <span class="red">Американская статистика</span>
                <span>прибыли кино</span>
            </p>
            <p class="number-films">1600 выпущенных фильмов в 2010-2015 гг.</p>
            <div class="graph">
                <img src="/img/quantity-films.png" alt="">
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

    .b-statistics {
        padding-top: 150px;
        color: #000;
        .sm-block({
            padding-top: 120px;
        });
        .xs-block({
            padding-top: 80px;
        });
        .g-number {
            color: #cccccc;
        }
        .g-caption-section {
            margin-bottom: 110px;
            max-width: 640px;
            .line-after--left(-30px, 25%, #ccc);
            .sm-block({
                margin-bottom: 80px;
            });
            .xs-block({
                margin-bottom: 50px;
            });
        }
        .number-films {
            margin-bottom: 70px;
            font-family: @ProximaExtraBold;
            font-size: 3rem;
            letter-spacing: 0.2rem;
        }
        .graph {
            text-align: right;
        }
    }
</style>
