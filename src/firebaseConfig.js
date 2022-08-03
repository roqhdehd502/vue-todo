import {
  initializeApp
} from 'firebase/app';
import { 
  getFirestore 
} from "firebase/firestore";
import { 
  getStorage 
} from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);


export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);