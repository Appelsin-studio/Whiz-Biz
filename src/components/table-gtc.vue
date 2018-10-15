<template>
    <section class="b-table-gtc">
        <div class="container">
            <p class="g-number">11</p>
            <p class="g-caption-section">
                <span>{{t('Minimum and optimal')}}</span>
                <span class="gradient-text">{{t('growth forecast')}} Gtc </span> {{t('for 7 years')}}
            </p>
            <table class="table">
                <tr class="caption-table">
                    <th colspan="2" class="capt">{{t('Minimum forecast GTC token in the next 7 years')}}</th>
                    <th colspan="2" class="capt">{{t('The optimal forecast of the GTC token in the next 7 years')}}</th>
                </tr>
                <tr v-for="(tr,index) in tableData" :key="index">
                    <td class="light">{{index}} {{t('year')}}, {{new Date().getFullYear() + index + 1}}</td>
                    <td class="bold">${{price(tr.min)}}</td>
                    <td class="light">0 {{t('year')}}, {{new Date().getFullYear() + index + 1}}</td>
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
          TweenLite.to(this.$data, 4, {factor: 100})
        }
      }
    }
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-table-gtc {
        position: relative;
        padding: 150px 0;
        z-index: 15;
        .sm-block({ padding: 120px 0; });
        .xs-block({ padding: 80px 0; });
        .g-caption-section {
            margin-bottom: 70px;
            max-width: 780px;
            color: #000;
            .line-after--left(-30px, 25%);
            .sm-block({ margin-bottom: 55px; });
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
                }
                .capt {
                    max-width: 44%;
                    padding-bottom: 45px;
                    box-sizing: border-box;
                    text-align: center;
                    color: #000;
                    text-transform: uppercase;
                    .sm-block({ max-width: 48%; padding-bottom: 25px; });
                }
                &:nth-child(2n) {
                    background: #e8e4f3;
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
                    color: #000;
                }
                &.bold {
                    width: 22%;
                    flex-shrink: 0;
                    font-weight: 900;
                    color: @orangeMain;
                    .xs-block({ font-weight: 600; });
                }

            }
        }
    }
</style>
