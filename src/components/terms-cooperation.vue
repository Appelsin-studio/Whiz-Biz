<template>
    <section class="b-terms-cooperation">
        <div class="container">
            <p class="g-number">12</p>
            <p class="g-caption-section">Как вы можете
                <span class="gradient-text">быть частью нас</span>
            </p>
            <p class="secondary-caption">Как стать инвестором</p>
            <div class="instruction-arrow">
                <span class="text">Оставьте заявку </span>
                <span class="arrow"></span>
                <span class="text">Приобретите паи фонда</span>
                <span class="arrow"></span>
                <span class="text">Получайте прибыль</span>
            </div>
            <div class="conditions-wrapper">
                <p class="secondary-caption">Условия сотрудничества</p>
                <ul class="conditions-list">
                    <li class="item">
                        <span class="line"></span>
                        <span class="bold">Доступный порог входа &#8212; </span>
                        <span class="light">Минимальный размер инвестиций 1BTC</span>
                    </li>
                    <li class="item">
                        <span class="line"></span>
                        <span class="bold">Выгодное распределение прибыли &#8212; </span>
                        <span class="light">Инвестор получает x% прибыли от дохода кино</span>
                    </li>
                    <li class="item">
                        <span class="line"></span>
                        <span class="bold">Долгострочная стратегия &#8212; </span>
                        <span class="light"></span>
                    </li>
                    <li class="item">
                        <span class="line"></span>
                        <span class="bold">Постоянный источник дохода &#8212; </span>
                        <span class="light">Возможность завещать доход своим детям</span>
                    </li>
                </ul>
                <a href="#" class="btn btn--orange" @click.prevent="$modal.show('apply')">Подать заявку</a>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-terms-cooperation {
        padding: 150px 0;
        .sm-block({
            padding: 120px 0;
        });
        .xs-block({
            padding: 80px 0;
        });
        .g-caption-section {
            margin-bottom: 100px;
            .line-after--left();
            .sm-block({
                margin-bottom: 80px;
            });
            .xs-block({
                margin-bottom: 40px;
            });
        }
        .secondary-caption {
            margin-bottom: 45px;
            font-weight: 900;
            font-size: 3rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
            color: #000;
            .xs-block({
                margin-bottom: 30px;
            });
        }
        .instruction-arrow {
            display: flex;
            margin-bottom: 110px;
            justify-content: flex-start;
            align-items: center;
            .sm-block({
                margin-bottom: 70px;
                flex-direction: column;
                align-items: center;
            });
            .xs-block({
                margin-bottom: 50px;
            });
            .text {
                display: inline-block;
                font-weight: 200;
                font-size: 2.4rem;
                letter-spacing: 0.17rem;
            }
            .arrow {
                display: inline-flex;
                padding-left: 10px;
                padding-right: 15px;
                flex-grow: 2;
                justify-content: center;
                align-items: center;
                height: 20px;
                .sm-block({
                    height: 45px;
                    padding: 10px 0;
                });
                .xs-block({
                    height: 30px;
                    padding: 5px 0 20px;
                });
                &::before {
                    content: '';
                    display: inline-block;
                    width: 60px;
                    height: 4px;
                    background: radial-gradient(ellipse at center, @orangeMain 2px, @orangeMain 2px, transparent 20%);
                    background-size: 14px 15px;
                    background-repeat: repeat-x;
                    background-position: 0 center;
                    .sm-block({
                        display: none;
                    });
                }
                &::after {
                    content: '';
                    display: inline-block;
                    margin-left: -10px;
                    width: 20px;
                    height: 20px;
                    border-right: 3px solid @orangeMain;
                    border-bottom: 3px solid @orangeMain;
                    transform: rotate(-45deg);
                    .sm-block({
                        margin-left: 0;
                        transform: rotate(45deg);
                    });
                }
            }
        }
        .conditions-wrapper {
            .conditions-list {
                display: flex;
                margin-bottom: 70px;
                position: relative;
                flex-direction: column;
                .item {
                    position: relative;
                    padding-bottom: 25px;
                    padding-left: 70px;
                    .xs-block({
                        padding-left: 30px;
                    });

                    &:last-child {
                        padding-bottom: 0;
                    }
                    &::before {
                        content: '';
                        position: absolute;
                        left: 35px;
                        top: 4px;
                        width: 14px;
                        height: 14px;
                        background-color: #fff;
                        border: 4px solid @orangeMain;
                        border-radius: 50%;
                        box-sizing: border-box;
                        z-index: 5;
                        .xs-block({
                            top: 0;
                            left: 0;
                        });
                    }
                    .line {
                        position: absolute;
                        left: 0;
                        top: 10px;
                        width: 40px;
                        height: 1px;
                        background-color: @grayMain;
                        z-index: 4;
                        .xs-block({
                            display: none;
                        });
                    }
                    .bold {
                        font-weight: 900;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                        text-transform: uppercase;
                        color: #000;
                    }
                    .light {
                        font-weight: 200;
                        font-size: 2rem;
                        letter-spacing: 0.14rem;
                    }
                }
            }
        }
    }
</style>
