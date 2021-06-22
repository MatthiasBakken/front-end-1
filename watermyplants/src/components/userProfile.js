import React, { useState, useEffect } from "react";

const userProfileComp = () => {
  const { details, setDetails } = useState(null);

  return (
    <div className="profileContainer">
      <h2>User Profile</h2>
      {
        <div>
          <a>User name</a>
          <a>{details.user.username}</a>
          <a>Password</a>
          <a>{details.user.password}</a>
          <a>Phone number</a>
          <a>{details.user.phoneNumber}</a>
        </div>
      }
      <button>complete</button>
      <button>cancel</button>
    </div>
  );
};

export default userProfileComp;
