import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC1naLmCe0InmeYq_qMUZg5ftcXyMRjx8Q',
  authDomain: 'instagram-168b4.firebaseapp.com',
  projectId: 'instagram-168b4',
  storageBucket: 'instagram-168b4.appspot.com',
  messagingSenderId: '707040096690',
  appId: '1:707040096690:web:4b9c94f4ece1e7709e34ab',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
