<template>
    <section class="b-bid">
        <div class="bg-gradient">
            <div class="container">
                <div class="wrapper">
                    <div class="caption-absolute">
                        <ul class="number-list">
                            <li class="red">01</li>
                            <li>02</li>
                            <li>03</li>
                        </ul>
                        <h1 class="caption"><strong class="red">Криптофонд</strong> по поддержке бизнеса в индустрии
                            кино и
                            искусства</h1>
                    </div>
                    <div class="coub-block">
                        <div class="red-coub">
                            <a href="#" class="btn">Подать заявку</a>
                        </div>
                    </div>
                    <div class="description-block">
                        <div class="number">01</div>
                        <p class="description"><strong>GTCinema</strong> - это компания по производству финансовых
                            технологий,
                            ориентированная на использование технологии blockchain и криптографических токенов</p>
                    </div>
                </div>
            </div>
            <div class="page-down">
                <div class="mouse"></div>
                <div class="arrow">
                    <img svg-inline src="~src/assets/img/icon/down-arrow2.svg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-bid {
        position: relative;
        margin-bottom: -40vh;
        height: 120vh;
        min-height: 960px;
        overflow: hidden;
        background: url("/img/bg-main.jpg");
        background-repeat: no-repeat;
        background-position: top center;
        .bg-gradient {
            height: 100%;
            width: 100%;
            background:
                linear-gradient(to bottom, #000000 -7%, rgba(255, 255, 255, 0) 81%),
                rgba(45,25,25,0.5);
        }
        .container {
            padding-top: 25vh;
        }
        .wrapper {
            position: relative;
            display: flex;
            .caption-absolute {
                position: absolute;
                display: flex;
                left: 80px;
                top: 80px;
                max-width: 750px;
                font-family: @fontBebas;
                font-weight: 600;
                .number-list {
                    display: flex;
                    padding: 10px 0;
                    margin-right: 65px;
                    flex-direction: column;
                    justify-content: space-between;
                    font-size: 2.4rem;
                    letter-spacing: 0.17rem;
                }
                .caption {
                    font-size: 6rem;
                    font-weight: 600;
                    letter-spacing: 0.3rem;
                    text-transform: uppercase;
                }
            }
            .coub-block {
                .red-coub {
                    display: flex;
                    padding: 65px 75px;
                    width: 560px;
                    height: 500px;
                    align-items: flex-end;
                    border: 5px solid @redMain;
                    box-sizing: border-box;
                    .btn {
                        flex-grow: 5;
                        padding: 35px 50px;
                        font-size: 2.6rem;
                        letter-spacing: 0.18rem;
                        font-family: @fontBebas;
                        font-weight: 600;
                        color: #fff;
                        background-color: @redMain;
                        text-transform: uppercase;
                        text-align: center;
                        .transition();
                        &:hover {
                            box-shadow: 0 0 25px 0 rgba(196,45,45,1);
                        }
                    }
                }
            }
            .description-block {
                padding-top: 80px;
                padding-left: 70px;
                .number {
                    position: relative;
                    margin-bottom: 15px;
                    font-family: @fontBebas;
                    font-weight: 600;
                    font-size: 16rem;
                    line-height: 16rem;
                    letter-spacing: 1.1rem;
                    text-align: right;
                    .line-after--right();
                }
                .description {
                    font-family: @fontProxima;
                    font-size: 2.4rem;
                    letter-spacing: 0.17rem;
                    font-weight: 200;
                    b {
                        text-transform: uppercase;
                        font-weight: 600;
                    }
                }
            }
        }
        .page-down {
            position: absolute;
            display: block;
            left: 50%;
            bottom: 20vh;
            transform: translateX(-50%);
            -webkit-filter: drop-shadow(0 0 8px rgba(196,45,45,1));
            filter: drop-shadow(0 0 8px rgba(196,45,45,1));
            z-index: 55;
            .sm-block({bottom: 20px;});
            .mouse {
                margin-bottom: 5px;
                height: 44px;
                width: 27px;
                border-radius: 15px;
                border: 2px solid @redMain;
                box-sizing: border-box;
                &::after {
                    content: '';
                    display: block;
                    height: 11px;
                    width: 2px;
                    margin: 6px auto;
                    background: @redMain;
                    position: relative;
                }
            }
            .arrow {
                width: 27px;
                text-align: center;
                >svg {
                    width: 19px;
                    height: 19px;
                    margin: 0 auto;
                }
            }
        }
    }

    @keyframes mouse-scroll {

        0%   {
            -webkit-filter: drop-shadow(0 0 5px rgba(196,45,45,0.5));
            filter: drop-shadow(0 0 5px rgba(196,45,45,0.5));
        }
        50%  {
            -webkit-filter: drop-shadow(0 0 10px rgba(196,45,45,1));
            filter: drop-shadow(0 0 10px rgba(196,45,45,1));
        }
        100% {
            -webkit-filter: drop-shadow(0 0 5px rgba(196,45,45,0.5));
            filter: drop-shadow(0 0 5px rgba(196,45,45,0.5));
        }
    }
</style>
