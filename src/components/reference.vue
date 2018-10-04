<template>
    <section class="b-reference">
        <div class="container">
            <p class="g-number">08</p>
            <p class="g-caption-section">
                <span class="red">Референсы</span>
                <span>(фильмы - аналоги)</span>
            </p>
            <div class="wrapper">
                <div class="item">
                    <p class="number">01</p>
                    <p class="name">Ведьма из блэр</p>
                    <p class="money">
                        <span class="bold">Бюджет:&ensp;</span>
                        <span class="light">60 000 $</span>
                    </p>
                    <p class="money">
                        <span class="bold">Сборы:&ensp;</span>
                        <span class="light">248 000 $</span>
                    </p>
                </div>
                <div class="item">
                    <p class="number">02</p>
                    <p class="name">Паранормальное явление</p>
                    <p class="money">
                        <span class="bold">Бюджет:&ensp;</span>
                        <span class="light">15 000 $</span>
                    </p>
                    <p class="money">
                        <span class="bold">Сборы:&ensp;</span>
                        <span class="light">193 000 $</span>
                    </p>
                </div>
                <div class="item">
                    <p class="number">03</p>
                    <p class="name">Судная ночь</p>
                    <p class="money">
                        <span class="bold">Бюджет:&ensp;</span>
                        <span class="light">3 000 000 $</span>
                    </p>
                    <p class="money">
                        <span class="bold">Сборы:&ensp;</span>
                        <span class="light">89 000 000 $</span>
                    </p>
                </div>
                <div class="item">
                    <p class="number">04</p>
                    <p class="name">Город призрак</p>
                    <p class="money">
                        <span class="bold">Бюджет:&ensp;</span>
                        <span class="light">9 000 000 $</span>
                    </p>
                    <p class="money">
                        <span class="bold">Сборы:&ensp;</span>
                        <span class="light">узнаем в 2020 году</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-reference {
        padding-top: 150px;
        background: url("/img/reference.jpg") no-repeat center / cover;
        .sm-block({
            padding-top: 120px;
        });
        .xs-block({
            padding-top: 80px;
        });
        .g-caption-section {
            margin-bottom: 70px;
            .line-after--left(-30px, 25%);
            span {
                display: block;
            }
        }
        .wrapper {
            .row-flex();
            .item {
                .col();
                .size(6);
                .size-xs(12);
                margin-bottom: 100px;
                .xs-block({ margin-bottom: 50px;});
                .number {
                    margin-bottom: 20px;
                    font-family: @BebasBold;
                    font-size: 6rem;
                    letter-spacing: 0.4rem;
                    color: @redMain;
                }
                .name {
                    margin-bottom: 20px;
                    font-family: @BebasBold;
                    font-size: 3.5rem;
                    letter-spacing: 0.25rem;
                    .xs-block({
                        font-size: 24px;
                    });
                }
                .money {
                    display: flex;
                    margin-bottom: 10px;
                    justify-content: flex-start;
                    font-size: 2rem;
                    letter-spacing: 0.15rem;
                    .xs-block({
                        font-size: 16px;
                    });
                    .bold {
                        font-family: @ProximaExtraBold;
                    }
                    .light {
                        font-family: @ProximaLight;
                    }
                }
            }
        }
    }
</style>
