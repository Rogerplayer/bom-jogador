import { useCallback, useEffect, useState } from 'react'
import { getApiKey } from '../services/apiKeyService'

export function useApiKey() {
  const [hasKey, setHasKey] = useState(null)

  const refresh = useCallback(() => {
    getApiKey().then((key) => setHasKey(Boolean(key)))
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { hasKey, refresh }
}
