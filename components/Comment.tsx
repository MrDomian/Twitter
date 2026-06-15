import React from 'react'
import TimeAgo from 'react-timeago'
import { Comment as CommentType } from '../typings'

interface Props {
  comment: CommentType
}

function Comment({ comment }: Props) {
  return (
    <div className="flex space-x-2 p-3">
      <img
        className="h-7 w-7 rounded-full"
        src={comment.profileImg}
        alt={comment.username}
      />
      <div>
        <div className="flex items-center space-x-1">
          <h4 className="text-sm font-bold">{comment.username}</h4>
          {comment._createdAt && (
            <p className="text-sm text-gray-500">
              <TimeAgo date={comment._createdAt} />
            </p>
          )}
        </div>
        <p className="text-sm">{comment.comment}</p>
      </div>
    </div>
  )
}

export default Comment
