<template>
    <section class="b-idea-film">
        <div class="container">
            <div class="wrapper">
                <div class="description-wrapper">
                    <p class="g-number">07</p>
                    <p class="g-caption-section"><span class="gradient-text">{{t('Film')}}</span> {{t('idea')}}</p>
                    <div class="characteristics">
                        <span class="black">{{t('Genre')}}:&ensp;</span>
                        <span class="light">{{t('Found footage / Found film, Mystic, Horror, Fiction')}}</span>
                    </div>
                    <div class="characteristics">
                        <span class="black">{{t('Timing')}}:&ensp;</span>
                        <span class="light">100 {{t('minutes')}}</span>
                    </div>
                    <div class="characteristics">
                        <span class="black">{{t('Picture production schedule')}}:&ensp;</span>
                        <span class="light">12 {{t('months')}}</span>
                    </div>
                    <p class="company">
                        {{t('GHOST TOWN PRODUCTIONS, LLC from Oklahoma (USA) offers you a film project called "Ghost Town"')}}.
                    </p>
                    <p class="story-film">
                        {{t('This story of the tragedy of the 1999 Tornadoes and the ghost town of Bezrodnoy Grove is based on real events. The action takes place in the US, in Oklahoma. Local hunters near the perimeter of the Bezrodnaya Grove find tapes with amateur recording. These cassettes captured the entire mission of a team of eight people who disappeared in the Ghost City on May 3, 1999. In "Bezrodnaya groves" our heroes will learn that they are the chosen ones. They discover other civilizations, worlds and parallel dimensions.')}}
                    </p>
                </div>
                <div class="img">
                    <img class="z-index--1" src="/img/idea-film-1.jpg" alt="">
                    <img class="z-index--2" src="/img/idea-film-2.jpg" alt="">
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
    .b-idea-film {
        position: relative;
        padding-top: 260px;

        z-index: 15;
        .lg-block({
            padding-top: 130px ;
        });
        .md-block({
            padding-top: 90px;
        });
        .black {
            color: #000;
        }
        .g-caption-section {
            margin-bottom: 60px;
            .line-after--left();
        }
        .wrapper {
            .row-flex();
            .description-wrapper {
                .col();
                .size(7);
                .size-sm(12);
                display: flex;
                flex-direction: column;
                .characteristics {
                    display: flex;
                    margin-bottom: 30px;
                    font-size: 2rem;
                    letter-spacing: 0.14px;
                    .sm-block({
                        font-size: 14px;
                    });
                    .black {
                        font-weight: 900;
                    }
                    .light {
                        font-weight: 200;
                    }
                }
                .company {
                    margin-bottom: 30px;
                    font-weight: 200;
                    font-size: 2.4rem;
                    letter-spacing: 0.17rem;
                }
                .story-film {
                    font-weight: 200;
                    font-size: 2rem;
                    .xs-block({
                        font-size: 14px;
                    });
                }
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
