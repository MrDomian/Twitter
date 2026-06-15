import {
  ChatIcon,
  HeartIcon,
  RefreshIcon,
  UploadIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import TimeAgo from 'react-timeago'
import { Tweet as TweetType } from '../typings'
import Comment from './Comment'

interface Props {
  tweet: TweetType
}

function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState(tweet.comments ?? [])
  const [commentOpen, setCommentOpen] = useState(false)
  const [comment, setComment] = useState('')
  const [liked, setLiked] = useState(false)
  const { data: session } = useSession()

  async function sendComment(e: React.FormEvent) {
    e.preventDefault()
    if (!comment.trim() || !session?.user) return

    const commentToSend = {
      comment,
      tweetId: tweet._id,
      username: session.user.name ?? 'Anonymous',
      profileImg: session.user.image ?? 'https://links.papareact.com/gll',
    }

    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(commentToSend),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json())
      .then((data) => {
        setComments([...comments, data])
        setComment('')
        setCommentOpen(false)
      })
  }

  return (
    <div className="flex cursor-pointer flex-col space-y-2 border-b border-gray-200 p-3 transition duration-200 hover:bg-gray-50 sm:p-5">
      <div className="flex items-center space-x-1">
        <img
          className="h-10 w-10 rounded-full"
          src={tweet.profileImg}
          alt={tweet.username}
        />
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-1">
            <h4 className="text-sm font-bold sm:text-base">{tweet.username}</h4>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, '').toLowerCase()}
            </p>
            <p className="text-sm text-gray-500">
              · <TimeAgo date={tweet._createdAt} />
            </p>
          </div>
        </div>
      </div>

      <p className="mt-1 text-sm sm:text-base">{tweet.text}</p>

      {tweet.image && (
        <img
          className="mt-2 h-48 w-full rounded-2xl object-cover sm:h-80"
          src={tweet.image}
          alt=""
        />
      )}

      <div className="flex justify-between text-gray-500">
        <div
          className="tweetButton group"
          onClick={() => session?.user ? setCommentOpen(!commentOpen) : undefined}
        >
          <ChatIcon className="h-5 w-5 group-hover:text-blue-500" />
          <span className="group-hover:text-blue-500">{comments.length}</span>
        </div>
        <div className="tweetButton group">
          <RefreshIcon className="h-5 w-5 group-hover:text-green-500" />
          <span className="group-hover:text-green-500">0</span>
        </div>
        <div
          className="tweetButton group"
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <HeartIconSolid className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 group-hover:text-red-500" />
          )}
          <span className={liked ? 'text-red-500' : 'group-hover:text-red-500'}>
            {liked ? 1 : 0}
          </span>
        </div>
        <div className="tweetButton group">
          <UploadIcon className="h-5 w-5 group-hover:text-blue-500" />
        </div>
      </div>

      {commentOpen && session?.user && (
        <form className="flex space-x-2" onSubmit={sendComment}>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Write a comment..."
            className="flex-1 rounded-full border border-gray-200 p-2 pl-4 outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="rounded-full bg-twitter px-4 py-1 font-bold text-white disabled:opacity-50"
          >
            Comment
          </button>
        </form>
      )}

      {comments.length > 0 && (
        <div className="border-t border-gray-100 pt-2">
          {comments.map((c) => (
            <Comment key={c._id} comment={c} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Tweet
