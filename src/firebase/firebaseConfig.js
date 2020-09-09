import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDkM2ClbQiDlmPM47dL-tJD6HmGP08uxio",
    authDomain: "clone-36782.firebaseapp.com",
    databaseURL: "https://clone-36782.firebaseio.com",
    projectId: "clone-36782",
    storageBucket: "clone-36782.appspot.com",
    messagingSenderId: "934840828548",
    appId: "1:934840828548:web:df8bc61415fb639c50b8d1",
    measurementId: "G-GXLCNRR1C5"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }