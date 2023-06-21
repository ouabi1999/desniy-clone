import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBUxoyRoAvbYD_IFEm3u-FVQwqz35Qc314",
  authDomain: "quixotic-strand-381201.firebaseapp.com",
  projectId: "quixotic-strand-381201",
  storageBucket: "quixotic-strand-381201.appspot.com",
  messagingSenderId: "346204936984",
  appId: "1:346204936984:web:9afc345da538b4b156dc6d",
  measurementId: "G-GLSL38XG80"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {auth, provider, storage};
export default db; 