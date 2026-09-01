import { useParams, Link } from 'react-router-dom'
import { useGameDetails } from '../../hooks/useGameDetails'
import styles from './GameDetails.module.css'

function GameDetails() {
  const { id } = useParams()
  return <GameDetailsScreen key={id} id={id} />
}

function GameDetailsScreen({ id }) {
  const { game, loading, error } = useGameDetails(id)

  if (loading) return <progress className="progress is-small is-primary" max="100" />
  if (error) return <div className="notification is-danger">{error}</div>
  if (!game) return null

  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <Link className={styles.backLink} to="/">
          ‹ Voltar
        </Link>

        <div className={styles.layout}>
          {game.background_image && (
            <img className={styles.cover} src={game.background_image} alt={game.name} />
          )}

          <div className={styles.info}>
            <h1 className={styles.title}>{game.name}</h1>

            <div className={styles.metaRow}>
              <span>★ {game.rating}</span>
              {game.released && <span>{game.released}</span>}
            </div>

            {game.genres?.length > 0 && (
              <div className={styles.tags}>
                {game.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
            )}

            {game.description_raw && (
              <p className={styles.description}>{game.description_raw}</p>
            )}

            <div className={styles.actions}>
              <button disabled title="Em breve — favoritos ainda não implementados">
                ☆ Favoritar
              </button>
              <button disabled title="Em breve — &quot;estou jogando&quot; ainda não implementado">
                ▶ Estou jogando
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetails
