import { usePopularGames } from '../hooks/usePopularGames'
import GameCard from '../components/GameCard'

function Home() {
  const { games, loading, error } = usePopularGames()

  return (
    <>
      <h1 className="title">Jogos populares</h1>
      <p className="subtitle">Os mais bem avaliados pela comunidade</p>

      {loading && <progress className="progress is-small is-primary" max="100" />}
      {error && <div className="notification is-danger">{error}</div>}

      {!loading && !error && (
        <div className="columns is-multiline">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </>
  )
}

export default Home
