import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyjEdbNz9jXcY1l-es8ayoIiPtkujNxwQ",
    authDomain: "crwn-clothing-db-25197.firebaseapp.com",
    projectId: "crwn-clothing-db-25197",
    storageBucket: "crwn-clothing-db-25197.appspot.com",
    messagingSenderId: "250258015073",
    appId: "1:250258015073:web:9ce84a61cc215df088bb20"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider()
  googleProvider.setCustomParameters({
      prompt: 'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
      if (!userAuth) return
      const userDocRef = doc(db, 'users', userAuth.uid)
      const userSnapshot = await getDoc(userDocRef)

      if (!userSnapshot.exists()) {
          const { displayName, email } = userAuth
          const createdAt = new Date()

          try {
              await setDoc(userDocRef, {
                  displayName,
                  email,
                  createdAt,
                  ...additionalInformation
              })
          } catch (error) {
              console.log('error creating the user', error.message)
          }
      }

      return userDocRef
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async () => await signOut(auth)

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)