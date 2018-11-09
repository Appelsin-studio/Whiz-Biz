<template>
    <section class="b-investor-income">
        <div class="container">
            <p class="g-number">13</p>
            <p class="g-caption-section">
                <span class="gradient-text">{{t('Investor')}}</span>
                <span class="black">{{t('income')}}</span>
            </p>
            <div class="description">
                <p class="bonus">
                    <span class="light">{{t('Bonus first')}}</span>
                    <span class="orange">100 {{t('to investors')}}</span>
                </p>
            </div>
            <ul class="list">
                <li class="item">
                    <p class="number">01</p>
                    <p class="text">{{t('GTC Tokens in the amount of')}} <span class="bold">0.3 BTC</span></p>
                </li>
                <li class="item">
                    <p class="number">02</p>
                    <p class="text">
                        {{t('Participation in the distribution')}}
                        <span class="bold">15% {{t('shares')}}</span> {{t('among all co-producers')}}
                    </p>
                </li>
                <li class="item">
                    <p class="number">03</p>
                    <p class="text">
                        {{t('Participation in the distribution of')}}
                        <span class="bold">7% {{t('share')}}</span> {{t('of each series among all co-producers')}}
                    </p>
                </li>
            </ul>
            <p class="target-desc">
                {{t('It is planned to shoot')}} <span class="bold">28 {{t('seasons')}}</span>
                {{t('of 12 episodes in each season.')}}
            </p>
        </div>
    </section>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-investor-income {
        position: relative;
        z-index: 10;
        padding-top: 270px;
        padding-bottom: 250px;
        background: linear-gradient(to right, rgba(19, 72, 182, 0.85) 0%, rgba(179, 15, 255, 1) 100%),
        url("/img/bg-guitar.jpg") no-repeat left top / cover;
        .lg-block({ padding-top: 130px; });
        .md-block({ padding-top: 90px; });
        .g-number {
            .line-after--right();
        }
        .g-caption-section {
            margin-bottom: 74px;
            span {
                display: block;
            }
            .gradient-text {
                font-size: 10rem;
                line-height: 1.4;
            }
            .black {
            }
        }
        .description {
            margin-bottom: 120px;
            .bonus {
                > span {
                    font-size: 2.8rem;
                    &.light {
                        margin-bottom: 10px;
                        font-weight: 200;
                        letter-spacing: 0.17rem;
                        color: #fff;
                        .sm-block({ margin-bottom: 0; margin-right: 5px; });
                    }
                    &.orange {
                        font-weight: 600;
                        letter-spacing: 0.17rem;
                        color: @pinkLight;
                    }
                }
            }
        }
        .list {
            .row-flex();
            margin-bottom: 80px;
            .sm-block({ margin-bottom: 50px; });
            .item {
                .col();
                .size(4);
                border: 10px solid @pinkLight;
                height: 335px;
                padding: 30px;
                padding-top: 85px;
                text-align: center;
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    top: -5px;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 130px;
                    height: 130px;
                    background: @gradientDefault;
                    border-radius: 50%;
                    box-shadow: 0 0 30px 0 @pinkLight;
                }
                .number {
                    font-weight: 600;
                    font-size: 4rem;
                    letter-spacing: 0.4rem;
                    color: #fff;
                    margin-bottom: 29px;
                }
                .text {
                    position: relative;
                    max-width: 380px;
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    color: #fff;
                    .bold {
                        font-weight: 900;
                    }
                }
            }
        }
        .target-desc {
            font-weight: 200;
            font-size: 2.4rem;
            letter-spacing: 0.17rem;
            color: #fff;
            .bold {
                font-weight: 900;
                color: @pinkLight;
            }
        }
    }
</style>
