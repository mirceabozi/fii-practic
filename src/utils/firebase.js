import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDLeYV0RtXJpUH5w4C4ukdJEQJbDiIWRk4",
  authDomain: "fii-practic-memes.firebaseapp.com",
  projectId: "fii-practic-memes",
  storageBucket: "fii-practic-memes.appspot.com",
  messagingSenderId: "429868905828",
  appId: "1:429868905828:web:ffb3447a7ecbc69b9b7671",
}

const app = initializeApp(firebaseConfig)

const authService = getAuth()
const dbService = getFirestore(app)

const auth = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
}

export { auth, dbService, authService }
export default app
