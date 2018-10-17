<template>
    <section class="b-fond-block">
        <div class="parallax-wrapper">
            <parallax :speedFactor="0.35" direction="down" :sectionHeight="100" :breakpoint="''">
                <img src="/img/bg-main.jpg">
            </parallax>
        </div>
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
                        <div class="gray-circle">
                            <i></i>
                            <i></i>
                        </div>
                        <div class="desc-wrapper">
                            <a href="#" class="btn btn--orange" @click.prevent="modalApply">{{t('Apply')}}</a>
                            <p class="description"><strong>GTCinema</strong> -
                                {{t('is a financial technology company focused on blockchain and cryptographic tokens')}}
                            </p>

                        </div>

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
        <svg id="main-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 137.02">
            <path class="cls-1" d="M0,0A3431,3431,0,0,0,999,137,3429.58,3429.58,0,0,0,1920,0V137H0Z" fill="#fff"/>
        </svg>
    </section>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'
  import Parallax from 'vue-parallaxy'

  export default {
    mixins: [LanguageMixin],
    components: {Parallax},
    methods: {
      modalApply () {
        this.$modal.show('apply')
      },
    },
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-fond-block {
        position: relative;
        height: 100vh;
        min-height: 750px;
        overflow: hidden;
        color: #fff;
        .md-block({ min-height: 600px; });
        .parallax-wrapper {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        }
        #main-svg {
            position: absolute;
            bottom: 0;
            background: linear-gradient(#ebf5fd, #ebf5fd) 16.5% 105vh  no-repeat / 1px 100%,
            linear-gradient(#ebf5fd, #ebf5fd) 33% 110vh  no-repeat / 1px 100%,
            linear-gradient(#ebf5fd, #ebf5fd) 49.5% 115vh  no-repeat / 1px 100%,
            linear-gradient(#ebf5fd, #ebf5fd) 66% 110vh  no-repeat / 1px 100%,
            linear-gradient(#ebf5fd, #ebf5fd) 82.5% 105vh  no-repeat / 1px 100%, transparent;
        }
        .bg-gradient {
            position: relative;
            z-index: 11;
            height: 100%;
            background: linear-gradient(to bottom, #000 6%, rgba(255, 255, 255, 0) 26%);
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
            padding-top: 100px;
            z-index: 99;
            .lg-block({ padding-left: 0; });
            .md-block({ padding-top: 0; });
            .gray-circle {
                position: absolute;
                top: -10px;
                left: 0;
                padding: 65px 75px;
                width: 600px;
                height: 600px;
                border: 10px solid #fff;
                box-sizing: border-box;
                border-radius: 50%;
                z-index: 1;
                opacity: 0.1;
                .lg-block({ display: none; });
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
            .caption-wrapper {
                display: flex;
                position: relative;
                margin-bottom: 50px;
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
                                color: @blueMain;
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
            .desc-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                .lg-block({ flex-direction: column-reverse;});
            }
            .description {
                align-self: flex-end;
                max-width: 540px;
                font-weight: 200;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
                .lg-block({ max-width: 70%; align-self: center; margin-bottom: 50px; margin-top: 0; text-align: center; });
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
                text-align: center;
                z-index: 6;
                box-shadow: 0 0 20px 0 rgba(238, 112, 1, 0.4);
                .lg-block({ align-self: center; });
                .md-block({ padding: 25px 0; max-width: 300px; });
                &:hover {
                    box-shadow: 0 0 25px 0 rgba(238, 112, 1, 0.8);
                }
            }

        }
        .page-down {
            position: absolute;
            display: block;
            left: 50%;
            bottom: 45px;
            transform: translateX(-50%);
            -webkit-filter: drop-shadow(0 0 8px rgba(87, 53, 202, 1));
            filter: drop-shadow(0 0 8px rgba(87, 53, 202, 1));
            z-index: 55;
            .sm-block({ bottom: 20px; });
            .mouse {
                margin-bottom: 5px;
                height: 44px;
                width: 27px;
                border-radius: 15px;
                border: 2px solid @blueMain;
                box-sizing: border-box;
                animation: mouse-animate 2s infinite ease-out;
                &::after {
                    content: '';
                    display: block;
                    height: 11px;
                    width: 2px;
                    margin: 6px auto;
                    background: @blueMain;
                    position: relative;
                }
            }
            .arrow {
                width: 27px;
                text-align: center;
                animation: mouse-animate 2s infinite ease-out;
                > svg {
                    width: 19px;
                    height: 19px;
                    margin: 0 auto;
                }
            }
            @keyframes mouse-animate {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }
    }
    @keyframes mouse-scroll {

        0% {
            -webkit-filter: drop-shadow(0 0 5px rgba(87, 53, 202, 0.5));
            filter: drop-shadow(0 0 5px rgba(87, 53, 202, 0.5));
        }
        50% {
            -webkit-filter: drop-shadow(0 0 10px rgba(87, 53, 202, 1));
            filter: drop-shadow(0 0 10px rgba(87, 53, 202, 1));
        }
        100% {
            -webkit-filter: drop-shadow(0 0 5px rgba(87, 53, 202, 0.5));
            filter: drop-shadow(0 0 5px rgba(87, 53, 202, 0.5));
        }
    }
</style>
