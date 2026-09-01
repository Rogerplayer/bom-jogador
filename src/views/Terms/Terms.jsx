import ExternalLink from '../../components/ExternalLink/ExternalLink'
import { DocPage, DocSection } from '../../components/DocPage/DocPage'

function Terms() {
  return (
    <DocPage title="Termos de Uso">
      <DocSection heading="Sobre este documento">
        <p>
          O Bom Jogador é um projeto acadêmico, sem fins comerciais, feito
          para a disciplina de Arquitetura de Front End (pós-graduação em
          Arquitetura de Software Distribuído). Este texto explica,
          de forma simples, como usamos os dados da RAWG e por que cada
          pessoa usa sua própria chave de API — não é um contrato legal
          formal.
        </p>
      </DocSection>

      <DocSection heading="Uso dos dados da RAWG">
        <p>
          Todos os dados de jogos (nomes, notas, gêneros, imagens, datas de
          lançamento) vêm da{' '}
          <ExternalLink href="https://rawg.io" title="RAWG Video Games Database">
            RAWG Video Games Database
          </ExternalLink>
          . Não hospedamos, não copiamos pra um banco próprio e não revendemos
          esses dados — cada tela busca as informações diretamente na API da
          RAWG em tempo real.
        </p>
        <p>
          Os termos de uso da RAWG exigem que qualquer aplicação que use a
          API dela dê crédito com um link ativo de volta pro rawg.io em toda
          página onde os dados aparecem. É por isso que o rodapé e a página
          Sobre sempre têm um link pra RAWG — não é só cortesia, é uma
          condição de uso do plano gratuito da API deles. Os termos completos
          estão em{' '}
          <ExternalLink href="https://rawg.io/tos_api" title="Termos de Uso da API RAWG">
            rawg.io/tos_api
          </ExternalLink>
          .
        </p>
      </DocSection>

      <DocSection heading="Por que cada pessoa usa sua própria chave">
        <p>
          Em vez de uma única chave de API compartilhada por todo mundo que
          usa o app, cada pessoa fornece sua própria chave RAWG (gratuita,
          obtida em rawg.io/apidocs). Os motivos:
        </p>
        <p>
          <strong>Limite de uso justo</strong> — o plano gratuito da RAWG tem
          um limite de chamadas por chave. Uma chave compartilhada entre
          todos os usuários do app esgotaria rapidinho e derrubaria o app
          pra todo mundo.
        </p>
        <p>
          <strong>Transparência</strong> — como o app não tem servidor
          próprio, não existe lugar nenhum pra "esconder" uma chave
          compartilhada de forma segura no código; qualquer chave embutida no
          front-end ficaria visível pra qualquer pessoa que abrisse o
          navegador.
        </p>
        <p>
          <strong>Controle</strong> — sua chave fica salva só no seu
          navegador (nunca em um servidor nosso, porque ele não existe) e é
          usada apenas para chamadas diretas à API da RAWG.
        </p>
      </DocSection>

      <DocSection heading="Sem garantias">
        <p>
          Este é um projeto de estudo. Não há garantia de disponibilidade,
          suporte ou continuidade — é software fornecido "como está", sem
          fins comerciais.
        </p>
      </DocSection>
    </DocPage>
  )
}

export default Terms
