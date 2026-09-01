import { Link } from 'react-router-dom'
import styles from './GameCard.module.css'

function GameCard({ game }) {
  return (
    <div className={`column is-6-mobile is-4-tablet ${styles.column}`}>
      <Link to={`/games/${game.id}`} className={`card ${styles.card}`}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={game.background_image} alt={game.name} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-5">{game.name}</p>
          <p className="subtitle is-6">⭐ {game.rating}</p>
        </div>
      </Link>
    </div>
  )
}

export default GameCard
