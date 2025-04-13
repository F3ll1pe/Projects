import styles from '../styles/components/Header.module.css'

export default function Header(){
    return (
        <div className={styles.Header}>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <img src="/logo.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}