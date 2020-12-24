import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCOZaFha7LaHp3UIVIjwoeHVewGWpBagCY",
    authDomain: "upload-images-93b7c.firebaseapp.com",
    projectId: "upload-images-93b7c",
    storageBucket: "upload-images-93b7c.appspot.com",
    messagingSenderId: "475966749854",
    appId: "1:475966749854:web:2bfed720a5fdc914d8cf8f",
    measurementId: "G-GC0BB8FNTV"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();

  
