import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {blogTitle: "Blog card #1", blogCoverPhoto: "nightFroog", blogDate:"May 1, 2021"},
      {blogTitle: "Blog card #2", blogCoverPhoto: "nightFroog", blogDate:"May 1, 2021"},
      {blogTitle: "Blog card #3", blogCoverPhoto: "nightFroog", blogDate:"May 1, 2021"},
      {blogTitle: "Blog card #4", blogCoverPhoto: "nightFroog", blogDate:"May 1, 2021"},
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost)
    }
  },
  actions: {
  },
  modules: {
  }
})
