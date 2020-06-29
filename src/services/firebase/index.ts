import React from 'react';
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2NxZy6jD7gLzvZgF7JTr3X-K5PTM3fww",
  authDomain: "savemydoc-32574.firebaseapp.com",
  databaseURL: "https://savemydoc-32574.firebaseio.com",
  projectId: "savemydoc-32574",
  storageBucket: "savemydoc-32574.appspot.com",
  messagingSenderId: "9412336696",
  appId: "1:9412336696:web:da7efd281dd196b7ef1acd",
  measurementId: "G-R7DPNT33X8"
};

firebase.initializeApp(firebaseConfig);

const FirebaseContext = React.createContext({ auth: firebase.auth(), db: firebase.database()});
export { FirebaseContext };
