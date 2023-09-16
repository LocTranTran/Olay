import React from 'react';

const UserInfo = ({ username }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>Username: {username}</p>
      {/* Other user information */}
    </div>
  );
};

export default UserInfo;