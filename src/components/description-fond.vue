<template>
    <section class="b-description-fond">
        <div class="skew-block"></div>
        <div class="container">
            <div class="wrapper">
                <div class="caption-wrapper">
                    <p class="g-number">02</p>
                    <h3 class="g-caption-section">
                        <span>{{t('About crypto fund')}}</span>
                        <strong class="gradient-text">WHIZ BIZ</strong>
                    </h3>
                    <p class="description--bold">
                        WHIZ BIZ
                        {{t('was created to enable people to participate in the creation of business art, as well as to improve and expand opportunities for profitable investments, with the aim of becoming the leading platform to support various fields of art around the world.')}}
                    </p>
                    <p class="description--light">{{t('A team of creative people - professionals who have gained a lot of experience in various business fields, as well as art abroad and not only, is working to strengthen and expand the capabilities of the crypto fund.')}}</p>
                    <p class="description--light">{{t('Now, we have the opportunity to apply the acquired knowledge and experience in Kazakhstan and other countries of the world where art needs financial support.')}}</p>
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
        .wrapper {
            position: relative;
            display: flex;
            justify-content: space-between;
            .sm-block({ flex-direction: column; });
            .caption-wrapper {
                max-width: 570px;
                padding-top: 50px;
                padding-right: 20px;
                .md-block({ margin-bottom: 40px; });
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
                    margin-bottom: 1rem;
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
                .md-block({ justify-content: center;});
                .img-wrapper {
                    position: absolute;
                    right: -360px;
                    top: -100px;
                    z-index: 10;
                    .lg-block({right: -70px; top: -50px;});
                    .md-block({ position: relative; right: auto; top: auto;});
                    .sm-block({});
                    img {
                        position: relative;
                        z-index: 1;
                        max-width: none;
                        .lg-block({ max-height: 400px; });
                        .xs-block({ max-height: 250px; });
                    }
                }
                .coub {
                    width: 390px;
                    height: 390px;
                    animation: gradient-animate 2s ease infinite;
                    background-image: @gradientDefault, @gradientDefault;
                    background-size: 400%, 400%;
                    position: relative;
                    top: 0;
                    .lg-block({ width: 300px; height: 300px;});
                    .md-block({ position: absolute; });
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
