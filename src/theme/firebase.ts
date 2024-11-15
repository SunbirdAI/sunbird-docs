
import {
    getAuth,
     signOut,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { initializeApp } from "firebase/app";
// Initialize Firebase app using siteConfig values
const app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  });

 export  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  // Sign out function
  export const logout = (afterAction = () => {}) => {
    signOut(auth)
      .then(() => {
        afterAction();
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  // Sign-in function
  export const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      if (user) {
        if (user.email.endsWith("@sunbird.ai")) {
          return { authenticated: true };
        }
      }
      return { authenticated: false };
    } catch (err) {
      console.error(err);
      alert(err.message);
      return { authenticated: false };
    }
  };
