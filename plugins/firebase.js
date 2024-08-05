import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCx-z2T9PnWrLhiYFWykuDGaw8gNvZ_3e0",
    authDomain: "fir-pj-b5724.firebaseapp.com",
    projectId: "fir-pj-b5724",
    storageBucket: "fir-pj-b5724.appspot.com",
    messagingSenderId: "1019630707871",
    appId: "1:1019630707871:web:477db3642eea7de1062eaa",
    measurementId: "G-6TEHGY006S"
  });
}

export default firebase;