<template>
    <section class="b-mission-fond">
        <div class="container">
            <div class="wrapper">
                <div class="img-wrapper">
                    <div class="coub"></div>
                    <img class="img" src="/img/ballerina.png" alt="ballerina">
                </div>
                <div class="caption-wrapper">
                    <p class="g-number">03</p>
                    <h3 class="g-caption-section">
                        <span class="gradient-text">{{t('Our')}}</span>
                        <strong>{{t('goal')}}</strong>
                    </h3>
                    <p class="description description--bold">
                        {{t('The company\'s goal is to create a platform under the brand GTC, to become the preferred portal for investment')}}
                    </p>
                    <p class="description">{{t('in the entertainment industry and for their cryptographic tokens to become the standard currency in the new Hollywood economy, enhanced by the advantages of digital assets.')}}</p>
                    <p class="description">{{t('The company operates in three main segments: financing, production and sale.')}}</p>
                    <p class="description">{{t('Attracting investment to the project is implemented using the platform CrowdSaleNetwork')}}</p>
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
    .b-mission-fond {
        position: relative;
        overflow: hidden;
        padding-top: 260px;
        padding-bottom: 260px;
        background: linear-gradient(to right, rgba(19, 72, 182, 0.85) 0%, rgba(179, 15, 255, 1) 100%),
            url("/img/bg-guitar.jpg") no-repeat left top / cover;
        .md-block({ padding-top: 80px;
            padding-bottom: 120px; });
        .xs-block({ padding-top: 60px;
            padding-bottom: 100px;  });
        .wrapper {
            position: relative;
            justify-content: space-between;
            align-items: flex-end;
            display: flex;
            .md-block({ flex-direction: column;});
            .caption-wrapper {
                max-width: 70%;
                z-index: 99;
                .md-block({
                    order: 1;
                    text-align: right;
                    margin-bottom: 20px;
                });
                .g-number {
                    color: #fff;
                }
                .description {
                    margin-bottom: 3rem;
                    color: #fff;
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    &--bold {
                        font-weight: 900;
                    }
                }
            }
            .img-wrapper {
                position: relative;
                display: flex;
                margin-right: 120px;
                align-items: center;
                box-sizing: border-box;
                z-index: 5;
                flex-shrink: 0;
                .md-block({ order: 2; padding: 0; justify-content: center;
                });
                .coub {
                    width: 390px;
                    height: 390px;
                    border-left: 10px solid @pinkLight;
                    border-right: 10px solid @red;
                    background-image: linear-gradient(to right, @pinkLight 0%, @red 100%),
                                        linear-gradient(to right, @pinkLight 0%, @red 100%);
                    background-position: 0 0, 0 100%;
                    background-repeat: no-repeat;
                    background-size: 100% 10px;
                }
                .img {
                    position: absolute;
                    left: -160px;
                    max-width: max-content;
                    z-index: 101;
                }
            }
        }

    }
</style>
