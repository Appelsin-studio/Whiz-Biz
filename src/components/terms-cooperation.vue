<template>
    <section class="b-terms-cooperation">
        <!--<div class="skew-block"></div>-->
        <div class="skew-block--bottom"></div>
        <div class="container">
            <p class="g-number">12</p>
            <h3 class="g-caption-section">
                <span>{{t('How to become an investor')}}</span>
            </h3>
            <div class="step-wrapper">
                <div class="step">
                    <div class="img-wrapper">
                        <div class="img"></div>
                    </div>
                    <div class="number">01</div>
                    <span class="text">{{t('Leave a request')}} </span>
                </div>
                <div class="step">
                    <div class="img-wrapper">
                        <div class="img"></div>
                    </div>
                    <div class="number">02</div>
                    <span class="text">{{t('Purchase fund units')}}</span>
                </div>
                <div class="step">
                    <div class="img-wrapper">
                        <div class="img"></div>
                    </div>
                    <div class="number">03</div>
                    <span class="text">{{t('Make profit')}}</span>
                </div>
            </div>
            <p class="secondary-caption">{{t('Terms of cooperation')}}</p>
            <ul class="conditions-list">
                <li class="item">
                    <span class="bold">{{t('Available entry threshold')}}</span>
                    <span class="light">1ETH, 1BCH, 1BTC, 10ETC</span>
                </li>
                <li class="item">
                    <span class="bold">{{t('Profitable profit sharing')}}</span>
                    <span class="light">{{t('Producer involved in the distribution of 15% of the profits from the movie')}}</span>
                </li>
                <li class="item">
                    <span class="bold">{{t('Long-Term Development Strategy')}}</span>
                    <span class="light"></span>
                </li>
                <li class="item">
                    <span class="bold">{{t('Permanent source of income')}}</span>
                    <span class="light">{{t('The ability to bequeath income to your children')}}</span>
                </li>
            </ul>
            <div class="buy-token">
                <p class="text">
                    <span class="gradient-text">{{t('Become a co-producer')}}</span>
                    <span class="black">{{t('buying 50 000 WB tokens in the amount of')}} 6650$</span>
                </p>
                <div class="counter">
                    <span class="bold">{{t('Places:')}}</span>
                    <span class="number gradient-text">130</span>
                    <span class="light">{{t('left')}}</span>
                </div>
                <a href="#" class="btn btn--orange" @click.prevent="$modal.show('apply')">{{t('Apply')}}</a>
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
    .b-terms-cooperation {
        padding-top: 50px;
        position: relative;
        z-index: 15;
        .md-block({ padding-top: 0;});
        .skew-block--bottom {
            position: absolute;
            .skew-block(50px);
            left: 0;
            right: 0;
            background: #fff;
            z-index: 15;
            .lg-block({
                .skew-block(50px, -90px);
            });
            .sm-block({
                .skew-block(50px, -60px);
            });
        }
        .container {
            padding-top: 50px;
            .md-block({ padding-top: 0;});
        }
        .g-number {
            margin-bottom: 20px;
            color: #000;
            .line-after--right(@gradientDefault);
        }
        .g-caption-section {
            margin-bottom: 80px;
            .md-block({ margin-bottom: 80px; });
            .xs-block({ margin-bottom: 40px; });
            span {
                color: #000;
            }
        }
        .step-wrapper {
            .row-flex();
            margin-bottom: 120px;
            .sm-block({ justify-content: center; });
            .step {
                .col();
                .size(4);
                .size-sm(10);
                .size-xm(12);
                position: relative;
                display: flex;
                padding: 10px 30px 60px;
                flex-direction: column;
                align-items: center;
                background: #3824c1;
                .sm-block({ margin-top: 75px; });
                &::after {
                    position: absolute;
                    content: '';
                    top: 10px;
                    bottom: 10px;
                    left: 10px;
                    right: 10px;
                    border: 1px solid #fff;
                }
                &:nth-child(1) {
                    .img {
                        background: url("/img/icon/terms-01.png") no-repeat center, @gradientDefault;
                    }
                }
                &:nth-child(2) {
                    .img {
                        background: url("/img/icon/terms-02.png") no-repeat center, @gradientDefault;
                    }
                }
                &:nth-child(3) {
                    .img {
                        background: url("/img/icon/terms-03.png") no-repeat center, @gradientDefault;
                    }
                }
                .img-wrapper {
                    display: flex;
                    margin-bottom: 10px;
                    width: 100%;
                    justify-content: center;
                    .sm-block({ margin-bottom: -15px; });
                    .img {
                        position: relative;
                        width: 140px;
                        height: 140px;
                        transform: translateY(-60px);
                        border-radius: 50%;
                        z-index: 5;
                        box-shadow: 0 10px 100px 0 rgba(228, 22, 224, 0.75)
                    }
                }
                .number {
                    margin-bottom: 40px;
                    color: @pinkLight;
                    font-weight: 900;
                    font-size: 4rem;
                    letter-spacing: 0.17rem;
                    .sm-block({ margin-bottom: 20px; });
                }
                .text {
                    display: inline-block;
                    font-weight: 900;
                    font-size: 2.4rem;
                    letter-spacing: 0.17rem;
                    text-transform: uppercase;
                    text-align: center;
                }
            }
        }

        .conditions-list {
            .row-flex();
            margin-bottom: 40px;
            position: relative;
            .md-block({ justify-content: center; });
            .item {
                .col();
                .size(6);
                .size-md(10);
                .size-xm(12);
                min-height: 267px;
                padding: 45px;
                padding-left: 140px;
                background-color: #fff;
                box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.3);
                margin-bottom: 20px;
                position: relative;
                .lg-block({ padding: 45px; padding-left: 110px; });
                .md-block({min-height: auto;});
                &::after {
                    content: "";
                    position: absolute;
                    left: 45px;
                    top: 45px;
                    width: 35px;
                    height: 35px;
                    background: url("/img/icon/success.svg") no-repeat center / contain;
                    .sm-block({ left: 38px; });
                }
                .bold {
                    display: block;
                    font-weight: 900;
                    font-size: 2.5rem;
                    letter-spacing: 0.14rem;
                    text-transform: uppercase;
                    color: #000;
                    margin-bottom: 15px;
                }
                .light {
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    color: @grayMain;
                }
            }
        }
        .btn-group {
            margin-bottom: 120px;
            .md-block({ text-align: center; });
        }
        .buy-token {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .text {
                margin-bottom: 40px;
                max-width: 850px;
                font-size: 5rem;
                letter-spacing: 0.4rem;
                font-weight: 900;
                text-transform: uppercase;
                .sm-block({ font-size: 4rem;});
                .xs-block({ margin-bottom: 25px;});
                .black {
                    color: #000;
                }
            }
            .counter {
                display: flex;
                align-items: center;
                margin-bottom: 40px;
                .xs-block({ margin-bottom: 30px; align-self: center;});
                .bold {
                    font-size: 26px;
                    font-weight: 900;
                    color: #000;
                    .xs-block({ font-size: 22px;});
                }
                .number {
                    margin: 0 15px 0 25px;
                    padding: 5px 10px;
                    font-size: 7rem;
                    font-weight: 900;
                    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
                    border-radius: 5px;
                    .xs-block({ font-size: 5rem; margin: 0 10px 0 20px;});
                }
                .light {
                    font-weight: 200;
                    font-size: 20px;
                    color: #676767;
                    .xs-block({ font-size: 16px;});
                }
            }
            .btn {
                .xs-block({ align-self: center;});
            }
        }
    }
</style>
