export interface Tweet {
  _id: string
  text: string
  username: string
  profileImg: string
  image?: string
  _createdAt: string
  comments?: Comment[]
}

export interface Comment {
  _id: string
  comment: string
  username: string
  profileImg: string
  _createdAt?: string
}

export interface CommentBody {
  comment: string
  tweetId: string
  username: string
  profileImg: string
}
