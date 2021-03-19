import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvE0GGSeDJokOTgPC5DADAgDt1c94I9uU",
    authDomain: "netflix-movies-clone.firebaseapp.com",
    projectId: "netflix-movies-clone",
    storageBucket: "netflix-movies-clone.appspot.com",
    messagingSenderId: "957590730851",
    appId: "1:957590730851:web:ea8936dd62afd239d82056"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;