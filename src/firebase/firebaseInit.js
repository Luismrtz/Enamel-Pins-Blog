import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCTvGcT3qiPLPSw_3Da21ZlRYBwdLi65e4",
    authDomain: "enamelpinsblogs.firebaseapp.com",
    projectId: "enamelpinsblogs",
    storageBucket: "enamelpinsblogs.appspot.com",
    messagingSenderId: "469123144218",
    appId: "1:469123144218:web:1650d8aecfc7b1354e0fa3"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();


  //test