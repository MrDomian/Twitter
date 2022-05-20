import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import React from 'react'

function Widgets() {
  return (
    <div className="px-2 mt-2">
        {/* Search */}
        <div className="mt-2 flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search Twitter" className="flex-1 bg-transparent outline-none" />
        </div>

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="saurabhnemade"
            options={{height: 400}}
        />
    </div>
  )
}

export default Widgets