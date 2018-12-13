import React from "react";

const User = ({ userInfo }) => {
  if (!userInfo) {
    return null;
  }

  if (userInfo.message && userInfo.message === "Not Found") {
    return <span>User Not Found</span>;
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <img src={userInfo.avatar_url} alt="" />
        </div>
        <div className="col">
          <span>
            <p className="user-name">{userInfo.name}</p>
            <p>{userInfo.bio}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
