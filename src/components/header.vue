<template>
    <header class="b-header">
        <div class="container">
            <div class="wrapper">
                <a class="gtc" href="#" @click.prevent="$modal.show('message')">
                    <span class="wbc">WBC</span>
                    <span class="wbc--small">Whizbizcoin</span>
                </a>
                <a class="bid" href="#" @click.prevent="$modal.show('apply')">{{t('Apply')}}</a>
                <a class="presentation" href="#" @click.prevent="$modal.show('presentation')">
                    {{t('Sign up for a presentation')}}
                </a>
                <v-select :options="languageSelect" v-model="selected"></v-select>
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
    },
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
        .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
                display: inline-block;
                color: #fff;
                &.gtc {
                    display: flex;
                    width: 130px;
                    height: 130px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-left: 5px solid #ff3ae9;
                    border-right: 5px solid @red;
                    box-sizing: border-box;
                    background-image: linear-gradient(to right, #ff3ae9 0%, @red 100%), linear-gradient(to right, #ff3ae9 0%, @red 100%);
                    background-size: 100% 5px;
                    background-position: 0 0, 0 100%;
                    background-repeat: no-repeat;
                    .wbc {
                        font-size: 35px;
                        font-weight: 900;
                    }
                    .wbc--small {
                        font-size: 14px;
                    }
                }
                &.bid {
                    .sm-block({ display: none; });
                }
                &.bid,
                &.presentation {
                    font-size: 18px;
                    letter-spacing: 0.12rem;
                    border-bottom: 1px solid transparent;
                    .transition();
                    .sm-block({font-size: 16px;});
                    &:hover {
                        border-bottom: 1px solid @pinkDark;
                    }
                }
                &.presentation {
                    .xs-block({ text-align: center;});
                }
            }
        }
        .v-select {
            .vs__selected-options {
                padding: 0;
            }
            &.searchable {
                min-width: 50px;
                .xs-block({ min-width: 40px;});
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
                .sm-block({font-size: 16px;});
            }
            &.single.open .selected-tag {
                position: relative;
            }
            .dropdown-menu {
                max-width: 100%;
                min-width: 40px;
                overflow: hidden;
                background: transparent;
                li > a {
                    padding: 3px 7px;
                    color: #fff;
                    text-transform: uppercase;
                    font-size: 18px;
                    letter-spacing: 0.12rem;
                    border: none;
                    .sm-block({font-size: 16px;});
                }
            }
        }
    }

</style>
