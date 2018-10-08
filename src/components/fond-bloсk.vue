<template>
    <section class="b-fond-block">
        <div class="bg-gradient">
            <div class="container--flex-center">
                <div class="container">
                    <div class="wrapper">
                        <div class="caption-wrapper">
                            <div class="caption-block">
                                <ul class="number-list">
                                    <li>01</li>
                                    <li>02</li>
                                    <li>03</li>
                                </ul>
                                <h1 class="caption">
                                    <strong class="gradient-text">{{t('Crypto fund')}}</strong>
                                    {{t('to support business in industrial cinema and art')}}
                                </h1>
                            </div>
                            <div class="number">01</div>
                        </div>
                        <div class="red-coub"></div>
                        <p class="description"><strong>GTCinema</strong> -
                            {{t('is a financial technology company focused on blockchain and cryptographic tokens')}}
                        </p>
                        <a href="#" class="btn" @click.prevent="modalApply">{{t('Apply')}}</a>
                    </div>
                </div>
                <div class="page-down">
                    <div class="mouse"></div>
                    <div class="arrow">
                        <img svg-inline src="~src/assets/img/icon/down-arrow2.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin],
    methods: {
      modalApply() {
        this.$modal.show('apply')
      }
    }
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-fond-block {
        position: relative;
        height: 100vh;
        min-height: 750px;
        overflow: hidden;
        background: url("/img/bg-main.jpg");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        color: #fff;
        .md-block({ min-height: 600px; });
        .bg-gradient {
            height: 100%;
            width: 100%;
            background: linear-gradient(to bottom, #000 -7%, rgba(255, 255, 255, 0) 81%),
            rgba(45, 25, 25, 0.5);
        }
        .container {
            width: 100%;
            &--flex-center {
                position: relative;
                height: 100vh;
                min-height: 750px;
                display: flex;
                align-items: center;
                .md-block({ min-height: 600px; });
            }
        }
        .wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            padding-left: 85px;
            padding-top: 70px;
            z-index: 99;
            .lg-block({ padding-left: 0; });
            .md-block({ padding-top: 0; });
            .red-coub {
                position: absolute;
                top: 0;
                left: 0;
                padding: 65px 75px;
                width: 560px;
                height: 500px;
                border: 5px solid @redMain;
                box-sizing: border-box;
                z-index: 1;
                .lg-block({ display: none; });
            }
            .caption-wrapper {
                display: flex;
                position: relative;
                margin-bottom: 60px;
                align-items: flex-start;
                justify-content: space-between;
                z-index: 5;
                font-family: @BebasNeue;
                .lg-block({ justify-content: center; });
                .sm-block({ margin-bottom: 20px; });
                .caption-block {
                    display: flex;
                    max-width: 750px;
                    font-weight: 600;
                    .lg-block({ max-width: 900px; });
                    .number-list {
                        display: flex;
                        padding: 10px 0;
                        margin-right: 65px;
                        flex-direction: column;
                        justify-content: space-between;
                        font-size: 2.4rem;
                        letter-spacing: 0.17rem;
                        .lg-block({ display: none; });
                        li {
                            &:first-child {
                                color: #3895e5;
                            }
                        }
                    }
                    .caption {
                        font-weight: 600;
                        font-size: 6rem;
                        letter-spacing: 0.3rem;
                        text-transform: uppercase;
                        color: #fff;
                        .lg-block({ text-align: center; });
                        strong {
                            font-weight: 600;
                        }
                    }
                }
                .number {
                    position: relative;
                    margin-bottom: 15px;
                    margin-right: -15px;
                    font-weight: 600;
                    font-size: 16rem;
                    line-height: 16rem;
                    letter-spacing: 1.1rem;
                    text-align: right;
                    .line-after--right(-45px);
                    .lg-block({ display: none; });
                }
            }
            .description {
                align-self: flex-end;
                max-width: 540px;
                transform: translateY(-75px);
                font-weight: 200;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
                .lg-block({ max-width: 70%; transform: translateY(0); align-self: center; margin-bottom: 50px; text-align: center; });
                .md-block({ max-width: 100%; font-size: 16px; });
                .xs-block({ max-width: 100%; font-size: 14px; });
                strong {
                    text-transform: uppercase;
                    font-weight: 900;
                }
            }
            .btn {
                width: 100%;
                max-width: 390px;
                flex-shrink: 0;
                padding: 30px 0;
                font-family: @BebasNeue;
                font-size: 2.6rem;
                letter-spacing: 0.18rem;
                font-weight: 600;
                color: #fff;
                background-color: @redMain;
                text-transform: uppercase;
                text-align: center;
                transform: translateY(-124px);
                transition: box-shadow 0.3s ease;
                z-index: 6;
                .lg-block({ transform: translateY(0); align-self: center; });
                .md-block({ padding: 25px 0; max-width: 300px; });
                &:hover {
                    box-shadow: 0 0 25px 0 rgba(196, 45, 45, 1);
                }
            }
        }
        .page-down {
            position: absolute;
            display: block;
            left: 50%;
            bottom: 45px;
            transform: translateX(-50%);
            -webkit-filter: drop-shadow(0 0 8px rgba(196, 45, 45, 1));
            filter: drop-shadow(0 0 8px rgba(196, 45, 45, 1));
            z-index: 55;
            .sm-block({ bottom: 20px; });
            .mouse {
                margin-bottom: 5px;
                height: 44px;
                width: 27px;
                border-radius: 15px;
                border: 2px solid @redMain;
                box-sizing: border-box;
                &::after {
                    content: '';
                    display: block;
                    height: 11px;
                    width: 2px;
                    margin: 6px auto;
                    background: @redMain;
                    position: relative;
                }
            }
            .arrow {
                width: 27px;
                text-align: center;
                > svg {
                    width: 19px;
                    height: 19px;
                    margin: 0 auto;
                }
            }
        }
    }
    @keyframes mouse-scroll {

        0% {
            -webkit-filter: drop-shadow(0 0 5px rgba(196, 45, 45, 0.5));
            filter: drop-shadow(0 0 5px rgba(196, 45, 45, 0.5));
        }
        50% {
            -webkit-filter: drop-shadow(0 0 10px rgba(196, 45, 45, 1));
            filter: drop-shadow(0 0 10px rgba(196, 45, 45, 1));
        }
        100% {
            -webkit-filter: drop-shadow(0 0 5px rgba(196, 45, 45, 0.5));
            filter: drop-shadow(0 0 5px rgba(196, 45, 45, 0.5));
        }
    }
</style>
