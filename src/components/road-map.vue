<template>
    <section class="b-road-map">
        <div class="container">
            <p class="g-number">14</p>
            <p class="g-caption-section">
                <span class="black">Дорожная</span>
                <span class="white">карта</span>
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
                        <p class="number">01</p>
                        <p class="text">Производство и продажа фильма</p>
                    </div>
                    <div class="step">
                        <p class="number">02</p>
                        <p class="text">Crowdsale GTC Hardcap 9 млн. $</p>
                    </div>
                    <div class="step">
                        <p class="number">03</p>
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
                    <p class="white">1 BTC = 20 000 000 CGEN</p>
                    <p class="pink span-block">
                        <span>20 000 000 CGEN POS mining</span>
                        <span>1 год + 10 000 000 CGEN</span>
                    </p>
                </div>
                <div class="prognosis">
                    <p class="white">Прогноз цены 2020 год =</p>
                    <p class="pink">0,000001 BTC (100 сатоши)</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-road-map {
        padding: 150px 0;
        background: #b53131;
        .sm-block({
            padding: 120px 0;
        });
        .g-number {
            color: #fff;
        }
        .g-caption-section {
            margin-bottom: 40px;
            .line-after--left(-30px, 50%, #fff);
            .black {
                color: #000;
            }
            .white {
                color: #fff;
            }
        }
        .description--top {
            font-size: 3rem;
            letter-spacing: 0.2rem;
            .sm-block({
                margin-bottom: 50px;
            });
            .light {
                display: block;
                font-family: @ProximaLight;
            }
            .bold {
                font-family: @ProximaExtraBold;
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
                border-top: 8px solid #a62828;
                .sm-block({
                    flex-direction: column;
                    border-top: none;
                    border-left: 8px solid #a62828;
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
                        font-family: @BebasBold;
                        font-size: 6rem;
                        letter-spacing: 0.4rem;
                        color: #000;
                        .sm-block({
                            flex-direction: row;
                            align-items: center;
                            margin-bottom: 0;
                        });
                        &::before {
                            content: '';
                            display: inline-block;
                            margin-bottom: 15px;
                            width: 22px;
                            height: 22px;
                            background-color: #a62828;
                            border: 6px solid #fff;
                            border-radius: 50%;
                            box-sizing: border-box;
                            .sm-block({
                                margin-bottom: 0;
                            });
                        }
                    }
                    .text {
                        font-family: @ProximaLight;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                        color: #ffa8a8;
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
                        .sm-block({
                            margin-top: -10px;
                        });
                    }
                    &.finish {
                        .sm-block({
                            margin-bottom: -10px;
                        });
                    }
                    &::after {
                        content: '';
                        display: inline-block;
                        margin-left: 0;
                        width: 22px;
                        height: 22px;
                        background-color: #a62828;
                        border: 6px solid #fff;
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
                        background: radial-gradient(ellipse at center, #fff 2px, #fff 2px, transparent 17%);
                        background-size: 15px 15px;
                        background-repeat: repeat-y;
                        background-position: 0 center;
                        box-sizing: border-box;
                        .sm-block({
                            position: relative;
                            top: auto;
                            width: 100px;
                            height: 15px;
                            background-repeat: repeat-x;
                        });
                    }
                    .text-start-finish {
                        position: absolute;
                        top: -140px;
                        font-family: @ProximaExtraBold;
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
                font-family: @ProximaExtraBold;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
                color: #000;
                text-transform: uppercase;
            }
            .white {
                margin-bottom: 15px;
                font-family: @ProximaExtraBold;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
                color: #fff;
            }
            .pink {
                font-family: @ProximaLight;
                font-size: 2rem;
                letter-spacing: 0.14rem;
                color: #ffa8a8;
                &.span-block {
                    span {
                        display: block;
                    }
                }
            }
        }
    }

</style>
