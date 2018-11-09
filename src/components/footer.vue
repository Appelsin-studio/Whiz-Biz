<template>
    <footer class="main-footer">
        <div class="container">
            <ul class="footer-wrapper">
                <li>
                    <a class="gtc" href="#">
                        <span class="wbc">WBC</span>
                        <span class="wbc--small">Whizbizcoin</span>
                    </a>
                </li>
                <li>
                    <a class="contact contact--position" href="#" @click.prevent="$modal.show('apply')">
                        {{t('Apply')}}
                    </a>
                </li>
                <li>
                    <a class="contact" href="#" @click.prevent="$modal.show('presentation')">
                        {{t('Sign up for a presentation')}}
                    </a>
                </li>
                <li>
                    <ul class="social">
                        <li>
                            <a href="#" class="social-link vk" target="_blank">
                                <img svg-inline src="~src/assets/img/icon/social/vk.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-link twitter" target="_blank">
                                <img svg-inline src="~src/assets/img/icon/social/twitter.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-link fb" target="_blank">
                                <img svg-inline src="~src/assets/img/icon/social/facebook-logo.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-link youtube" target="_blank">
                                <img svg-inline src="~src/assets/img/icon/social/youtube.svg" alt="">
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .main-footer {
        position: relative;
        padding: 70px 0;
        background: linear-gradient(180deg, #130828, #1e0b46);
        z-index: 15;
        .md-block({ padding: 50px; padding-bottom: 20px; });
        .sm-block({ padding: 20px; });
        .footer-wrapper {
            .row-flex();
            align-items: center;
            > li {
                .col();
                .size(3);
                .size-md(4);
                .size-sm(6);
                .sm-block({ text-align: center });
                &:last-child {
                    .size-md(12);
                }
                &:first-child {
                    .size-sm(12);
                    .sm-block({ display: flex; justify-content: center; margin-bottom: 25px });
                }
                .contact {
                    font-size: 1.8rem;
                    color: #fff;
                    font-weight: 200;
                    letter-spacing: 0.12rem;
                    border-bottom: 1px dashed #fff;
                    transition: .3s;
                    white-space: nowrap;
                    .sm-block({ white-space: normal; });
                    &:hover {
                        border-color: transparent;
                    }
                }
                .social {
                    display: flex;
                    justify-content: flex-end;
                    .md-block({ justify-content: center; margin-top: 25px; });
                    .sm-block({ order: 1; margin-bottom: 30px; });
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
                            box-shadow: 0 0 8px 0 rgba(255, 255, 255, 1);
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
    }
</style>
