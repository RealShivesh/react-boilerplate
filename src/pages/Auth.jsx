import React from 'react'

const Auth = () => {
  return (
    <div>
      <h1>Login or Signup</h1>
      <form action="" method="post">
        <label>
          Username
          <input type="text" name="password" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Auth
