import firebase from 'firebase/app';
import 'firebase/firestore';
import config from './Config';

firebase.initializeApp(config);

export const DB = firebase.firestore();
export const users = DB.collection('users');
const currentUser = 'RlI8d22aHgR2yZWgx9sb';
export const habits = users.doc(currentUser).collection('habits');
export default firebase;
