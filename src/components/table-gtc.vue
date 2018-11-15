<template>
    <section class="b-table-gtc">
        <div class="container">
            <p class="g-number">11</p>
            <h3 class="g-caption-section">
                <span>{{t('Minimum and optimal')}}</span>
                <strong class="gradient-text">{{t('growth forecast')}} WB </strong> {{t('for 7 years')}}
            </h3>
            <table class="table">
                <tr class="caption-table">
                    <th colspan="2" class="capt">{{t('Minimum forecast WB token in the next 7 years')}}</th>
                    <th colspan="2" class="capt">{{t('The optimal forecast of the WB token in the next 7 years')}}</th>
                </tr>
                <tr v-for="(tr,index) in tableData" :key="index">
                    <td class="light">{{index}} {{t('year')}}, {{new Date().getFullYear() + index + 1}}</td>
                    <td class="bold">${{price(tr.min)}}</td>
                    <td class="light">{{index}} {{t('year')}}, {{new Date().getFullYear() + index + 1}}</td>
                    <td class="bold">${{price(tr.max)}}</td>
                </tr>
            </table>
        </div>
    </section>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'
  import inViewport from 'vue-in-viewport-mixin'
  import PriceHelper from 'helpers/price'
  import 'gsap/TweenLite'

  export default {
    mixins: [LanguageMixin, inViewport],
    data() {
      return {
        factor: 0
      }
    },
    computed: {
      tableData() {
        return [
          {
            min: 0.133,
            max: 0.133
          },
          {
            min: 0.266,
            max: 0.666
          },
          {
            min: 0.533,
            max: 3.333
          },
          {
            min: 1.066,
            max: 16.66
          },
          {
            min: 2.133,
            max: 83.33
          },
          {
            min: 4.266,
            max: 416.6
          },
          {
            min: 8.533,
            max: 2083
          },
          {
            min: 17.06,
            max: 10416
          }
        ]
      }
    },
    methods: {
      price(price) {
        let fixed = 3
        if (price >= 10 && price < 100) {
          fixed = 2
        }
        if (price >= 100 && price < 1000) {
          fixed = 1
        }
        if (price >= 1000) {
          fixed = 0
        }
        return PriceHelper.format((price * this.factor / 100).toFixed(fixed))
      }
    },
    watch: {
      'inViewport.now': function (visible) {
        if (visible) {
          TweenLite.to(this.$data, 2, {factor: 100})
        }
      }
    }
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-table-gtc {
        position: relative;
        padding-top: 255px;
        padding-bottom: 240px;
        background: @gradientMain,
        url("/img/planet-big.png") no-repeat center bottom;
        z-index: 10;
        .lg-block({ padding-top: 180px; padding-bottom: 200px;});
        .xs-block({ padding-top: 110px; padding-bottom: 100px;});
        .container {
            padding-top: 50px;
            padding-bottom: 50px;
            .md-block({ padding-top: 0; padding-bottom: 0;});
        }
        .g-number {
            .line-after--right();
        }
        .g-caption-section {
            margin-bottom: 70px;
            .sm-block({ margin-bottom: 55px; });
            strong {
                display: block;
            }
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            tr {
                display: flex;
                align-items: center;
                justify-content: space-between;
                th {
                    font-weight: 700;
                    font-size: 2.4rem;
                    letter-spacing: 0.14rem;
                    .sm-block({ font-size: 14px; });
                    .xs-block({ font-size: 12px; });
                }
                &.caption-table {
                    justify-content: space-around;
                    background: @gradientDefault;
                }
                .capt {
                    max-width: 44%;
                    padding: 25px 0;
                    box-sizing: border-box;
                    text-align: center;
                    color: #fff;
                    text-transform: uppercase;
                    .sm-block({ max-width: 48%;});
                }
                &:nth-child(2n) {
                    background: rgba(79, 41, 175, 0.5);
                }
            }
            td {
                padding: 15px 0 15px 45px;
                font-size: 2rem;
                letter-spacing: 0.14rem;
                box-sizing: border-box;
                .sm-block({ padding: 8px 0 8px 8px; font-size: 14px; letter-spacing: 0; });
                .xs-block({ padding: 5px 0 5px 5px; font-size: 12px; });
                &.light {
                    width: 22%;
                    flex-shrink: 0;
                    font-weight: 200;
                    color: #fff;
                }
                &.bold {
                    width: 22%;
                    flex-shrink: 0;
                    font-weight: 900;
                    color: @pinkLight;
                    .xs-block({ font-weight: 600; });
                }

            }
        }
    }
</style>
