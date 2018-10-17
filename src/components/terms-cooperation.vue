<template>
    <section class="b-terms-cooperation">
        <div class="container">
            <p class="g-number">12</p>
            <p class="g-caption-section">{{t('As you can')}}
                <span class="gradient-text">{{t('be part of us')}}</span>
            </p>
            <p class="secondary-caption">{{t('How to become an investor')}}</p>
            <div class="instruction-arrow">
                <span class="text">{{t('Leave a request')}} </span>
                <span class="arrow"></span>
                <span class="text">{{t('Purchase fund units')}}</span>
                <span class="arrow"></span>
                <span class="text">{{t('Make profit')}}</span>
            </div>
            <div class="conditions-wrapper">
                <p class="secondary-caption">{{t('Terms of cooperation')}}</p>
                <ul class="conditions-list">
                    <li class="item">
                        <span class="line"></span>
                        <span class="bold">{{t('Available entry threshold')}} &#8212; </span>
                        <span class="light">{{t('Minimum investment')}} 1BTC</span>
                    </li>
                    <li class="item">
                        <span class="line"></span>
                        <span class="bold">{{t('Profitable profit sharing')}} &#8212; </span>
                        <span class="light">{{t('Investor gets x% profit from cinema income')}}</span>
                    </li>
                    <li class="item">
                        <span class="line"></span>
                        <span class="bold">{{t('Long-term strategy')}} &#8212; </span>
                        <span class="light"></span>
                    </li>
                    <li class="item">
                        <span class="line"></span>
                        <span class="bold">{{t('Permanent source of income')}} &#8212; </span>
                        <span class="light">{{t('The ability to bequeath income to your children')}}</span>
                    </li>
                </ul>
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
        position: relative;
        padding-top: 160px;
        z-index: 15;
        .md-block({
            padding-top: 100px;
        });
        .xs-block({
            padding-top: 60px;
        });
        .g-caption-section {
            margin-bottom: 110px;
            .line-after--left();
            .md-block({
                margin-bottom: 80px;
            });
            .xs-block({
                margin-bottom: 40px;
            });
        }
        .secondary-caption {
            margin-bottom: 50px;
            font-weight: 900;
            font-size: 3rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
            color: #000;
            .xs-block({
                margin-bottom: 30px;
            });
        }
        .instruction-arrow {
            display: flex;
            margin-bottom: 125px;
            justify-content: flex-start;
            align-items: center;
            .md-block({
                margin-bottom: 70px;
            });
            .sm-block({
                flex-direction: column;
                align-items: center;
            });
            .xs-block({
                margin-bottom: 50px;
            });
            .text {
                display: inline-block;
                font-weight: 200;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
            }
            .arrow {
                display: inline-flex;
                padding-left: 10px;
                padding-right: 15px;
                flex-grow: 2;
                justify-content: center;
                align-items: center;
                height: 20px;
                .sm-block({
                    height: 45px;
                    padding: 10px 0;
                });
                .xs-block({
                    height: 30px;
                    padding: 5px 0 20px;
                });
                &::before {
                    content: '';
                    display: inline-block;
                    width: 60px;
                    height: 4px;
                    background: radial-gradient(ellipse at center, @orangeMain 2px, @orangeMain 2px, transparent 20%);
                    background-size: 14px 15px;
                    background-repeat: repeat-x;
                    background-position: 0 center;
                    .sm-block({
                        display: none;
                    });
                }
                &::after {
                    content: '';
                    display: inline-block;
                    margin-left: -10px;
                    width: 20px;
                    height: 20px;
                    border-right: 3px solid @orangeMain;
                    border-bottom: 3px solid @orangeMain;
                    transform: rotate(-45deg);
                    .sm-block({
                        margin-left: 0;
                        transform: rotate(45deg);
                    });
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
