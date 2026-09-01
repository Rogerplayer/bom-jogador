import { useState } from 'react'
import styles from './MaskedKey.module.css'

function mask(value) {
  if (value.length <= 4) return '•'.repeat(value.length)
  return '•'.repeat(value.length - 4) + value.slice(-4)
}

function MaskedKey({ value }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.row}>
      <span className={styles.value}>{visible ? value : mask(value)}</span>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? 'Ocultar chave' : 'Mostrar chave'}
        title={visible ? 'Ocultar chave' : 'Mostrar chave'}
      >
        {visible ? '🙈' : '👁️'}
      </button>
    </div>
  )
}

export default MaskedKey
