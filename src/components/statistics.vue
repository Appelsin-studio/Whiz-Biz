<template>
    <section class="b-statistics">
        <div class="container">
            <p class="g-number">09</p>
            <p class="g-caption-section">
                <span class="gradient-text">{{t('American statistics')}}</span>
                <span>{{t('cinema profits')}}</span>
            </p>
            <p class="roi">ROI {{t('in relation to the size of the budget')}} </p>
            <p class="films">(1600 {{t('released films in 2010 - 2015')}})</p>
            <highcharts :options="chartOptions"></highcharts>
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
          chart: {},
          title: {
            text: false
          },
          xAxis: [
            {
              categories: ['$0-$5M', '$5-$10M', '$10-$15M', '$15-$20M', '$20-$25M', '$25-$50M', '$50-$100M', '$100-$300M'],
              labels: {
                style: {
                  fontWeight: 600,
                  color: '#000000',
                  fontSize: '12px'
                }
              }
            }
          ],
          yAxis: [
            {
              labels: {
                format: '{value}',
                style: {}
              },
              title: {
                text: 'Количество фильмов',
                style: {
                  fontFamily: '\'ProximaNova\', \'Arial\', sans-serif',
                  fontSize: '18px',
                  fontWeight: 200
                }
              },
              min: 0
            }, {
              title: {
                text: 'ROI',
                style: {
                  fontFamily: '\'ProximaNova\', \'Arial\', sans-serif',
                  fontSize: '18px',
                  fontWeight: 200
                }
              },
              labels: {
                format: '{value}',
                style: {}
              },
              min: 0,
              opposite: true
            }
          ],
          tooltip: {
            shared: true
          },
          legend: {
            layout: 'vertical',
            align: 'center',
            x: 120,
            verticalAlign: 'top',
            y: 10,
            floating: true
          },
          series: [
            {
              name: 'Количество фильмов',
              type: 'column',
              data: [
                {
                  color: '#f5780a',
                  y: 509,
                  dataLabels: {
                    color: '#ffffff'
                  }
                }, 219, 161, 109, 77, 257, 142, 135],
              tooltip: {
                valueSuffix: ''
              },
              states: {
                hover: {
                  color: '#f5780a'
                }
              },
              color: '#ffefe3',
              softMin: 0,
              dataLabels: {
                enabled: true,
                color: '#000000',
                align: 'center',
                y: 30,
                style: {
                  fontSize: '18px',
                  fontFamily: '\'ProximaNova\', \'Arial\', sans-serif',
                  fontWeight: 200
                }
              }

            }, {
              name: 'ROI',
              type: 'line',
              yAxis: 1,
              data: [2.79, 1.39, 1.87, 2.34, 1.73, 1.99, 2.25, 2.85],
              softMin: 0,
              tooltip: {
                valueSuffix: ''
              },
              color: '#5835cd',
              dataLabels: {
                enabled: true,
                color: '#000000',
                align: 'center',
                y: -15,
                style: {
                  fontSize: '18px',
                  fontFamily: '\'ProximaNova\', \'Arial\', sans-serif',
                  fontWeight: 600
                }
              }
            }]
        }
      }
    }
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-statistics {
        position: relative;
        padding-top: 150px;
        .sm-block({ padding-top: 120px; });
        .xs-block({ padding-top: 80px; });
        z-index: 15;
        .g-caption-section {
            margin-bottom: 110px;
            max-width: 640px;
            .line-after--left(-30px, 25%);
            .sm-block({ margin-bottom: 80px; });
            .xs-block({ margin-bottom: 50px; });
        }
        .roi {
            margin-bottom: 10px;
            font-weight: 900;
            font-size: 3rem;
            letter-spacing: 0.2rem;
            color: #000;
        }
        .films {
            margin-bottom: 50px;
            font-weight: 200;
            font-size: 2rem;
        }
    }
</style>
