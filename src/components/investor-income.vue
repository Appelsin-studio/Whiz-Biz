<template>
    <section class="b-investor-income">
        <div class="container">
            <p class="g-number">13</p>
            <p class="g-caption-section">
                <span class="red">Доход</span>
                <span class="black">инвестора</span>
            </p>
            <div class="description">
                <p class="bold">Технологические активы</p>
                <p class="bonus">
                    <span class="light">Бонус первым</span>
                    <span class="red">100 инвесторам</span>
                </p>
            </div>
            <div class="wrapper">
                <div class="item item--1">
                    <p class="number red">01</p>
                    <div class="text-wrapper">
                        <p class="text">Токены GTC на сумму <span class="bold">0.3 BTC</span></p>
                        <span class="line">o</span>
                        <div class="img">
                            <img src="/img/icon/income-1.png" alt="">
                        </div>
                       <!-- <img src="/img/icon/income-1.png" alt="">-->
                    </div>
                </div>
                <div class="item item--2">
                    <p class="number red">02</p>
                    <div class="text-wrapper">
                        <p class="text">Участие в распределении <span class="bold">15% доли</span> среди всех
                            со-продюсеров</p>
                        <span class="line">o</span>
                        <div class="img">
                            <img src="/img/icon/income-2.png" alt="">
                        </div>
                        <!--<img src="/img/icon/income-2.png" alt="">-->
                    </div>
                </div>
                <div class="item item--3">
                    <p class="number red">03</p>
                    <div class="text-wrapper">
                        <p class="text">Участие в распределении <span class="bold">7% доли</span> от каждой серии среди
                            всех со-продюсеров</p>
                        <span class="line">o</span>
                        <div class="img">
                            <img src="/img/icon/income-3.png" alt="">
                        </div>
                        <!--<img src="/img/icon/income-3.png" alt="">-->
                    </div>
                </div>
            </div>
            <p class="target-desc">Планируется снять <span class="bold">28 сезонов</span> по 12 серий в каждом
                сезоне</p>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-investor-income {
        padding: 150px 0;
        .sm-block({
            padding: 120px 0;
        });
        .xs-block({
            padding: 90px 0;
        });
        .g-number {
            color: #ccc;
        }
        .g-caption-section {
            margin-bottom: 40px;
            .line-after--left(-30px, 50%, #ccc);
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
                font-family: @ProximaExtraBold;
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
                        font-family: @ProximaLight;
                        font-size: 2.4rem;
                        letter-spacing: 0.17rem;
                        color: #000;
                        .sm-block({
                            margin-bottom: 0;
                            margin-right: 5px; });
                    }
                    &.red {
                        font-family: @ProximaExtraBold;
                        font-size: 2.4rem;
                        letter-spacing: 0.17rem;
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
                    font-family: @BebasBold;
                    font-size: 6rem;
                    letter-spacing: 0.4rem;
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
                        font-family: @ProximaLight;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                        color: #000;
                        .bold {
                            font-family: @ProximaExtraBold;
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
                    /*img {
                        transform: translateY(-43%);
                    }*/
                }
            }
        }
        .target-desc {
            font-family: @ProximaLight;
            font-size: 2.4rem;
            letter-spacing: 0.17rem;
            color: #000;
            .bold {
                font-family: @ProximaExtraBold;
            }
        }
    }
</style>
