import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCINtNt--yRBUe6Ka6jRydLRXrfBGJumZM",
    authDomain: "challenge-2abc3.firebaseapp.com",
    projectId: "challenge-2abc3",
    storageBucket: "challenge-2abc3.appspot.com",
    messagingSenderId: "10649372665",
    appId: "1:10649372665:web:ffa120fbcfdab503a11f28"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};
