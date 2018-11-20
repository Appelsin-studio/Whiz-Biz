<template>
    <section class="b-reference">
        <div class="skew-block"></div>
        <img src="/img/clapperboard.png" class="clapperboard-img" alt="clapperboard">
        <div class="container">
            <p class="g-number">08</p>
            <h3 class="g-caption-section">
                <strong class="gradient-text">{{t('References')}}</strong>
                <span>({{t('movies - analogs')}})</span>
            </h3>
            <div class="wrapper">
                <div class="item">
                    <div class="img">
                        <img src="/img/blair_witch.jpg" alt="Blair witch">
                    </div>
                    <div class="content">
                        <p class="number">01</p>
                        <p class="name">{{t('Blair witch')}} <span class="year">(1999)</span></p>
                        <p class="money">
                            <span class="bold">{{t('Budget')}}:&ensp;</span>
                            <span class="light">60 000 $</span>
                        </p>
                        <p class="money">
                            <span class="bold">{{t('Marketing')}}:&ensp;</span>
                            <span class="light">25 000 000 $</span>
                        </p>
                        <p class="money">
                            <span class="bold">{{t('Fees')}}:&ensp;</span>
                            <span class="light">248 639 099 $</span>
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="/img/paranormal.jpg" alt="Paranormal Activity">
                    </div>
                    <div class="content">
                        <p class="number">02</p>
                        <p class="name">{{t('Paranormal Activity')}} <span class="year">(2009)</span></p>
                        <p class="money">
                            <span class="bold">{{t('Budget')}}:&ensp;</span>
                            <span class="light">15 000 $</span>
                        </p>
                        <p class="money">
                            <span class="bold">{{t('Marketing')}}:&ensp;</span>
                            <span class="light">10 000 000 $</span>
                        </p>
                        <p class="money">
                            <span class="bold">{{t('Fees')}}:&ensp;</span>
                            <span class="light">193 355 800 $</span>
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="/img/purge.jpg" alt="The Purge">
                    </div>
                    <div class="content">
                        <p class="number">03</p>
                        <p class="name">{{t('Judgment night')}} <span class="year">(2013)</span></p>
                        <p class="money">
                            <span class="bold">{{t('Budget')}}:&ensp;</span>
                            <span class="light">3 000 000 $</span>
                        </p>
                        <p class="money">
                            <span class="bold">{{t('Marketing')}}:&ensp;</span>
                            <span class="light">10 000 000 $</span>
                        </p>
                        <p class="money">
                            <span class="bold">{{t('Fees')}}:&ensp;</span>
                            <span class="light">89 328 627 $</span>
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img">
                        <img src="/img/poster.jpg" alt="Ghost Town">
                    </div>
                    <div class="content">
                        <p class="number">04</p>
                        <p class="name">{{t('Ghost town')}} <span class="year">(2020)</span></p>
                        <p class="money">
                            <span class="bold">{{t('Budget')}}:&ensp;</span>
                            <span class="light">2 590 000 $</span>
                        </p>
                        <p class="money">
                            <span class="bold">{{t('Marketing')}}:&ensp;</span>
                            <span class="light">7 500 000 $</span>
                        </p>
                        <p class="money">
                            <span class="bold">{{t('Fees')}}&ensp;</span>
                            <span class="light">{{t('find out in 2020')}}</span>
                        </p>
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
    .b-reference {
        position: relative;
        z-index: 15;
        padding-top: 50px;
        .md-block({ padding-top: 0;});
        .clapperboard-img {
            position: absolute;
            right: 0;
            bottom: -10%;
            max-width: none;
            z-index: 22;
            @media screen and (max-width: 1725px) {
                max-width: 400px;
            }
            @media screen and (max-width: 1300px) {
                display: none;
            }
        }
        .skew-block {
            background: url("/img/clapperboard-s.png") no-repeat 90% 18%,
                        url("/img/clapperboard-m.png") no-repeat left 50% #fff;
        }
        .g-number {
            color: #000;
            .line-after--right(@gradientDefault);
        }
        .g-caption-section {
            margin-bottom: 60px;
            span {
                display: block;
                color: #000;
            }
        }
        .wrapper {
            display: flex;
            flex-direction: column;
            .item {
                display: flex;
                align-items: center;
                margin-bottom: 85px;
                .sm-block({ flex-direction: column; align-items: flex-start;});
                .xs-block({
                    margin-bottom: 40px;
                });
                &:last-child {
                    margin-bottom: 20px;
                }
                .img {
                    flex-shrink: 0;
                    max-width: 270px;
                    margin-right: 90px;
                    .sm-block({ margin-bottom: 30px; margin-right: 0;});
                    .xs-block({ max-width: 200px;});
                }
                .content {
                    .number {
                        margin-bottom: 10px;
                        font-weight: 900;
                        font-size: 4rem;
                        letter-spacing: 0.25rem;
                        color: @pinkLight;
                    }
                    .name {
                        margin-bottom: 20px;
                        font-weight: 900;
                        font-size: 4rem;
                        letter-spacing: 0.25rem;
                        color: #000;
                        text-transform: uppercase;
                        .xs-block({
                            font-size: 24px;
                        });
                        .year {
                            color: #c8c8c8;
                        }
                    }
                    .money {
                        display: flex;
                        margin-bottom: 10px;
                        justify-content: flex-start;
                        font-size: 2rem;
                        letter-spacing: 0.15rem;
                        .xs-block({
                            font-size: 16px;
                        });
                        .bold {
                            font-weight: 900;
                            color: #000;
                            text-transform: uppercase;
                        }
                        .light {
                            font-weight: 200;
                            color: #000;
                        }
                    }
                }
            }
        }
    }
</style>
