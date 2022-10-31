import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDGcqkDI19-w2MuBnc6-nrJ1aVYzTpqclU",
    authDomain: "disney-clone-14263.firebaseapp.com",
    databaseURL: "https://disney-clone-14263-default-rtdb.firebaseio.com",
    projectId: "disney-clone-14263",
    storageBucket: "disney-clone-14263.appspot.com",
    messagingSenderId: "1097166808583",
    appId: "1:1097166808583:web:bd8e3f017d512fd2a22ca2",
    measurementId: "G-XTQCD50NBK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db; 