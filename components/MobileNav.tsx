import {
  BellIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from '@heroicons/react/outline'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

function MobileNav() {
  const { data: session } = useSession()

  return (
    <nav className="fixed bottom-0 z-50 flex w-full justify-around border-t border-gray-200 bg-white py-3 lg:hidden">
      <button className="flex flex-col items-center text-twitter">
        <HomeIcon className="h-6 w-6" />
      </button>
      <button className="flex flex-col items-center text-gray-500">
        <BellIcon className="h-6 w-6" />
      </button>
      <button className="flex flex-col items-center text-gray-500">
        <MailIcon className="h-6 w-6" />
      </button>
      <button
        className="flex flex-col items-center text-gray-500"
        onClick={() => !session?.user && signIn()}
      >
        {session?.user ? (
          <img
            className="h-6 w-6 rounded-full"
            src={session.user.image ?? 'https://links.papareact.com/gll'}
            alt=""
          />
        ) : (
          <UserIcon className="h-6 w-6" />
        )}
      </button>
    </nav>
  )
}

export default MobileNav
