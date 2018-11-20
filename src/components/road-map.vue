<template>
    <section class="b-road-map">
        <div class="skew-block"></div>
        <div class="container">
            <p class="g-number">14</p>
            <p class="g-caption-section">
                <span class="black">{{t('Road')}}</span>
                <span class="gradient-text">{{t('map')}}</span>
            </p>
            <p class="description--top">
                <span class="light">{{t('Project Implementation Plan')}} </span>
                <strong class="bold">“Ghost Town”</strong></p>
            <div class="road-wrapper">
                <div class="road">
                    <div class="step-start-finish start">
                        <p class="text-start-finish">start</p>
                    </div>
                    <div class="step">
                        <p class="number">
                            <span>01</span>
                        </p>
                        <p class="text">{{t('Build a budget of 100 BTC through CGEN sales to launch a PR campaign')}}</p>

                    </div>
                    <div class="step">
                        <p class="number">
                            <span>02</span>
                        </p>
                        <p class="text">Crowdsale WB Hardcap 9 {{t('million')}} $</p>
                    </div>
                    <div class="step">
                        <p class="number">
                            <span>03</span>
                        </p>
                        <p class="text">{{t('Production and sale of the film')}}</p>
                    </div>
                    <div class="step-start-finish finish">
                        <p class="text-start-finish">finish</p>
                    </div>
                </div>
            </div>
            <div class="profit-wrapper">
                <p class="black">{{t('Investor profitable from the first days')}}</p>
                <ul class="prices-list">
                    <li>
                        <p class="text">6650$ = 50 000 WBC</p>
                        <p class="span-block">{{t('Take part in mining and earn by supporting art')}}</p>
                    </li>
                </ul>
            </div>
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
    .b-road-map {
        position: relative;
        z-index: 15;
        .container {
            padding-top: 50px;
            .md-block({ padding-top: 0;});
        }
        .g-number {
            margin-bottom: 31px;
            color: #000;
            .line-after--right(@gradientDefault);
        }
        .g-caption-section {
            margin-bottom: 23px;
            .md-block({ margin-bottom: 80px; });
            .xs-block({ margin-bottom: 40px; });
            span {
                color: #000;
            }
            .gradient-text {
                display: block;
                font-size: 10rem;
            }
        }
        .description--top {
            font-size: 3rem;
            letter-spacing: 0.2rem;
            color: #000;
            .sm-block({ margin-bottom: 50px; });
            .light {
                font-weight: 200;
            }
            .bold {
                text-transform: uppercase;
                color: @pinkLight;
                font-weight: 900;
                .sm-block({ display: block; })
            }
        }
        .road-wrapper {
            padding: 192px 40px 0;
            margin-bottom: 165px;
            .md-block({ padding: 230px 40px 0; });
            .sm-block({ padding: 0 0 0 10px; margin-bottom: 60px });
            .road {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-top: 8px solid #ffe9f9;
                .sm-block({ flex-direction: column; border-top: none; border-left: 8px solid #ddedfa; });
                .step {
                    display: flex;
                    max-width: 250px;
                    margin-top: -15px;
                    flex-direction: column;
                    align-items: flex-start;
                    .sm-block({ flex-direction: row; align-items: center; max-width: 100%; margin-top: 0; margin-bottom: 20px; margin-left: -15px; });
                    .xs-block({ margin-left: -12px; });
                    .number {
                        display: flex;
                        margin-bottom: 24px;
                        flex-direction: column;
                        align-items: center;
                        span {
                            color: @pinkLight;
                            font-weight: 900;
                            font-size: 6rem;
                            letter-spacing: 0.4rem;
                            margin-top: 20px;
                            .sm-block({ margin-top: 5px; });
                        }
                        .sm-block({ flex-direction: row; align-items: center; margin-bottom: 0; margin-right: 15px; });
                        &::before {
                            content: '';
                            display: inline-block;
                            margin-bottom: 15px;
                            margin-right: 37px;
                            width: 22px;
                            height: 22px;
                            background-color: #fff;
                            border: 6px solid @pinkLight;
                            border-radius: 50%;
                            box-sizing: border-box;
                            box-shadow: 0 0 20px 0 rgba(248, 22, 224, 0.45);
                            .sm-block({ margin-bottom: 0; margin-right: 10px; });
                            .xs-block({ width: 15px; height: 15px; border: 4px solid @pinkLight; });
                        }
                    }
                    .text {
                        font-weight: 200;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                        color: @grayMain;
                        line-height: 1.4;
                        padding: 0 10px;
                    }
                }
                .step-start-finish {
                    position: relative;
                    display: flex;
                    margin-top: -15px;
                    flex-direction: column;
                    align-items: center;
                    .sm-block({ flex-direction: row; align-items: center; margin-top: 0; });
                    &.start {
                        margin-left: -5px;
                        min-width: 130px;
                        align-items: normal;
                        .sm-block({ margin-left: 0; margin-top: -10px; margin-bottom: 20px; });
                    }
                    &.finish {
                        margin-right: -5px;
                        .sm-block({ margin-right: 0; margin-bottom: -10px; });
                    }
                    &::after {
                        content: '';
                        display: inline-block;
                        margin-left: 0;
                        width: 22px;
                        height: 22px;
                        background-color: #fff;
                        border: 6px solid @pinkLight;
                        border-radius: 50%;
                        box-sizing: border-box;
                        box-shadow: 0 0 20px 0 rgba(248, 22, 224, 0.45);
                        .sm-block({ position: absolute; left: -15px; });
                        .xs-block({ left: -12px; width: 15px; height: 15px; border-width: 4px; });
                    }
                    &.finish {
                        .text-start-finish {
                            transform: translateX(-60%);
                            .sm-block({ transform: translateX(0); });
                        }
                    }
                    .text-start-finish {
                        position: absolute;
                        top: -66px;
                        left: 0;
                        transform: translateX(-20%);
                        font-weight: 900;
                        font-size: 3rem;
                        letter-spacing: 0.2rem;
                        color: #000;
                        text-transform: uppercase;
                        .sm-block({ position: relative; top: auto; padding-left: 20px; transform: translateX(0); });
                    }
                }
            }
        }
        .profit-wrapper {
            .black {
                margin-bottom: 62px;
                font-weight: 900;
                font-size: 3rem;
                letter-spacing: 0.17rem;
                color: #000;
                text-transform: uppercase;
                .sm-block({ margin-bottom: 25px });
            }
            .prices-list {
                .row-flex();
                li {
                    .col();
                    .size(12);
                    .text {
                        margin-bottom: 15px;
                        font-weight: 900;
                        font-size: 2.4rem;
                        letter-spacing: 0.17rem;
                        text-transform: uppercase;
                        color: @pinkLight;
                    }
                    .span-block {
                        color: @grayMain;
                        font-weight: 200;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                    }
                }
            }

        }
    }

</style>
