import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyASM1kHuIuoKe7pSck1s4KA8rGzpZpIV5w",
    authDomain: "medwell-85df6.firebaseapp.com",
    projectId: "medwell-85df6",
    storageBucket: "medwell-85df6.appspot.com",
    messagingSenderId: "18045983781",
    appId: "1:18045983781:web:767b6f3a8a4e957ae7b3cc",
    measurementId: "G-Y0VXXTXCLG"
  };

const fire = firebase.initializeApp(firebaseConfig)

export default fire;