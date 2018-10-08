<template>
    <section class="b-description-fond">
        <div class="container">
            <div class="wrapper">
                <div class="caption-wrapper">
                    <p class="g-number">02</p>
                    <p class="g-caption-section">О криптофонде <strong class="gradient-text">GtCinema</strong></p>
                    <p class="description">
                        <strong class="black">GTCinema</strong> был создан для улучшения и расширения участия в бизнесе
                        потребителей и финансистов с целью стать ведущей платформой по поддержке бизнеса сфере развлечений и творчества (искусства).
                    </p>
                </div>
                <div class="img">
                    <img src="/img/description-fond.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-description-fond {
        padding: 100px 0;
        overflow: hidden;
        .wrapper {
            position: relative;
            .row-flex();
            align-items: center;
            .md-block({
                flex-direction: column;
            });
            .caption-wrapper {
                .col();
                .size(7);
                .size-md(10);
                .size-sm(12);
                z-index: 99;
                .md-block({
                    padding-left: 20px;
                    padding-right: 20px;
                    margin-bottom: 20px;
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
            .img {
                .col();
                .size(5);
                .size-md(6);
                display: flex;
                align-items: center;
                position: relative;
                flex-grow: 2;
                img {
                    position: absolute;
                    right: -80px;
                    .md-block({ position: relative;});
                    .sm-block({right: -50px;});
                }
            }

        }

    }
</style>
