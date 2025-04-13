import styles from '../styles/components/Rodape.module.css'

export default function Rodape(){
    return (
        <div className={styles.Rodape}>
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<p className="mb-0">
							DinDinTeens é um site gratuito que oferece informações e recursos para ajudar
							os
							jovens
							a melhorar suas finanças.
						</p>
					</div>
					<div className="col-md-6">
						<p className="mb-0 text-right">
							© 2023 DinDinTeens
						</p>
					</div>
				</div>
			</div>
		</footer>
	</div>
    )
}
// <div classNameName={styles.Rodape}>
        //     <div classNameName="container">
        //         <div classNameName="row">
        //             <div classNameName="col-md">
        //                 <img classNameName="img-fluid" src="/logo_footer.PNG" />
        //             </div>
        //             <div classNameName="col-md">
        //                 <p>Casa ONU Brasil-Completo Sérgio Vieira de Mello</p>
        //                 <p>Setor de Embaixadas Norte. Quadra 802, Conjunto C, lote 17</p>
        //                 <p>CEP:70800-400 Brasília, DF, Brasil +55(61)3038-9300</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>