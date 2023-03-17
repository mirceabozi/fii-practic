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
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore"
import { getStorage, ref, uploadBytes } from "firebase/storage"

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
const storageService = getStorage(app)

const auth = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
}

const database = {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  updateDoc,
}

const storage = {
  getStorage,
  ref,
  uploadBytes,
}

export { auth, dbService, authService, storageService, database, storage }
export default app
