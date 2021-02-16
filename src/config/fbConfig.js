import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCBUwBX1MjuIX6vTDmuYoILv_cooX7-QOY",
  authDomain: "taiwo-kenny-marioplan.firebaseapp.com",
  projectId: "taiwo-kenny-marioplan",
  storageBucket: "taiwo-kenny-marioplan.appspot.com",
  messagingSenderId: "1059252436227",
  appId: "1:1059252436227:web:39284e7a4cc567d1207d36",
  measurementId: "G-VXK64RT6NS"
};


firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
