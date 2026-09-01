import { Link } from 'react-router-dom'
import ExternalLink from '../ExternalLink/ExternalLink'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={`footer ${styles.footer}`}>
      <div className={styles.lines}>
        <p>
          <strong>Bom Jogador</strong> é um projeto de estudo que roda
          totalmente no seu navegador, sem servidor próprio.
        </p>
        <p>
          Dados e imagens dos jogos fornecidos pela{' '}
          <ExternalLink
            href="https://rawg.io"
            title="RAWG — banco de dados aberto de jogos, usado como fonte deste catálogo"
          >
            RAWG
          </ExternalLink>
          {' · '}Feito por{' '}
          <ExternalLink
            href="https://github.com/Rogerplayer"
            title="Perfil de Roger Caetano no GitHub"
          >
            Roger Caetano
          </ExternalLink>
        </p>
        <p className={styles.legalLinks}>
          <Link to="/sobre">Sobre</Link>
          {' · '}
          <Link to="/manual">Manual</Link>
          {' · '}
          <Link to="/termos">Termos de Uso</Link>
          {' · '}
          <Link to="/setup">Configurar chave</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
