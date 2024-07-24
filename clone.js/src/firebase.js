import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBNN4ph6wu1Oj__6t2umMTBBECtJoov9K8",
    authDomain: "disneyplus-clone-5848a.firebaseapp.com",
    projectId: "disneyplus-clone-5848a",
    storageBucket: "disneyplus-clone-5848a.appspot.com",
    messagingSenderId: "258990261853",
    appId: "1:258990261853:web:fade55111c64ee0b11efb4"
  };
  
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
