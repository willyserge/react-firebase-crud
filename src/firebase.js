import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDoQhtm9cjn3Q7Xxb-jV0cxWXrQLOauIHI",
    authDomain: "react-crud-b041b.firebaseapp.com",
    databaseURL: "https://react-crud-b041b.firebaseio.com",
    projectId: "react-crud-b041b",
    storageBucket: "react-crud-b041b.appspot.com",
    messagingSenderId: "1013025454459",
    appId: "1:1013025454459:web:28efc348960f15647125de"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig); 
  export default fireDb.database().ref();