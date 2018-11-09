<template>
    <section class="b-terms-cooperation">
        <div class="skew-block"></div>
        <div class="container">
            <p class="g-number">12</p>
            <h3 class="g-caption-section">
                <span>{{t('As you can')}}</span>
                <strong class="gradient-text">{{t('be part of us')}}</strong>
            </h3>
            <p class="secondary-caption">{{t('How to become an investor')}}</p>
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
            <div class="conditions-wrapper">
                <div class="item">
                    <span class="line"></span>
                    <span class="bold">{{t('Available entry threshold')}} &#8212; </span>
                    <span class="light">{{t('Minimum investment')}} 1BTC</span>
                </div>
                <div class="item">
                    <span class="line"></span>
                    <span class="bold">{{t('Profitable profit sharing')}} &#8212; </span>
                    <span class="light">{{t('Investor gets x% profit from cinema income')}}</span>
                </div>
                <div class="item">
                    <span class="line"></span>
                    <span class="bold">{{t('Long-term strategy')}} &#8212; </span>
                    <span class="light"></span>
                </div>
                <div class="item">
                    <span class="line"></span>
                    <span class="bold">{{t('Permanent source of income')}} &#8212; </span>
                    <span class="light">{{t('The ability to bequeath income to your children')}}</span>
                </div>
            </div>
            <a href="#" class="btn btn--orange" @click.prevent="$modal.show('apply')">{{t('Apply')}}</a>
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
        position: relative;
        padding-top: 80px;
        z-index: 15;
        .md-block({
            padding-top: 100px;
        });
        .xs-block({
            padding-top: 60px;
        });
        .g-number {
            margin-bottom: 20px;
            color: #000;
            .line-after--right(@gradientDefault);
        }
        .g-caption-section {
            margin-bottom: 80px;
            .md-block({
                margin-bottom: 80px;
            });
            .xs-block({
                margin-bottom: 40px;
            });
            span {
                color: #000;
            }
        }
        .secondary-caption {
            margin-bottom: 130px;
            font-weight: 900;
            font-size: 3rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
            color: #000;
            .xs-block({
                margin-bottom: 30px;
            });
        }
        .step-wrapper {
            .row-flex();
            margin-bottom: 80px;
            .step {
                .col();
                .size(4);
                position: relative;
                display: flex;
                padding: 10px 30px 60px;
                flex-direction: column;
                align-items: center;
                background: #3824c1;
                &::after {
                    position: absolute;
                    content: '';
                    top: 10px;
                    bottom: 10px;
                    left: 10px;
                    right: 10px;
                    border: 1px solid #fff;
                }
                .img-wrapper {
                    display: flex;
                    margin-bottom: 10px;
                    width: 100%;
                    justify-content: center;
                    .img {
                        position: relative;
                        width: 140px;
                        height: 140px;
                        transform: translateY(-60px);
                        border-radius: 50%;
                        background: @gradientDefault;
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
        .conditions-wrapper {
            .conditions-list {
                display: flex;
                margin-bottom: 100px;
                position: relative;
                flex-direction: column;
                .xs-block({ margin-bottom: 60px;});
                .item {
                    position: relative;
                    padding-bottom: 25px;
                    padding-left: 70px;
                    .xs-block({
                        padding-left: 30px;
                    });

                    &:last-child {
                        padding-bottom: 0;
                    }
                    &::before {
                        content: '';
                        position: absolute;
                        left: 35px;
                        top: 4px;
                        width: 14px;
                        height: 14px;
                        background-color: #fff;
                        border: 4px solid @orangeMain;
                        border-radius: 50%;
                        box-sizing: border-box;
                        z-index: 5;
                        .xs-block({
                            top: 0;
                            left: 0;
                        });
                    }
                    .line {
                        position: absolute;
                        left: 0;
                        top: 10px;
                        width: 40px;
                        height: 1px;
                        background-color: @grayMain;
                        z-index: 4;
                        .xs-block({
                            display: none;
                        });
                    }
                    .bold {
                        font-weight: 900;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                        text-transform: uppercase;
                        color: #000;
                    }
                    .light {
                        font-weight: 200;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                    }
                }
            }
        }
    }
</style>
