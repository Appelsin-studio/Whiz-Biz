<template>
    <section class="b-investor-income">
        <div class="container">
            <p class="g-number">13</p>
            <p class="g-caption-section">
                <span class="red">Доход</span>
                <span class="black">инвестора</span>
            </p>
            <div class="description">
                <p class="bold">Технологические активы</p>
                <p class="bonus">
                    <span class="light">Бонус первым</span>
                    <span class="red">100 инвесторам</span>
                </p>
            </div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-investor-income {
        padding: 150px 0;
        .g-number {
            color: #cccccc;
        }
        .g-caption-section {
            margin-bottom: 40px;
            .line-after--left(-30px, 25%, #ccc);
            .black {
                color: #000;
            }
        }
        .description {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            .bold {
                font-family: @ProximaExtraBold;
                font-size: 3rem;
                letter-spacing: 0.2rem;
                color: #000;
                text-transform: uppercase;
            }
            .bonus {
                >span {
                    display: block;
                    &.light {
                        margin-bottom: 10px;
                        font-family: @ProximaLight;
                        font-size: 2.4rem;
                        letter-spacing: 0.17rem;
                        color: #000;
                    }
                    &.red {
                        font-family: @ProximaExtraBold;
                        font-size: 2.4rem;
                        letter-spacing: 0.17rem;
                    }
                }
            }
        }
    }
</style>
