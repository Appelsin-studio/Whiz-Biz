<template>
    <section class="b-mission-fond">
        <div class="container">
            <div class="wrapper">
                <div class="img">
                    <img  src="/img/mission-fond.jpg" alt="">
                </div>
                <div class="caption-wrapper">
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
            justify-content: flex-start;
            align-items: center;
            .row-flex();
            .md-block({ flex-direction: column;});
            .caption-wrapper {
                .col();
                .size(7);
                .size-md(10);
                .size-sm(12);
                z-index: 99;
                .md-block({
                    order: 1;
                    text-align: right;
                    margin-bottom: 20px;
                });
                .sm-block({
                    padding-left: 20px;
                    padding-right: 20px;
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
                .size(5);
                .size-md(6);
                .size-sm(8);
                display: flex;
                align-items: center;
                position: relative;
                padding: 0 55px;
                box-sizing: border-box;
                z-index: 5;
                flex-shrink: 0;
                .md-block({
                    order: 2;
                });
                img {
                    /*.md-block({
                        display: none;
                    });*/
                }
            }
        }

    }
</style>
