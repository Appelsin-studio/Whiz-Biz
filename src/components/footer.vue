<template>
    <footer class="main-footer">
        <div class="container">
            <div class="top-wrapper">
                <a class="gtc" href="#">GTC</a>
                <a class="contact contact--position" href="#" @click.prevent="modalApply">Подать заявку</a>
                <a class="contact" href="#" @click.prevent="modalPresentation">Записаться на презентацию</a>
            </div>
            <div class="bottom-wrapper">
                <p class="right-reserved">
                    <span>GTCinema.</span>
                    <span>Все права защищены</span>
                </p>
                <ul class="social">
                    <li>
                        <a href="#" class="social-link vk">
                            <img svg-inline src="~src/assets/img/icon/social/vk.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-link twitter">
                            <img svg-inline src="~src/assets/img/icon/social/twitter.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-link fb">
                            <img svg-inline src="~src/assets/img/icon/social/facebook-logo.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-link youtube">
                            <img svg-inline src="~src/assets/img/icon/social/youtube.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
  export default {
    methods: {
      modalApply() {
        this.$modal.show('apply')
      },
      modalPresentation() {
        this.$modal.show('presentation')
      }
    }
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";

    .main-footer {
        padding: 40px 0 50px;
        background: #111;
        .top-wrapper {
            display: flex;
            margin-bottom: 30px;
            justify-content: space-between;
            align-items: flex-end;
            font-weight: 600;
            text-transform: uppercase;
            color: #fff;
            .sm-block({
                flex-direction: column;
                align-items: center;
                margin-bottom: 0;
            });
            a {
                font-family: @BebasNeue;
                color: #fff;
                .transition();
                .sm-block({
                    margin-bottom: 15px;
                });
                &:hover {
                    color: @blueMain;
                }
            }
            .gtc {
                font-size: 4.5rem;
                letter-spacing: 0.3rem;
                line-height: 3.8rem;
            }
            .contact {
                font-size: 2.6rem;
                letter-spacing: 0.18rem;
                &--position {
                    margin-left: auto;
                    margin-right: 12%;
                    .sm-block({
                        margin-left: 0;
                        margin-right: 0;
                    });
                }
            }
        }
        .bottom-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .sm-block({
                flex-direction: column;
            });
            .right-reserved {
                font-weight: 200;
                font-size: 2rem;
                letter-spacing: 0.14rem;
                .sm-block({
                    order: 2;
                    text-align: center;
                });
                span {
                    display: block;
                }
            }
            .social {
                display: flex;
                .sm-block({
                    order: 1;
                    margin-bottom: 30px;
                });
                li {
                    margin-right: 15px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
                &-link {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                    border-radius: 2px;
                    .transition();
                    &:hover {
                        box-shadow: 0 0 8px 0 rgba(255,255,255,1);
                    }
                    &.vk {
                        background: #4c75a3;
                    }
                    &.twitter {
                        background: #55acee;
                    }
                    &.fb {
                        background: #3b5999;
                    }
                    &.youtube {
                        background: #cd201f;
                    }
                    svg {
                        max-width: 17px;
                        max-height: 17px;
                    }
                }
            }
        }
    }
</style>
