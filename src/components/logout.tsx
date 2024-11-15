import React from "react";
import { logout } from "../theme/firebase";
import { Power } from "lucide-react";

const LogoutButton = () => {
  const handleLogout = () => {
    logout(() => window.location.reload());
  };

  return (
    <button
      title="Sign out of your account"
      className="logout__btn"
      style={{ cursor: "pointer" }}
      onClick={handleLogout}
    >
      <Power size={18} />
    </button>
  );
};

export default LogoutButton;
