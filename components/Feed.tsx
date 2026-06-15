import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { Tweet as TweetType } from '../typings'
import Tweet from './Tweet'
import TweetBox from './TweetBox'

interface Props {
  tweets: TweetType[]
}

function Feed({ tweets }: Props) {
  return (
    <div className="col-span-3 flex max-h-screen flex-col overflow-y-scroll border-x scrollbar-hide sm:col-span-5 lg:col-span-5 xl:col-span-6">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur-sm">
        <h1 className="p-4 pb-3 text-lg font-bold sm:p-5 sm:pb-0 sm:text-xl">Home</h1>
        <RefreshIcon
          className="mr-4 mt-4 h-7 w-7 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125 sm:mr-5 sm:mt-5 sm:h-8 sm:w-8"
          onClick={() => window.location.reload()}
        />
      </div>

      <TweetBox />

      <div className="pb-16 lg:pb-0">
        {tweets.map((tweet) => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
