<template>
    <section class="b-list-popular">
        <div class="container">
            <p class="g-number">05</p>
            <p class="g-caption-section">Почему <span class="red">крипто фонд обретает популярность</span> и что
                повлияет на рост токена Gtc?</p>
            <div class="wrapper-list">
                <div class="item open">
                    <p class="item-name">1. будет снято несколько десятков фильмов</p>
                    <p class="item-content">В течение 7 лет КРИПТО-ФОНДОМ будет снято, несколько десятков полнометражных, короткометражных, документальных фильмов и мультфильмов, которые будут участвовать во многих кинофестивалях мира, в конкурсах и будут завоевывать призы. Об этих победах и фильмах будет знать весь мир. О них будут писать критики и мировые издания.</p>
                </div>
                <div class="item">
                    <p class="item-name">2. реклама во всех проектах</p>
                    <p class="item-content"></p>
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
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-list-popular {
        padding: 150px 0 100px;
        background: url("/img/bg-list-popular.jpg") no-repeat top center / cover, @blackMain;
        .g-caption-section {
            margin-bottom: 80px;
            .line-after--left(-30px, 25%);
        }
        .wrapper-list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .item {
                position: relative;
                margin-bottom: 50px;
                padding-left: 100px;
                &:last-child {
                    margin-bottom: 0;
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
                }
                &::after {
                    background: linear-gradient(@blackMain, @blackMain) 50% 50% no-repeat / 18px 4px @redMain;
                }
                &::before {
                    background: linear-gradient(@blackMain, @blackMain) 50% 50% no-repeat / 4px 18px;
                    z-index: 2;
                }
                &.open {
                    &::before {
                        display: none;
                    }
                }
                .item-name {
                    margin-bottom: 30px;
                    font-family: @BebasBold;
                    font-size: 3.5rem;
                    letter-spacing: 0.25rem;
                    color: #fff;
                    text-transform: uppercase;
                }
                .item-content {
                    font-family: @ProximaLight;
                    font-size: 2rem;
                    letter-spacing: 0.14rem;
                    color: #fff;
                }
            }
        }
    }
</style>
