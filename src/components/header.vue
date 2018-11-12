<template>
    <header class="b-header">
        <div class="container">
            <div class="wrapper">
                <div class="logo">
                    <a class="gtc" href="#">
                        <span class="wbc">WBC</span>
                        <span class="wbc--small">Whizbizcoin</span>
                    </a>
                </div>
                <ul class="main-menu">
                    <li>
                        <a class="bid inline-link" href="#" @click.prevent="$modal.show('apply')">{{t('Apply')}}</a>
                    </li>
                    <li>
                        <a class="presentation inline-link" href="#" @click.prevent="$modal.show('presentation')">
                            {{t('Sign up for a presentation')}}
                        </a>
                    </li>
                    <li>
                        <v-select :options="languageSelect" v-model="selected"></v-select>
                    </li>
                    <li>
                        <a class="inline-link" href="#" @click.prevent="$modal.show('login')">
                            {{t('Login')}}
                        </a>
                    </li>
                </ul>
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
        selected: {label: 'Ru', value: 'ru'}
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
                        &.bid {
                            .sm-block({ display: none; });
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
