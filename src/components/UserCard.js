import React from 'react'

const UserCard = ({ user }) =>
  user ? (
    <div>
      <div>{user.name}</div>
      <div>{user.location}</div>
      <div>{user.followers} follower(s)</div>
    </div>
  ) : null

export default UserCard
