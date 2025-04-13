import Header from '../components/Header'
import Rodape from '../components/Rodape'
import styles from '../styles/glossario.module.css'
import Head from 'next/head'
import Login from '../components/Login'
import { useSession, getSession } from "next-auth/react"

export default function glossario() {
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
        <div>
            <>
                <Head>
                    <title>Glossário</title>
                </Head>
                <Header />
                <div className={styles.glossario}>
                    <div className={`container glossario ${styles.glossario}`}>
                        <div className="row">
                            <div className="col-md-12">
                                <br></br>
                                <h2 className={`titulo ${styles.titulo}`}>Glossário</h2>
                                <br></br>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className={`form-control controle ${styles.controle}`} id="search" placeholder="Pesquisar" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <a href="#termo1">CAPITAL DE GIRO</a>
                                        <p>Capital de giro é o cálculo obtido subtraindo as despesas das receitas, essencialmente utilizado no mundo empresarial para gerir os gastos e contas a pagar das organizações, somando-os às receitas obtidas em determinado período, geralmente mensal (SEBRAE, 2013). Para a gestão financeira pessoal, capital de giro é o dinheiro que você precisa para pagar as contas do dia a dia, como contas de água, luz, alimentação, transporte, entre outras.
                                            O “giro” é o ciclo financeiro de uma organização. Em alguns momentos, as despesas podem ser maiores do que as receitas, como quando uma empresa paga uma conta antes de receber o pagamento por uma venda (ou um indivíduo que paga uma conta sem receber pelo seu trabalho). Nesses casos, é importante ter um capital de giro suficiente para pagar as despesas. Se você esperar o dinheiro entrar para pagar, pode ter problemas financeiros.
                                            Assim como as empresas, é importante que as pessoas tenham capital de giro para pagar contas e dívidas. Para calcular, soma-se as despesas e subtrai-se da receita. O resultado é o dinheiro extra para gastos extras ou investimentos. O capital de giro pessoal deve ser revisado periodicamente, principalmente em caso de mudanças na renda ou nas despesas.
                                            Isso é importante para garantir que as finanças estejam equilibradas e saudáveis. Além disso, é recomendável ter uma reserva financeira para emergências, que pode ser usada em caso de imprevistos ou necessidades urgentes.
                                        </p>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#termo2">FLUXO DE CAIXA</a>
                                        <p>O Fluxo de Caixa é uma ferramenta importante na gestão financeira pessoal, que consiste em registrar todas as receitas e despesas de uma pessoa em um determinado período de tempo, geralmente mensal. Isso permite que a pessoa tenha uma visão clara da sua situação financeira e possa tomar decisões mais conscientes em relação aos gastos e investimentos. Para fazer um Fluxo de Caixa pessoal, é necessário seguir os seguintes passos:</p>
                                            <p>I- Identificar todas as receitas do período, como salário, renda de investimentos, aluguel, entre outras. Anote o valor de cada receita e a data em que foi recebida.</p>
                                            <p>II- Identificar todas as despesas do período, como contas de água, luz, telefone, aluguel, alimentação, transporte, entre outras. Anote o valor de cada despesa e a data em que foi paga.</p>
                                            <p>III- ClassNclassNameificar as despesas em categorias, como alimentação, transporte, moradia, saúde, educação, entre outras. Isso ajuda a identificar os principais gastos e pode auxiliar na tomada de decisões para reduzir despesas.</p>
                                            <p>IV- Calcular o saldo disponível ao final do período, que é obtido pela diferença entre as receitas e despesas. Se o saldo for positivo, indica que houve sobra de dinheiro no período. Se for negativo, indica que houve déficit e que é necessário tomar medidas para equilibrar as finanças.</p>
                                            <p>V- Analisar os resultados e identificar possíveis ajustes para reduzir despesas e aumentar receitas. É importante que o Fluxo de Caixa seja atualizado regularmente para que a pessoa possa acompanhar a evolução da sua situação financeira e tomar decisões mais informadas, , Humberto Bocayuva, 2020.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"></script>
                <Rodape />
            </>
        </div>
    )
}