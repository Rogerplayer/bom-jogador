import storage from '../config/storage'

const STORAGE_KEY = 'nickname'

export async function getNickname() {
  return storage.getItem(STORAGE_KEY)
}

export async function saveNickname(nickname) {
  await storage.setItem(STORAGE_KEY, nickname)
}
