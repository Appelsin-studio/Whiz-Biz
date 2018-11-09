<template>
    <section class="b-list-popular">
        <div class="planet-big"></div>
        <div class="container">
            <p class="g-number">05</p>
            <h3 class="g-caption-section">{{t('Why')}}<br>
                <span class="gradient-text">{{t('is the crypto fund gaining popularity')}}</span>
                {{t('and what will affect the growth of the token')}} Gtc?</h3>
            <div class="wrapper-list">
                <div class="item" v-for="(item, index) in accordion" :key="index" :class="{active:activeTab === index}">
                    <p class="item-name" @click="activeTab = index">{{index + 1}}. {{item.title}}</p>
                    <p class="item-content" v-if="activeTab === index">{{item.content}}</p>
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
    },
    computed: {
      accordion() {
        return [
          {
            title: this.t('several dozen will be shot of films'),
            content: this.t('For 7 years, the CRYPTO-FUND will be shot, several dozen full-length, short, ' +
              'documentary films and cartoons, which will participate in many film festivals of the world, in ' +
              'competitions and will win prizes. The whole world will know about these victories and films. ' +
              'Critics and world publications will write about them.')
          },
          {
            title: this.t('advertising in all projects'),
            content: this.t('Why')
          },
          {
            title: this.t('Movies will be released with the support of the Crypto Fund'),
            content: this.t('Why')
          },
          {
            title: this.t('will be filmed "reality show"'),
            content: this.t('Why')
          },
          {
            title: this.t('we will hold contests'),
            content: this.t('Why')
          },
          {
            title: this.t('interviews in all world top publications'),
            content: this.t('Why')
          },
          {
            title: '“' + this.t('from the creator of the trilogy The Godfather') + '”',
            content: this.t('Why')
          }
        ]
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
        background: linear-gradient(to right, rgba(19, 72, 182, 0.85) 0%, rgba(179, 15, 255, 1) 100%);
        .md-block({ padding: 110px 0; });
        .xs-block({ padding: 100px 0;});
        .planet-big {
            position: absolute;
            top: 50%;
            right: -300px;
            transform: translateY(-30%) rotate(-90deg);
            width: 1000px;
            height: 500px;
            opacity: 0.6;
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
                &.active {
                    margin-bottom: 20px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
                    .item-name {
                        color: #000;
                        &::before {
                            transform: rotate(-90deg);
                        }
                    }
                }
                .item-name {
                    position: relative;
                    margin-bottom: 30px;
                    padding-left: 90px;
                    font-weight: 900;
                    font-size: 2.5rem;
                    letter-spacing: 0.17rem;
                    color: #fff;
                    text-transform: uppercase;
                    cursor: pointer;
                    .md-block({ padding-left: 60px; });
                    .xs-block({ padding-left: 40px; });
                    &::after,
                    &::before {
                        content: '';
                        position: absolute;
                        width: 48px;
                        height: 48px;
                        left: 0;
                        top: -5px;
                        border-radius: 50%;
                        .md-block({ width: 30px; height: 30px; top: 0; });
                        .xs-block({ width: 25px; height: 25px; });
                        transition: .6s;
                    }
                    &::after {
                        background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 18px 4px, @gradientDefault;
                        .md-block({ background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 13px 3px,
                        @gradientDefault; });
                        .xs-block({ background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 10px 2px,
                        @gradientDefault; });
                    }
                    &::before {
                        background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 4px 18px;
                        z-index: 2;
                        .md-block({ background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 3px 13px; });
                        .xs-block({ background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 2px 10px; });
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
