import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB1B4iV6d9RjvlqUzY16L8qnHBIdDci89M",
    authDomain: "appdog-94d17.firebaseapp.com",
    projectId: "appdog-94d17",
    storageBucket: "appdog-94d17.appspot.com",
    messagingSenderId: "12228565817",
    appId: "1:12228565817:web:7946394765e1acc91f66e8"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
