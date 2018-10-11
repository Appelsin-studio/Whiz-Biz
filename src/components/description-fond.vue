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
                        <div class="circle">
                            <i></i>
                            <i></i>
                        </div>

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
        padding: 180px 0;
        overflow: hidden;
        .wrapper {
            position: relative;
            .row-flex();
            align-items: center;
            .md-block({ flex-direction: column; });
            .caption-wrapper {
                .col();
                .size(7);
                .size-md(10);
                .size-sm(12);
                z-index: 99;
                .md-block({ padding-left: 20px; padding-right: 20px; margin-bottom: 20px; });
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
                .col();
                .size(5);
                .size-md(6);
                display: flex;
                align-items: center;
                position: relative;
                flex-grow: 2;
                .img-wrapper {
                    position: absolute;
                    right: -80px;
                    .md-block({ position: relative; });
                    .sm-block({ right: -50px; });
                    img {
                        position: relative;
                        z-index: 1;
                    }
                    .circle {
                        width: 380px;
                        height: 380px;
                        animation: gradient-animate 2s ease infinite;
                        background: linear-gradient(-45deg, #f57303, #ba5801);
                        background-size: 400%, 400%;
                        border-radius: 50%;
                        position: absolute;
                        top: 35px;
                        left: -40px;
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
                            animation-timing-function: ease-out;
                            animation-duration: 4s;
                            opacity: 0;
                            &:nth-child(1) {
                            }
                            &:nth-child(2) {
                                animation-delay: 2s;
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
                                    width: 160%;
                                    height: 160%;
                                    top: -30%;
                                    left: -30%;
                                    opacity: 0;
                                }
                            }
                        }
                    }
                }

            }

        }

    }
</style>
