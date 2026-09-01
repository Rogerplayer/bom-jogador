import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { validateApiKey, saveApiKey, getApiKey, clearApiKey } from '../../services/apiKeyService'
import { useApiKey } from '../../hooks/useApiKey'
import ExternalLink from '../../components/ExternalLink/ExternalLink'
import MaskedKey from '../../components/MaskedKey/MaskedKey'
import styles from './Setup.module.css'

function Setup() {
  const [currentKey, setCurrentKey] = useState(undefined)
  const [editing, setEditing] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [status, setStatus] = useState('idle')
  const { refresh } = useApiKey()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    getApiKey().then(setCurrentKey)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('checking')

    const isValid = await validateApiKey(apiKey.trim())
    if (!isValid) {
      setStatus('invalid')
      return
    }

    await saveApiKey(apiKey.trim())
    refresh()
    setStatus('valid')
    navigate(location.state?.from ?? '/', { replace: true })
  }

  async function handleRemove() {
    await clearApiKey()
    refresh()
    setCurrentKey(null)
    setEditing(true)
  }

  if (currentKey === undefined) {
    return <progress className="progress is-small is-primary" max="100" />
  }

  if (currentKey && !editing) {
    return (
      <div className={styles.screen}>
        <h1 className={styles.title}>Sua chave RAWG</h1>
        <p className={styles.description}>
          Essa chave está salva só no seu navegador (nunca em servidor nenhum).
        </p>

        <div className={styles.field}>
          <MaskedKey value={currentKey} />
        </div>

        <button className={styles.button} type="button" onClick={() => setEditing(true)}>
          Trocar chave
        </button>
        <button
          className={`${styles.button} ${styles.buttonDanger}`}
          type="button"
          onClick={handleRemove}
        >
          Remover minha chave
        </button>
      </div>
    )
  }

  return (
    <div className={styles.screen}>
      <h1 className={styles.title}>Configurar chave RAWG</h1>
      <p className={styles.description}>
        O Bom Jogador usa a{' '}
        <ExternalLink href="https://rawg.io" title="RAWG Video Games Database">
          RAWG Video Games Database
        </ExternalLink>{' '}
        pra listar e detalhar jogos. Cada pessoa usa a própria chave (gratuita) —
        ela fica salva só no seu navegador, nunca em servidor nenhum. Consiga a
        sua em{' '}
        <ExternalLink href="https://rawg.io/apidocs" title="RAWG API Docs">
          rawg.io/apidocs
        </ExternalLink>
        .
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="apiKey">
            Sua chave de API
          </label>
          <input
            id="apiKey"
            className={styles.input}
            type="text"
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
            placeholder="Cole sua chave aqui"
            autoComplete="off"
            required
          />
        </div>

        <button className={styles.button} type="submit" disabled={status === 'checking' || !apiKey.trim()}>
          {status === 'checking' ? 'Validando...' : 'Validar e salvar'}
        </button>
      </form>

      {status === 'invalid' && (
        <p className={`${styles.status} ${styles.statusError}`}>
          Chave inválida. Confira se copiou certo em rawg.io/apidocs.
        </p>
      )}
      {status === 'valid' && (
        <p className={`${styles.status} ${styles.statusOk}`}>Chave salva! Redirecionando...</p>
      )}
    </div>
  )
}

export default Setup
