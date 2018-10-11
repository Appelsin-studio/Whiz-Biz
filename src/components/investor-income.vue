<template>
    <section class="b-investor-income">
        <div class="container">
            <p class="g-number">13</p>
            <p class="g-caption-section">
                <span class="gradient-text">{{t('Investor')}}</span>
                <span class="black">{{t('income')}}</span>
            </p>
            <div class="description">
                <p class="bold">{{t('Technological assets')}}</p>
                <p class="bonus">
                    <span class="light">{{t('Bonus first')}}</span>
                    <span class="orange">100 {{t('to investors')}}</span>
                </p>
            </div>
            <div class="wrapper">
                <div class="item item--1">
                    <p class="number">01</p>
                    <div class="text-wrapper">
                        <p class="text">{{t('GTC Tokens in the amount of')}} <span class="bold">0.3 BTC</span></p>
                        <span class="line">o</span>
                        <div class="img">
                            <img src="/img/icon/income-1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="item item--2">
                    <p class="number">02</p>
                    <div class="text-wrapper">
                        <p class="text">{{t('Participation in the distribution')}} <span class="bold">15% {{t('shares')}}</span> {{t('among all co-producers')}}</p>
                        <span class="line">o</span>
                        <div class="img">
                            <img src="/img/icon/income-2.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="item item--3">
                    <p class="number">03</p>
                    <div class="text-wrapper">
                        <p class="text">{{t('Participation in the distribution of')}} <span class="bold">7% {{t('share')}}</span> {{t('of each series among all co-producers')}}</p>
                        <span class="line">o</span>
                        <div class="img">
                            <img src="/img/icon/income-3.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <p class="target-desc">{{t('It is planned to shoot')}} <span class="bold">28 {{t('seasons')}}</span>
                {{t('of 12 episodes in each season.')}}</p>
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
        padding: 150px 0;
        z-index: 15;
        .sm-block({
            padding: 120px 0;
        });
        .xs-block({
            padding: 90px 0;
        });
        .g-caption-section {
            margin-bottom: 40px;
            .line-after--left();
            .black {
                color: #000;
            }
        }
        .description {
            display: flex;
            margin-bottom: 70px;
            justify-content: space-between;
            align-items: flex-start;
            .sm-block({
                margin-bottom: 50px;
                flex-direction: column;
                justify-content: flex-start; });
            .bold {
                font-weight: 900;
                font-size: 3rem;
                letter-spacing: 0.2rem;
                color: #000;
                text-transform: uppercase;
                .sm-block({
                    margin-bottom: 10px;
                });
            }
            .bonus {
                > span {
                    display: block;
                    .sm-block({
                        display: inline-block;
                    });
                    &.light {
                        margin-bottom: 10px;
                        font-weight: 200;
                        font-size: 2.4rem;
                        letter-spacing: 0.17rem;
                        color: #000;
                        .sm-block({
                            margin-bottom: 0;
                            margin-right: 5px; });
                    }
                    &.orange {
                        font-weight: 900;
                        font-size: 2.4rem;
                        letter-spacing: 0.17rem;
                        color: @orangeMain;
                    }
                }
            }
        }
        .wrapper {
            display: flex;
            margin-bottom: 80px;
            flex-direction: column;
            .sm-block({
                margin-bottom: 50px;
            });
            .item {
                margin-bottom: 60px;
                max-width: 800px;
                width: 100%;
                .sm-block({
                    margin-bottom: 30px;
                });
                &:last-child {
                    margin-bottom: 0;
                }
                &--1 {
                    align-self: flex-start;
                }
                &--2 {
                    align-self: center;
                }
                &--3 {
                    align-self: flex-end;
                }
                .number {
                    font-family: @BebasNeue;
                    font-weight: 600;
                    font-size: 6rem;
                    letter-spacing: 0.4rem;
                    color: @orangeMain;
                }
                .text-wrapper {
                    display: flex;
                    align-items: flex-start;
                    .sm-block({
                        justify-content: space-between;
                    });
                    .text {
                        position: relative;
                        max-width: 380px;
                        font-weight: 200;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                        color: #000;
                        .bold {
                            font-weight: 900;
                        }
                    }
                    .line {
                        display: inline-block;
                        margin-left: 33px;
                        flex-grow: 5;
                        font-size: 2rem;
                        color: transparent;
                        background: radial-gradient(ellipse at center, #a8a8a8 2px, #a8a8a8 2px, transparent 23%);
                        background-size: 15px 15px;
                        background-repeat: repeat-x;
                        background-position: 0 center;
                        .sm-block({
                            display: none;
                        });
                    }
                    .img {
                        display: flex;
                        margin-left: 33px;
                        flex-shrink: 0;
                        width: 100px;
                        height: 100px;
                        align-items: center;
                        justify-content: flex-start;
                        transform: translateY(-43%);
                        .sm-block({
                            width: 70px;
                            height: 70px;
                        });
                        .sm-block({
                            margin-left: 20px;
                            width: 50px;
                            height: 50px;
                        });
                        img {
                            max-height: 100%;
                        }
                    }
                }
            }
        }
        .target-desc {
            font-weight: 200;
            font-size: 2.4rem;
            letter-spacing: 0.17rem;
            color: #000;
            .bold {
                font-weight: 900;
            }
        }
    }
</style>
