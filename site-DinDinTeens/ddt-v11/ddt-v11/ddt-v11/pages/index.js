import Header from '../components/Header'
import Rodape from '../components/Rodape'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Login from '../components/Login'
import { useSession, getSession } from "next-auth/react"


export default function index() {
  const { data: session, status} = useSession()

  // if (status === 'unauthenticated') {
  //   return (
  //     <div>
  //       <h1>Acesso não autorizado</h1>
  //       <Login />
  //     </div>
  //   )
  // }

  return (
    <>
      <div>
        
      </div>

      <div>
        <Head>
          <title>DinDinTeens - Finanças no controle, sonhos em ação</title>
        </Head>
        <Header />
        {/* Botões */}
        <div className="container">
          <div className="row mt-5">
            <div className={`col-md-3 opcao ${styles.opcao}`}>
              <a className={`btn btn-primary btn-block botao ${styles.botao}`} href="glossario" >Glossário</a>
              <p className="text-dark opcao"> Encontre o significado dos principais conceitos de gestão financeira pessoal.</p>
            </div>
            <div className={`col-md-3 opcao ${styles.opcao}`}>
              <a className={`btn btn-primary btn-block botao ${styles.botao}`} href="investimentos" >Investimentos</a>
              <p className="text-dark opcao">Aprenda sobre diferentes tipos de investimentos e como escolher o melhor para você.</p>
            </div>
            <div className={`col-md-3 opcao ${styles.opcao}`}>
              <a className={`btn btn-primary btn-block botao ${styles.botao}`} href="capitalDeGiro" >Capital de Giro</a>
              <p className="text-dark opcao">Entenda como o capital de giro afeta seu negócio ou suas finanças pessoais.</p>
            </div>
            <div className={`col-md-3 opcao ${styles.opcao}`}>
              <a className={`btn btn-primary btn-block botao ${styles.botao}`} href="fluxoDeCaixa" >Fluxo de Caixa</a>
              <p className="text-dark opcao">Controle suas entradas e saídas de dinheiro para tomar decisões financeiras mais inteligentes.</p>
            </div>
          </div>
          <br></br>

          {/* conteudo principal */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className={`display-3 titulo ${styles.titulo}`}>Finanças no controle, sonhos em ação!</h1>
                <p className={`p ${styles.p}`}>
                  O aplicativo DinDinTeens é um aplicativo de gestão financeira gratuito que ajuda os jovens
                  a aprender maneiras de controlar suas despesas, criar orçamentos e alcançar seus objetivos
                  financeiros.
                </p>
                <p className={`p ${styles.p}`}>
                  O aplicativo é fácil de usar e conta com recursos didáticos e práticos, como:
                </p>
                <ul className="list-unstyled my-2">
                  <li className={`li ${styles.li}`}>1. Calculadoras de capital de giro e fluxo de caixa;</li>
                  <li className={`li ${styles.li}`}>2. Artigos, dicas e vídeos sobre investimentos;</li>
                  <li className={`li ${styles.li}`}>3. Um glossário para entender o significado dos conceitos de gestão financeira pessoal;</li>
                </ul>
                <p className={`p ${styles.p}`}>
                  O aplicativo DinDinTeens é um ótimo recurso para jovens que estão procurando melhorar suas
                  finanças. Comece hoje mesmo a controlar suas finanças!
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  )
}