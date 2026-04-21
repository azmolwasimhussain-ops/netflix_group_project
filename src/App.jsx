import './index.css'
import Navbar  from './components/Navbar'
import Banner  from './components/Banner'
import Row     from './components/Row'
import Footer  from './components/Footer'

// ---------- Mock movie data (replace with real TMDB API calls) ----------
const TRENDING = [
  { id: 1,  title: 'Oppenheimer',       backdrop_path: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg', vote_average: 8.1 },
  { id: 2,  title: 'Barbie',            backdrop_path: '/iuFNMS8vlbCGLALnjUUJ5TUnWCA.jpg', vote_average: 7.1 },
  { id: 3,  title: 'The Dark Knight',   backdrop_path: '/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg', vote_average: 9.0 },
  { id: 4,  title: 'Inception',         backdrop_path: '/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg', vote_average: 8.4 },
  { id: 5,  title: 'Interstellar',      backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg', vote_average: 8.4 },
  { id: 6,  title: 'Dune',             backdrop_path: '/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg', vote_average: 7.8 },
  { id: 7,  title: 'Avatar 2',          backdrop_path: '/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg', vote_average: 7.6 },
  { id: 8,  title: 'Top Gun: Maverick', backdrop_path: '/AkB4w9GxVmR5RjMNIzznBY22vPR.jpg', vote_average: 8.3 },
]

const NETFLIX_ORIGINALS = [
  { id: 10, name: 'Stranger Things', poster_path: '/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', vote_average: 8.7 },
  { id: 11, name: 'Wednesday',        poster_path: '/jeGtaMwGxPmQN5xM4ClnwPQcNQG.jpg', vote_average: 8.1 },
  { id: 12, name: 'Squid Game',       poster_path: '/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg', vote_average: 7.9 },
  { id: 13, name: 'Money Heist',      poster_path: '/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', vote_average: 8.3 },
  { id: 14, name: 'Ozark',            poster_path: '/pCh8Oh7GdMUbt8An3RWaMxMLWiy.jpg', vote_average: 8.4 },
  { id: 15, name: 'Narcos',           poster_path: '/rTiSPsl0iqNJk8RuoPbv9wEkHWz.jpg', vote_average: 8.8 },
  { id: 16, name: 'Dark',             poster_path: '/apbrbWs5wheR0CCFrCe8mJnQBua.jpg', vote_average: 8.8 },
]

const TOP_RATED = [
  { id: 20, title: 'Breaking Bad',    backdrop_path: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', vote_average: 9.5 },
  { id: 21, title: 'The Wire',        backdrop_path: '/dg7NuKDVqrXiMNdh3rRLPCObGKU.jpg', vote_average: 9.3 },
  { id: 22, title: 'Chernobyl',       backdrop_path: '/y0gmR8UiWZ2aGDGLToqBrCJfA45.jpg', vote_average: 9.4 },
  { id: 23, title: 'Game of Thrones', backdrop_path: '/qsD5OHqW7DSnaQ2afwz8Ptof8AZ.jpg', vote_average: 9.2 },
  { id: 24, title: 'The Boys',        backdrop_path: '/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg', vote_average: 8.7 },
  { id: 25, title: 'Peaky Blinders',  backdrop_path: '/wiE9doxiLwq3WgFmh3uGzbMiwEC.jpg', vote_average: 8.8 },
]

const ACTION    = [
  { id: 31, title: 'Mad Max: Fury Road', backdrop_path: '/phszHPFHEZBCy0u11JJpOPFdYJR.jpg', vote_average: 7.8 },
  { id: 32, title: 'John Wick',           backdrop_path: '/fZPSd91AGnXWy7HFKLhfxqEZOBL.jpg', vote_average: 7.4 },
  { id: 33, title: 'Mission Impossible',  backdrop_path: '/AkB4w9GxVmR5RjMNIzznBY22vPR.jpg', vote_average: 7.6 },
  { id: 34, title: 'Fast X',              backdrop_path: '/1E5baAaEse26fej7uHcjOgEE2t2.jpg', vote_average: 7.0 },
  { id: 35, title: 'Extraction',          backdrop_path: '/1R6cvRtZgsYCkh8UFuWFN33xBP6.jpg', vote_average: 7.4 },
]

const TMDB_BASE = 'https://image.tmdb.org/t/p/w300'
// Attach full backdrop path
const withBase = (arr) =>
  arr.map((m) => ({
    ...m,
    backdrop_path: m.backdrop_path ? TMDB_BASE + m.backdrop_path : null,
    poster_path:   m.poster_path   ? TMDB_BASE + m.poster_path   : null,
  }))

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--netflix-bg)] font-netflix">
      <Navbar />
      <main>
        <Banner />
        <div className="relative z-10 -mt-16 pb-4">
          <Row title="Trending Now"      movies={withBase(TRENDING)}           />
          <Row title="Netflix Originals" movies={withBase(NETFLIX_ORIGINALS)}  isLarge />
          <Row title="Top Rated"         movies={withBase(TOP_RATED)}           />
          <Row title="Action & Adventure" movies={withBase(ACTION)}            />
        </div>
      </main>
      <Footer />
    </div>
  )
}
