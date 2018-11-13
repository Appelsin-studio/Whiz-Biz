<template>
    <section class="b-fond-block">
        <div class="parallax-wrapper">
            <parallax :speedFactor="0.35" direction="down" :sectionHeight="110" :breakpoint="''"
                      parallaxClass="custom" sectionClass="custom-height">
                <img src="/img/bg-main.jpg">
            </parallax>
        </div>

        <div class="container">
            <div class="wrapper">
                <div class="coub"></div>
                <div class="content-wrapper">
                    <ul class="number-list">
                        <li>01</li>
                        <li>02</li>
                        <li>03</li>
                    </ul>
                    <div class="caption-block">
                        <h1 class="caption">
                            <strong class="">{{t('Crypto fund')}} <i>«WHIZ BIZ»</i></strong>
                            <span>{{t('to support business in industrial cinema and art')}}</span>
                        </h1>
                        <p class="description"><strong>WHIZ BIZ</strong> -
                            {{t('is a financial technology company focused on blockchain and cryptographic tokens')}}
                        </p>
                        <a href="#" class="btn" @click.prevent="$modal.show('apply')">{{t('Apply')}}</a>
                    </div>
                </div>
                <div class="number">01</div>
            </div>
        </div>

    </section>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'
  import Parallax from 'vue-parallaxy'

  export default {
    mixins: [LanguageMixin],
    components: {Parallax},
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-fond-block {
        position: relative;
        padding-top: 220px;
        padding-bottom: 240px;
        overflow: hidden;
        color: #fff;
        box-sizing: border-box;
        background: @gradientMain;
        .lg-block({ display: flex; align-items: center; justify-content: center; height: 120vh; padding: 0; min-height: 750px });
        .md-block({ min-height: 600px; });
        .parallax-wrapper {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
        }
        .custom-height {
            height: 100%;
        }
        .custom {
            > img {
                object-position: top left;
            }
        }
        .bg-gradient {
            position: relative;
            z-index: 11;

            &.container--flex-center {
                position: relative;
            }
        }
        .container {
            width: 100%;
            .lg-block({ box-sizing: border-box; });
        }
        .wrapper {
            position: relative;
            display: grid;
            grid-template-columns: minmax(0px, 120px) minmax(0px, 560px) 1fr minmax(0px, 100px);
            grid-template-rows: minmax(20px, 100px) 1fr minmax(20px, 100px);
            z-index: 99;
            .lg-block({ padding-left: 0; grid-template-columns: 1fr; grid-template-rows: 1fr; justify-items: center; padding-bottom: 10vh; });
            .md-block({ padding-top: 0; });
            .coub {
                grid-column: ~"1 / 3";
                grid-row: ~"1 / 4";
                position: relative;
                border-left: 10px solid #f816e0;
                background-image: @gradientDefault, @gradientDefault;
                background-position: 0 0, 0 100%;
                background-repeat: no-repeat;
                background-size: 100% 10px;
                box-sizing: border-box;
                .lg-block({ display: none; });
                &::after {
                    position: absolute;
                    content: '';
                    right: 0;
                    top: 0;
                    width: 10px;
                    min-height: 0;
                    height: 65px;
                    background: @red;
                }
                &::before {
                    position: absolute;
                    content: '';
                    right: 0;
                    bottom: 0;
                    width: 10px;
                    min-height: 0;
                    height: 203px;
                    background: @red;
                }
            }
            .content-wrapper {
                grid-column: ~"2 / 4";
                grid-row: ~"2 / 3";
                display: flex;
                position: relative;
                align-items: flex-start;
                z-index: 5;
                .lg-block({ grid-column: ~"1 / 2"; grid-row: ~"1 / 2"; });
                .sm-block({ margin-bottom: 20px; });
                .number-list {
                    display: none;
                    padding: 10px 0;
                    margin-right: 65px;
                    flex-direction: column;
                    justify-content: space-between;
                    font-weight: 900;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    .lg-block({ display: none; });
                    li {
                        margin-bottom: 90px;
                        &:first-child {
                            color: @pinkLight;
                        }
                    }
                }
                .caption-block {
                    display: flex;
                    flex-direction: column;
                    max-width: 730px;
                    font-weight: 600;
                    .caption {
                        margin-bottom: 20px;
                        font-weight: 900;
                        letter-spacing: 0.3rem;
                        text-transform: uppercase;
                        color: #fff;
                        .lg-block({ text-align: center; });
                        .sm-block({ margin-bottom: 15px; });
                        strong {
                            display: block;
                            margin-bottom: 30px;
                            font-size: 7rem;
                            font-weight: 900;
                            letter-spacing: 0.6rem;
                            .md-block({ margin-bottom: 20px; font-size: 6rem; letter-spacing: 0.4rem; });
                            .sm-block({ letter-spacing: 0.3rem; });
                            .xs-block({ margin-bottom: 10px; letter-spacing: 0.25rem; });
                            i {
                                white-space: nowrap;
                                font-style: normal;
                            }
                        }
                        span {
                            font-size: 36px;
                            letter-spacing: 0.18rem;
                            .md-block({ font-size: 32px; letter-spacing: 0.2rem; });
                            .sm-block({ font-size: 24px; letter-spacing: 0.16rem; });
                            .xs-block({ font-size: 20px; letter-spacing: 0.14rem; });
                        }
                    }
                }
                .description {
                    margin-bottom: 30px;
                    font-weight: 200;
                    font-size: 2.4rem;
                    letter-spacing: 0.17rem;
                    .lg-block({ text-align: center; });
                    .md-block({ font-size: 16px; });
                    .xs-block({ font-size: 14px; });
                    strong {
                        text-transform: uppercase;
                        font-weight: 900;
                    }
                }
                .btn {
                    width: 100%;
                    max-width: 375px;
                    flex-shrink: 0;
                    padding: 38px 0;
                    text-align: center;
                    z-index: 6;
                    .lg-block({ align-self: center; });
                    .md-block({ padding: 25px 0; max-width: 300px; });
                    .xs-block({ max-width: 250px; });
                    &:hover {
                        box-shadow: 0 0 22px 0 rgba(239, 53, 165, 1);
                    }
                }
            }
            .number {
                grid-column: ~"4 / 5";
                grid-row: ~"2 / 2";
                position: relative;
                margin-top: 10px;
                align-self: self-start;
                font-weight: 900;
                font-size: 8rem;
                line-height: 1;
                letter-spacing: 0.5rem;
                text-align: right;
                .lg-block({ display: none; });
            }
        }
    }
</style>
