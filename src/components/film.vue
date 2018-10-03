<template>
    <section class="b-film">
        <div class="container">
            <p class="g-number">06</p>
            <h2 class="g-caption-section">Кинокартина <strong class="red">“ГОРОД ПРИЗРАК”</strong> / ”GHOST TOWN”</h2>
            <div class="wrapper">
                <div class="img">
                    <img src="/img/poster.jpg" alt="">
                </div>
                <div class="red-coub">
                    <p class="desc--bold">Началась работа над казахстанско-голливудским кинопроектом <span
                        class="red">"ГОРОД
                        ПРИЗРАК"</span></p>
                    <p class="desc"><b>Режиссеры:</b> Саламат Мухаммед-Али (Salamat Mukhammed-Ali)
                        и Питер Жмутский (Peter Zhmutski). </p>
                    <p class="desc"><b>Генеральный продюсер:</b> Грэй Фредриксон/Gray Frederickson
                        <i>легенда Голливуда, обладатель
                        кинопремии «Оскар©» и «Эмми», продюсер трилогии "Крестный отец".</i>
                        </p>
                    <p class="desc"><b>Продюсер:</b> Динара Батырова.</p>
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
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, @blackMain 10%, @blackMain 27%, @blackMain 49%, rgba(0, 0, 0,
        0) 67%), url("/img/bg-film.jpg") no-repeat bottom center;
        .lg-block({
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, @blackMain 5%, @blackMain 27%, @blackMain
            65%, rgba(0, 0, 0, 0) 75%), url("/img/bg-film.jpg") no-repeat bottom center;
        });
        .sm-block({
            margin-top: -100px;
            padding-top: 120px;
            padding-bottom: 100px;
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
                .lg-block({
                    position: relative;
                    margin-bottom: 20px;
                });
                .sm-block({
                    max-width: 70%;
                });
            }
            .red-coub {
                padding: 65px 15px 65px 150px;
                max-width: 890px;
                box-sizing: border-box;
                z-index: 1;
                flex-shrink: 0;
                border-right: 5px solid rgba(196, 45, 45, 1);
                border-left: 5px solid rgba(196, 45, 45, 0.2);
                background-image:
                    linear-gradient(90deg, rgba(196, 45, 45, 0.2), rgba(196, 45, 45, 1)),
                    linear-gradient(90deg, rgba(196, 45, 45, 0.2), rgba(196, 45, 45, 1));
                background-size: 100% 5px;
                background-position: 0 0, 0 100%;
                background-repeat: no-repeat;
                .sm-block({
                    padding: 65px 15px 65px 40px
                });
                .xs-block({
                    padding: 30px 10px 30px 20px;
                });
                .desc--bold {
                    margin-bottom: 30px;
                    font-family: @ProximaExtraBold;
                    font-size: 2.4rem;
                    letter-spacing: 0.17rem;
                    .sm-block({
                        font-size: 18px;
                    });
                }
                .desc {
                    margin-bottom: 25px;
                    font-family: @ProximaLight;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    .sm-block({
                        font-size: 14px;
                    });
                    &:last-child {
                        margin-bottom: 0;
                    }
                    b {
                        font-family: @ProximaBold;
                    }
                    i {
                        font-family: @ProximaLightIt;
                    }
                }
            }
        }
    }
</style>
