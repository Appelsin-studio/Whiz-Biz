<template>
    <section class="b-table-gtc">
        <div class="container">
            <p class="g-number">11</p>
            <p class="g-caption-section">
                <span>Минимальный и максимальный</span>
                <span class="white">прогноз роста Gtc </span> за 7 лет
            </p>
            <table class="table">
                <tr>
                    <th colspan="2" class="capt">МИНИМАЛЬНЫЙ ПРОГНОЗ
                        ТОКЕНА GTC В БЛИЖАЙШИЕ 7 ЛЕТ</th>
                    <th  colspan="1" class="width"></th>
                    <th colspan="2" class="capt">МАКСИМАЛЬНЫЙ ПРОГНОЗ
                        ТОКЕНА GTC В БЛИЖАЙШИЕ 7 ЛЕТ</th>
                </tr>
                <tr class="red">
                    <td class="light">0 год, 2019г</td>
                    <td class="bold">$0,133</td>
                    <td class="width"></td>
                    <td class="light">0 год, 2019г</td>
                    <td class="bold">$0,133</td>
                </tr>
                <tr class="pink">
                    <td class="light">1 год, 2020г</td>
                    <td class="bold">$0,266</td>
                    <td class="width"></td>
                    <td class="light">1 год, 2020г</td>
                    <td class="bold">$0,266</td>
                </tr>
                <tr class="red">
                    <td class="light">2 год, 2021г</td>
                    <td class="bold">$0,533</td>
                    <td class="width"></td>
                    <td class="light">2 год, 2021г</td>
                    <td class="bold">$0,533</td>
                </tr>
                <tr class="pink">
                    <td class="light">3 год, 2022г</td>
                    <td class="bold">$1,066</td>
                    <td class="width"></td>
                    <td class="light">3 год, 2022г</td>
                    <td class="bold">$1,066</td>
                </tr>
                <tr class="red">
                    <td class="light">4 год, 2023г</td>
                    <td class="bold">$2,133</td>
                    <td class="width"></td>
                    <td class="light">4 год, 2023г</td>
                    <td class="bold">$2,133</td>
                </tr>
                <tr class="pink">
                    <td class="light">5 год, 2024г</td>
                    <td class="bold">$4,266</td>
                    <td class="width"></td>
                    <td class="light">5 год, 2024г</td>
                    <td class="bold">$4,266</td>
                </tr>
                <tr class="red">
                    <td class="light">6 год, 2025г</td>
                    <td class="bold">$8,533</td>
                    <td class="width"></td>
                    <td class="light">6 год, 2025г</td>
                    <td class="bold">$8,533</td>
                </tr>
                <tr class="pink">
                    <td class="light">7 год, 2026г</td>
                    <td class="bold">$17,06</td>
                    <td class="width"></td>
                    <td class="light">7 год, 2026г</td>
                    <td class="bold">$17,06</td>
                </tr>
            </table>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-table-gtc {
        padding: 150px 0;
        background: @redMain;
        .g-caption-section {
            margin-bottom: 70px;
            max-width: 80%;
            color: #000;
            .line-after--left(-30px, 25%, #fff);
            .white {
                color: #fff;
            }
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            tr {
                display: flex;
                align-items: flex-start;
                th {
                    font-family: @ProximaBold;
                    font-size: 2.4rem;
                    letter-spacing: 0.14rem;
                }
                .capt {
                    max-width: 44%;
                    padding-left: 45px;
                    padding-bottom: 45px;
                    box-sizing: border-box;
                }
                .width {
                    flex-grow: 1;
                }
            }
            td {
                padding: 15px 0 15px 45px;
                font-size: 2rem;
                letter-spacing: 0.14rem;
                box-sizing: border-box;
                &.light {
                    width: 22%;
                    flex-shrink: 0;
                    font-family: @ProximaLight;
                    color: #000;
                }
                &.bold {
                    width: 22%;
                    flex-shrink: 0;
                    font-family: @ProximaExtraBold;
                    color: @redMain;
                }
            }
            .red {
                background: #ffcccc;
            }
            .pink {
                background: #ffe3e3;
            }
        }
    }
</style>
