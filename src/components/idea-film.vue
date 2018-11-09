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
                    <p class="company">
                        {{t('GHOST TOWN PRODUCTIONS, LLC from Oklahoma (USA) offers you a film project called "Ghost Town"')}}.
                    </p>
                </div>
                <p class="story-film--bold">
                    {{t('This story of the tragedy of the 1999 Tornadoes and the ghost town of Bezrodnoy Grove is based on real events.')}}
                </p>
                <p class="story-film--light">
                    {{t('The action takes place in the US, in Oklahoma. Local hunters near the perimeter of the Bezrodnaya Grove find tapes with amateur recording. These cassettes captured the entire mission of a team of eight people who disappeared in the Ghost City on May 3, 1999. In "Bezrodnaya groves" our heroes will learn that they are the chosen ones. They discover other civilizations, worlds and parallel dimensions.')}}
                </p>
            </div>
            <!--<div class="img">
                <img class="z-index&#45;&#45;1" src="/img/idea-film-1.jpg" alt="">
                <img class="z-index&#45;&#45;2" src="/img/idea-film-2.jpg" alt="">
            </div>-->
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
        background: linear-gradient(to right, rgba(19, 72, 182, 0.85) 0%, rgba(179, 15, 255, 1) 100%),
        url("/img/bg-guitar.jpg") no-repeat left top / cover;
        .lg-block({
            padding-top: 130px ;
        });
        .md-block({
            padding-top: 90px;
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
                flex-grow: 1;
                padding: 40px 60px;
                margin-bottom: 40px;
                font-weight: 900;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
                text-transform: uppercase;
                background: linear-gradient(90deg, rgba(248,22,224, 0.8), rgba(255,88,123, 0.8));
                .sm-block({ padding: 20px;});
                .company {
                    max-width: 600px;
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
