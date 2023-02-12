import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBF3DI5_GFo--X9q0lDIbFOAR_bnp0TC_0',
  authDomain: 'smallmart-66a33.firebaseapp.com',
  projectId: 'smallmart-66a33',
  storageBucket: 'smallmart-66a33.appspot.com',
  messagingSenderId: '442443626678',
  appId: '1:442443626678:web:cc87f8270367b55a8f4e17',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
