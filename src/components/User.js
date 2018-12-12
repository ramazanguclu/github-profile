import React from 'react';

const User = ({ userInfo }) => {
  return (
    <div>
      {userInfo && (              
        <div className="row">
            <div className="col">
                <img src={userInfo.avatar_url} alt="" className=""/>
            </div>
            <div className="col">
                <span>
                    <p className="user-name">{userInfo.name}</p>
                    <p>{userInfo.bio}</p> 
                </span>
            </div>
        </div>
      )}
    </div>
  );
};

export default User;
