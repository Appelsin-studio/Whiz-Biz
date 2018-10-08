<template>
    <section class="b-table-gtc">
        <div class="container">
            <p class="g-number">11</p>
            <p class="g-caption-section">
                <span>Минимальный и максимальный</span>
                <span class="gradient-text">прогноз роста Gtc </span> за 7 лет
            </p>
            <table class="table">
                <tr class="caption-table">
                    <th colspan="2" class="capt">МИНИМАЛЬНЫЙ ПРОГНОЗ
                        ТОКЕНА GTC В БЛИЖАЙШИЕ 7 ЛЕТ</th>
                    <th colspan="2" class="capt">МАКСИМАЛЬНЫЙ ПРОГНОЗ
                        ТОКЕНА GTC В БЛИЖАЙШИЕ 7 ЛЕТ</th>
                </tr>
                <tr class="gray">
                    <td class="light">0 год, 2019г</td>
                    <td class="bold">$0,133</td>
                    <td class="light">0 год, 2019г</td>
                    <td class="bold">$0,133</td>
                </tr>
                <tr>
                    <td class="light">1 год, 2020г</td>
                    <td class="bold">$0,266</td>
                    <td class="light">1 год, 2020г</td>
                    <td class="bold">$0,666</td>
                </tr>
                <tr class="gray">
                    <td class="light">2 год, 2021г</td>
                    <td class="bold">$0,533</td>
                    <td class="light">2 год, 2021г</td>
                    <td class="bold">$3,333</td>
                </tr>
                <tr>
                    <td class="light">3 год, 2022г</td>
                    <td class="bold">$1,066</td>
                    <td class="light">3 год, 2022г</td>
                    <td class="bold">$16,66</td>
                </tr>
                <tr class="gray">
                    <td class="light">4 год, 2023г</td>
                    <td class="bold">$2,133</td>
                    <td class="light">4 год, 2023г</td>
                    <td class="bold">$83,33</td>
                </tr>
                <tr>
                    <td class="light">5 год, 2024г</td>
                    <td class="bold">$4,266</td>
                    <td class="light">5 год, 2024г</td>
                    <td class="bold">$416,6</td>
                </tr>
                <tr class="gray">
                    <td class="light">6 год, 2025г</td>
                    <td class="bold">$8,533</td>
                    <td class="light">6 год, 2025г</td>
                    <td class="bold">$2083</td>
                </tr>
                <tr>
                    <td class="light">7 год, 2026г</td>
                    <td class="bold">$17,06</td>
                    <td class="light">7 год, 2026г</td>
                    <td class="bold">$10 416</td>
                </tr>
            </table>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-table-gtc {
        padding: 150px 0;
        .sm-block({
            padding: 120px 0;
        });
        .xs-block({
            padding: 80px 0;
        });
        .g-caption-section {
            margin-bottom: 70px;
            max-width: 780px;
            color: #000;
            .line-after--left(-30px, 25%, #fff);
            .sm-block({
                margin-bottom: 55px;
            });
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            tr {
                display: flex;
                align-items: center;
                justify-content: space-between;
                th {
                    font-weight: 700;
                    font-size: 2.4rem;
                    letter-spacing: 0.14rem;
                    .sm-block({
                        font-size: 14px;
                    });
                    .xs-block({
                        font-size: 12px;
                    });
                }
                &.caption-table {
                    justify-content: space-around;
                }
                .capt {
                    max-width: 44%;
                    padding-bottom: 45px;
                    box-sizing: border-box;
                    text-align: center;
                    color: #000;
                    .sm-block({
                        max-width: 48%;
                        padding-bottom: 25px;
                    });
                }
            }
            td {
                padding: 15px 0 15px 45px;
                font-size: 2rem;
                letter-spacing: 0.14rem;
                box-sizing: border-box;
                .sm-block({
                    padding: 8px 0 8px 8px;
                    font-size: 14px;
                    letter-spacing: 0;
                });
                .xs-block({
                    padding: 5px 0 5px 5px;
                    font-size: 12px;
                });
                &.light {
                    width: 22%;
                    flex-shrink: 0;
                    font-weight: 200;
                    color: #000;
                }
                &.bold {
                    width: 22%;
                    flex-shrink: 0;
                    font-weight: 900;
                    color: @blueMain;
                }
            }
            .gray {
                background: #e5eef7;
            }
        }
    }
</style>
