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
                        <p class="text-start-finish">старт</p>
                    </div>
                    <div class="step">
                        <p class="number">
                            <span>01</span>
                        </p>
                        <p class="text">Закрытый пресейл. 01/01/2019-31/03/2019 собрать 1 миллион долларов США для запуска мировой PR кампании.</p>

                    </div>
                    <div class="step">
                        <p class="number">
                            <span>02</span>
                        </p>
                        <p class="text"> 01/05/2019 - 31/10/2019 Основной раунд краудсейла фонда WhizBiz. Hardcap $9млн.</p>
                    </div>
                    <div class="step">
                        <p class="number">
                            <span>03</span>
                        </p>
                        <p class="text">Фонд финансирует первый кинопроект Ghost Town. Далее ежегодно финансирует другие крупные проекты путем отбора лучшиx проектов на конкурсной основе.</p>
                    </div>
                    <div class="step-start-finish finish">
                        <p class="text-start-finish">Международная экспансия</p>
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
            padding: 192px 90px 0;
            margin-bottom: 165px;
            @media screen and (max-width: 1350px) {
                padding: 100px 20px 0;
            }
            .sm-block({ padding: 0 0 0 10px; margin-bottom: 60px });
            .road {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-top: 8px solid #ffe9f9;
                @media screen and (max-width: 1350px) {
                    flex-direction: column;
                    border-top: none;
                    border-left: 8px solid #ddedfa;
                }
                .sm-block({ flex-direction: column; border-top: none; border-left: 8px solid #ddedfa; });
                .step {
                    display: flex;
                    max-width: 300px;
                    margin-top: -15px;
                    flex-direction: column;
                    align-items: center;
                    @media screen and (max-width: 1350px) {
                        flex-direction: row;
                        align-items: center;
                        max-width: 100%;
                        margin-top: 0;
                        margin-bottom: 50px;
                        margin-left: -15px;
                    }
                    .sm-block({ margin-bottom: 30px;});
                    .xs-block({ margin-left: -12px; });
                    .number {
                        display: flex;
                        margin-bottom: 24px;
                        flex-direction: column;
                        align-items: center;
                        @media screen and (max-width: 1350px) {
                            flex-direction: row;
                            align-items: center;
                            margin-bottom: 0;
                            margin-right: 15px;
                        }
                        .xs-block({ margin-right: 0;});
                        span {
                            width: 70px;
                            color: @pinkLight;
                            font-weight: 900;
                            font-size: 6rem;
                            letter-spacing: 0.4rem;
                            margin-top: 20px;
                            @media screen and (max-width: 1350px) {
                                margin-top: 0;
                            }
                            .sm-block({ margin-top: 5px; width: 50px;});
                        }
                        &::before {
                            content: '';
                            display: inline-block;
                            margin-bottom: 15px;
                            width: 22px;
                            height: 22px;
                            background-color: #fff;
                            border: 6px solid @pinkLight;
                            border-radius: 50%;
                            box-sizing: border-box;
                            box-shadow: 0 0 20px 0 rgba(248, 22, 224, 0.45);
                            @media screen and (max-width: 1350px) {
                                margin-bottom: 0;
                                margin-right: 25px;
                            }
                            .sm-block({ margin-right: 10px;});
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
                        text-align: center;
                        @media screen and (max-width: 1350px) {
                            text-align: left;
                        }

                    }
                }
                .step-start-finish {
                    position: relative;
                    display: flex;
                    margin-top: -15px;
                    flex-direction: column;
                    align-items: center;
                    @media screen and (max-width: 1350px) {
                        flex-direction: row;
                        margin-top: 0;
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
                        @media screen and (max-width: 1350px) {
                            position: absolute;
                            left: -15px;
                        }
                        .sm-block({ position: absolute; left: -15px; });
                        .xs-block({ left: -12px; width: 15px; height: 15px; border-width: 4px; });
                    }
                    &.start {
                        margin-left: -5px;
                        align-items: normal;
                        @media screen and (max-width: 1350px) {
                            margin-left: 0;
                            margin-top: -10px;
                            margin-bottom: 50px;
                        }
                        .sm-block({ margin-bottom: 20px; });
                        .text-start-finish {
                            transform: translateX(-50%);
                            @media screen and (max-width: 1350px) {
                                transform: translateX(0);
                                top: -10px;
                            }
                            .sm-block({ top: -4px; });
                        }
                    }
                    &.finish {
                        margin-right: -5px;
                        @media screen and (max-width: 1350px) {
                            margin-top: 20px;
                            margin-right: 0;
                            margin-bottom: -10px;
                        }
                        .sm-block({ margin-top: 0;  align-items: flex-end;});
                        .text-start-finish {
                            max-width: 340px;
                            right: 50%;
                            transform: translateX(50%);
                            text-align: center;
                            @media screen and (max-width: 1350px) {
                                transform: translateX(0);
                                right: auto;
                                top: -15px;
                                max-width: none;
                            }
                            .sm-block({ top: 0; text-align: left;});
                        }
                    }
                    .text-start-finish {
                        position: absolute;
                        top: -100px;
                        font-weight: 900;
                        font-size: 3rem;
                        letter-spacing: 0.2rem;
                        color: #000;
                        text-transform: uppercase;
                        @media screen and (max-width: 1350px) {
                            left: 50px;
                        }
                        .sm-block({ position: relative; left: 0; padding-left: 35px;});
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
