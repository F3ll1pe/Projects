import styles from '../styles/components/Conteudo.module.css'

export default function Conteudo(){
    return (
        <div className={styles.Conteudo}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img className="img-fluid" src="/imagem_1.jpg" />
                        <p>15 de Setembro</p>
                        <p>Relatorio Anual das Nações Unidas no Brasil 2022</p>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid" src="/imagem_2.jpeg" />
                        <p>15 de Setembro</p>
                        <p>Equilibrio Delicado para A Amazônia legal Brasileira. Um memorando Econômico</p>
                    </div>
                    <div className="col-md-6">
                        <h1>ONU assina marco de cooperação com o Brasil</h1>
                        <p>As Nações Unidas e o governo brasileiro assinaram, nesta terça-feira(1), o Novo Marco de Cooperação Brasil-ONU 2023-2027, no ambito da vista da vice-secretária-geral da ONU, Amina J. Mohammed, ao pais.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                </div>
            </div>
        </div>
    )
}