import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBE3Z6LD9pfhHTut6DBZ9RsKRKYKT4v9ac",
    authDomain: "enoz-78d3e.firebaseapp.com",
    databaseURL: "https://enoz-78d3e.firebaseio.com",
    projectId: "enoz-78d3e",
    storageBucket: "enoz-78d3e.appspot.com",
    messagingSenderId: "314154578003",
    appId: "1:314154578003:web:3fa9b6f538e6e77eaf56a6",
    measurementId: "G-TKEV5BF4KC"
  };

firebase.initializeApp(config);
firebase.firestore();

export default firebase