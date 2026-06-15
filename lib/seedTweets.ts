import { Tweet } from '../typings'

const hoursAgo = (hours: number) =>
  new Date(Date.now() - hours * 60 * 60 * 1000).toISOString()

export const seedTweets: Tweet[] = [
  {
    _id: 'seed-1',
    username: 'Jan Kowalski',
    profileImg: 'https://i.pravatar.cc/150?u=jan-kowalski',
    text: 'Pierwszy dzień z Next.js i Sanity CMS — projekt leci szybciej niż myślałem! 🚀',
    _createdAt: hoursAgo(1),
    comments: [
      {
        _id: 'seed-c1',
        username: 'Anna Nowak',
        profileImg: 'https://i.pravatar.cc/150?u=anna-nowak',
        comment: 'Super, powodzenia z deployem!',
        _createdAt: hoursAgo(0.5),
      },
    ],
  },
  {
    _id: 'seed-2',
    username: 'Tech Polska',
    profileImg: 'https://i.pravatar.cc/150?u=tech-polska',
    text: 'Tailwind CSS + React to combo, którego nie oddam za nic. Responsywność w 15 minut? Tak, proszę.',
    image: 'https://picsum.photos/seed/twitter1/800/400',
    _createdAt: hoursAgo(3),
    comments: [],
  },
  {
    _id: 'seed-3',
    username: 'DevGirl',
    profileImg: 'https://i.pravatar.cc/150?u=devgirl',
    text: 'Kto jeszcze debuguje o 2 w nocy? ☕ TypeScript ratuje mi życie po raz setny.',
    _createdAt: hoursAgo(5),
    comments: [
      {
        _id: 'seed-c2',
        username: 'Piotr Dev',
        profileImg: 'https://i.pravatar.cc/150?u=piotr-dev',
        comment: 'Ja i mój terminal — nierozłączna para.',
        _createdAt: hoursAgo(4),
      },
    ],
  },
  {
    _id: 'seed-4',
    username: 'Open Source PL',
    profileImg: 'https://i.pravatar.cc/150?u=opensource-pl',
    text: 'Nowa wersja biblioteki wyszła! Changelog, testy, dokumentacja — wszystko na miejscu. Sprawdźcie na GitHubie.',
    _createdAt: hoursAgo(8),
    comments: [],
  },
  {
    _id: 'seed-5',
    username: 'Maria UX',
    profileImg: 'https://i.pravatar.cc/150?u=maria-ux',
    text: 'Mobile-first to nie opcja, to obowiązek. Właśnie testuję layout na iPhone SE — wygląda świetnie 📱',
    _createdAt: hoursAgo(12),
    comments: [],
  },
  {
    _id: 'seed-6',
    username: 'Kuba Fullstack',
    profileImg: 'https://i.pravatar.cc/150?u=kuba-fullstack',
    text: 'Vercel deploy w 30 sekund. Pamiętam czasy FTP i ręcznego wrzucania plików... nie tęsknię.',
    _createdAt: hoursAgo(18),
    comments: [],
  },
]

export function isSeedTweet(id: string) {
  return id.startsWith('seed-')
}
