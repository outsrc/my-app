import * as React from 'react'
import { NextPage } from 'next'
import { useAuth0 } from '../lib/auth0-spa'
import NavigationBar from '../components/NavigationBar'
import Link from 'next/link'

interface Props {}

const Page: NextPage<Props> = () => {
  const { user } = useAuth0()

  return (
    <div>
      <h1>Initial Page</h1>

      <div>
        {user && (
          <div>
            {user.nickname}{' '}
            <Link href='/dashboard'>
              <a>Dashboard</a>
            </Link>
          </div>
        )}

        <NavigationBar />
      </div>
    </div>
  )
}

export default Page
