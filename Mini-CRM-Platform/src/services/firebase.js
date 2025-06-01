import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBSw1ZIFN4AaPf5gtg8eJ9H000K_OCZUtc",
  authDomain: "mini-crm-platform-74e5a.firebaseapp.com",
  projectId: "mini-crm-platform-74e5a",
  storageBucket: "mini-crm-platform-74e5a.firebasestorage.app",
  messagingSenderId: "30042966912",
  appId: "1:30042966912:web:e73722f506e336a24ccf65",
  measurementId: "G-028GR8GCYN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
