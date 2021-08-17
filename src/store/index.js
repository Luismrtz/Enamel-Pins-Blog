import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
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
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials:null
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost)
    },
    updateUser(state, payload) {
      state.user = payload; // returns a value of true/false
    },
    // the payload we named is 'doc'
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + 
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
   
  },
  actions: {
    //general best practice with STORE: DONT MAKE CHANGES/UPDATES inside of AN ACTION--- THEY SHOULD BE INSIDE of MUTATIONS
    //TO MAKE A MUTATION, you make a commit
    async getCurrentUser({commit}) { 
      //* so we reach out to database, we get our current user, we setProfileInfo in a mutation of setProfileInfo, and then we setProfileInitials in another mutation.
      // this will reach out to our collection and get the collection that has CURRENT user ID that is LOGGED into our application
      const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults); // sending in dbResults as payload
      commit("setProfileInitials");
      console.log(dbResults)
    },
    // to use the DISPATCH profile updated info via (Profile.vue's FORM(save button)) and populate it to firebase
    async updateUserSettings({commit, state}) {
      // docs are going to be the user's uid.  which we named as "profileId" under STATE method
      const dataBase = await db.collection('users').doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      // once above is all completed, we come back here to say 'hey lets go ahead and update the profile initials if they are changed"
      commit("setProfileInitials");
    }
  },
  modules: {
  }
})
