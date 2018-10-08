<template>
    <section class="b-description-fond">
        <div class="container">
            <div class="wrapper">
                <div class="caption-absolute">
                    <p class="g-number">02</p>
                    <p class="g-caption-section">О криптофонде <strong class="gradient-text">GtCinema</strong></p>
                    <p class="description">
                        <strong class="black">GTCinema</strong> был создан для улучшения и расширения участия в бизнесе
                        потребителей и финансистов с целью стать ведущей платформой по поддержке бизнеса сфере развлечений и творчества (искусства).
                    </p>
                </div>
                <div class="red-coub">
                    <img class="img" src="/img/description-fond.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-description-fond {
        margin-bottom: 170px;
        overflow: hidden;
        .sm-block({
            margin-bottom: 135px;
        });
        .xs-block({
            margin-bottom: 80px;
        });
        .wrapper {
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .caption-absolute {
                position: absolute;
                max-width: 55%;
                left: 0;
                z-index: 99;
                .md-block({
                    padding-left: 20px;
                    padding-right: 20px;
                    max-width: 70%;
                });
                .sm-block({
                    max-width: 100%;
                });
                .g-caption-section {
                    .line-after--left();
                }
                .description {
                    font-weight: 200;
                    font-size: 2.6rem;
                    letter-spacing: 0.18rem;
                    .black {
                        font-weight: 900;
                    }
                }
            }
            .red-coub {
                position: relative;
                max-width: 730px;
                width: 100%;
                height: 420px;
                box-sizing: border-box;
                z-index: 5;
                flex-shrink: 0;
                border-right: 5px solid rgba(196, 45, 45, 1);
                border-left: 5px solid rgba(196, 45, 45, 0.2);
                background-image:
                    linear-gradient(90deg, rgba(196, 45, 45, 0.2), rgba(196, 45, 45, 1)),
                    linear-gradient(90deg, rgba(196, 45, 45, 0.2), rgba(196, 45, 45, 1));
                background-size: 100% 5px;
                background-position: 0 0, 0 100%;
                background-repeat: no-repeat;
                .xs-block({
                    height: 375px;
                });
                .img {
                    position: absolute;
                    top: -75px;
                    right: -215px;
                    .md-block({
                        display: none;
                    });
                }
            }
        }

    }
</style>
