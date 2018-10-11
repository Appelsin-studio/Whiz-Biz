<template>
    <section class="b-bg-wrapper">
        <div class="circle-wrapper"
             v-for="circle in circles"
             :style="styles(circle)">
            <div class="circle"
                 v-for="n in circle.count"
                 :style="{
                     animationDelay: animationDelay(n,circle.count),
                     animationDuration: animationDuration + 's'
                 }"></div>
        </div>
    </section>
</template>
<script>

  export default {
    data() {
      return {
        animationDuration: 6,
        circles: [
          {
            size: 400,
            top: 10,
            left: -200,
            count: 2
          }, {
            size: 300,
            top: 14,
            right: -150,
            count: 2
          }, {
            size: 500,
            top: 25,
            left: -150,
            count: 2
          }, {
            size: 300,
            top: 35,
            right: -50,
            count: 3
          }, {
            size: 200,
            top: 40,
            left: -50,
            count: 2
          }, {
            size: 400,
            top: 44,
            right: 40,
            count: 3
          }, {
            size: 300,
            top: 53,
            left: -150,
            count: 2
          }, {
            size: 200,
            top: 62,
            right: -100,
            count: 2
          }, {
            size: 450,
            top: 68,
            right: -100,
            count: 2
          }, {
            size: 400,
            top: 74,
            left: -150,
            count: 2
          }, {
            size: 300,
            top: 80,
            right: -100,
            count: 2
          }, {
            size: 400,
            top: 87,
            left: -200,
            count: 2
          }, {
            size: 500,
            top: 96,
            right: -200,
            count: 3
          }
        ]
      }
    },
    methods: {
      styles(params) {
        let style = {
          width: params.size + 'px',
          height: params.size + 'px',
          top: params.top + '%'
        }
        if (params.left !== undefined) {
          style.left = params.left + 'px'
        }
        if (params.right !== undefined) {
          style.right = params.right + 'px'
        }
        return style
      },
      animationDelay(n, count) {
        let delayTime = 0
        if (n > 1) {
          delayTime = 6 / count * (n - 1)
        }
        return delayTime + 's'
      }
    },

  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-bg-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 1;
        overflow: hidden;
        .circle-wrapper {
            position: absolute;
            display: block;
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
                animation-timing-function: ease-in;
                animation-duration: 6s;
                opacity: 0;
                &:nth-child(2) {
                    animation-delay: 3s;
                }
                &:nth-child(3) {
                    animation-delay: 4.5s;
                }
                @keyframes circle-animate {
                    from {
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    to {
                        width: 200%;
                        height: 200%;
                        top: -50%;
                        left: -50%;
                        opacity: 0;
                    }
                }
            }
        }
    }

</style>
