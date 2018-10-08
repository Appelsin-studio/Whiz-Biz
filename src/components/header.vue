<template>
    <header class="b-header">
        <div class="container">
            <div class="wrapper">
                <a class="gtc gradient" href="#" @click.prevent="$modal.show('message')">GTC</a>
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
        selected: null
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
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        font-family: @BebasNeue;
        font-weight: 600;
        .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            a {
                display: inline-block;
                color: #fff;
                &.gtc {
                    padding: 50px 25px 5px;
                    font-size: 3.5rem;
                    .transition();
                    .md-block({ padding: 35px 15px 5px; });
                    &:hover {
                        box-shadow: 0 0 25px 0 rgba(54, 147, 224, 1);
                    }
                }
                &.bid {
                    .sm-block({ display: none; });
                }
                &.bid,
                &.presentation {
                    font-size: 2.6rem;
                    letter-spacing: 0.18rem;
                    .transition();
                    &:hover {
                        color: @blueLight;
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
                .dropdown-toggle {
                    height: 100%;
                    border-radius: 0;
                    border: none;
                    cursor: pointer;
                    color: #fff;
                    padding: 0 0 1px;
                    .vs__actions {
                        padding: 0 0 0 3px;
                    }
                    .clear {
                        display: none;
                    }
                    input[type=search] {
                        display: none;
                    }
                }
                .open-indicator::before {
                    border-color: @blueLight;
                }
            }
            &.single .selected-tag {
                color: #fff;
                text-transform: uppercase;
                font-size: 2.6rem;
                font-weight: 600;
                line-height: 2.6rem;
                letter-spacing: 0.18rem;
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
                    padding: 3px 9px;
                    color: #fff;
                    text-transform: uppercase;
                    font-size: 2.6rem;
                    letter-spacing: 0.18rem;
                }
            }
        }
    }

</style>
