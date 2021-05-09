import firebase from 'firebase';

require("@firebase/firestore")

  const firebaseConfig = {
    apiKey: "AIzaSyCqs57OosXsG8sEOIccCjPWoZGXLBipBBs",
    authDomain: "pro70-769a8.firebaseapp.com",
    projectId: "pro70-769a8",
    storageBucket: "pro70-769a8.appspot.com",
    messagingSenderId: "1006704585721",
    appId: "1:1006704585721:web:e8fc4d20973c4e6e53ab28"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
