<template>
    <section class="b-finance-films">
        <div class="skew-block"></div>
        <div class="container">
            <p class="g-number">10</p>
            <h3 class="g-caption-section">
                <span class="black">{{t('Film business is in the top')}} 5</span>
                <span class="gradient-text">{{t('profitable industries')}}</span>
            </h3>
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
            useHTML: true,
            text:
              `<div class="title-diagram">${this.t('Types of income')}</div>
                <div class="desc-diagram">${this.t('from the production<br/>and sale of cinema')}</div>`,
            align: 'center',
            verticalAlign: 'middle',
            y: -10,
            x: 0,
            style: {}
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
                  color: '#ff5489'
                },
                {
                  name: '<div class="chart-label-custom text-align-left"><i>07</i><span>' + this.t('Merchandising') + '</span></div>',
                  y: 1,
                  color: '#ff587c'
                },
                {
                  name: '<div class="chart-label-custom text-align-left"><i>06</i><span>' + this.t('Trains, airplanes, <br/> hotels') + '</span></div>',
                  y: 1,
                  color: '#ff587c'
                },
                {
                  name: '<div class="chart-label-custom text-align-left"><i>05</i><span>' + this.t('Netflix and other<br/>rental services') + '</span></div>',
                  y: 1,
                  color: '#ff4aaf'
                },
                {
                  name: '<div class="chart-label-custom"><i>04</i><span>' + this.t('Selling Internet-<br/>platforms') + '</span></div>',
                  y: 1,
                  color: '#ff42d4'
                },
                {
                  name: '<div class="chart-label-custom"><i>03</i><span>' + this.t('Sale to<br/>other countries') + '</span></div>',
                  y: 1,
                  color: '#ff42d4'
                },
                {
                  name: '<div class="chart-label-custom"><i>02</i><span>' + this.t('Selling<br/>TV channels') + '</span></div>',
                  y: 1,
                  color: '#ff3fd6'
                },
                {
                  name: '<div class="chart-label-custom"><i>01</i><span>' + this.t('Cash<br/>fees') + '</span></div>',
                  y: 1,
                  color: '#ff4ab5'
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
        .title-diagram {
            font-size: 2.6rem;
            text-transform: uppercase;
            text-align: center;
            font-weight: 900;
            font-family: @ProximaNova;
            margin-bottom: 5px;
        }
        .desc-diagram {
            font-family: @ProximaNova;
            font-size: 1.7rem;
            line-height: 1.2;
            text-align: center;
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
            font-family: @ProximaNova;
            font-size: 4rem;
            color: @pinkLight;
            display: block;
            font-weight: 600;
            font-style: normal;
            text-align: right;
            .md-block({ font-size: 2.5rem; });
        }
        > span {
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
        .g-number {
            margin-bottom: 20px;
            color: #000;
            .line-after--right(@gradientDefault);
        }
        .g-caption-section {
            margin-bottom: 110px;
            .sm-block({ margin-bottom: 80px; });
            > span {
                color: #000;
                &.black {
                    display: block;
                    margin-bottom: 10px;
                }
            }
        }
        .pie {
            width: 80%;
            margin: 0 auto;
            .lg-block({ width: 100%; });
        }
    }
</style>
