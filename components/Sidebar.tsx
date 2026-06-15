import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import SidebarRow from './SidebarRow'

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="col-span-1 flex flex-col items-center px-2 sm:col-span-2 sm:px-4 md:items-start">
      <img
        className="m-3 h-8 w-8 cursor-pointer sm:h-10 sm:w-10"
        src="/twitter-logo.svg"
        alt="Twitter logo"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow
        Icon={UserIcon}
        title={session?.user ? 'Sign Out' : 'Sign In'}
        onClick={session?.user ? () => signOut() : () => signIn()}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />

      {session?.user && (
        <div className="mt-4 hidden w-full items-center justify-between rounded-full p-3 hover:bg-gray-100 lg:flex">
          <img
            className="h-10 w-10 rounded-full"
            src={session.user.image ?? 'https://links.papareact.com/gll'}
            alt=""
          />
          <div className="hidden xl:inline">
            <h4 className="text-sm font-bold">{session.user.name}</h4>
            <p className="text-sm text-gray-500">@{session.user.name?.replace(/\s+/g, '').toLowerCase()}</p>
          </div>
        </div>
      )}

      <button
        className="tweetButton mt-4 hidden lg:inline"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Tweet
      </button>
    </div>
  )
}

export default Sidebar
