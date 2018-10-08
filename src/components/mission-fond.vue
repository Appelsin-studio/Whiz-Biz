<template>
    <section class="b-mission-fond">
        <div class="container">
            <div class="wrapper">
                <div class="caption-absolute">
                    <p class="g-number">03</p>
                    <p class="g-caption-section">Наша <strong class="gradient-text">цель</strong></p>
                    <p class="description">
                        Целью компании является создание платформы под брендом GTC, стать предпочтительным порталом
                        для инвестиций в индустрии развлечения и для своих криптографических токенов стать
                        стандартной валютой в новой голливудской экономике, усиленной преимуществами цифровых
                        активов. <br><br>
                        Компания работает в трех основных сегментах: финансирование, производство и продажа. <br><br>
                        Привлечение инвестиции на проект реализуется с помощью платформы CrowdSaleNetwork
                    </p>
                </div>
                <div class="img">
                    <img  src="/img/mission-fond.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-mission-fond {
        padding-bottom: 160px;
        overflow: hidden;
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
            .row-flex();
            .caption-absolute {
                .col();
                .size(6);
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
                }
                .description {
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                }
            }
            .img {
                .col();
                .size(6);
                position: relative;
                height: 540px;
                box-sizing: border-box;
                z-index: 5;
                flex-shrink: 0;
                .xs-block({
                    height: 375px;
                });
                img {
                    border-radius: 50%;
                    .md-block({
                        display: none;
                    });
                }
            }
        }

    }
</style>
