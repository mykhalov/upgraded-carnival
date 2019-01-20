import React from 'react'

const UserCard = ({ user }) =>
  user ? (
    <p>
      <div>
        <strong>{user.name}</strong>
      </div>
      <div>{user.location}</div>
      <div>{user.followers} follower(s)</div>
    </p>
  ) : null

export default UserCard
