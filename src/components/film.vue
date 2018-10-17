<template>
    <section class="b-film">
        <div class="container">
            <p class="g-number">06</p>
            <h2 class="g-caption-section">{{t('Film')}} <strong class="gradient-text">“ГОРОД ПРИЗРАК”</strong> / ”GHOST
                TOWN”</h2>
            <div class="wrapper">
                <div class="img">
                    <img src="/img/poster.jpg" alt="">
                </div>
                <div class="wrapper-desc">
                    <p class="desc--bold black">{{t('Work has begun on the Kazakhstan-Hollywood film project')}} <span
                        class="blue">"{{t('GHOST TOWN')}}"</span></p>
                    <p class="desc"><b class="black">{{t('Directors')}}:</b> Саламат Мухаммед-Али (Salamat Mukhammed-Ali)
                        и Питер Жмутский (Peter Zhmutski). </p>
                    <p class="desc"><b class="black">{{t('General producer')}}:</b> Грэй Фредриксон/Gray Frederickson
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
        margin-top: -65px;
        padding-top: 150px;
        z-index: 15;
        .md-block({
            margin-top: -80px;
            padding-top: 80px;
            padding-bottom: 20px;
        });
        .xs-block({
            padding-top: 60px;
            padding-bottom: 0;
        });
        .g-caption-section {
            margin-bottom: 60px;
            .line-after--left();
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
            .lg-block({ padding-top: 0;
                flex-direction: column;
                align-items: center;
            });
            .img {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 5;
                border-radius: 10px;
                overflow: hidden;
                .lg-block({
                    position: relative;
                    margin-bottom: 20px;
                });
                .sm-block({
                    max-width: 70%;
                });
            }
            .wrapper-desc {
                padding: 65px 15px 65px 150px;
                max-width: 890px;
                box-sizing: border-box;
                z-index: 1;
                flex-shrink: 0;
                .lg-block({
                    padding: 65px 40px 0 40px;
                });
                .xs-block({
                    padding: 20px 10px 0 10px;
                });
                .desc--bold {
                    margin-bottom: 30px;
                    font-weight: 900;
                    font-size: 2.4rem;
                    letter-spacing: 0.17rem;
                    .sm-block({
                        font-size: 18px;
                    });
                    .blue {
                        color: @blueMain;
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
