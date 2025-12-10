"use client";

import { signOut } from "next-auth/react";

// This button is used to log users out

const ButtonLogout = () => {
  return (
    <button className="btn btn-ghost" onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default ButtonLogout;
