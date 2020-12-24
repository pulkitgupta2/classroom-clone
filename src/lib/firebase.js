import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATOkzZ8M03JDlexVfextL5fkPTW7jhL6Q",
  authDomain: "yt-classroom-clone.firebaseapp.com",
  projectId: "yt-classroom-clone",
  storageBucket: "yt-classroom-clone.appspot.com",
  messagingSenderId: "170227524980",
  appId: "1:170227524980:web:78806688690ce40a7d3821",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
