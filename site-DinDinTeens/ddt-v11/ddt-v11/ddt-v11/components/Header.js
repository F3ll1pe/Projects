import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/components/Header.module.css'

export default function Header() {
    return (
        <Navbar data-bs-theme="dark" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="/">
                    <Image className={`logo ${styles.logo}`} width={90} height={90} src="DinDinTeens-Logo1.png" roundedCircle />
                </Navbar.Brand>
                <Navbar.Brand className={`opcaomaster ${styles.opcaomaster}`} href="/">DinDinTeens</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={`opcao ${styles.opcao}`} href="/">Home</Nav.Link>
                        <Nav.Link className={`opcao ${styles.opcao}`} href="sobre">Sobre</Nav.Link>
                        <Nav.Link className={`opcao ${styles.opcao}`} href="glossario">Glossário</Nav.Link>
                        <Nav.Link className={`opcao ${styles.opcao}`} href="investimentos">Investimentos</Nav.Link>
                        <NavDropdown className={`opcao ${styles.opcao}`} title="Operações" id="basic-nav-dropdown" variant="secondary" data-bs-theme="dark">
                            <NavDropdown.Item className={`opcao ${styles.opcao}`} href="capitalDeGiro">Capital de giro</NavDropdown.Item>
                            <NavDropdown.Item className={`opcao ${styles.opcao}`} href="fluxoDeCaixa">Fluxo de caixa</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className={styles.navbar}>
        //     <nav className="navbar navbar-expand-lg navbar-dark">
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        //             aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        //             <img className={`logo ${styles.logo}`} src="/DinDinTeens-Logo1.png" alt="" />
        //             <a className={`navbar-brand ${styles.navbarbrand}`} href="/">DinDinTeens</a>
        //             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        //                 {/* <li className="nav-item active">
        //                     <a className="nav-link" href="index">Home <span className="sr-only"></span></a>
        //                 </li> */}
        //                 <li className="nav-item active">
        //                     <a className={`nav-link link ${styles.link}`} href="/">Home <span
        //                         className="sr-only"></span></a>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <a className={`nav-link link ${styles.link}`} href="sobre">Sobre <span className="sr-only"></span></a>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <a className={`nav-link link ${styles.link}`} href="glossario">Glossário <span className="sr-only"></span></a>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <a className={`nav-link link ${styles.link}`} href="investimentos">Investimentos <span
        //                         className="sr-only"></span></a>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <a className={`nav-link link ${styles.link}`} href="capitalDeGiro">Capital de Giro <span
        //                         className="sr-only"></span></a>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <a className={`nav-link link ${styles.link}`} href="fluxoDeCaixa">Fluxo de Caixa <span
        //                         className="sr-only"></span></a>
        //                 </li>
        //             </ul>
        //             <form className={`form-inline my-2 my-lg-0 ${styles.formBuscar}`}>
        //                 <input className={`buscar ${styles.buscar}`} type="search" placeholder="Buscar"
        //                     aria-label="Buscar" />
        //                 <button className={`btn btn-outline-secondary my-2 my-sm-0 pesquisar ${styles.pesquisar}`} type="submit">Pesquisar</button>
        //             </form>
        //         </div>
        //     </nav>
        // </div>
    )
}