import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  
        apiKey: "AIzaSyDtCyUJ0xLxQXlNLaM3QhXzkOr1ddx0Lg0",
        authDomain: "solecommerce-16c0f.firebaseapp.com",
        projectId: "solecommerce-16c0f",
        storageBucket: "solecommerce-16c0f.appspot.com",
        messagingSenderId: "531193961378",
        appId: "1:531193961378:web:19b10ad4736f59e5d270fb"
     
})

export function getFirebase() {

    return app;    
}

export function getFirestore() {

    return firebase.firestore(app);    
}