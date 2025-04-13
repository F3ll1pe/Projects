import Header from '../components/Header'
import Rodape from '../components/Rodape'
import styles from '../styles/investimentos.module.css'
import Head from 'next/head'
import Login from '../components/Login'
import { useSession, getSession } from "next-auth/react"

export default function investimentos() {
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
                    <title>Investimentos</title>
                </Head>
                <Header />
                <div className={styles.investimentos}>
                    <div className={`container investimentos ${styles.investimentos}`}>
                        <div className="row">
                            <div className="col-md-12">
                                <br></br>
                                <h2 className={`titulo ${styles.titulo}`}>Investimentos</h2>
                                <br></br>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className={`form-control controle ${styles.controle}`} id="search" placeholder="Pesquisar" />
                            </div>
                        </div>
                        <div className={`row textos ${styles.textos}`}>
                            <div className="col-md-12">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <a href="#termo1">INVESTIMENTOS</a>
                                        <p>Além de sabermos como gastar o dinheiro, também temos que saber como investi-lo da melhor forma possível para que haja algum rendimento de retorno financeiro futuramente. Antes de tudo é preciso aprender a gerir o próprio dinheiro, pagar as contas, não cair em dívidas e começar a lucrar. Mas o que fazer com esse lucro? Guardar tudo na conta bancária ou investir para gerar renda com o lucro que já possui?
                                            Investir é fazer o dinheiro trabalhar por você e crescer cada vez mais os lucros ao longo do tempo. Existem vários tipos de investimentos que podem ser feitos: eles variam entre curto, médio e longo prazo. Os benefícios dessa prática são muitos, pois além de crescer o patrimônio pessoal, também ajuda a alcançar suas metas e objetivos financeiros.
                                            Até pode fornecer uma aposentadoria mais segura, onde com os investimentos ao longo da vida já terá uma renda passiva considerável que ajudará a manter o padrão de vida. Contudo, os investimentos têm seus riscos que variam do quanto o investidor está disposto a correr estes riscos. Mas claro existem maneiras mais arriscadas e outras mais seguras que vamos abordar.
                                        </p>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#termo2">MANEIRAS DE INVESTIR</a>
                                        <p>Não existe a melhor maneira de investir ou a que dará mais lucros, existem várias possibilidades dentro desse mercado onde o indivíduo deve avaliar e tomar as decisões avaliando seus riscos e objetivos de curto a longo prazo. A seguir explicaremos alguns meios de investimentos mais conhecidos no mercado.</p>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#termo3">CONTA POUPANÇA</a>
                                        <p>A conta poupança é o meio mais popular de investimento a pessoa física pode abrir esta conta no banco. Como o nome já diz, ela foi criada para poupar dinheiro, então o proprietário não pode receber o salário nela. E a movimentação permitida é de somente 2 saques, 2 transferências e 2 extratos por mês.
                                            O rendimento que ela terá é regulado pelo Banco Central, que faz os cálculos com base na taxa Selic e na TR. Atualmente no ano de 2023, segundo a Mobills, em média ela rende 0,5% ao mês e 6,15% ao ano, se . Embora o rendimento possa variar, ela é de baixo risco, o proprietário só irá perder o seu dinheiro se o banco falir, e mesmo assim o governo vai te reembolsar o valor de até 60 mil.
                                        </p>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#termo4">CONTA DIGITAL</a>
                                        <p>Criar uma conta digital que tenha um rendimento com o percentual do CDI (Certificado de Depósito Interbancário), que são títulos emitidos pelas instituições bancárias diariamente.  E depositar o dinheiro lá vai lhe render mais do que na poupança já que o CDI, segundo o Nubank, varia de 1% ao mês e a poupança de 0,5%. E a vantagem é que o proprietário pode depositar e retirar quando e quanto quiser da conta.</p>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#termo5">TESOURO SELIC</a>
                                        <p>O Tesouro Selic foi batizado com este nome por que seu rendimento segue a taxa selic, mas o seu termo técnico é Letra Financeira do Tesouro (LTF). Porém não precisa se preocupar em decorar todas estas siglas, as próprias plataformas de investimentos o nomearam de Tesouro Selic para facilitar o entendimento do investidor.
                                            A taxa Selic, segundo a Warren, está rendendo 13,75% ao ano atualmente. Que foi confirmado pela quarta reunião do Copom de 2023, sua rentabilidade é relacionada à taxa de juros básica acrescida de uma pequena parcela prefixada. Além disso é uma opção de investimento bem segura pois o indivíduo estará investindo no próprio governo brasileiro, ao menos que o governo quebre o dinheiro estará seguro. E como ele acompanha a taxa de juros básica, investir no Tesouro Selic também é uma forma de manter o dinheiro valorizado. Já que quanto maior a inflação dessa taxa, mais o dinheiro rende. Mas, não assegura que acompanhará a inflação total.
                                            O rendimento é diário, todo dia o dinheiro vai estar rendendo até o vencimento de sua aplicação que é em média 5 anos. É recomendado usar esse investimento como um fundo de emergência de saque rápido. Por que quanto mais tempo deixar ele rendendo menos imposto terá que pagar quando for sacar. Esses impostos diminuem progressivamente, até 180 dias é de 22,5% que com base em uma renda de lucro de 13,75% ao ano se tornaria 10,65% ao ano, indo até 15% acima de 721 dias. E mesmo com esses impostos ainda renderia mais do que na poupança.
                                        </p>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#termo6">FUNDOS IMOBILIÁRIOS (FIIs)</a>
                                        <p>Assim como as formas de investimentos citadas anteriormente, o fundo imobiliário também é uma renda variável.  Como diz o nome, são fundos de investimentos no setor imobiliário como um shopping, mercado ou um hotel. O'Que o torna um meio de investimento bastante seguro, os melhores FIIs (fundos de investimentos imobiliários), contam com uma rede de empreendimentos e com uma locação com bons inquilinos. Além de contar com uma equipe profissional para administrar.
                                            Ele é fácil de se investir podendo ser comprado e vendido a qualquer momento, e dá uma renda passiva mensal com base no aluguel e venda desses imóveis. Mesmo sendo fácil e segura de investir, muitos investidores gostam de manter sua carteira de fundos imobiliários diversificada para diminuir riscos.
                                        </p>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#termo7">AÇÕES</a>
                                        <p>Quando falamos em investimentos e corretoras logo pensamos em ações, quem nunca ouviu falar que fulano vive de compra e venda de ações ou alguma notícia sobre o mercado dos acionistas. Mas oque exatamente são as ações? As ações são empresas que querem expandir o seu negócio e decidem virar uma companhia de capital aberto e passa a ofertar suas ações para aumentar o seu dinheiro.
                                            Comprar uma ação é como um pequeno pedaço da empresa, se tornando um sócio e tendo direito a participar de seus lucros. Porém o proprietário também correrá riscos junto com a empresa, caso a empresa investida desvalorize, suas ações caem, assim deixando o investidor no prejuízo, mas caso a empresa aumente seu valor, as ações compradas aumentam de valor junto.
                                            Mas e como lucrar com ações? A mais de um jeito de lucrar com ações. Um desses jeitos é o chamado day trade. Um day trader compra ações de uma determinada empresa quantos elas estão em baixa e vendem quando elas estão em alta, assim lucrando somente com compra e venda de ações. Para isso exige uma grande análise de mercado para descobrir o momento certo de compra e venda. Outro jeito são com os dividendos. Dividendos são parte do lucro líquido de uma empresa que é distribuído entre seus acionistas. O período que são pagos os dividendos varia de empresa para empresa, mas, o mínimo é anualmente.
                                            Dependendo de seu perfil de investidor é aconselhável diversificar a sua carteira de ações  para diminuir os riscos.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                </div>
            </div>
            <Rodape />
        </>
    )
}