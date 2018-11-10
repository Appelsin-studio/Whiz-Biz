<template>
    <section class="b-idea-film">
        <div class="container">
            <p class="g-number">07</p>
            <h3 class="g-caption-section">
                <span>{{t('Filma')}}</span>
                <strong class="gradient-text">{{t('idea')}} </strong>
            </h3>
            <div class="wrapper">

                <div class="top-char">
                    <div class="characteristics">
                        <span class="bold">{{t('Genre')}}:&ensp;</span>
                        <span class="light">{{t('Found footage / Found film, Mystic, Horror, Fiction')}}</span>
                    </div>
                    <div class="characteristics">
                        <span class="bold">{{t('Timing')}}:&ensp;</span>
                        <span class="light">100 {{t('minutes')}}</span>
                    </div>
                    <div class="characteristics">
                        <span class="bold">{{t('Picture production schedule')}}:&ensp;</span>
                        <span class="light">12 {{t('months')}}</span>
                    </div>
                </div>
                <div class="company-wrapper">
                    <img class="dvd-img" src="/img/dvd-box.png" alt="dvd">
                    <p class="company">
                        {{t('The company "GHOST TOWN PRODUCTIONS, LLC"; from Oklahoma (USA), offers you a film project called "Ghost Town".')}}
                    </p>
                </div>
                <p class="story-film--bold">
                    {{t('The film is based on real events that occurred in 1999 in Oklahoma, where the most powerful ' +
                    'tornado left behind serious damage and ledto a series of in explicable events.')}}
                </p>
                <p class="story-film--light">
                    {{t('A small group of locals who hunted near the "Ghost Town" will find among the ruins ' +
                    'amateur tapes, where the film remains on the floor, and a part of the team s eight-person mission, which was lost ' +
                    'on May 3, 1999, will be captured. Hunters will find out that they are the chosen ones and will discover ' +
                    'other civilizations, worlds and parallel dimensions.')}}
                </p>
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
    .b-idea-film {
        position: relative;
        padding-top: 260px;
        padding-bottom: 250px;
        z-index: 10;
        background: linear-gradient(to right, rgba(19, 72, 182, 0.95) 0%, rgba(179, 0, 255, 0.9) 100%),
        url("/img/bg-idea.jpg") no-repeat right top / cover;
        .lg-block({
            padding-top: 200px ;
            padding-bottom: 200px;
        });
        .xs-block({
            padding-top: 110px;
            padding-bottom: 110px;
        });
        .bold {
            font-weight: 900;
            text-transform: uppercase;
        }
        .g-number {
            .line-after--right();
        }
        .g-caption-section {
            margin-bottom: 60px;
            span {
                display: block;
            }

        }
        .wrapper {
            display: flex;
            flex-direction: column;

            .top-char {
                display: flex;
                padding-left: 60px;
                margin-bottom: 80px;
                flex-direction: column;
                max-width: 550px;
                .sm-block({ padding-left: 20px; margin-bottom: 50px;});
                .characteristics {
                    display: flex;
                    margin-bottom: 30px;
                    font-size: 2rem;
                    letter-spacing: 0.14px;
                    .sm-block({
                        font-size: 14px;
                    });
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .black {
                        font-weight: 900;
                    }
                    .light {
                        font-weight: 200;
                    }
                }
            }
            .company-wrapper {
                position: relative;
                flex-grow: 1;
                padding: 40px 60px;
                margin-bottom: 40px;
                font-weight: 900;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
                text-transform: uppercase;
                background: linear-gradient(90deg, rgba(248,22,224, 0.9), rgba(255,88,123, 0.9));
                .sm-block({ padding: 20px;});
                .company {
                    max-width: 600px;
                }
                .dvd-img {
                    position: absolute;
                    right: -150px;
                    bottom: -100px;
                    .lg-block({max-height: 550px});
                    .md-block({ display: none;});
                }
            }
            .story-film--bold {
                margin-bottom: 40px;
                padding-left: 60px;
                max-width: 70%;
                font-weight: 900;
                font-size: 2.2rem;
                letter-spacing: 0.15rem;
                .sm-block({ padding-left: 20px;});
                .xs-block({
                    font-size: 15px;
                });
            }
            .story-film--light {
                padding-left: 60px;
                font-weight: 200;
                font-size: 2rem;
                .sm-block({ padding-left: 20px;});
                .xs-block({
                    font-size: 14px;
                });
            }
            .img {
                .col();
                .size(5);
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                img {
                    border-radius: 50%;
                    &.z-index--2 {
                        align-self: flex-start;
                        margin-top: -100px;
                    }
                    .sm-block({ display: none;});
                }
            }
        }
    }
</style>
