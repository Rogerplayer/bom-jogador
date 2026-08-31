function GameCard({ game }) {
  return (
    <div className="column is-3">
      <div className="card game-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={game.background_image} alt={game.name} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-5">{game.name}</p>
          <p className="subtitle is-6">⭐ {game.rating}</p>
        </div>
      </div>
    </div>
  )
}

export default GameCard
