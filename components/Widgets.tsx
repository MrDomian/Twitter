import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const trends = [
  {
    category: 'Technologia · Trending',
    title: '#NextJS',
    posts: '12,4 tys. postów',
  },
  {
    category: 'Polska · Trending',
    title: 'Sanity CMS',
    posts: '8 291 postów',
  },
  {
    category: 'Programowanie',
    title: 'Tailwind CSS',
    posts: '45,2 tys. postów',
  },
  {
    category: 'Trending',
    title: '#TypeScript',
    posts: '22,7 tys. postów',
  },
  {
    category: 'Dev · Trending',
    title: 'Vercel',
    posts: '5 103 posty',
  },
]

const suggestions = [
  {
    name: 'React Polska',
    handle: 'reactpolska',
    img: 'https://i.pravatar.cc/150?u=react-polska',
  },
  {
    name: 'Frontend Weekly',
    handle: 'frontendweekly',
    img: 'https://i.pravatar.cc/150?u=frontend-weekly',
  },
  {
    name: 'AI News PL',
    handle: 'ainewspl',
    img: 'https://i.pravatar.cc/150?u=ai-news-pl',
  },
]

function Widgets() {
  return (
    <div className="col-span-2 hidden min-w-0 pr-4 lg:block">
      <div className="sticky top-2 w-full space-y-4">
        <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="min-w-0 flex-1 bg-transparent outline-none"
          />
        </div>

        <div className="w-full rounded-2xl bg-gray-50">
          <h2 className="px-4 py-3 text-xl font-bold">Co się dzieje</h2>
          {trends.map((trend) => (
            <div
              key={trend.title}
              className="cursor-pointer px-4 py-3 transition hover:bg-gray-100"
            >
              <p className="truncate text-xs text-gray-500">{trend.category}</p>
              <p className="truncate font-bold">{trend.title}</p>
              <p className="truncate text-xs text-gray-500">{trend.posts}</p>
            </div>
          ))}
          <button className="w-full px-4 py-3 text-left text-sm text-twitter hover:bg-gray-100">
            Pokaż więcej
          </button>
        </div>

        <div className="w-full rounded-2xl bg-gray-50">
          <h2 className="px-4 py-3 text-xl font-bold">Kogo obserwować</h2>
          {suggestions.map((user) => (
            <div
              key={user.handle}
              className="flex items-center justify-between gap-2 px-4 py-3 hover:bg-gray-100"
            >
              <div className="flex min-w-0 items-center space-x-3">
                <img
                  className="h-10 w-10 shrink-0 rounded-full"
                  src={user.img}
                  alt={user.name}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{user.name}</p>
                  <p className="truncate text-sm text-gray-500">@{user.handle}</p>
                </div>
              </div>
              <button className="shrink-0 rounded-full bg-black px-3 py-1.5 text-xs font-bold text-white hover:bg-gray-800">
                Obserwuj
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs leading-relaxed text-gray-400">
          Trendy są generowane lokalnie — embed Twitter/X nie jest już dostępny publicznie.
        </p>
      </div>
    </div>
  )
}

export default Widgets
