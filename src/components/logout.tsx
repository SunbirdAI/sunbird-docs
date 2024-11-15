import React from "react";
import { Power } from "lucide-react";
//import { signOut } from "firebase/auth";

const LogoutButton = () => {
  // const logout = (afterAction = () => {}) => {
  //   signOut(auth)
  //     .then(() => {
  //       afterAction();
  //     })
  //     .catch((error) => {
  //       console.error("Error signing out: ", error);
  //     });
  // };
  // const handleLogout = () => {
  //   logout(() => window.location.reload()); // Call the logout function passed as prop
  // };

  return (
    <button
      title="Sign out of your account"
      className="logout__btn"
      style={{ cursor: "pointer" }}
      //onClick={handleLogout} // Trigger the logout function when clicked
    >
      <Power size={18} />
    </button>
  );
};

export default LogoutButton;
