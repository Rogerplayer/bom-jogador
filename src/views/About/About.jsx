import { Link } from 'react-router-dom'
import ExternalLink from '../../components/ExternalLink/ExternalLink'
import { DocPage, DocSection } from '../../components/DocPage/DocPage'
import styles from '../../components/DocPage/DocPage.module.css'

function About() {
  return (
    <DocPage title='Sobre o "Bom Jogador"'>
      <DocSection heading="O projeto">
        <p>
          Bom Jogador é um projeto pessoal de estudo, aplicando os conceitos
          aprendidos na disciplina de Arquitetura de Front End, do curso de
          pós-graduação em Arquitetura de Software Distribuído. O exercício
          proposto em aula era listar filmes populares e seus detalhes usando
          uma API gratuita. A ideia aqui foi ir além: trocar filmes por{' '}
          <strong>jogos de videogame</strong>, usando a API da RAWG, e somar
          funcionalidades como marcar jogos como favoritos e "estou jogando".
        </p>
        <p>
          É um projeto <strong>no-backend</strong>: tudo roda direto no seu
          navegador, sem servidor próprio. Sua chave de API da RAWG nunca é
          enviada a lugar nenhum além da própria RAWG.
        </p>
      </DocSection>

      <DocSection heading="Arquitetura em camadas">
        <p>
          O código é organizado por responsabilidade, não por feature, com um
          fluxo de dependência único: <code>views → hooks → services → config</code>.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.stackTable}>
            <thead>
              <tr>
                <th>Camada</th>
                <th>Responsabilidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>components</td>
                <td>UI reutilizável e apresentacional, sem regra de negócio</td>
              </tr>
              <tr>
                <td>views</td>
                <td>Telas ligadas a rotas; orquestram components, hooks e services</td>
              </tr>
              <tr>
                <td>hooks</td>
                <td>Lógica de estado/efeito reutilizável</td>
              </tr>
              <tr>
                <td>services</td>
                <td>Comunicação externa: chamadas à API RAWG e storage local</td>
              </tr>
              <tr>
                <td>config</td>
                <td>Constantes e configuração da aplicação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection heading="Stack">
        <div className={styles.pillList}>
          <span>React 19</span>
          <span>Vite 8</span>
          <span>react-router-dom</span>
          <span>Bulma</span>
          <span>localForage</span>
          <span>RAWG API</span>
        </div>
      </DocSection>

      <DocSection heading="O que vem por aí">
        <ul className={styles.roadmap}>
          <li>Favoritar jogos e marcar "estou jogando", salvo no seu navegador</li>
          <li>Busca de jogos por nome</li>
          <li>Exportar e importar seus dados em um arquivo .json</li>
        </ul>
      </DocSection>

      <DocSection heading="Créditos">
        <p className={styles.credits}>
          Dados e imagens dos jogos fornecidos pela{' '}
          <ExternalLink
            href="https://rawg.io"
            title="RAWG — banco de dados aberto de jogos, usado como fonte deste catálogo"
          >
            RAWG
          </ExternalLink>
          . Feito por{' '}
          <ExternalLink
            href="https://github.com/Rogerplayer"
            title="Perfil de Roger Caetano no GitHub"
          >
            Roger Caetano
          </ExternalLink>
          . Veja também os <Link to="/termos">Termos de Uso</Link> e o{' '}
          <Link to="/manual">Manual</Link>.
        </p>
        <p className={styles.credits}>
          Código-fonte no{' '}
          <ExternalLink
            href="https://github.com/Rogerplayer/bom-jogador"
            title="Repositório do Bom Jogador no GitHub"
          >
            github.com/Rogerplayer/bom-jogador
          </ExternalLink>
          .
        </p>
      </DocSection>
    </DocPage>
  )
}

export default About
