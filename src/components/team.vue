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
                <p>
                    {{t('When it comes to developing a business project - anyone, the most important and most important thing is working in a well-' +
                    'coordinated team and, of course, trust; creative thinking and much more.')}}
                </p>
                <p>
                    {{t('The foundation of our foundation consists of creative people - professionals in their field with extensive ' +
                    'experience in various fields of activity!')}}
                </p>
            </div>
            <div class="wrapper--team">
                <div class="person person-12">
                    <div class="img-wrapper">
                        <div class="img" style="background-image: url(/img/person1.png)"></div>
                    </div>
                    <div class="profile-wrapper">
                        <p class="name">Грей Фредериксон</p>
                        <p class="profession">{{t('Producer, screenwriter, actor')}}</p>
                        <p class="country">{{t('USA')}}</p>
                    </div>
                </div>
                <div class="person person-4">
                    <div class="img-wrapper">
                        <div class="img" style="background-image: url(/img/person2.png)"></div>
                    </div>
                    <div class="profile-wrapper">
                        <p class="name">Саламат Мухаммед-Али</p>
                        <p class="profession">{{t('Director, screenwriter')}}</p>
                        <p class="premium">{{t('The founder of the award for children "Altyn Adam" in the United States.')}}</p>
                        <p class="country">{{t('Kazakhstan')}}</p>
                    </div>
                </div>
                <div class="person person-4">
                    <div class="img-wrapper">
                        <div class="img" style="background-image: url(/img/person3.png)"></div>
                    </div>
                    <div class="profile-wrapper">
                        <p class="name">Питер Жмутский</p>
                        <p class="profession">{{t('Producer, Director, Actor, Screenwriter, Composer')}}</p>
                        <p class="country">{{t('USA')}} {{t('Kazakhstan')}}</p>
                    </div>
                </div>
                <div class="person person-4">
                    <div class="img-wrapper">
                        <div class="img" style="background-image: url(/img/person4.png)"></div>
                    </div>
                    <div class="profile-wrapper">
                        <p class="name">Динара Батырова</p>
                        <p class="profession">{{t('Producer')}}</p>
                        <p class="country">{{t('Kazakhstan')}}</p>
                    </div>
                </div>
            </div>
            <section class="b-crowdsale">
                <div class="wrapper--crowdsale">
                    <p class="text">Проект реализуется при поддержке <strong class="orange">Crowdsale Network</strong>
                    </p>
                    <a href="https://crowdsale.network/" target="_blank"><img class="logo-crowdsale" src="/img/crowdsale-logo.png" alt=""></a>
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
        z-index: 15;
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
            p {
                margin-bottom: 15px;
                font-weight: 200;
                font-size: 2rem;
                color: @grayMain;
                letter-spacing: 0.14rem;
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
                overflow: hidden;
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
                    .size-xm(10);
                    .size-xs(12);
                    margin-bottom: 20px;
                    background: @gradientPersonHorizontal;
                    .xm-block({ flex-direction: column; justify-content: center; });
                    .img-wrapper {
                        width: 100%;
                        max-width: 380px;
                        .sm-block({ max-width: 250px; });
                        .img {
                            &::after {
                                bottom: 0;
                            }
                        }
                    }
                    .profile-wrapper {
                        padding-left: 0;
                        padding-bottom: 0;
                        align-self: center;
                        .xm-block({ padding: 40px; padding-top: 20px; align-items: flex-start; });
                    }
                }
                &.person-4 {
                    .size(4);
                    .size-lg(12);
                    .size-xm(10);
                    .size-xs(12);
                    justify-content: center;
                    flex-direction: column;
                    background: @gradientPersonVertical;
                    .lg-block({ flex-direction: row; margin-bottom: 20px; background: @gradientPersonHorizontal });
                    .xm-block({ flex-direction: column; });
                    .img-wrapper {
                        .lg-block({ width: 100%; max-width: 380px; });
                        .sm-block({ max-width: 250px; });
                        .img {
                            &::after {
                                bottom: -20px;
                                .lg-block({ bottom: 0; });
                            }
                        }
                    }
                    .profile-wrapper {
                        .lg-block({ padding-left: 0; padding-bottom: 0; align-self: center; });
                        .xm-block({ padding: 40px; padding-top: 20px; align-items: flex-start; });
                    }
                }
                .img-wrapper {
                    position: relative;
                    display: flex;
                    .xm-block({ margin: 0 auto; });
                    .img {
                        position: relative;
                        padding-top: 20px;
                        width: 100%;
                        height: 320px;
                        background-repeat: no-repeat;
                        background-position: center;
                        .sm-block({ height: 250px; background-size: contain; });
                        z-index: 1;
                    }
                    &::after {
                        content: "";
                        position: absolute;
                        top: -40px;
                        left: 0;
                        right: 0;
                        height: 25px;
                        border-radius: 50%;
                        box-shadow: 0 5px 235px 87px @pinkLight;
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
                    .profession {
                        flex-grow: 1;
                    }
                    .premium,
                    .profession,
                    .country,
                    .link {
                        font-weight: 200;
                        font-size: 2rem;
                        letter-spacing: 0.15rem;
                        .sm-block({ font-size: 16px; });
                    }
                    .premium,
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
                    color: #442fe5;
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
                color: #442fe5;
                border-bottom: 1px solid #442fe5;
                .transition();
                .md-block({ font-size: 16px; });
                &:hover {
                    border-bottom: 1px solid transparent;
                }
            }
        }
    }
</style>
