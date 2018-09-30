<template>
    <section class="b-statistics">
        <div class="container">
            <p class="g-number">09</p>
            <p class="g-caption-section">
                <span class="red">Американская статистика</span>
                <span>прибыли кино</span>
            </p>
            <p></p>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .b-statistics {
        padding-top: 150px;
        color: #000;
        .g-number {
            color: #cccccc;
        }
        .g-caption-section {
            margin-bottom: 110px;
            .line-after--left(-30px, 25%, #ccc);
            span {
                display: block;
            }
        }
    }
</style>
