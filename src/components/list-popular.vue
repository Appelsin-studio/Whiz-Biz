<template>
    <section class="b-list-popular">
        <div class="container">
            <p class="g-number">05</p>
            <h3 class="g-caption-section">Почему <span class="gradient-text">крипто фонд обретает популярность</span> и что
                повлияет на рост токена Gtc?</h3>
            <div class="wrapper-list">
                <div class="item">
                    <p class="item-name">1. будет снято несколько десятков
                        фильмов</p>
                    <p class="item-content">В течение 7 лет КРИПТО-ФОНДОМ будет снято, несколько десятков
                        полнометражных, короткометражных, документальных фильмов и мультфильмов, которые будут участвовать во многих кинофестивалях мира, в конкурсах и будут завоевывать призы. Об этих победах и фильмах будет знать весь мир. О них будут писать критики и мировые издания.</p>
                </div>
                <div class="item">
                    <p class="item-name" >2. реклама во всех проектах</p>
                    <p class="item-content">Часто возникает необходимость динамически изменять CSS-классы и
                        inline-стили элементов в зависимости от состояния приложения. Поскольку и то и другое атрибуты, мы можем использовать v-bind</p>
                </div>
                <div class="item">
                    <p class="item-name">3. фильмы будут выходить ПРИ ПОДДЕРЖКЕ КРИПТО ФОНДА</p>
                    <p class="item-content"></p>
                </div>
                <div class="item">
                    <p class="item-name">4. будет сниматься «РЕАЛИТИ ШОУ»</p>
                    <p class="item-content"></p>
                </div>
                <div class="item">
                    <p class="item-name">5. будем устраивать конкурсы</p>
                    <p class="item-content"></p>
                </div>
                <div class="item">
                    <p class="item-name">6. интервью во всех мировых Топовых изданиях</p>
                    <p class="item-content"></p>
                </div>
                <div class="item">
                    <p class="item-name">7. “от создателя трилогии Крестный отец”</p>
                    <p class="item-content"></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
      data() {
        return {
          open: true
        }
      },
      methods:  {
      }
    }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-list-popular {
        padding: 150px 0 100px;
        .sm-block({
            padding: 120px 0 80px;
        });
        .xs-block({
            padding: 100px 0 60px;
        });
        .g-caption-section {
            margin-bottom: 80px;
            .line-after--left(-30px, 25%);
            .xs-block({
                margin-bottom: 65px;
            });
        }
        .wrapper-list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .item {
                position: relative;
                margin-bottom: 50px;
                .sm-block({
                    margin-bottom: 20px;
                });
                &:last-child {
                    margin-bottom: 0;
                }
                .item-name {
                    margin-bottom: 30px;
                    padding-left: 100px;
                    font-weight: 600;
                    font-size: 3.5rem;
                    letter-spacing: 0.25rem;
                    color: #000;
                    text-transform: uppercase;
                    .sm-block({
                        padding-left: 60px;
                    });
                    .xs-block({
                        padding-left: 40px;
                    });
                    &.open {
                        &::before {
                            display: none;
                        }
                    }
                    &::after,
                    &::before {
                        content: '';
                        position: absolute;
                        width: 48px;
                        height: 48px;
                        left: 0;
                        top: -5px;
                        border-radius: 50%;
                        .sm-block({
                            width: 30px;
                            height: 30px;
                            top: 0;
                        });
                        .xs-block({
                            width: 25px;
                            height: 25px;
                        });
                    }
                    &::after {
                        background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 18px 4px @blueMain;
                        .sm-block({
                            background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 13px 3px @blueMain;
                        });
                        .xs-block({
                            background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 10px 2px @blueMain;
                        });
                    }
                    &::before {
                        background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 4px 18px;
                        z-index: 2;
                        .sm-block({
                            background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 3px 13px;
                        });
                        .xs-block({
                            background: linear-gradient(#fff, #fff) 50% 50% no-repeat / 2px 10px;
                        });
                    }
                }
                .item-content {
                    padding-left: 100px;
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    .sm-block({
                        padding-left: 60px;
                    });
                    .xs-block({
                        padding-left: 40px;
                    });
                }
            }
        }
    }
</style>
