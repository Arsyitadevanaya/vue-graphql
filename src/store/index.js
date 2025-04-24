import { createStore } from 'vuex'
import apolloClient from '@/apollo/index'
import { GET_FOLDERS } from '@/graphql/query'

export default createStore({
  state: {
    folders: [],
  },
  mutations: {
    setFolders(state, folders) {
      state.folders = folders
    },
  },
  actions: {
    async fetchFolders({ commit }, { filter, workspaceId }) {
      const { data } = await apolloClient.query({
        query: GET_FOLDERS,
        variables: { filter, workspaceId },
        fetchPolicy: 'network-only', // Optional: Biar selalu ambil data terbaru
      })
      commit('setFolders', data.folders)
    },

  },
  getters: {
    folderCount: (state) => state.folders.length
  },
})
