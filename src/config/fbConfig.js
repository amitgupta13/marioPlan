import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAdsTgwm0tKyyV_rF_5N-qQ3h50HdraMjg",
    authDomain: "mario-cafbc.firebaseapp.com",
    databaseURL: "https://mario-cafbc.firebaseio.com",
    projectId: "mario-cafbc",
    storageBucket: "mario-cafbc.appspot.com",
    messagingSenderId: "773444024201",
    appId: "1:773444024201:web:d51bb7bc73d1d6fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;