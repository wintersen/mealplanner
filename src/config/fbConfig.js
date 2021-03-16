import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA4Gvk5OWKno7r2Hz3nUVbppSOs3vrO_jQ",
    authDomain: "mealplanner-4e1ec.firebaseapp.com",
    projectId: "mealplanner-4e1ec",
    storageBucket: "mealplanner-4e1ec.appspot.com",
    messagingSenderId: "164943522651",
    appId: "1:164943522651:web:78f7fbf2a5d538a32d087e",
    measurementId: "G-QT47J0BCSG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;