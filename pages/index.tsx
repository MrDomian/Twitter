import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { groq } from 'next-sanity'
import Feed from '../components/Feed'
import MobileNav from '../components/MobileNav'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { sanityClient } from '../sanity'
import { seedTweets } from '../lib/seedTweets'
import { Tweet } from '../typings'

interface Props {
  tweets: Tweet[]
}

const Home: NextPage<Props> = ({ tweets }) => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl xl:max-w-7xl">
      <Head>
        <title>Twitter4Fun</title>
        <meta name="description" content="Twitter clone built with Next.js and Sanity" />
        <link rel="icon" href="/twitter-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="grid grid-cols-4 sm:grid-cols-9">
        <Sidebar />
        <Feed tweets={tweets} />
        <Widgets />
      </main>

      <MobileNav />
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const query = groq`*[_type == "tweet" && !blockTweet] {
    ...,
    "comments": *[_type == "comment" && references(^._id)] | order(_createdAt asc)
  } | order(_createdAt desc)`

  const sanityTweets: Tweet[] = await sanityClient.fetch(query)

  const tweets = [...sanityTweets, ...seedTweets].sort(
    (a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  )

  return {
    props: {
      tweets,
    },
  }
}
