<template>
    <section class="b-list-popular">
        <div class="container">
            <p class="g-number">05</p>
            <p class="g-caption-section">Почему <span class="red">крипто фонд обретает популярность</span> и что
                повлияет на рост токена Gtc?</p>
            <div class="wrapper-list">
                <div class="item">
                    <p class="item-name">1. будет снято несколько десятков фильмов</p>
                    <p class="item-content">В течение 7 лет КРИПТО-ФОНДОМ будет снято, несколько десятков полнометражных, короткометражных, документальных фильмов и мультфильмов, которые будут участвовать во многих кинофестивалях мира, в конкурсах и будут завоевывать призы. Об этих победах и фильмах будет знать весь мир. О них будут писать критики и мировые издания.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-list-popular {
        padding: 150px 0;
        background: url("/img/bg-list-popular.jpg") no-repeat top center / cover, @blackMain;
        .g-caption-section {
            margin-bottom: 80px;
            .line-after--left();
        }
        .wrapper-list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .item {
                position: relative;
                padding-left: 100px;
                &::after {
                    content: '';
                    position: absolute;
                    width: 48px;
                    height: 48px;
                    left: 0;
                    top: -5px;
                    background: @redMain;
                    border-radius: 50%;
                }
                &::before {
                    content: '';
                    position: absolute;
                    width: 48px;
                    height: 48px;
                    left: 0;
                    top: -5px;
                    background: linear-gradient(@blackMain, @blackMain) 50% 55% no-repeat;
                    background-size: 20px 4px;
                    z-index: 2;
                }
                .item-name {
                    margin-bottom: 30px;
                    font-family: @fontBebas;
                    font-weight: 600;
                    font-size: 3.5rem;
                    letter-spacing: 0.25rem;
                    color: #fff;
                    text-transform: uppercase;
                }
                .item-content {
                    font-family: @fontProxima;
                    font-weight: 200;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    color: #fff;
                }
            }
        }
    }
</style>
