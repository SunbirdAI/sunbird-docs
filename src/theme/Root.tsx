import React, { useState, useEffect } from "react";
import "../css/login.css";
import Loading from "./loading";
import { auth, signInWithGoogle } from "./firebase";

// Default implementation to customize the authentication flow
export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState(false); // To store user authentication status
  const [authLoading, setAuthLoading] = useState(true); // To handle loading state
  const env = process.env.ENVIRONMENT;
  // UseEffect to subscribe to authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Check if user email is valid
        if (user.email.endsWith("@sunbird.ai")) {
          setUserAuth(true); // Set the authenticated user
        } else {
          alert("Access denied. Please use a Sunbird AI email to log in.");
          auth.signOut(); // Sign out if email is not valid
        }
      }
      setAuthLoading(false); // Finished loading the auth state
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const { authenticated } = await signInWithGoogle(); // Sign in with Google
      if (authenticated) {
        setUserAuth(authenticated); // Set user after sign-in
      } else {
        alert("Invalid email or authentication failed.");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("An error occurred during sign-in. Please try again.");
    }
  };

  return (
    <>
      {authLoading ? (
        <Loading /> // Show loading state
      ) : (userAuth && env == "production") || env === "development" ? (
        <>{children}</> // Show the children components if user is authenticated
      ) : (
        <div className="login">
          <div className="login__container">
            <img
              src="/sunbird-docs/img/logo.png"
              className="logo"
              alt="Sunbird AI logo"
            />
            <button className="login__btn" onClick={handleGoogleSignIn}>
              <img src="/sunbird-docs/img/google.svg" alt="Google icon" />
              Login with Google
            </button>
          </div>
        </div>
      )}
    </>
  );
}
