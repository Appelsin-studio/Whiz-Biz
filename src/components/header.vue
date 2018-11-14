<template>
    <header class="b-header">
        <div class="container">
            <div class="wrapper">
                <div class="logo">
                    <a class="gtc" href="#">
                        <span class="wbc">WB</span>
                        <span class="wbc--small">Whizbizcoin</span>
                        <span class="wbc--small">whizbizfund</span>
                    </a>
                </div>
                <ul class="main-menu">
                    <li class="menu-apply">
                        <a class="inline-link" href="#" @click.prevent="$modal.show('apply')">{{t('Apply')}}</a>
                    </li>
                    <li class="menu-presentation">
                        <a class="presentation inline-link" href="#" @click.prevent="$modal.show('presentation')">
                            {{t('Sign up for a presentation')}}
                        </a>
                    </li>
                    <li class="menu-language">
                        <v-select :options="languageSelect" v-model="selected"></v-select>
                    </li>
                </ul>
                <ul class="main-menu">
                    <li>
                        <a class="inline-link" href="#" @click.prevent="$modal.show('login')">
                            {{t('Login')}}
                        </a>
                    </li>
                </ul>
                <div class="toggle-menu">
                    <div class="hamburger" :class="{active: showMenu}" @click="showMenu=!showMenu">
                        <div class="hamburger-box">
                            <div class="hamburger-inner"></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <ul v-if="showMenu">
                            <li>
                                <a class="bid inline-link" href="#" @click.prevent="$modal.show('apply')">{{t('Apply')}}</a>
                            </li>
                            <li>
                                <a class="presentation inline-link" href="#" @click.prevent="$modal.show('presentation')">
                                    {{t('Sign up for a presentation')}}
                                </a>
                            </li>
                            <li>
                                <a class="inline-link" href="#" @click.prevent="$modal.show('login')">
                                    {{t('Login')}}
                                </a>
                            </li>
                        </ul>
                    </transition>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
  import vSelect from 'vue-select'
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    components: {vSelect},
    mixins: [LanguageMixin],
    data() {
      return {
        languageSelect: [
          {label: 'Ru', value: 'ru'},
          {label: 'En', value: 'en'},
          {label: 'Kz', value: 'kk'}
        ],
        selected: {label: 'Ru', value: 'ru'},
        showMenu: false
      }
    },
    created() {
      this.languageSelect.forEach(item => {
        if (item.value === this.language) {
          this.selected = item
        }
      })
    },
    watch: {
      selected(newValue) {
        this.$store.dispatch('language', newValue.value)
      }
    }
  }
</script>
<style lang="less">
    @import "~assets/less/_vars";
    .b-header {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        z-index: 999;
        font-weight: 200;
        .lg-block({ top: 10px });
        .sm-block({ top: 5px });
        .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .main-menu {
                display: flex;
                justify-content: flex-end;
                > li {
                    padding: 0 20px;
                    .sm-block({ padding: 0 10px; });
                    .xm-block({ display: none; });
                    &.menu-apply {
                        .md-block({ display: none; });
                    }
                    &.menu-language {
                        .xm-block({ display: block; });
                    }
                    a {
                        display: inline-block;
                        color: #fff;
                        padding: 0 10px;
                        font-size: 18px;
                        letter-spacing: 0.12rem;
                        border-bottom: 1px solid transparent;
                        .transition();
                        .sm-block({ font-size: 16px; });
                        .xs-block({ text-align: center; });
                        &:hover {
                            border-bottom: 1px solid @pinkDark;
                        }
                    }
                }
            }
            .toggle-menu {
                display: none;
                .xm-block({ display: block; });
                .hamburger {
                    font: inherit;
                    display: inline-block;
                    overflow: visible;
                    margin: 0;
                    padding: 15px;
                    cursor: pointer;
                    transition-timing-function: linear;
                    transition-duration: .15s;
                    transition-property: opacity, filter;
                    text-transform: none;
                    color: #fff;
                    border: 0;
                    background-color: transparent;
                    position: relative;
                    z-index: 100;
                    &.active {
                        .hamburger-inner {
                            transform: translate3d(0, 0, 0) rotate(45deg);
                            &::before {
                                transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
                                opacity: 0;
                            }
                            &::after {
                                transform: translate3d(0, -10px, 0) rotate(-90deg);
                            }
                        }
                    }
                    .hamburger-box {
                        position: relative;
                        display: inline-block;
                        width: 40px;
                        height: 4px;
                        .hamburger-inner,
                        .hamburger-inner:after,
                        .hamburger-inner:before {
                            position: absolute;
                            width: 40px;
                            height: 4px;
                            transition-timing-function: ease;
                            transition-duration: .15s;
                            transition-property: transform;
                            border-radius: 4px;
                            background-color: #fff;
                        }
                        .hamburger-inner {
                            &::after, &::before {
                                display: block;
                                content: "";
                            }
                            &::after {
                                bottom: -10px;
                            }
                            &::before {
                                top: -10px;
                            }
                        }
                    }
                }
                ul {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    .gradientMainOpacity(.95);
                    z-index: 99;
                    padding-top: 75px;
                    li > {
                        display: block;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
                        &:last-child {
                            border-bottom: none;
                        }
                        > a {
                            text-align: left;
                            display: block;
                            padding: 10px 20px;
                            color: #fff;
                            text-transform: uppercase;
                            font-size: 3rem;
                            font-weight: 200;
                        }
                    }
                }
            }
        }
        .v-select {
            .vs__selected-options {
                padding: 0;
            }
            &.searchable {
                min-width: 50px;
                .xs-block({ min-width: 40px; });
                .dropdown-toggle {
                    height: 100%;
                    border-radius: 0;
                    border: none;
                    cursor: pointer;
                    color: #fff;
                    padding: 0 0 1px;
                    .vs__actions {
                        padding: 0;
                    }
                    .clear {
                        display: none;
                    }
                    input[type=search] {
                        margin: 0;
                        padding: 0;
                        border: none;
                        position: absolute;
                        z-index: -1;
                    }
                }
                .open-indicator::before {
                    border-color: @pinkDark;
                }
            }
            .select-tag {
                margin: 4px 0 0;
                padding: 0 5px;
                border: none;
            }
            &.single .selected-tag {
                width: 100%;
                color: #fff;
                text-transform: uppercase;
                font-size: 18px;
                font-weight: 200;
                line-height: 1;
                letter-spacing: 0.12rem;
                margin: 4px 0 0;
                padding: 0 7px;
                border: none;
                .sm-block({ font-size: 16px; });
            }
            &.single.open .selected-tag {
                position: relative;
            }
            .dropdown-menu {
                max-width: 100%;
                min-width: 40px;
                overflow: hidden;
                background: transparent;
                li {
                    &.highlight {
                        > a {
                            background-color: @pinkLight;
                            color: #fff;
                        }
                    }
                    > a {
                        display: block;
                        padding: 3px 7px;
                        color: #fff;
                        text-transform: uppercase;
                        font-size: 18px;
                        letter-spacing: 0.12rem;
                        border: none;
                        .sm-block({ font-size: 16px; });
                        &:hover {
                            background-color: @pinkLight;
                            border: none;
                        }
                    }
                }
            }
        }
    }

</style>
