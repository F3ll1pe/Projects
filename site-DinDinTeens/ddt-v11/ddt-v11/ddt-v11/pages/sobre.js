import Header from '../components/Header'
import Rodape from '../components/Rodape'
import styles from '../styles/sobre.module.css'
import Head from 'next/head'
import Login from '../components/Login'
import { useSession, getSession } from "next-auth/react"

export default function sobre() {
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
                <Head>
                    <title>Sobre o DinDinTeens</title>
                </Head>
                <Header />
                <div className={`sobre ${styles.sobre}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className={`h ${styles.h}`}>Sobre</h1>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    O DinDinTeens é um site para o público jovem que quer aprender mais sobre finanças pessoais. Aqui,
                                    você encontrará conteúdo sobre como economizar dinheiro, investir, e tomar decisões financeiras
                                    inteligentes.
                                </p>
                                <p>
                                    Nosso objetivo é ajudá-lo, principalmente aqueles que se encontram entre os 18 e 24 anos, a se tornarem financeiramente independentes e responsáveis.
                                    Acreditamos que todos devem ter acesso a informações financeiras de qualidade, independentemente da
                                    idade.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul>
                                    <li>Artigos e vídeos explicativos sobre tópicos financeiros relevantes para jovens.</li>
                                    <li>Ferramentas para ajudar você a gerenciar seu dinheiro.</li>
                                    <li>Glossário para explicar termos técnicos</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    Se você é jovem que quer aprender mais sobre finanças pessoais, o DinDinTeens é o lugar
                                    certo para você.
                                    Clique no link abaixo e consulte o nosso glossario para aprender e sobre educação financeira e suas definições
                                </p>
                                <p>
                                    <a href="glossario" target="_blank">Consulte o glossario</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className={`imagem ${styles.imagem}`} src="/imagemsobre.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    )
}