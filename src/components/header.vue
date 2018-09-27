<template>
    <header class="b-header">
        <div class="container">
            <div class="wrapper">
                <a class="gtc" href="#">GTC</a>
                <a class="bid" href="#">Подать заявку</a>
                <a class="presentation" href="#">Записаться на презентацию</a>
                <v-select :options="options" label="langCode" v-model="selected"></v-select>
            </div>
        </div>
    </header>
</template>
<script>
  import vSelect from 'vue-select'

    export default {
    components: {vSelect},
      data () {
          return {
            options: [
              { langCode: "Ru", langName: "Ru" },
              { langCode: "En", langName: "En" },
              { langCode: "Kz", langName: "Kz" }
              ],
            selected: {langCode: "En", langName: "Ru"}
          }
        }
    }
</script>
<style lang="less">
    @import "~assets/less/_vars";
    .b-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
        .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            a {
                display: inline-block;
                font-family: @fontBebas;
                font-weight: 600;
                color: #fff;
                &.gtc {
                    padding: 50px 25px 5px;
                    font-size: 3.5rem;
                    background-color: @redMain;
                    .transition();
                    &:hover {
                        box-shadow: 0 0 25px 0 rgba(196,45,45,1);
                    }
                }
                &.bid,
                &.presentation {
                    font-size: 2.6rem;
                    letter-spacing: 0.18rem;
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
                    border-color: @redMain;
                }
            }
            &.single .selected-tag {
                color: #fff;
                text-transform: uppercase;
                font-size: 2.6rem;
                font-family: @fontBebas;
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
