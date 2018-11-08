<template>
    <section class="b-finance-films">
        <div class="container">
            <p class="g-number">10</p>
            <p class="g-caption-section">
                <span class="gradient-text">{{t('Film business is in the top')}} 5</span>
                <span>{{t('profitable industries')}}</span>
            </p>
            <div class="pie">
                <highcharts v-if="inViewport.now" :options="chartOptions" class="highcharts-block"></highcharts>
                <div v-else style="width: 100%;height: 300px;" class="highcharts-block"></div>
                <img :src="'/img/chart-industries-'+language+'.png'" alt="" class="highcharts-block-img">
            </div>
        </div>
    </section>
</template>
<script>
  import { Chart } from 'highcharts-vue'
  import { LanguageMixin } from 'components/mixins/language-mixin'
  import inViewport from 'vue-in-viewport-mixin'

  export default {
    mixins: [LanguageMixin, inViewport],
    components: {
      highcharts: Chart
    },
    data() {
      return {}
    },
    computed: {
      chartOptions() {
        return {
          chart: {
            type: 'pie',
            height: 9 / 12 * 100 + '%',
            backgroundColor: 'transparent'
          },
          title: {
            text: this.t('Types of income from<br/>the production<br/>and sale of cinema'),
            align: 'center',
            verticalAlign: 'middle',
            y: -20,
            x: -5,
            style: {
              fontSize: '2.6rem',
              fontFamily: '\'ProximaNova\', \'Arial\', sans-serif',
              fontWeight: 900
            }
          },
          plotOptions: {
            pie: {
              innerSize: '80%',
              enableMouseTracking: false
            }
          },
          series: [
            {
              name: this.t('Types of income from the production and sale of cinema'),
              data: [
                {
                  name: '<div class="chart-label-custom text-align-left"><i>08</i><span>DVD</span></div>',
                  y: 1,
                  color: '#f58318'
                },
                {
                  name: '<div class="chart-label-custom text-align-left"><i>07</i><span>' + this.t('Merchandising') + '</span></div>',
                  y: 1,
                  color: '#f68318'
                },
                {
                  name: '<div class="chart-label-custom text-align-left"><i>06</i><span>' + this.t('Trains, airplanes, <br/> hotels') + '</span></div>',
                  y: 1,
                  color: '#f78318'
                },
                {
                  name: '<div class="chart-label-custom text-align-left"><i>05</i><span>' + this.t('Netflix and other<br/>rental services') + '</span></div>',
                  y: 1,
                  color: '#f88318'
                },
                {
                  name: '<div class="chart-label-custom"><i>04</i><span>' + this.t('Selling Internet-<br/>platforms') + '</span></div>',
                  y: 1,
                  color: '#f98318'
                },
                {
                  name: '<div class="chart-label-custom"><i>03</i><span>' + this.t('Sale to<br/>other countries') + '</span></div>',
                  y: 1,
                  color: '#fa8318'
                },
                {
                  name: '<div class="chart-label-custom"><i>02</i><span>' + this.t('Selling<br/>TV channels') + '</span></div>',
                  y: 1,
                  color: '#fb8318'
                },
                {
                  name: '<div class="chart-label-custom"><i>01</i><span>' + this.t('Cash<br/>fees') + '</span></div>',
                  y: 1,
                  color: '#fc9433'
                }
              ],
              dataLabels: {
                useHTML: true,
                connectorColor: '#cbcbcb',
                distance: 70,
                connectorPadding: 10
              }

            }
          ]
        }
      }
    }
  }
</script>
<style lang="less">
    @import "~assets/less/_vars";
    .highcharts-block {
        .sm-block({ display: none });
        &-img {
            display: none;
            .sm-block({ display: block });
        }
    }
    .chart-label-custom {
        transform: translateY(-50%);
        &.text-align-left {
            > i {
                text-align: left;
            }
            > span {
                text-align: left;
            }
        }
        > i {
            font-family: @BebasNeue;
            font-size: 6.5rem;
            color: @blueMain;
            display: block;
            font-weight: 400;
            font-style: normal;
            text-align: right;
            .md-block({ font-size: 4.5rem; });
        }
        > span {
            font-family: @ProximaNova;
            font-size: 2rem;
            text-transform: initial;
            font-weight: 200;
            text-align: right;
            display: block;
            line-height: 2.6rem;
            .md-block({ font-size: 1.8rem; });
        }
    }
</style>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-finance-films {
        position: relative;
        padding: 150px 0 50px;
        color: #000;
        z-index: 15;
        .md-block({ padding: 80px 0 40px; });
        .xs-block({ padding: 60px 0 20px; });
        .g-caption-section {
            margin-bottom: 110px;
            max-width: 650px;
            .line-after--left();
            .sm-block({ margin-bottom: 80px; });
        }
        .pie {
            width: 80%;
            margin: 0 auto;
            .lg-block({ width: 100%; });
        }
    }
</style>
