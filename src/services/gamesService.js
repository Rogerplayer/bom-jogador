import { RAWG_BASE_URL } from '../config/rawg'
import { getApiKey } from './apiKeyService'

export async function getPopularGames() {
  const apiKey = await getApiKey()
  if (!apiKey) {
    throw new Error('Nenhuma chave de API da RAWG configurada')
  }

  const url = `${RAWG_BASE_URL}/games?key=${encodeURIComponent(apiKey)}&ordering=-added&page_size=20`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Falha ao buscar jogos populares (status ${response.status})`)
  }

  const data = await response.json()
  return data.results
}

export async function getGameDetails(id) {
  const apiKey = await getApiKey()
  if (!apiKey) {
    throw new Error('Nenhuma chave de API da RAWG configurada')
  }

  const url = `${RAWG_BASE_URL}/games/${id}?key=${encodeURIComponent(apiKey)}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Falha ao buscar detalhes do jogo (status ${response.status})`)
  }

  return response.json()
}
