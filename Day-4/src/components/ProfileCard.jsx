import React from "react";
import Button from "./Button";
const ProfileCard = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
        alt="Loading"
      />
      <h1>Ankit Kumar</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quisquam.
      </p>
      <Button />
    </div>
  );
};

export default ProfileCard;
