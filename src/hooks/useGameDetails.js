import { useEffect, useState } from 'react'
import { getGameDetails } from '../services/gamesService'

export function useGameDetails(id) {
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    getGameDetails(id)
      .then((result) => {
        if (!cancelled) setGame(result)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [id])

  return { game, loading, error }
}
