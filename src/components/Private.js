import React from "react";

function PrivatePage({ history }) {
  const logoutUser = () => {
    localStorage.removeItem("token");

    history.push("/");
  };

  return (
    <div>
      <h1> Private Page </h1>
      <h3> This page is private </h3>
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
}

export default PrivatePage;
