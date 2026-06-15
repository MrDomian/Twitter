import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { text, username, profileImg, image } = req.body

  try {
    const result = await sanityClient.create({
      _type: 'tweet',
      text,
      username,
      profileImg,
      image: image || null,
    })

    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to create tweet' })
  }
}
