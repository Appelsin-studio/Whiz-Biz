<template>
    <section class="b-finance-films">
        <div class="container">
            <p class="g-number">10</p>
            <p class="g-caption-section">
                <span class="gradient-text">{{t('Film business is in the top')}} 5</span>
                <span>{{t('profitable industries')}}</span>
            </p>
            <div class="pie">
                <highcharts :options="chartOptions"></highcharts>
            </div>
        </div>
    </section>
</template>
<script>
  import { Chart } from 'highcharts-vue'
  import { LanguageMixin } from 'components/mixins/language-mixin'
  export default {
    mixins: [LanguageMixin],
    components: {
      highcharts: Chart
    },
    data() {
      return {
        chartOptions: {
          chart: {
            type: 'pie',
            height: 9 / 12 * 100 + '%'
          },
          title: {
            text: 'Виды дохода от<br/>производства<br/>и продажи кино',
            align: 'center',
            verticalAlign: 'middle',
            y: -20,
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
              name: 'Виды дохода от производства и продажи кино',
              data: [
                {
                  name: '<div class="chart-label-custom text-align-left"><i>08</i><span>DVD</span></div>',
                  y: 1,
                  color: '#f58318'
                },
                {
                  name: '<div class="chart-label-custom text-align-left"><i>07</i><span>Мерчендайзинг</span></div>',
                  y: 1,
                  color: '#f68318'
                },
                {
                  name: '<div class="chart-label-custom text-align-left"><i>06</i><span>Поезда, самолеты,<br/>гостиницы</span></div>',
                  y: 1,
                  color: '#f78318'
                },
                {
                  name: '<div class="chart-label-custom text-align-left"><i>05</i><span>Нетфликс и другие<br/>сервисы проката</span></div>',
                  y: 1,
                  color: '#f88318'
                },
                {
                  name: '<div class="chart-label-custom"><i>04</i><span>Продажа интернет-<br/>платформам</span></div>',
                  y: 1,
                  color: '#f98318'
                },
                {
                  name: '<div class="chart-label-custom"><i>03</i><span>Продажа<br/>в другие страны</span></div>',
                  y: 1,
                  color: '#fa8318'
                },
                {
                  name: '<div class="chart-label-custom"><i>02</i><span>Продажа<br/>телеканалам</span></div>',
                  y: 1,
                  color: '#fb8318'
                },
                {
                  name: '<div class="chart-label-custom"><i>01</i><span>Кассовые<br/>сборы</span></div>',
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
            }]
        }
      }
    }
  }
</script>
<style lang="less">
    @import "~assets/less/_vars";
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
        }
        > span {
            font-family: @ProximaNova;
            font-size: 2rem;
            text-transform: initial;
            font-weight: 200;
            text-align: right;
            display: block;
            line-height: 2.6rem;
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
        .sm-block({ padding: 120px 0 40px; });
        .xs-block({ padding: 80px 0 40px; });
        .g-caption-section {
            margin-bottom: 110px;
            max-width: 650px;
            .line-after--left(-30px, 25%);
            .sm-block({ margin-bottom: 80px; });
        }
        .pie {
            width: 80%;
            margin: 0 auto;
            .sm-block({ width: 100%; });
        }
    }
</style>
