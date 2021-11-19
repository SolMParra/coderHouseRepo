import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBnDomNomHyc7mTagyWu6Tcx0SHZ1FLbTU",
    authDomain: "soleecommerce-95eb0.firebaseapp.com",
    projectId: "soleecommerce-95eb0",
    storageBucket: "soleecommerce-95eb0.appspot.com",
    messagingSenderId: "1043719939712",
    appId: "1:1043719939712:web:194ce4727373b54c05a865"
})

export function getFirebase() {

    return app;    
}

export function getFirestore() {

    return firebase.firestore(app);    
}