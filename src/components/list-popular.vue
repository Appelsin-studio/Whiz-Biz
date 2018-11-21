<template>
    <section class="b-list-popular">
        <div class="planet-big"></div>
        <div class="container">
            <p class="g-number">05</p>
            <h3 class="g-caption-section">{{t('Fund Promotion and Development Plan')}}
                <span class="gradient-text">Whiz Biz</span>
            </h3>
            <div class="wrapper-list">
                <div class="item">
                    <p class="item-name">{{t('Advertising in all projects and film projects created by the crypto fund.')}}</p>
                </div>
                <div class="item">
                    <p class="item-name">
                        {{t('Within 7 years, several dozen full-length, short, documentary films and cartoons will be shot by ' +
                        'the WHIZBIZ crypto fund that will take part in many film festivals of the world, as well as in ' +
                        'competitions where prizes and awards will be presented - these victories and films will know all world.')}}
                    </p>
                </div>
                <div class="item">
                    <p class="item-name">{{t('Attracting influential critics, world publications.')}}</p>
                </div>
                <div class="item">
                    <p class="item-name">{{t('All films and projects of the WHIZ BIZ crypto fund will be released ' +
                        'with the support of the CROWDSALE NETWORK platform.')}}</p>
                </div>
                <div class="item">
                    <p class="item-name">
                        {{t('During the work on the movie "Ghost City", from the very first day of ' +
                        'the launch of the film project and until the very premiere, "Reality Show" will ' +
                        'be filmed, where viewers will be able to learn and watch all the processes of creating Hollywood cinema.')}}
                    </p>
                </div>
                <div class="item">
                    <p class="item-name">{{t('The "Reality Show" will be broadcast via channels: YouTube, Twitter, Facebook, Instagram.')}}</p>
                </div>
                <div class="item">
                    <p class="item-name">
                        {{t('During the filming of "Reality Show" there will be competitions for ' +
                        'the best ideas, scripts, best artwork, design and much more.')}}
                    </p>
                </div>
                <div class="item">
                    <p class="item-name">{{t('Contests will be held and winners will be awarded tokens')}} WHIZ BIZ
                        COIN (WB).</p>
                </div>
                <div class="item">
                    <p class="item-name">{{t('The possibility of interviewing celebrities (directors, actors, etc.).')}}</p>
                </div>
                <div class="item">
                    <p class="item-name">{{t('Attracting journalists (TV, newspapers, magazines, WEB, etc.).')}}</p>
                </div>
                <div class="item">
                    <p class="item-name">
                        {{t('The "Ghost Town" motion picture film will be released from the creator of the "Godfather" ' +
                        'trilogy - this is a big breakthrough for the Kazakh-American film industry, which the whole world will learn about.')}}
                    </p>
                </div>
                <div class="item">
                    <p class="item-name">{{t('The most famous bloggers / bloggers of the world will join the collaboration.')}}</p>
                </div>
                <div class="item">
                    <p class="item-name">
                        {{t('At the moment, the company "NV Games" is developing the concept of the game "Ghost Town". The company took part in the development of computer games Stalker, World of Tanks, Metro 2033, Eve Online.')}}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin],
    data() {
      return {
        activeTab: 0
      }
    }
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-list-popular {
        position: relative;
        padding-top: 300px;
        padding-bottom: 300px;
        z-index: 10;
        .gradientMainOpacityLeft(1);
        .lg-block({ padding: 200px 0; });
        .xs-block({ padding: 120px 0; });
        .planet-big {
            position: absolute;
            top: 50%;
            right: -300px;
            transform: translateY(-30%) rotate(-90deg);
            width: 1000px;
            height: 500px;
            opacity: 0.4;
            background: url("/img/planet-big.png") no-repeat right center / contain;
        }
        .g-number {
            .line-after--right();
        }
        .g-caption-section {
            margin-bottom: 80px;
            .xs-block({ margin-bottom: 65px; });
        }
        .wrapper-list {
            display: flex;
            flex-direction: column;
            .item {
                position: relative;
                padding: 60px 50px 0 45px;
                transition: .6s;
                .md-block({ padding: 40px 30px 0 30px; margin-bottom: 20px; });
                .xs-block({ padding: 20px 10px 0 10px; margin-bottom: 10px; });
                &:last-child {
                    margin-bottom: 0;
                }
                .item-name {
                    position: relative;
                    padding-left: 90px;
                    font-weight: 900;
                    font-size: 2.5rem;
                    letter-spacing: 0.17rem;
                    color: #fff;
                    text-transform: uppercase;
                    .md-block({ padding-left: 60px; });
                    .xs-block({ padding-left: 40px; });
                    &::before {
                        content: '';
                        position: absolute;
                        width: 48px;
                        height: 48px;
                        left: 0;
                        top: -5px;
                        background: url("/img/icon/star.svg") no-repeat center / 28px, @gradientDefault;
                        border-radius: 50%;
                        .md-block({ width: 30px; height: 30px; top: 0; background-size: 18px; background:
                            url("/img/icon/star.svg") no-repeat center / 18px, @pinkLight;});
                        .xs-block({ width: 25px; height: 25px; background-size: 15px; });
                        transition: .6s;
                    }
                    &::after {
                        content: '';
                    }
                }
                .item-content {
                    display: block;
                    padding-left: 90px;
                    padding-bottom: 60px;
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    color: #676767;
                    .md-block({ padding-left: 60px; padding-bottom: 40px; });
                    .xs-block({ padding-left: 40px; padding-bottom: 20px; });
                }
            }
        }
    }
</style>
