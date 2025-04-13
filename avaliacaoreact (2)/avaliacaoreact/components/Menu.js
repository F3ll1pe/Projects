import styles from '../styles/components/Menu.module.css'

export default function Menu() {
    return (
        <div className={`container ${styles.menu}`}>
            <div className="row">
                <div className="col-md-6">
                    <p>Início</p>
                </div>
                <div className="col-md-6">
                    <p>Sobre ONU</p>
                </div>
            </div>
        </div>
    )
}