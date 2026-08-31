import localforage from 'localforage'

const storage = localforage.createInstance({
  name: 'bom-jogador',
})

export default storage
