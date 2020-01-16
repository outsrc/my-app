import React from 'react'
import { useAuth0 } from '../lib/auth0-spa'

interface Props {}

const NavigationBar: React.FunctionComponent<Props> = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0()

  return (
    <div>
      {!loading && !isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {!loading && isAuthenticated && (
        <button onClick={() => logout()}>Log out</button>
      )}
    </div>
  )
}

export default NavigationBar
