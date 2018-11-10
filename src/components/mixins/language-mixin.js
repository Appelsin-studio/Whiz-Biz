import { mapState } from 'vuex'
import Translation from 'src/translation'

export const LanguageMixin = {
  computed: {
    ...mapState(['language'])
  },
  created() {
    this.$store.dispatch('language')
  },
  methods: {
    t(text) {
      if (this.language === 'en') {
        return text
      }
      if (Translation[text] === undefined) {
        console.error('Translate not found: "' + text + '"')
        return text
      }
      return Translation[text][this.language]
    }
  }
}
