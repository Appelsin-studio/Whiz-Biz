<template>
    <section class="b-bg-wrapper">
        <div class="circle-wrapper"
             v-for="circle in circles"
             :style="styles(circle)">
            <div class="circle" v-for="n in circle.count"></div>
        </div>
    </section>
</template>
<script>

  export default {
    data() {
      return {
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
      }
    }
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
                animation-timing-function: ease-out;
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
