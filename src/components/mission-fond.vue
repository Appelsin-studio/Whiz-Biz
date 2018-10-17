<template>
    <section class="b-mission-fond">
        <div class="container">
            <div class="wrapper">
                <div class="img">
                    <img  src="/img/mission-fond.jpg" alt="">
                </div>
                <div class="caption-wrapper">
                    <p class="g-number">03</p>
                    <p class="g-caption-section">{{t('Our')}} <strong class="gradient-text">{{t('goal')}}</strong></p>
                    <p class="description">
                        {{t('The company\'s goal is to create a platform under the GTC brand, to become the preferred ' +
                        'portal for investment in the entertainment industry and for its cryptographic tokens to become the standard currency in ' +
                        'the new Hollywood economy, enhanced by the advantages of digital assets.')}} <br><br>
                        {{t('The company operates in three main segments: financing, production and sale.')}} <br><br>
                        {{t('Attracting investment to the project is implemented using the platform CrowdSaleNetwork')}}
                    </p>
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
        padding-top: 125px;
        padding-bottom: 200px;
        z-index: 15;
        .md-block({ padding-top: 80px;
            padding-bottom: 120px; });
        .xs-block({ padding-top: 60px;
            padding-bottom: 100px;  });
        .wrapper {
            position: relative;
            justify-content: flex-start;
            align-items: center;
            .row-flex();
            .md-block({ flex-direction: column;});
            .caption-wrapper {
                .col();
                .size(7);
                .size-md(10);
                .size-sm(12);
                z-index: 99;
                .md-block({
                    order: 1;
                    text-align: right;
                    margin-bottom: 20px;
                });
                /*.sm-block({
                    padding-left: 20px;
                    padding-right: 20px;
                });*/
                .g-caption-section {
                    .line-after--right(-20px);
                }
                .description {
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                }
            }
            .img {
                .col();
                .size(5);
                .size-md(6);
                .size-sm(8);
                display: flex;
                align-items: center;
                position: relative;
                padding: 0 55px;
                box-sizing: border-box;
                z-index: 5;
                flex-shrink: 0;
                .md-block({ order: 2; padding: 0; justify-content: center;
                });
                &::after {
                    content: "";
                    position: absolute;
                    left: 20px;
                    width: 300px;
                    height: 300px;
                    border: 12px solid @orangeMain;
                    border-radius: 50%;
                    box-sizing: border-box;
                    .md-block({ width: 250px;
                        height: 250px;})
                }
                img {
                    position: relative;
                    bottom: -90px;
                    right: -20px;
                    border-radius: 50%;
                    z-index: 10;
                    .md-block({ max-height: 300px;})
                }
            }
        }

    }
</style>
