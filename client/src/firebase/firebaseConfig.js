 import { initializeApp } from 'firebase/app';
 import { getAuth } from 'firebase/auth';
 import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  const mySecret = process.env['apiKey'],
  authDomain: "catchmaster-delux.firebaseapp.com",
  projectId: "catchmaster-delux",
  storageBucket: "catchmaster-delux.appspot.com",
  messagingSenderId: "840913142770",
  appId: "1:840913142770:web:c72e0087fac8854bd1616b",
  measurementId: "G-XVGLX2EJZH"
};

 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);
 export const db = getFirestore(app);