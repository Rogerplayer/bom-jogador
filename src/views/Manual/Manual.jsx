import { Link } from 'react-router-dom'
import ExternalLink from '../../components/ExternalLink/ExternalLink'
import { DocPage, DocSection } from '../../components/DocPage/DocPage'
import styles from '../../components/DocPage/DocPage.module.css'

function Manual() {
  return (
    <DocPage title="Manual de Uso">
      <DocSection heading="1. Consiga sua chave RAWG">
        <p>
          Acesse{' '}
          <ExternalLink href="https://rawg.io/apidocs" title="RAWG API Docs">
            rawg.io/apidocs
          </ExternalLink>
          , crie uma conta gratuita e copie sua API key pessoal. É a mesma
          chave usada em qualquer app que consuma a RAWG.
        </p>
      </DocSection>

      <DocSection heading="2. Configure a chave no app">
        <p>
          A tela onde você vai colar sua chave direto na interface ainda está
          em construção (veja o roadmap na página <Link to="/sobre">Sobre</Link>
          ). Por enquanto, quem está rodando o projeto localmente para
          desenvolvimento pode usar a própria chave via variável de ambiente
          — instruções no README do projeto.
        </p>
      </DocSection>

      <DocSection heading="3. Navegue pelos jogos populares">
        <p>
          A tela inicial ("Populares") já lista os jogos mais adicionados à
          biblioteca de usuários da RAWG. Clique em qualquer card pra abrir
          os detalhes: descrição, nota, gêneros e data de lançamento.
        </p>
      </DocSection>

      <DocSection heading="O que ainda está em construção">
        <ul className={styles.roadmap}>
          <li>Buscar jogos por nome</li>
          <li>Marcar jogos como favoritos</li>
          <li>Marcar jogos como "estou jogando"</li>
          <li>Exportar e importar seus dados em um arquivo .json</li>
        </ul>
      </DocSection>
    </DocPage>
  )
}

export default Manual
