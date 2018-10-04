<template>
    <section class="b-mission-fond">
        <div class="container">
            <div class="wrapper">
                <div class="caption-absolute">
                    <p class="g-number">03</p>
                    <p class="g-caption-section">Наша <strong class="red">цель</strong></p>
                    <p class="description">
                        Целью компании является создание платформы под брендом GTC, стать предпочтительным порталом
                        для инвестиций в индустрии развлечения и для своих криптографических токенов стать
                        стандартной валютой в новой голливудской экономике, усиленной преимуществами цифровых
                        активов. <br><br>
                        Компания работает в трех основных сегментах: финансирование, производство и продажа. <br><br>
                        Привлечение инвестиции на проект реализуется с помощью платформы CrowdSaleNetwork
                    </p>
                </div>
                <div class="red-coub">
                    <img class="img" src="/img/mission-fond.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-mission-fond {
        padding-bottom: 160px;
        background: url("/img/mission-fond-bg.jpg") no-repeat center bottom / contain;
        .sm-block({
            padding-bottom: 135px;
        });
        .xs-block({
            padding-bottom: 80px;
        });
        .wrapper {
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .caption-absolute {
                position: absolute;
                max-width: 55%;
                right: 0;
                z-index: 99;
                .md-block({
                    max-width: 70%;
                });
                .sm-block({
                    padding-left: 20px;
                    padding-right: 20px;
                    max-width: 100%;
                    text-align: right;
                });
                .g-caption-section {
                    .line-after--right(-20px);
                    .red {
                        font-weight: 600;
                    }
                }
                .description {
                    font-family: @ProximaLight;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                }
            }
            .red-coub {
                position: relative;
                max-width: 730px;
                width: 100%;
                height: 540px;
                box-sizing: border-box;
                z-index: 5;
                flex-shrink: 0;
                border-right: 5px solid rgba(196, 45, 45, 0.2);
                border-left: 5px solid rgba(196, 45, 45, 1);
                background-image:
                    linear-gradient(90deg, rgba(196, 45, 45, 1), rgba(196, 45, 45, 0.2)),
                    linear-gradient(90deg, rgba(196, 45, 45, 1), rgba(196, 45, 45, 0.2));
                background-size: 100% 5px;
                background-position: 0 0, 0 100%;
                background-repeat: no-repeat;
                .xs-block({
                    height: 375px;
                });
                .img {
                    position: absolute;
                    top: 70px;
                    left: 70px;
                    .md-block({
                        display: none;
                    });
                }
            }
        }

    }
</style>
