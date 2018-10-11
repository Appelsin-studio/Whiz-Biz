<template>
    <section class="b-bg-wrapper">
        <div class="circle-wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </section>
</template>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-bg-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 0;
        overflow: hidden;
        .circle-wrapper {
            position: absolute;
            display: block;
            top: 20%;
            left: -200px;
            width: 400px;
            height: 400px;
            .circle {
                display: block;
                border: 1px dashed #bed7ec;
                border-radius: 50%;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                animation-name: circle-animate;
                animation-iteration-count: infinite;
                animation-timing-function: ease-out;
                animation-duration: 6s;
                opacity: 0;
                &:nth-child(2) {
                    animation-delay: 3s;
                }
                @keyframes circle-animate {
                    from {
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    to {
                        width: 160%;
                        height: 160%;
                        top: -30%;
                        left: -30%;
                        opacity: 0;
                    }
                }
            }
        }
    }

</style>
