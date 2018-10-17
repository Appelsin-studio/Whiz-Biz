<template>
    <section class="b-description-fond">
        <div class="container">
            <div class="wrapper">
                <div class="caption-wrapper">
                    <p class="g-number">02</p>
                    <p class="g-caption-section">{{t('About crypto fund')}} <strong class="gradient-text">GtCinema</strong></p>
                    <p class="description">
                        <strong class="black">GTCinema</strong>
                        {{t('was created to improve and expand participation in the business of consumers and financiers in order to become a leading ' +
                        'platform for supporting business in the field of entertainment and creativity (art)')}}.
                    </p>
                </div>
                <div class="img">
                    <div class="img-wrapper">
                        <img src="/img/description-fond.png" alt="">
                    </div>
                    <div class="circle">
                        <i></i>
                        <i></i>
                    </div>
                </div>
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
    .b-description-fond {
        position: relative;
        padding-top: 115px;
        padding-bottom: 100px;
        z-index: 15;
        .md-block({ padding-top: 95px;  padding-bottom: 80px;});
        .xs-block({ padding-top: 70px;  padding-bottom: 60px;});
        .wrapper {
            position: relative;
            display: flex;
            align-items: center;
            .md-block({ flex-direction: column; });
            .caption-wrapper {
                z-index: 99;
                padding-right: 20px;
                .md-block({ margin-bottom: 20px; });
                .g-caption-section {
                    .line-after--left();
                }
                .description {
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.18rem;
                    .black {
                        font-weight: 900;
                    }
                }
            }
            .img {
                display: flex;
                align-items: center;
                position: relative;
                padding-right: 50px;
                .md-block({ padding-right: 0; });
                .img-wrapper {
                    position: absolute;
                    right: -225px;
                    transform: translateY(70px);
                    z-index: 10;
                    .md-block({ position: relative; right: auto;});
                    .sm-block({ transform: translateY(70px); });
                    img {
                        position: relative;
                        z-index: 1;
                        max-width: none;
                        .md-block({ max-height: 300px; });
                        .xs-block({ max-height: 250px; });
                    }
                }
                .circle {
                    width: 460px;
                    height: 460px;
                    animation: gradient-animate 2s ease infinite;
                    background: linear-gradient(-45deg, #f57303, #ba5801);
                    background-size: 400%, 400%;
                    border-radius: 50%;
                    position: relative;
                    top: 35px;
                    .md-block({ position: absolute; width: 300px; height: 300px; });
                    .xs-block({ width: 180px; height: 180px; });
                    z-index: 1;
                    @keyframes gradient-animate {
                        0% {
                            background-position: 0 50%
                        }
                        50% {
                            background-position: 100% 50%
                        }
                        100% {
                            background-position: 0 50%
                        }
                    }
                    &::after {
                        content: "";
                        display: block;
                        width: calc(~"100% - 20px");
                        height: calc(~"100% - 20px");
                        top: 50%;
                        left: 50%;
                        position: absolute;
                        transform: translate(-50%, -50%);
                        background: #fff;
                        border-radius: 50%;
                    }
                    i {
                        display: block;
                        border: 1px dashed #bed7ec;
                        border-radius: 50%;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        animation-name: circle-animate;
                        animation-iteration-count: infinite;
                        animation-timing-function: ease-in;
                        animation-duration: 6s;
                        opacity: 0;
                        &:nth-child(1) {
                        }
                        &:nth-child(2) {
                            animation-delay: 3s;
                        }
                        @keyframes circle-animate {
                            from {
                                width: 100%;
                                height: 100%;
                                top: 0;
                                left: 0;
                                opacity: 1;
                            }
                            90% {
                                opacity: 1;
                            }
                            to {
                                width: 200%;
                                height: 200%;
                                top: -50%;
                                left: -50%;
                                opacity: 0;
                                .md-block({ width: 170%; height: 170%; });
                            }
                        }
                    }
                }
            }
        }
    }
</style>
