<template>
    <section class="b-team">
        <div class="container">
            <p class="g-number">04</p>
            <p class="g-caption-section">{{t('Our')}} <span class="gradient-text">{{t('team')}}</span></p>
            <div class="wrapper--team">
                <div class="person col-12">
                    <div class="img" style="background-image: url(/img/person-1.jpg)"></div>
                    <p class="name">Грей Фредериксон</p>
                    <p class="profession">{{t('General producer')}}</p>
                    <p class="country">{{t('USA')}}</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img" style="background-image: url(/img/person-2.jpg)"></div>
                    <p class="name">Саламат Мухаммед-Али</p>
                    <p class="profession">{{t('Filmmaker')}}</p>
                    <p class="country">{{t('Kazakhstan')}}</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img" style="background-image: url(/img/person-3.jpg)"></div>
                    <p class="name">Питер Жмутский</p>
                    <p class="profession">{{t('Filmmaker')}}</p>
                    <p class="country">{{t('USA')}}</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img" style="background-image: url(/img/person-4.jpg)"></div>
                    <p class="name">Динара Батырова</p>
                    <p class="profession">{{t('Producer')}}</p>
                    <p class="country">{{t('Kazakhstan')}}</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
            </div>
            <section class="b-crowdsale">
                <div class="wrapper--crowdsale">
                    <p class="text">Проект реализуется при поддержке <strong class="orange">Crowdsale Network</strong>
                    </p>
                    <img class="logo-crowdsale" src="/img/crowdsale-logo.png" alt="">
                    <a class="link" href="https://crowdsale.network/" target="_blank">crowdsale.network</a>
                </div>
            </section>
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
    .b-team {
        position: relative;
        padding-top: 95px;
        z-index: 15;
        .md-block({ padding-top: 50px;});
        .g-caption-section {
            margin-bottom: 70px;
            .line-after--left();
            .sm-block({ margin-bottom: 65px; });
            .black {
                color: #000;
            }
        }
        .wrapper--team {
            .row-flex();
            justify-content: center;
            margin-bottom: 125px;
            .md-block({ margin-bottom: 90px; });
            .xs-block({ margin-bottom: 90px; });
            .person {
                .col();
                .size(4);
                .size-md(6);
                .size-sm(12);
                display: flex;
                margin-bottom: 60px;
                flex-direction: column;
                align-items: center;
                &.col-12 {
                    .size(12);
                }
                .img {
                    margin-bottom: 35px;
                    width: 240px;
                    height: 240px;
                    border-radius: 50%;
                    background-color: #fff;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    .sm-block({ margin-bottom: 30px; width: 200px; height: 200px; });
                }
                .name {
                    font-family: @BebasNeue;
                    flex-grow: 1;
                    margin-bottom: 15px;
                    font-weight: 600;
                    font-size: 3.5rem;
                    letter-spacing: 0.25rem;
                    color: #000;
                    text-align: center;
                    .sm-block({ font-size: 28px; });
                    .xs-block({ margin-bottom: 13px; });
                }
                .profession,
                .country,
                .link {
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.15rem;
                    text-align: center;
                    .sm-block({ font-size: 16px; });
                }
                .profession,
                .country {
                    margin-bottom: 15px;
                    .xs-block({ margin-bottom: 10px; });
                }
                .link {
                    color: @orangeMain;
                    border-bottom: 1px solid @orangeMain;
                    .transition();
                    &:hover {
                        color: @orangeMain;
                        border-bottom: 1px solid transparent;
                    }
                }
            }
        }
    }
    .b-crowdsale {
        .wrapper--crowdsale {
            display: flex;
            flex-direction: column;
            align-items: center;
            .text {
                margin-bottom: 40px;
                font-family: @BebasNeue;
                font-weight: 600;
                font-size: 3.5rem;
                letter-spacing: 0.24rem;
                color: #000;
                text-transform: uppercase;
                text-align: center;
                .xs-block({ margin-bottom: 25px; });
                .orange {
                    color: @orangeMain;
                    font-weight: 600;
                }
            }
            .logo-crowdsale {
                margin-bottom: 30px;
                .xs-block({ margin-bottom: 25px; max-width: 280px });
            }
            .link {
                font-size: 20px;
                font-weight: 200;
                letter-spacing: 0.14rem;
                color: @orangeMain;
                border-bottom: 1px solid @orangeMain;
                .transition();
                .md-block({ font-size: 16px; });
                &:hover {
                    border-bottom: 1px solid transparent;
                }
            }
        }
    }
</style>
