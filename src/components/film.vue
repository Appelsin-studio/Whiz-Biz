<template>
    <section class="b-film">
        <div class="container">
            <p class="g-number">06</p>
            <h2 class="g-caption-section">Кинокартина <strong class="gradient-text">“ГОРОД ПРИЗРАК”</strong> / ”GHOST TOWN”</h2>
            <div class="wrapper">
                <div class="img">
                    <img src="/img/poster.jpg" alt="">
                </div>
                <div class="wrapper-desc">
                    <p class="desc--bold black">Началась работа над казахстанско-голливудским кинопроектом <span
                        class="blue">"ГОРОД
                        ПРИЗРАК"</span></p>
                    <p class="desc"><b class="black">Режиссеры:</b> Саламат Мухаммед-Али (Salamat Mukhammed-Ali)
                        и Питер Жмутский (Peter Zhmutski). </p>
                    <p class="desc"><b class="black">Генеральный продюсер:</b> Грэй Фредриксон/Gray Frederickson
                        <i>легенда Голливуда, обладатель
                        кинопремии «Оскар©» и «Эмми», продюсер трилогии "Крестный отец".</i>
                        </p>
                    <p class="desc"><b class="black">Продюсер:</b> Динара Батырова.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-film {
        margin-top: -100px;
        padding-top: 150px;
        padding-bottom: 180px;
        /*background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, @blackMain 10%, @blackMain 27%, @blackMain 49%, rgba(0, 0, 0,
        0) 67%), url("/img/bg-film.jpg") no-repeat bottom center;
        .lg-block({
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, @blackMain 5%, @blackMain 27%, @blackMain
            65%, rgba(0, 0, 0, 0) 75%), url("/img/bg-film.jpg") no-repeat bottom center;
        });*/
        .sm-block({
            margin-top: -80px;
            padding-top: 120px;
            padding-bottom: 100px;
        });
        .xs-block({
            padding-top: 100px;
            padding-bottom: 80px;
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
            .lg-block({
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
                .sm-block({
                    padding: 65px 15px 65px 40px
                });
                .xs-block({
                    padding: 30px 10px 30px 20px;
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
                        color: @blueLight;
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
