import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getApiKey } from '../../services/apiKeyService'
import { getNickname, saveNickname } from '../../services/profileService'
import MaskedKey from '../../components/MaskedKey/MaskedKey'
import ExternalLink from '../../components/ExternalLink/ExternalLink'
import styles from './Profile.module.css'

function Profile() {
  const [apiKey, setApiKey] = useState(undefined)
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    getApiKey().then(setApiKey)
    getNickname().then((value) => setNickname(value ?? ''))
  }, [])

  function handleNicknameBlur() {
    saveNickname(nickname.trim())
  }

  if (apiKey === undefined) {
    return <progress className="progress is-small is-primary" max="100" />
  }

  return (
    <div className={styles.screen}>
      <h1 className={styles.title}>Perfil</h1>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="nickname">
          Nickname
        </label>
        <input
          id="nickname"
          className={styles.input}
          type="text"
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          onBlur={handleNicknameBlur}
          placeholder="Como quer ser chamado por aqui"
        />
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Sua chave RAWG</span>
        <MaskedKey value={apiKey} />
      </div>

      <p className={styles.note}>
        A RAWG não tem um endpoint público de "meu perfil" vinculado à chave —
        dados de uso e conta ficam só no{' '}
        <ExternalLink href="https://rawg.io/apidocs" title="Painel RAWG">
          painel do rawg.io
        </ExternalLink>
        . Aqui é só o que fica salvo localmente no seu navegador.
      </p>

      <Link className={styles.link} to="/setup">
        ‹ Gerenciar chave
      </Link>
    </div>
  )
}

export default Profile
