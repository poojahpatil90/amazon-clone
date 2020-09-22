import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5ISXBuF34ZpKd4N9vokhAON3QtkIdoWA",
  authDomain: "clone-180d0.firebaseapp.com",
  databaseURL: "https://clone-180d0.firebaseio.com",
  projectId: "clone-180d0",
  storageBucket: "clone-180d0.appspot.com",
  messagingSenderId: "782283708112",
  appId: "1:782283708112:web:352bedde3ed2db12d170d5",
  measurementId: "G-R0DE38KEXE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
