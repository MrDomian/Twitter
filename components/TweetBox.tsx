import { signIn, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'

function TweetBox() {
  const [input, setInput] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  async function sendTweet(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || !session?.user) return

    setLoading(true)

    const tweet = {
      text: input,
      username: session.user.name ?? 'Anonymous',
      profileImg: session.user.image ?? 'https://links.papareact.com/gll',
    }

    await fetch('/api/createTweet', {
      method: 'POST',
      body: JSON.stringify(tweet),
      headers: { 'Content-Type': 'application/json' },
    })

    setInput('')
    setLoading(false)
    window.location.reload()
  }

  return (
    <div className="border-b border-gray-200 p-3 sm:p-5">
      {session?.user ? (
        <div className="flex space-x-2 sm:space-x-3">
          <img
            className="mt-2 h-10 w-10 rounded-full object-cover sm:mt-4 sm:h-14 sm:w-14"
            src={session.user.image ?? 'https://links.papareact.com/gll'}
            alt=""
          />
          <div className="flex flex-1 items-center pl-1 sm:pl-2">
            <form className="flex flex-1 flex-col" onSubmit={sendTweet}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="What's up?"
                className="h-16 w-full text-lg outline-none placeholder:text-lg sm:h-24 sm:text-xl sm:placeholder:text-xl"
              />
              <div className="flex items-center pt-2">
                <div className="flex flex-1 space-x-2 text-twitter">
                  <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                  <SearchCircleIcon className="hidden h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 sm:block" />
                  <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                  <CalendarIcon className="hidden h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 sm:block" />
                  <LocationMarkerIcon className="hidden h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 sm:block" />
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="rounded-full bg-twitter px-4 py-1.5 text-sm font-bold text-white disabled:opacity-50 sm:px-5 sm:py-2 sm:text-base"
                >
                  {loading ? '...' : 'Tweet'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="rounded-xl bg-gray-50 p-4 text-center sm:p-6">
          <p className="mb-3 text-sm text-gray-600 sm:text-base">
            Zaloguj się, aby napisać tweeta
          </p>
          <button
            onClick={() => signIn()}
            className="rounded-full bg-twitter px-6 py-2 font-bold text-white"
          >
            Zaloguj się
          </button>
        </div>
      )}
    </div>
  )
}

export default TweetBox
