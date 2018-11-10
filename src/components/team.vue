<template>
    <section class="b-team">
        <div class="skew-block">
            <div class="img"></div>
        </div>
        <div class="container">
            <p class="g-number">04</p>
            <h3 class="g-caption-section">
                <span>{{t('Our')}} </span>
                <strong class="gradient-text">{{t('team')}}</strong>
            </h3>
            <div class="desc-wrapper">
                <p class="description-team">{{t('When it comes to developing a business project - anyone, the most important and most important thing is working in a well-coordinated team and, of course, trust; creative thinking and much more.')}}</p>
                <p class="description-team">{{t('The foundation of our foundation consists of creative people - professionals in their field with extensive experience in various fields of activity!')}}</p>
            </div>
            <div class="wrapper--team">
                <div class="person person-12">
                    <div class="img-wrapper">
                        <div class="img" style="background-image: url(/img/person-1.png)"></div>
                    </div>
                    <div class="profile-wrapper">
                        <p class="name">Грей Фредериксон</p>
                        <p class="profession">{{t('General producer')}}</p>
                        <p class="country">{{t('USA')}}</p>
                        <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                    </div>
                </div>
                <div class="person person-4">
                    <div class="img-wrapper">
                        <div class="img" style="background-image: url(/img/person-2.png)"></div>
                    </div>
                    <div class="profile-wrapper">
                        <p class="name">Саламат Мухаммед-Али</p>
                        <p class="profession">{{t('Filmmaker')}}</p>
                        <p class="country">{{t('Kazakhstan')}}</p>
                        <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                    </div>
                </div>
                <div class="person person-4">
                    <div class="img-wrapper">
                        <div class="img" style="background-image: url(/img/person-3.png)"></div>
                    </div>
                    <div class="profile-wrapper">
                        <p class="name">Питер Жмутский</p>
                        <p class="profession">{{t('Filmmaker')}}</p>
                        <p class="country">{{t('USA')}}</p>
                        <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                    </div>
                </div>
                <div class="person person-4">
                    <div class="img-wrapper">
                        <div class="img" style="background-image: url(/img/person-4.png)"></div>
                    </div>
                    <div class="profile-wrapper">
                        <p class="name">Динара Батырова</p>
                        <p class="profession">{{t('Producer')}}</p>
                        <p class="country">{{t('Kazakhstan')}}</p>
                        <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                    </div>
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
        .skew-block {
            .img {
                width: 100%;
                height: 100%;
                transform: skewY(7deg);
                background: url("/img/cine-film.jpg") no-repeat center 40%;
            }
        }
        .g-number {
            color: #000;
            .line-after--right(@gradientDefault);
        }
        .g-caption-section {
            margin-bottom: 20px;
            .sm-block({ margin-bottom: 20px; });
            span {
                color: #000;
            }
        }
        .desc-wrapper {
            margin-bottom: 50px;
            .sm-block({ margin-bottom: 20px; });
            .description-team {
                margin-bottom: 15px;
                font-size: 2.4rem;
                color: #000;
                font-weight: 900;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        .wrapper--team {
            .row-flex();
            justify-content: center;
            margin-bottom: 125px;
            .md-block({ margin-bottom: 90px; });
            .xs-block({ margin-bottom: 90px; });
            .main-person {
                .col();
                .size(12);
            }
            .person {
                .col();
                position: relative;
                display: flex;
                padding: 10px;
                &::after {
                    position: absolute;
                    content: '';
                    left: 10px;
                    right: 10px;
                    top: 10px;
                    bottom: 10px;
                    border: 1px solid #fff;
                    z-index: 1;
                }
                &.person-12 {
                    .size(12);
                    margin-bottom: 20px;
                    background: linear-gradient(to right, #b303fe 0%, #442fe5 25%, #442fe5
                    40%, rgba(37, 23, 141, 0.45) 60%, rgba(37, 23, 141, 0.55) 100%), #442fe5;
                    .img-wrapper {
                        margin: -10px -10px -10px -10px;
                        width: 100%;
                        max-width: 380px;
                        .sm-block({max-width: 250px;});
                        .img {
                            background-position-y: 50px;
                            &::after {
                                bottom: 0;
                            }
                        }
                    }
                    .profile-wrapper {
                        padding-left: 0;
                        padding-bottom: 0;
                        align-self: center;
                    }
                }
                &.person-4 {
                    .size(4);
                    .size-lg(12);
                    flex-direction: column;
                    background: linear-gradient(to bottom, #b303fe  0%, #442fe5 40%, #442fe5 70%,  rgba(37,23,141,0.95)
                    100%);
                    .lg-block({
                        flex-direction: row;
                        margin-bottom: 20px;
                        background: linear-gradient(to right, #b303fe 0%, #442fe5 25%, #442fe5
                        40%, rgba(37, 23, 141, 0.45) 60%, rgba(37, 23, 141, 0.55) 100%), #442fe5;
                    });
                    .md-block({background: linear-gradient(to right, #b303fe 0%, #442fe5 25%, #442fe5
                    30%, rgba(37, 23, 141, 0.45) 60%, rgba(37, 23, 141, 0.55) 100%), #442fe5;});
                    .img-wrapper {
                        .lg-block({
                            margin: -10px -10px -10px -10px;
                            width: 100%;
                            max-width: 380px;
                        });
                        .sm-block({max-width: 250px;});
                        .img {
                            .lg-block({background-position-y: 50px;});
                            &::after {
                                bottom: -20px;
                                .lg-block({bottom: 0;});
                            }
                        }
                    }
                    .profile-wrapper {
                        .lg-block({padding-left: 0;
                            padding-bottom: 0;
                            align-self: center;});
                    }
                }
                .img-wrapper {
                    position: relative;
                    display: flex;
                    margin: -10px -10px 0 -10px;
                    background:  radial-gradient(circle at center, rgba(253,3,239,1) 0%, rgba(253,3,239,1) 120px,
                    rgba(250,250,250,0) 120px, rgba(250,250,250,0) 100%);
                    .sm-block({background:  radial-gradient(circle at center, rgba(253,3,239,1) 0%, rgba(253,3,239,1)
                    90px,
                    rgba(250,250,250,0) 90px, rgba(250,250,250,0) 100%);});
                    .img {
                        position: relative;
                        padding-top: 20px;
                        width: 100%;
                        height: 320px;
                        background-repeat: no-repeat;
                        background-position: center;
                        .sm-block({height: 250px; background-size: contain;});
                        &::after {
                            position: absolute;
                            content: '';
                            left: 0;
                            right: 0;
                            top: 0;
                            background: radial-gradient(ellipse at center, rgba(250, 255, 253, 0) 0%, rgba(250, 255,
                            253, 0) 42%, rgba(68, 47, 229, 0.9) 53%, #442fe5 56%, #442fe5 100%);
                            background-size: 690px 600px;
                            background-position: -150px -238px;
                            background-repeat: no-repeat;
                            .sm-block({ display: none;});
                        }
                    }
                }
                .profile-wrapper {
                    position: relative;
                    display: flex;
                    padding-left: 60px;
                    padding-right: 50px;
                    padding-bottom: 60px;
                    flex-grow: 1;
                    flex-direction: column;
                    align-items: flex-start;
                    z-index: 5;
                    .name {
                        flex-grow: 1;
                        padding-bottom: 23px;
                        margin-bottom: 15px;
                        font-weight: 900;
                        font-size: 2.5rem;
                        letter-spacing: 0.17rem;
                        color: #fff;
                        text-transform: uppercase;
                        background: linear-gradient(@pinkLight, @pinkLight) 0% 100% no-repeat;
                        background-size: 40px 3px;
                        .sm-block({ font-size: 22px; });
                        .xs-block({ margin-bottom: 14px; });
                    }
                    .profession,
                    .country,
                    .link {
                        font-weight: 200;
                        font-size: 2rem;
                        letter-spacing: 0.15rem;
                        .sm-block({ font-size: 16px; });
                    }
                    .profession,
                    .country {
                        color: #fff;
                        margin-bottom: 15px;
                        .xs-block({ margin-bottom: 10px; });
                    }
                    .link {
                        color: @pinkLight;
                        border-bottom: 1px solid @pinkLight;
                        .transition();
                        &:hover {
                            color: #fff;
                            border-bottom: 1px solid transparent;
                        }
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
                font-weight: 900;
                font-size: 3.5rem;
                letter-spacing: 0.24rem;
                color: #000;
                text-transform: uppercase;
                text-align: center;
                .xs-block({ margin-bottom: 25px; });
                .orange {
                    color: #442FE5;
                    font-weight: 900;
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
                color: #442FE5;
                border-bottom: 1px solid #442FE5;
                .transition();
                .md-block({ font-size: 16px; });
                &:hover {
                    border-bottom: 1px solid transparent;
                }
            }
        }
    }
</style>
