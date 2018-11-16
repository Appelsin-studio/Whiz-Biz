<template>
    <section class="b-film">
        <div class="skew-block"></div>
        <div class="container">
            <p class="g-number">06</p>
            <h2 class="g-caption-section">{{t('Film')}} <strong class="gradient-text">“ГОРОД ПРИЗРАК”</strong> / ”GHOST
                TOWN”</h2>
            <div class="wrapper">
                <div class="img-wrapper">
                    <img class="img" src="/img/poster.jpg" alt="">
                    <img class="blood-img" src="/img/blood.png" alt="">
                    <div class="coub"></div>
                </div>
                <div class="wrapper-desc">
                    <p class="desc--bold black">{{t('Work has begun on the Kazakhstan-Hollywood film project')}} <span
                        class="blue">"{{t('GHOST TOWN')}}"</span></p>
                    <p class="desc"><b class="black">{{t('Directors')}}:</b> Саламат Мухаммед-Али (Salamat Mukhammed-Ali)
                        и Питер Жмутский (Peter Zhmutski). </p>
                    <p class="desc"><b class="black">{{t('General producer')}}:</b> Грей Фредериксон/Gray Frederickson
                        <i>{{t('Hollywood legend, Oscar and Emmy film awards producer, "The Godfather trilogy')}}</i>
                        </p>
                    <p class="desc"><b class="black">{{t('Producer')}}:</b> Динара Батырова.</p>
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
    .b-film {
        position: relative;
        z-index: 15;
        padding-top: 50px;
        .md-block({ padding-top: 0;
        });
        .g-number {
            color: #000;
            .line-after--right(@gradientDefault);
        }
        .g-caption-section {
            margin-bottom: 60px;
            color: #000;
            .xs-block({
                margin-bottom: 50px;
            });
        }
        .wrapper {
            position: relative;
            display: flex;
            padding-top: 25px;
            justify-content: flex-end;
            align-items: flex-start;
            color: #000;
            .lg-block({ padding-top: 0;
                flex-direction: column;
                align-items: center;
            });
            .img-wrapper {
                position: relative;
                .lg-block({
                    margin-bottom: 50px;
                });
                .sm-block({
                    max-width: 70%;
                });
                .img {
                    position: relative;
                    z-index: 5;
                }
                .blood-img {
                    position: absolute;
                    max-width: none;
                    bottom: -120px;
                    left: -230px;
                    z-index: 4;
                    .sm-block({max-height: 500px; bottom: -100px;
                        left: -200px;});
                }
                .coub {
                    position: absolute;
                    left: -100px;
                    bottom: -70px;
                    width: 390px;
                    height: 390px;
                    border-left: 10px solid @pinkLight;
                    border-right: 10px solid @red;
                    background-image: @gradientDefault, @gradientDefault;
                    background-position: 0 0, 0 100%;
                    background-repeat: no-repeat;
                    background-size: 100% 10px;
                    .lg-block({top: 150px; bottom: auto;});
                    .sm-block({ width: 220px; height: 220px; left: -60px; bottom: -40px; top: auto; });
                    z-index: 1;
                }
            }

            .wrapper-desc {
                padding: 75px 15px 65px 100px;
                max-width: 890px;
                box-sizing: border-box;
                z-index: 1;
                flex-shrink: 2;
                .md-block({
                    padding: 65px 40px 0 40px;
                });
                .sm-block({ padding-top: 20px;});
                .xs-block({
                    padding: 20px 10px 0 10px;
                });
                .desc--bold {
                    margin-bottom: 30px;
                    font-weight: 900;
                    font-size: 2.6rem;
                    letter-spacing: 0.17rem;
                    text-transform: uppercase;
                    .sm-block({
                        font-size: 18px;
                    });
                    .blue {
                        color: @pinkLight;
                    }
                }
                .desc {
                    margin-bottom: 25px;
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    .sm-block({
                        font-size: 14px;
                    });
                    &:last-child {
                        margin-bottom: 0;
                    }
                    b {
                        text-transform: uppercase;
                        font-weight: 900;
                    }
                    i {
                        font-weight: 200;
                    }
                }
            }
        }
    }
</style>
