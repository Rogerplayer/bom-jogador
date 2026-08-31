import storage from '../config/storage'
import { RAWG_BASE_URL } from '../config/rawg'

const STORAGE_KEY = 'rawgApiKey'

export async function validateApiKey(apiKey) {
  const url = `${RAWG_BASE_URL}/games?key=${encodeURIComponent(apiKey)}&page_size=1`
  const response = await fetch(url)
  return response.ok
}

export async function saveApiKey(apiKey) {
  await storage.setItem(STORAGE_KEY, apiKey)
}

export async function getApiKey() {
  const storedKey = await storage.getItem(STORAGE_KEY)
  if (storedKey) return storedKey

  if (import.meta.env.DEV && import.meta.env.VITE_RAWG_DEV_API_KEY) {
    return import.meta.env.VITE_RAWG_DEV_API_KEY
  }

  return null
}

export async function clearApiKey() {
  await storage.removeItem(STORAGE_KEY)
}
