import { usePopularGames } from '../../hooks/usePopularGames'
import GameCard from '../../components/GameCard/GameCard'
import ExternalLink from '../../components/ExternalLink/ExternalLink'
import styles from './Home.module.css'

function Home() {
  const { games, loading, error } = usePopularGames()

  return (
    <>
      <h1 className={`title ${styles.title}`}>Jogos populares</h1>
      <p className={`subtitle ${styles.subtitle}`}>
        Ordenados pela quantidade de usuários que adicionaram cada jogo à
        própria biblioteca na{' '}
        <ExternalLink
          href="https://rawg.io"
          title="RAWG — banco de dados aberto de jogos"
        >
          RAWG
        </ExternalLink>
      </p>

      {loading && <progress className="progress is-small is-primary" max="100" />}
      {error && <div className="notification is-danger">{error}</div>}

      {!loading && !error && (
        <div className="columns is-mobile is-multiline">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </>
  )
}

export default Home
