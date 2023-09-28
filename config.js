import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAftN9iUI-xC35V-us4-PeIE8p4zb0N-v4",
  authDomain: "e-library-a290e.firebaseapp.com",
  projectId: "e-library-a290e",
  storageBucket: "e-library-a290e.appspot.com",
  messagingSenderId: "947820782572",
  appId: "1:947820782572:web:f4b1500400d865ad33d6c9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
