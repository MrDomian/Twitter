import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import React from 'react'

function Widgets() {
  return (
    <div className="mt-2 hidden px-2 lg:col-span-2 lg:inline xl:col-span-1">
      <div className="sticky top-2">
        <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
          <SearchIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="flex-1 bg-transparent outline-none"
          />
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="si_org_pl"
            options={{ height: 700, width: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Widgets
