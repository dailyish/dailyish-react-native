import firebase from 'firebase/app';
import 'firebase/firestore';
import config from './Config';

firebase.initializeApp(config);

export const DB = firebase.firestore();
export const users = DB.collection('users');
export default firebase;
