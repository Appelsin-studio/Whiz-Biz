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
                        <span class="gradient-text">{{t('Main goals and objectives')}}</span>
                        <strong>{{t('crypto fund')}} <span class="no-wrap">WHIZ BIZ</span></strong>
                    </h3>
                    <p class="description">{{t('To help creative people to develop in the territory of their homeland and in other countries.')}}</p>
                    <p class="description">{{t('Finance projects at different stages of readiness.')}}</p>
                    <p class="description">{{t('Finance global projects.')}}</p>
                    <p class="description">{{t('Finance and implement business portals, forums, etc.')}}</p>
                    <p class="description">{{t('To finance short and full-length films, documentaries, cartoons with their ' +
                        'further placement on all world platforms.')}}</p>
                    <p class="description">{{t('Become the preferred portal for investing in various fields of art.')}}</p>
                    <p class="description">{{t('Become a leading currency in the industry of InterTeing.')}}</p>
                    <p class="description">{{t('Attracting investments for the development of projects ' +
                        'with the support of the CrowdSaleNetwork platform.')}}</p>
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
        padding-top: 260px;
        padding-bottom: 280px;
        background: @gradientMain,
        url("/img/bg-guitar.jpg") no-repeat left top / cover;
        .lg-block({ padding-top: 120px; padding-bottom: 140px; });
        .xs-block({ padding-top: 90px; padding-bottom: 100px; });
        .g-caption-section {
            font-size: 4rem;
            .md-block({ font-size: 3rem; });
            .xs-block({ font-size: 2.5rem; });
            strong {
                font-size: 6rem;
                .lg-block({ font-size: 5rem; letter-spacing: 0.3rem; });
                .sm-block({ font-size: 3.5rem; letter-spacing: 0.2rem; });
            }
        }
        .wrapper {
            position: relative;
            justify-content: space-between;
            align-items: flex-end;
            display: flex;
            .sm-block({ flex-direction: column; });
            .caption-wrapper {
                max-width: calc(100% - 390px - 70px);
                z-index: 99;
                .lg-block({ order: 1; text-align: right; margin-bottom: 20px; max-width: calc(100% - 300px - 70px); });
                .sm-block({ max-width: 90%; margin-bottom: 50px; });
                .g-number {
                    color: #fff;
                    .line-after--right();
                    .lg-block({ .line-after--left(); });
                }
                .description {
                    margin-bottom: 2rem;
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
                margin-right: 70px;
                align-items: center;
                box-sizing: border-box;
                z-index: 5;
                flex-shrink: 0;
                .sm-block({ order: 2; padding: 0; justify-content: center; align-self: center; });
                .coub {
                    width: 390px;
                    height: 390px;
                    border-left: 10px solid @pinkLight;
                    border-right: 10px solid @red;
                    background-image: @gradientDefault, @gradientDefault;
                    background-position: 0 0, 0 100%;
                    background-repeat: no-repeat;
                    background-size: 100% 10px;
                    box-sizing: border-box;
                    .lg-block({ width: 300px; height: 300px; });
                    .xs-block({ width: 180px; height: 180px; });
                }
                .img {
                    position: absolute;
                    left: -180px;
                    max-width: max-content;
                    z-index: 101;
                    .lg-block({ max-height: 600px; left: -50px; });
                    .sm-block({ max-height: 400px; });
                    .xs-block({ max-height: 300px; })
                }
            }
        }

    }
</style>
