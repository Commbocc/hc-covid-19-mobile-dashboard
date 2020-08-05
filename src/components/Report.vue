<template>
  <article></article>
</template>

<script>
export default {
  mounted() {
    let report = this.$powerbi.embed(this.$el, this.config)

    // Report.off removes a given event handler if it exists.
    report.off('loaded')

    report.on('loaded', async () => {
      this.$store.commit('setReport', this.report)
      await this.getPages()
    })
  },
  methods: {
    async getPages() {
      let pages = await this.report.getPages()
      pages = pages.map(({ name, displayName }) => ({ name, displayName }))
      this.$store.commit('setPages', pages)
    },
    // fullscreen() {
    //   this.report.fullscreen()
    // },
    // setPage(name) {
    //   this.report.setPage(name)
    // },
  },
  computed: {
    report() {
      return this.$powerbi.get(this.$el)
    },
    config() {
      return {
        ...this.$store.getters.config,
        type: 'report',
        tokenType: this.$powerbiModels.TokenType.Embed,
        settings: this.settings,
      }
    },
    settings() {
      return {
        layoutType: this.$powerbiModels.LayoutType.MobilePortrait,
        panes: {
          filters: {
            expanded: false,
            visible: false,
          },
          pageNavigation: {
            visible: true,
          },
        },
      }
    },
  },
}
</script>
