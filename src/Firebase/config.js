import firebase from 'firebase/app'
import 'firebase/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyC2K0gkMOB2xIrReUKL53SSnFcjdc3yQ8E",
    authDomain: "catcouterapp.firebaseapp.com",
    projectId: "catcouterapp",
    storageBucket: "catcouterapp.appspot.com",
    messagingSenderId: "325638466467",
    appId: "1:325638466467:web:bf7b41b82c60ab03f0c816"
};
const storage= firebase.initializeApp(firebaseConfig)

export  { storage , firebase as default}