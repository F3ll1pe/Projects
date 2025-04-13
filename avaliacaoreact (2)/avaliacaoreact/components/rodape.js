import styles from '../styles/components/Rodape.module.css'

export default function Rodape(){
    return (
        <div className={styles.Rodape}>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <img className="img-fluid" src="/logo_footer.PNG" />
                    </div>
                    <div className="col-md">
                        <p>Casa ONU Brasil-Completo Sérgio Vieira de Mello</p>
                        <p>Setor de Embaixadas Norte. Quadra 802, Conjunto C, lote 17</p>
                        <p>CEP:70800-400 Brasília, DF, Brasil +55(61)3038-9300</p>
                    </div>
                </div>
            </div>
        </div>
    )
}