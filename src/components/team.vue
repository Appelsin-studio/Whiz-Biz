<template>
    <section class="b-team">
        <div class="container">
            <p class="g-number">04</p>
            <p class="g-caption-section"><span class="black">Наша</span> команда</p>
            <div class="wrapper">
                <div class="person">
                    <div class="img" style="background-image: url(/img/person.jpg)"></div>
                    <p class="name">Иван Алексеев</p>
                    <p class="profession">Кинопроизводитель</p>
                    <p class="country">США</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img" style="background-image: url(/img/person.jpg)"></div>
                    <p class="name">Константин Абдурахманович</p>
                    <p class="profession">Верстальщик</p>
                    <p class="country">Россия</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img" style="background-image: url(/img/person.jpg)"></div>
                    <p class="name">Валера Товаров</p>
                    <p class="profession">Оператор</p>
                    <p class="country">Австрия</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img"></div>
                    <p class="name">Валера Товаров</p>
                    <p class="profession">Оператор</p>
                    <p class="country">Австрия</p>
                    <a class="link" href="#" target="_blank">linkedin.com/ivan_alexeev</a>
                </div>
                <div class="person">
                    <div class="img"></div>
                    <p class="name">Валера Товаров</p>
                    <p class="profession">Оператор</p>
                    <p class="country">Австрия</p>
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
        background: @redMain;
        .g-caption-section {
            margin-bottom: 80px;
            .line-after--left();
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
                display: flex;
                margin-bottom: 60px;
                flex-direction: column;
                align-items: center;
                .img {
                    margin-bottom: 40px;
                    width: 240px;
                    height: 240px;
                    border-radius: 50%;
                    background-color: #fff;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                }
                .name {
                    flex-grow: 1;
                    margin-bottom: 20px;
                    font-family: @BebasBold;
                    font-size: 3.5rem;
                    letter-spacing: 0.25rem;
                    color: #000;
                    text-align: center;
                }
                .profession,
                .country,
                .link {
                    font-family: @ProximaLight;
                    font-size: 2rem;
                    letter-spacing: 0.15rem;
                    text-align: center;
                }
                .profession,
                .country {
                    margin-bottom: 15px;
                    color: #fff;
                }
                .link {
                    color: #ff7d7d;
                    border-bottom: 1px solid #ff7d7d;
                    .transition();
                    &:hover {
                        color: #fff;
                        border-bottom: 1px solid transparent;
                    }
                }
            }
        }
    }
</style>
