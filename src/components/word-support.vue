<template>
    <section class="b-word-support">
        <div class="container">
            <p class="g-number">12</p>
            <h3 class="g-caption-section">
                <span>{{t('A word in support of')}}</span>
                <strong class="gradient-text">{{t('Kazakhstani art')}}</strong>
            </h3>
            <p class="main-text">
                {{t('In the modern world, the film industry is developing very rapidly and is one of the most profitable and promising ' +
                'areas of activity. And for sure, if you are reading this block of information now, then most likely you are a creative person ' +
                'and want to achieve something in life. But, any creativity needs financial support, which most often comes from relatives' +
                ', “from one’s own pocket,” sponsors, donations, sometimes from the People, and more often this financial support is not. Why' +
                ', more often than not, a creative person is forced to leave his homeland and suppose he begins to live in Europe? The fact is ' +
                'that many spheres of art are very developed in Europe, especially opera, theater, ballet, but in addition to this, the Europeans ' +
                'themselves support cultural development, and therefore support creative people. Pay attention to any event happening in the theater - ' +
                'there are no empty seats; tickets to buy is not easy. Someone will say: “Here, in Europe the tracks are better, the landscape is more ' +
                'beautiful there, the conditions are better there! There are more opportunities there! ”- and this is all true, but all this was created ' +
                'by people who wanted to be in comfortable conditions, took care of nature, developed tourism, laid high-quality asphalt, etc.! But, our ' +
                'homeland - Kazakhstan is also able to have all the same. We have a lot of talented people who can develop and be successful without ' +
                'leaving the country. There are a lot of mysterious and mystical places in Kazakhstan that are perfect for shooting a film in the genre ' +
                'of horrors, mysticism, etc. - a rather popular genre. In Kazakhstan, there are a lot of landscapes that are not inferior in their ' +
                'beauty to either European or Western. Our young people strive to be educated and continue to work in the leading companies ' +
                'of the world. Tourism is developing, and due to this, the economic opportunities of the market are expanding. ' +
                'Kazakhstan has all the prospects in the field of art development, because there is support from the ' +
                'People, who cares about the future.')}}
            </p>
        </div>
    </section>
</template>
<script>
  import { LanguageMixin } from 'components/mixins/language-mixin'

  export default {
    mixins: [LanguageMixin]
  }
</script>
<style scoped lang="less">
    @import "~assets/less/_vars";
    .b-word-support {
        padding: 150px 0;
        .md-block({ padding: 100px 0; });
        .xs-block({ padding: 60px 0; });
    }
    .g-number {
        color: #000;
        .line-after--right(@gradientDefault);
    }
    .g-caption-section {
        margin-bottom: 70px;
        .sm-block({ margin-bottom: 40px; });
        span {
            color: #000;
        }
        strong {
            font-size: 70px;
            .lg-block({ font-size: 50px; letter-spacing: 0.3rem; });
            .sm-block({ font-size: 30px; letter-spacing: 0.2rem; });
        }
    }
    .main-text {
        margin: 0 auto;
        max-width: 90%;
        font-size: 2.2rem;
        color: #000;
        text-align: center;
        .lg-block({ max-width: 100% });
    }
</style>
