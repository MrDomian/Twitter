import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import type { CommentBody } from '../../typings'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { comment, username, profileImg, tweetId } = req.body as CommentBody

  try {
    const result = await sanityClient.create({
      _type: 'comment',
      comment,
      username,
      profileImg,
      tweet: {
        _type: 'reference',
        _ref: tweetId,
      },
    })

    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to create comment' })
  }
}
