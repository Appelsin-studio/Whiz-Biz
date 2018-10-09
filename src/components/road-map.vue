<template>
    <section class="b-road-map">
        <div class="container">
            <p class="g-number">14</p>
            <p class="g-caption-section">
                <span class="black">Дорожная</span>
                <span class="gradient-text">карта</span>
            </p>
            <p class="description--top">
                <span class="light">План реализации проекта </span>
                <strong class="bold">&#10077;Ghost Town&#10078;</strong></p>
            <div class="road-wrapper">
                <div class="road">
                    <div class="step-start-finish start">
                        <p class="text-start-finish">start</p>
                    </div>
                    <div class="step">
                        <p class="number">
                            <span>01</span>
                        </p>
                        <p class="text">Производство и продажа фильма</p>
                    </div>
                    <div class="step">
                        <p class="number">
                            <span>02</span>
                        </p>
                        <p class="text">Crowdsale GTC Hardcap 9 млн. $</p>
                    </div>
                    <div class="step">
                        <p class="number">
                            <span>03</span>
                        </p>
                        <p class="text">Собрать бюджет 100 BTC через продажи CGEN для запуска PR кампании</p>
                    </div>
                    <div class="step-start-finish finish">
                        <p class="text-start-finish">finish</p>
                    </div>
                </div>
            </div>
            <div class="profit-wrapper">
                <p class="black">Инвестору выгодно с первых дней</p>
                <div class="btc">
                    <p class="text text--orange">1 BTC = 20 000 000 CGEN</p>
                    <p class="span-block">
                        <span>20 000 000 CGEN POS mining</span>
                        <span>1 год + 10 000 000 CGEN</span>
                    </p>
                </div>
                <div class="prognosis">
                    <p class="text text--blue">Прогноз цены 2020 год =</p>
                    <p class="span-block">
                        <span>0,000001 BTC (100 сатоши)</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-road-map {
        padding: 150px 0;
        .sm-block({
            padding: 120px 0;
        });
        .xs-block({
            padding: 90px 0;
        });
        .g-caption-section {
            margin-bottom: 40px;
            .line-after--left(-30px, 50%, #fff);
            .black {
                color: #000;
            }
        }
        .description--top {
            font-size: 3rem;
            letter-spacing: 0.2rem;
            color: #000;
            .sm-block({
                margin-bottom: 50px;
            });
            .light {
                display: block;
                font-weight: 200;
            }
            .bold {
                font-weight: 900;
            }
        }
        .road-wrapper {
            padding: 250px 40px 0;
            margin-bottom: 80px;
            .sm-block({
                padding: 0 0 0 10px;
            });
            .road {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-top: 8px solid #ddedfa;
                .sm-block({
                    flex-direction: column;
                    border-top: none;
                    border-left: 8px solid #ddedfa;
                });
                .step {
                    display: flex;
                    max-width: 250px;
                    margin-top: -15px;
                    flex-direction: column;
                    align-items: flex-start;
                    .sm-block({
                        flex-direction: row;
                        align-items: center;
                        max-width: 100%;
                        margin-top: 0;
                        margin-bottom: 20px;
                        margin-left: -15px;
                    });
                    .number {
                        display: flex;
                        margin-bottom: 15px;
                        flex-direction: column;
                        align-items: center;
                        span {
                            font-family: @BebasNeue;
                            font-weight: 600;
                            font-size: 6rem;
                            letter-spacing: 0.4rem;
                            color: @orangeMain;
                            .sm-block({
                                margin-top: 5px;
                            });
                        }
                        .sm-block({
                            flex-direction: row;
                            align-items: center;
                            margin-bottom: 0;
                            margin-right: 15px;
                        });
                        &::before {
                            content: '';
                            display: inline-block;
                            margin-bottom: 15px;
                            width: 22px;
                            height: 22px;
                            background-color: #fff;
                            border: 6px solid @orangeMain;
                            border-radius: 50%;
                            box-sizing: border-box;
                            .sm-block({
                                margin-bottom: 0;
                                margin-right: 10px;
                            });
                        }
                    }
                    .text {
                        font-weight: 200;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                    }
                }
                .step-start-finish {
                    position: relative;
                    display: flex;
                    margin-top: -15px;
                    flex-direction: column;
                    align-items: center;
                    .sm-block({
                        flex-direction: row;
                        align-items: center;
                        margin-top: 0;
                    });
                    &.start {
                        margin-left: -5px;
                        .sm-block({
                            margin-left: 0;
                            margin-top: -10px;
                            margin-bottom: 20px;
                        });
                    }
                    &.finish {
                        margin-right: -5px;
                        .sm-block({
                            margin-right: 0;
                            margin-bottom: -10px;
                        });
                    }
                    &::after {
                        content: '';
                        display: inline-block;
                        margin-left: 0;
                        width: 22px;
                        height: 22px;
                        background-color: #fff;
                        border: 6px solid @orangeMain;
                        border-radius: 50%;
                        box-sizing: border-box;
                        .sm-block({
                            position: absolute;
                            left: -15px;
                        });
                    }
                    &::before {
                        content: '';
                        position: absolute;
                        display: inline-block;
                        top: -106px;
                        width: 15px;
                        height: 100px;
                        background: radial-gradient(ellipse at center, @grayMain 2px, @grayMain 2px, transparent 17%);
                        background-size: 15px 15px;
                        background-repeat: repeat-y;
                        background-position: 0 center;
                        box-sizing: border-box;
                        .sm-block({
                            position: relative;
                            top: auto;
                            margin: 0 10px;
                            width: 100px;
                            height: 15px;
                            background-repeat: repeat-x;
                        });
                    }
                    .text-start-finish {
                        position: absolute;
                        top: -140px;
                        font-weight: 900;
                        font-size: 3rem;
                        letter-spacing: 0.2rem;
                        color: #000;
                        text-transform: uppercase;
                        .sm-block({
                            position: relative;
                            top: auto;
                        });
                    }
                }
            }
        }
        .profit-wrapper {
            max-width: 560px;
            .btc {
                margin-bottom: 40px;
            }
            .black {
                margin-bottom: 35px;
                font-weight: 900;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
                color: #000;
                text-transform: uppercase;
            }
            .text {
                margin-bottom: 15px;
                font-weight: 900;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
                &.text--orange {
                    color: @orangeMain;
                }
                &.text--blue{
                    color: @blueMain;
                }
            }
            .span-block {
                font-weight: 200;
                font-size: 2rem;
                letter-spacing: 0.14rem;
                span {
                    display: block;
                }
            }
        }
    }

</style>
