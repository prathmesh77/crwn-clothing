import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC8ZMRRRcBHxgsFxWTnYLwI0QLfi8E1zEc",
    authDomain: "crwn-db-ceab0.firebaseapp.com",
    databaseURL: "https://crwn-db-ceab0.firebaseio.com",
    projectId: "crwn-db-ceab0",
    storageBucket: "crwn-db-ceab0.appspot.com",
    messagingSenderId: "813099071309",
    appId: "1:813099071309:web:26b3f68c2158e155616904"

}

//for storing login details to our firestore db
export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ', error.message);
        }
    }
    return userRef;
};
    
export const addCollectionAndDocuments =async (collectionKey,objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    await batch.commit();
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle =()=> auth.signInWithPopup(provider);
export default firebase;