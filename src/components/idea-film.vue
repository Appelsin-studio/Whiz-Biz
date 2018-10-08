<template>
    <section class="b-idea-film">
        <div class="container">
            <div class="wrapper">
                <div class="description-wrapper">
                    <p class="g-number">07</p>
                    <p class="g-caption-section"><span class="gradient-text">Идея</span> фильма</p>
                    <div class="characteristics">
                        <span class="black">Жанр:&ensp;</span>
                        <span class="light">Found footage/Найденная плёнка, Мистика, Ужасы, Фантастика</span>
                    </div>
                    <div class="characteristics">
                        <span class="black">Хронометраж:&ensp;</span>
                        <span class="light">100 минут</span>
                    </div>
                    <div class="characteristics">
                        <span class="black">График производства картины:&ensp;</span>
                        <span class="light">12 месяцев</span>
                    </div>
                    <p class="company">
                        Компания «GHOST TOWN PRODUCTIONS, LLC» из штата Оклахома (США), предлагает Вам кинопроект под названием «Город призрак» «GHOST TOWN».
                    </p>
                    <p class="story-film">
                        Эта история о трагедии торнадо 1999 года и города призрака "Безродной Рощи" основаны на реальных событиях. Действие происходит в США, в штате Оклахома. Местные охотники неподалеку от периметра "Безродной Рощи" находят кассеты с любительской записью. На этих кассетах запечатлена вся миссия команды из восьми человек, которые пропали в Городе-призрак 3 Мая 1999 года. В “Безродной рощи” наши герои узнают что они избранные. Они открывают для себя другие цивилизации, миры и параллельные измерения.
                    </p>
                </div>
                <div class="img">
                    <img class="z-index--1" src="/img/idea-film-1.jpg" alt="">
                    <img class="z-index--2" src="/img/idea-film-2.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-idea-film {
        padding: 150px 0;
        .sm-block({
            padding: 120px 0;
        });
        .xs-block({
            padding: 70px 0;
        });
        .black {
            color: #000;
        }
        .g-caption-section {
            margin-bottom: 60px;
            .line-after--left();
        }
        .wrapper {
            .row-flex();
            .description-wrapper {
                .col();
                .size(7);
                .size-sm(12);
                display: flex;
                flex-direction: column;
                .characteristics {
                    display: flex;
                    margin-bottom: 30px;
                    font-size: 2rem;
                    letter-spacing: 0.14px;
                    .sm-block({
                        font-size: 14px;
                    });
                    .black {
                        font-weight: 900;
                    }
                    .light {
                        font-weight: 200;
                    }
                }
                .company {
                    margin-bottom: 30px;
                    font-weight: 200;
                    font-size: 2.4rem;
                    letter-spacing: 0.17rem;
                }
                .story-film {
                    font-weight: 200;
                    font-size: 2rem;
                    .xs-block({
                        font-size: 14px;
                    });
                }
            }
            .img {
                .col();
                .size(5);
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                img {
                    border-radius: 50%;
                    &.z-index--2 {
                        align-self: flex-start;
                        margin-top: -100px;
                    }
                    .sm-block({ display: none;});
                }
            }
        }
    }
</style>
