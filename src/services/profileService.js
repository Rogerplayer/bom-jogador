import storage from '../config/storage'

const STORAGE_KEY = 'nickname'
export const NICKNAME_CHANGED_EVENT = 'nickname-changed'

export async function getNickname() {
  return storage.getItem(STORAGE_KEY)
}

export async function saveNickname(nickname) {
  await storage.setItem(STORAGE_KEY, nickname)
  window.dispatchEvent(new Event(NICKNAME_CHANGED_EVENT))
}
