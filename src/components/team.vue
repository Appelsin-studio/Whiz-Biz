<template>
    <section class="b-team">
        <div class="container">
            <p class="g-number">04</p>
            <p class="g-caption-section">Наша <span class="gradient-text">команда</span></p>
            <div class="wrapper">
                <div class="person col-12">
                    <div class="img" style="background-image: url(/img/person-1.jpg)"></div>
                    <p class="name">Грей Фредериксон</p>
                    <p class="profession">Генеральный продюсер</p>
                    <p class="country">США</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img" style="background-image: url(/img/person-2.jpg)"></div>
                    <p class="name">Саламат Мухаммед-Али</p>
                    <p class="profession">Кинопроизводитель</p>
                    <p class="country">Казахстан</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img" style="background-image: url(/img/person-3.jpg)"></div>
                    <p class="name">Питер Жмутский</p>
                    <p class="profession">Кинопроизводитель</p>
                    <p class="country">США</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img" style="background-image: url(/img/person-4.jpg)"></div>
                    <p class="name">Динара Батырова</p>
                    <p class="profession">Продюсер</p>
                    <p class="country">Казахстан</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-team {
        padding: 100px 0 90px;
        .sm-block({
            padding: 80px 0 70px;
        });
        .sm-block({
            padding: 80px 0 30px;
        });
        .g-caption-section {
            margin-bottom: 80px;
            .line-after--left();
            .sm-block({
                margin-bottom: 65px;
            });
            .black {
                color: #000;
            }
        }
        .wrapper {
            .row-flex();
            justify-content: center;
            .person {
                .col();
                .size(4);
                .size-md(6);
                .size-sm(12);
                display: flex;
                margin-bottom: 60px;
                flex-direction: column;
                align-items: center;
                &.col-12 {
                    .size(12);
                }
                .img {
                    margin-bottom: 40px;
                    width: 240px;
                    height: 240px;
                    border-radius: 50%;
                    background-color: #fff;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    .sm-block({
                        margin-bottom: 30px;
                        width: 200px;
                        height: 200px;
                    });
                }
                .name {
                    font-family: @BebasNeue;
                    flex-grow: 1;
                    margin-bottom: 20px;
                    font-weight: 600;
                    font-size: 3.5rem;
                    letter-spacing: 0.25rem;
                    color: #000;
                    text-align: center;
                    .sm-block({
                        font-size: 28px;
                    });
                    .xs-block({
                        margin-bottom: 13px;
                    });
                }
                .profession,
                .country,
                .link {
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.15rem;
                    text-align: center;
                    .sm-block({
                        font-size: 16px;
                    });
                }
                .profession,
                .country {
                    margin-bottom: 15px;
                    .xs-block({
                        margin-bottom: 10px;
                    });
                }
                .link {
                    color: @orangeMain;
                    border-bottom: 1px solid @orangeMain;
                    .transition();
                    &:hover {
                        color: @orangeMain;
                        border-bottom: 1px solid transparent;
                    }
                }
            }
        }
    }
</style>
