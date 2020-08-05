import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const REPORT_ID = 'f1bc2751-9253-4e3f-872c-8f89af3d2b98'

export default new Vuex.Store({
  state: () => ({
    showNavigationDrawer: false,
    accessToken: null,
    embedUrl: null,
    report: null,
    pages: [],
    error: false,
  }),
  actions: {
    async authenticate({ commit }) {
      try {
        // if (REPORT_ID == 'f1bc2751-9253-4e3f-872c-8f89af3d2b98') throw undefined

        let {
          data: { accessToken, embedUrl },
        } = await axios.get(
          `https://hc-powerbi-token-gen.herokuapp.com/${REPORT_ID}`
        )
        commit('setAccessToken', accessToken)
        commit('setEmbedUrl', embedUrl)
      } catch (err) {
        // display error overlay?
        commit('setError', err)
      }
    },
    async goToPage({ state }, pageName) {
      await state.report.setPage(pageName)
      state.showNavigationDrawer = false
    },
  },
  mutations: {
    setReport(state, data) {
      state.report = data
    },
    setAccessToken(state, data) {
      state.accessToken = data
    },
    setEmbedUrl(state, data) {
      state.embedUrl = data
    },
    setPages(state, data) {
      state.pages = data
    },
    setError(state, data) {
      console.error(data)
      state.error = data
    },
  },
  getters: {
    config: (state) => {
      let { accessToken, embedUrl } = state
      return {
        accessToken,
        embedUrl,
        id: REPORT_ID,
      }
    },
  },
  modules: {},
})
