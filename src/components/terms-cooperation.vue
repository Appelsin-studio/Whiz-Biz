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
            <ul class="conditions-list">
                <li class="item">
                    <span class="bold">{{t('Available entry threshold')}}</span>
                    <span class="light">{{t('Minimum investment')}} 1BTC</span>
                </li>
                <li class="item">
                    <span class="bold">{{t('Profitable profit sharing')}}</span>
                    <span class="light">{{t('Investor gets % profit from cinema income')}}</span>
                </li>
                <li class="item">
                    <span class="bold">{{t('Long-term strategy')}}</span>
                    <span class="light"></span>
                </li>
                <li class="item">
                    <span class="bold">{{t('Permanent source of income')}}</span>
                    <span class="light">{{t('The ability to bequeath income to your children')}}</span>
                </li>
            </ul>
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
        .md-block({ padding-top: 100px; });
        .xs-block({ padding-top: 60px; });
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
        .secondary-caption {
            margin-bottom: 130px;
            font-weight: 900;
            font-size: 4rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
            color: #000;
            .xs-block({ margin-bottom: 30px; });
        }
        .step-wrapper {
            .row-flex();
            margin-bottom: 120px;
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

        .conditions-list {
            .row-flex();
            margin-bottom: 40px;
            position: relative;
            .xs-block({ margin-bottom: 60px; });
            .item {
                .col();
                .size(6);
                height: 220px;
                padding: 45px;
                padding-left: 140px;
                background-color: #fff;
                box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.3);
                margin-bottom: 20px;
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    left: 45px;
                    top: 45px;
                    width: 35px;
                    height: 35px;
                    background: url("/img/icon/success.svg") no-repeat center / contain;
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

    }
</style>
