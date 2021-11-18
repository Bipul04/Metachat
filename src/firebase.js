import firebase from "firebase";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAINWTX-4mvOWh7cLmU1gn1TIs-0bF4fPg",
    authDomain: "metachat-ccf56.firebaseapp.com",
    projectId: "metachat-ccf56",
    storageBucket: "metachat-ccf56.appspot.com",
    messagingSenderId: "869818396857",
    appId: "1:869818396857:web:40dbbbc3ae084cf580eb68"
  }).auth();