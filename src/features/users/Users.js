import React from "react";
// add any needed imports here
import { useSelector } from 'react-redux'

function Users() {
  // add code here
  const users = useSelector(state => state.users)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {
          users.map((user, index) => <li key={index}>
            username: {user.username}
            hometown: {user.hometown}
            </li>)
        }
        {/* In addition, display the total number of users curently in the store */}
        <p>Total Users: {users.length}</p>
      </ul>
    </div>
  );
}

export default Users;
