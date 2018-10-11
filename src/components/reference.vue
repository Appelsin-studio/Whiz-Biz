<template>
    <section class="b-reference">
        <div class="container">
            <p class="g-number">08</p>
            <p class="g-caption-section">
                <span class="gradient-text">{{t('References')}}</span>
                <span>({{t('movies - analogs')}})</span>
            </p>
            <div class="wrapper">
                <div class="item">
                    <p class="number">01</p>
                    <p class="name">{{t('Blair witch')}}</p>
                    <p class="money">
                        <span class="bold">{{t('Budget')}}:&ensp;</span>
                        <span class="light">60 000 $</span>
                    </p>
                    <p class="money">
                        <span class="bold">{{t('Marketing')}}:&ensp;</span>
                        <span class="light"></span>
                    </p>
                    <p class="money">
                        <span class="bold">{{t('Fees')}}:&ensp;</span>
                        <span class="light">248 000 $</span>
                    </p>
                </div>
                <div class="item">
                    <p class="number">02</p>
                    <p class="name">{{t('Paranormal Activity')}}</p>
                    <p class="money">
                        <span class="bold">{{t('Budget')}}:&ensp;</span>
                        <span class="light">15 000 $</span>
                    </p>
                    <p class="money">
                        <span class="bold">{{t('Marketing')}}:&ensp;</span>
                        <span class="light"></span>
                    </p>
                    <p class="money">
                        <span class="bold">{{t('Fees')}}:&ensp;</span>
                        <span class="light">193 000 $</span>
                    </p>
                </div>
                <div class="item">
                    <p class="number">03</p>
                    <p class="name">{{t('Judgment night')}}</p>
                    <p class="money">
                        <span class="bold">{{t('Budget')}}:&ensp;</span>
                        <span class="light">3 000 000 $</span>
                    </p>
                    <p class="money">
                        <span class="bold">{{t('Marketing')}}:&ensp;</span>
                        <span class="light"></span>
                    </p>
                    <p class="money">
                        <span class="bold">{{t('Fees')}}:&ensp;</span>
                        <span class="light">89 000 000 $</span>
                    </p>
                </div>
                <div class="item">
                    <p class="number">04</p>
                    <p class="name">{{t('Ghost town')}}</p>
                    <p class="money">
                        <span class="bold">{{t('Budget')}}:&ensp;</span>
                        <span class="light">9 000 000 $</span>
                    </p>
                    <p class="money">
                        <span class="bold">{{t('Marketing')}}:&ensp;</span>
                        <span class="light"></span>
                    </p>
                    <p class="money">
                        <span class="bold">{{t('Fees')}}&ensp;</span>
                        <span class="light">{{t('find out in 2020')}}</span>
                    </p>
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
        padding-top: 150px;
        z-index: 15;
        .sm-block({
            padding-top: 120px;
        });
        .xs-block({
            padding-top: 80px;
        });
        .g-caption-section {
            margin-bottom: 70px;
            .line-after--left(-30px, 25%);
            span {
                display: block;
            }
        }
        .wrapper {
            .row-flex();
            .item {
                .col();
                .size(6);
                .size-xs(12);
                margin-bottom: 100px;
                .xs-block({
                    margin-bottom: 50px;
                });
                .number {
                    margin-bottom: 20px;
                    font-family: @BebasNeue;
                    font-weight: 600;
                    font-size: 6rem;
                    letter-spacing: 0.4rem;
                    color: @orangeMain;
                }
                .name {
                    margin-bottom: 20px;
                    font-family: @BebasNeue;
                    font-weight: 600;
                    font-size: 3.5rem;
                    letter-spacing: 0.25rem;
                    color: #000;
                    .xs-block({
                        font-size: 24px;
                    });
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
                    }
                    .light {
                        font-weight: 200;
                    }
                }
            }
        }
    }
</style>
