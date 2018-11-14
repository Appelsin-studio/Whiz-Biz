<template>
    <section class="b-statistics">
        <div class="container">
            <p class="g-number">09</p>
            <h3 class="g-caption-section">
                <span>{{t('American statistics')}}</span>
                <strong class="gradient-text">{{t('cinema profits')}}</strong>
            </h3>
            <p class="roi">ROI {{t('in relation to the size of the budget')}} </p>
            <p class="films">(1600 {{t('released films in 2010 - 2015')}})</p>
            <highcharts v-if="inViewport.now" :options="chartOptions" class="highcharts-block"></highcharts>
            <div v-else style="width: 100%;height: 300px;" class="highcharts-block"></div>
            <charts-svg class="highcharts-block-img"/>
        </div>
    </section>
</template>
<script>
  import { Chart } from 'highcharts-vue'
  import { LanguageMixin } from 'components/mixins/language-mixin'
  import inViewport from 'vue-in-viewport-mixin'
  import ChartsSvg from 'components/charts-svg'

  export default {
    mixins: [LanguageMixin, inViewport],
    components: {
      highcharts: Chart,
      ChartsSvg
    },
    data() {
      return {}
    },
    computed: {
      chartOptions() {
        return {
          chart: {
            height: 6 / 12 * 100 + '%',
            backgroundColor: 'transparent'
          },
          title: {
            text: false
          },
          xAxis: [
            {
              categories: ['$0-$5M', '$5-$10M', '$10-$15M', '$15-$20M', '$20-$25M', '$25-$50M', '$50-$100M', '$100-$300M'],
              labels: {
                style: {
                  fontWeight: 600,
                  color: '#ffffff',
                  fontSize: '12px'
                }
              }
            }
          ],
          yAxis: [
            {
              labels: {
                format: '{value}',
                style: {
                  color: '#ffffff'
                }
              },
              title: {
                text: this.t('Number of films'),
                style: {
                  fontFamily: '\'ProximaNova\', \'Arial\', sans-serif',
                  fontSize: '18px',
                  fontWeight: 200,
                  color: '#ffffff'
                }
              },
              min: 0
            }, {
              title: {
                text: 'ROI',
                style: {
                  fontFamily: '\'ProximaNova\', \'Arial\', sans-serif',
                  fontSize: '18px',
                  fontWeight: 200,
                  color: '#ffffff'
                }
              },
              labels: {
                format: '{value}',
                style: {
                  color: '#ffffff'
                }
              },
              min: 0,
              opposite: true
            }
          ],
          tooltip: {
            shared: true
          },
          plotOptions: {
            series: {
              animation: {
                duration: 2000
              }
            }
          },
          legend: {
            layout: 'vertical',
            align: 'center',
            x: 120,
            verticalAlign: 'top',
            y: 10,
            floating: true,
            itemStyle: {
              fontSize: '14px',
              fontFamily: '\'ProximaNova\', \'Arial\', sans-serif',
              fontWeight: 200,
              color: '#ffffff'
            }
          },
          series: [
            {
              name: this.t('Number of films'),
              type: 'column',
              data: [
                {
                  color: '#f816e0',
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
                  color: '#f816e0'
                }
              },
              color: '#38019d',
              borderWidth: 0,
              softMin: 0,
              dataLabels: {
                enabled: true,
                color: '#ffffff',
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
              color: '#f816e0',
              dataLabels: {
                enabled: true,
                color: '#ffffff',
                align: 'center',
                y: -15,
                style: {
                  fontSize: '18px',
                  fontFamily: '\'ProximaNova\', \'Arial\', sans-serif',
                  fontWeight: 600
                }
              }
            }
          ],
          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 767
                },
                chartOptions: {
                  legend: {
                    x: 80,
                    y: -5,
                    itemStyle: {
                      fontSize: '12px'
                    }
                  },
                  yAxis: [
                    {
                      title: {
                        style: {
                          fontSize: '14px'
                        }
                      }
                    },
                    {
                      title: {
                        style: {
                          fontSize: '14px'
                        }
                      }
                    }
                  ],
                  xAxis: [
                    {
                      labels: {
                        style: {
                          fontSize: '10px'
                        }
                      }
                    }
                  ],
                  series: [
                    {
                      dataLabels: {
                        y: 20,
                        style: {
                          fontSize: '14px'
                        }
                      }

                    }, {
                      dataLabels: {
                        y: 0,
                        style: {
                          fontSize: '14px'
                        }
                      }
                    }
                  ]
                }
              },
              {
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  chart: {},
                  legend: {
                    layout: 'horizontal',
                    align: 'left',
                    x: 0,
                    verticalAlign: 'top',
                    y: 0,
                    floating: false
                  },
                  yAxis: [
                    {
                      title: false
                    }, {
                      title: false
                    }
                  ],
                  xAxis: [
                    {
                      labels: {
                        style: {
                          fontSize: '6px'
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    }
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-statistics {
        position: relative;
        padding-top: 255px;
        padding-bottom: 280px;
        background: url("/img/bg-star.png"), @gradientMain;
        .lg-block({ padding-top: 180px; padding-bottom: 200px;});
        .xs-block({ padding-top: 110px; padding-bottom: 100px;});
        z-index: 10;
        .container {
            padding-top: 50px;
            .md-block({ padding-top: 0;});
        }
        .highcharts-block {
            .xm-block({ display: none });
            &-img {
                .xm-block({ display: block });
            }
        }
        .g-number {
            .line-after--right();
        }
        .g-caption-section {
            margin-bottom: 55px;
            .sm-block({ margin-bottom: 80px; });
            .xs-block({ margin-bottom: 50px; });
        }
        .roi {
            margin-bottom: 10px;
            font-weight: 900;
            font-size: 3rem;
            letter-spacing: 0.2rem;
            color: #fff;
        }
        .films {
            margin-bottom: 50px;
            font-weight: 200;
            font-size: 2rem;
        }
    }
</style>
