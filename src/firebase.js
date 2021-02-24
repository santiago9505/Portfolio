import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOyrzn0EHn4V4L9Uu5tYVX7eRHc6a3YPE",
  authDomain: "portfolio-contact-form-91e66.firebaseapp.com",
  projectId: "portfolio-contact-form-91e66",
  storageBucket: "portfolio-contact-form-91e66.appspot.com",
  messagingSenderId: "556169052402",
  appId: "1:556169052402:web:12300d6c53220e06f6106b",
  measurementId: "G-H0L84ZLLNG",
});

var db = firebaseApp.firestore();

export { db };
