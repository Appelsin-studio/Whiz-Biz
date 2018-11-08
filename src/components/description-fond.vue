<template>
    <section class="b-description-fond">
        <div class="skew-block"></div>
        <div class="container">
            <div class="wrapper">
                <div class="caption-wrapper">
                    <p class="g-number">02</p>
                    <h3 class="g-caption-section">
                        <span>{{t('About crypto fund')}}</span>
                        <strong class="gradient-text">GtCinema</strong>
                    </h3>
                    <p class="description--bold">
                        GTCinema
                        {{t('was created to improve and expand participation in the business of consumers and financiers')}}
                    </p>
                    <p class="description--light">{{t('with the goal of becoming a leading platform for business support in the field of entertainment and creativity (art).')}}</p>
                </div>
                <div class="img">
                    <div class="img-wrapper">
                        <img src="/img/description-fond-.png" alt="">
                    </div>
                    <div class="coub"></div>
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
        padding-bottom: 60px;
        .wrapper {
            position: relative;
            display: flex;
            justify-content: space-between;
            .md-block({ flex-direction: column; });
            .caption-wrapper {
                max-width: 570px;
                padding-top: 50px;
                padding-right: 20px;
                .md-block({ margin-bottom: 20px; });
                .g-number {
                    color: #000;
                    .line-after--right(@gradientDefault);
                }
                .g-caption-section {
                    span {
                        color: #000;
                    }
                }
                .description--bold {
                    margin-bottom: 30px;
                    font-size: 2.2rem;
                    letter-spacing: 0.18rem;
                    font-weight: 900;
                    color: #000;
                }
                .description--light {
                    font-size: 2rem;
                    letter-spacing: 0.16rem;
                    font-weight: 200;
                    color: #676767;
                }
            }
            .img {
                display: flex;
                align-items: flex-start;
                position: relative;
                z-index: 20;
                .img-wrapper {
                    position: absolute;
                    right: -360px;
                    top: -100px;
                    z-index: 10;
                    .md-block({ position: relative; right: auto;});
                    .sm-block({});
                    img {
                        position: relative;
                        z-index: 1;
                        max-width: none;
                        .md-block({ max-height: 300px; });
                        .xs-block({ max-height: 250px; });
                    }
                }
                .coub {
                    width: 390px;
                    height: 390px;
                    animation: gradient-animate 2s ease infinite;
                    background: linear-gradient(-45deg, @pinkLight, @red);
                    background-size: 400%, 400%;
                    position: relative;
                    top: 0;
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
                    }
                }
            }
        }
    }
</style>
