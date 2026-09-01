import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { validateApiKey, saveApiKey } from '../../services/apiKeyService'
import { useApiKey } from '../../hooks/useApiKey'
import ExternalLink from '../../components/ExternalLink/ExternalLink'
import styles from './Setup.module.css'

function Setup() {
  const [apiKey, setApiKey] = useState('')
  const [status, setStatus] = useState('idle')
  const { refresh } = useApiKey()
  const navigate = useNavigate()
  const location = useLocation()

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
