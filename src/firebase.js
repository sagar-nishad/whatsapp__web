// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByaee5-gAKHFpBsaE1OIyH2G53I6C5LUA",
  authDomain: "whatsapp-clone-432d2.firebaseapp.com",
  projectId: "whatsapp-clone-432d2",
  storageBucket: "whatsapp-clone-432d2.appspot.com",
  messagingSenderId: "197448760681",
  appId: "1:197448760681:web:606a4562f22bff317d91f8",
  measurementId: "G-MB4J082Q2Q",
};

//the below code is for authentication porposes
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
