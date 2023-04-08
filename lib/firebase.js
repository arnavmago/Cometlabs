import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBaiR9X2CZC4mNYeI1iaxI1DIQUQ7iuR2o",
    authDomain: "cometlabs.firebaseapp.com",
    projectId: "cometlabs",
    storageBucket: "cometlabs.appspot.com",
    messagingSenderId: "798450899254",
    appId: "1:798450899254:web:f803d941581c72b60f7b97"
}

const app = initializeApp(firebaseConfig)
var auth = getAuth()
export { auth, app }