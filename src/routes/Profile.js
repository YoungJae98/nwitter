import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fBase";

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>logout</button>
    </>
  );
};

export default Profile;
