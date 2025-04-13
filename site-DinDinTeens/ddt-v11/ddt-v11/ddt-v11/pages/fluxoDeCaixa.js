import Header from '../components/Header'
import Rodape from '../components/Rodape'
import styles from '../styles/fluxoDeCaixa.module.css'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Login from '../components/Login'
import axios from 'axios'
import { useSession, getSession } from "next-auth/react"

export default function fluxoDeCaixa() {

    const [operacoes, setOperacoes] = useState([])
    const [resultado, setResultado] = useState(0)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{
        atualizarOperacoes()
    }, [])

    const handleInserir = () => {
        let periodo = document.getElementById("periodo").value;
        let tipo = document.getElementById("tipo").value;
        let categoria = document.getElementById("categoria").value;
        let valor = document.getElementById("valor").value;

        axios.post('http://127.0.0.1:5000/operacao', {
            usuario: 'pfloressteyer@gmail.com',
            periodo: periodo,
            tipo: tipo,
            categoria: categoria,
            valor: valor,
            datahora: "2023-10-07 09:30:00.0"
          }).then((response) => {
            alert("Operação inserida com sucesso!!")
            atualizarOperacoes()
            handleClose()
          })

    }

    const atualizarOperacoes = () => {
        axios.get('http://127.0.0.1:5000/operacao').then((response)=>{
            let ops = response.data
            setOperacoes(ops)
            atualizarResultado(ops)
        })
    }

    const atualizarResultado = (ops) => {
        let total = 0;
        for (const op of ops) {
            if (op.tipo == "receita") {
                total += op.valor;
            } else if (op.tipo == "despesa") {
                total -= op.valor;
            }
            setResultado(total)
        }
    }  

    const { data: session, status } = useSession()

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
                    <title>Fluxo de caixa</title>
                </Head>
                <Header />
                <div className={styles.fluxoDeCaixa}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className={`h ${styles.h}`}>Calcule o seu fluxo de caixa</h1>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-6">
                                {/* <form action="/calcular" method="post">
                                    <div className={`form-group periodo ${styles.periodo}`}>
                                        <label htmlFor="periodo">Período</label>
                                        <select className="form-control" id="periodo" name="periodo">
                                            <script src="js/periodo-em-branco.js"></script>
                                            <option value="Mensal">Mensal</option>
                                            <option value="Trimestral">Trimestral</option>
                                            <option value="Semestral">Semestral</option>
                                            <option value="Anual">Anual</option>
                                        </select>
                                    </div>
                                    <div className={`row adicionar ${styles.adicionar}`}>
                                        <div className="col-md-6">
                                            <button type="button" className="btn btn-primary" data-toggle="modal"
                                                data-target="#modal-gasto">Adicionar Gasto</button>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="modal-gasto" tabIndex="-1" aria-labelledby="modal-gasto-label"
                                        aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="modal-gasto-label">Adicionar Gasto</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="form-group">
                                                        <label for="valor">Valor das Receitas</label>
                                                        <input type="number" className="form-control valor" id="valor" name="valor"
                                                            placeholder="R$ 0,00" />
                                                    </div>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="form-group">
                                                        <label htmlFor="valor">Valor das Despesas</label>
                                                        <input type="number" className="form-control valor" id="valor" name="valor"
                                                            placeholder="R$ 0,00" />
                                                    </div>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="form-group">
                                                        <div className="form-group">
                                                            <label htmlFor="tipo">Tipo de Gasto</label>
                                                            <select className="form-control" id="tipo" name="tipo">
                                                                <script src="js/tipo-em-branco.js"></script>
                                                                <option value="Conta de Luz">Conta de Luz</option>
                                                                <option value="Conta de Água">Conta de Água</option>
                                                                <option value="Conta de Internet">Conta de Internet</option>
                                                                <option value="Conta de Telefone">Conta de Telefone</option>
                                                                <option value="Aluguel">Aluguel</option>
                                                                <option value="Comida">Comida</option>
                                                                <option value="Transporte">Transporte</option>
                                                                <option value="Lazer">Lazer</option>
                                                                <option value="Outro">Outro</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                        data-dismiss="modal">Cancelar</button>
                                                    <button type="button" className="btn btn-primary">Salvar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="button" className="btn btn-primary">Calcular</button>
                                        </div>
                                    </div>
                                </form> */}

                                <Button variant="primary" onClick={handleShow}>
                                    Inserir Operação
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Inserir operação</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Selecionar período</Form.Label>
                                                <Form.Select id="periodo" aria-label="Default select example">
                                                    <option value="semanalmente">Semanalmente</option>
                                                    <option value="quinzenalmente">Quinzenalmente</option>
                                                    <option value="mensalmente">Mensalmente</option>
                                                    <option value="semestralmente">Semestralmente</option>
                                                    <option value="anualmente">Anualmente</option>
                                                </Form.Select>

                                                <Form.Label>Tipo de operação</Form.Label>
                                                <Form.Select id="tipo" aria-label="Default select example">
                                                    <option></option>
                                                    <option value="receita">Receita</option>
                                                    <option value="despesa">Despesa</option>
                                                </Form.Select>

                                                <Form.Label>Categoria</Form.Label>
                                                <Form.Control
                                                    id="categoria"
                                                    type="text"
                                                    autoFocus
                                                />

                                                <Form.Label>Valor</Form.Label>
                                                <Form.Control
                                                    id="valor"
                                                    type="number"
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={handleInserir}>
                                            Inserir
                                        </Button>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancelar
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <div>
                                    {operacoes.map((operacao)=>(
                                        <p>{operacao.id} - {operacao.periodo} - {operacao.tipo} - {operacao.valor}</p>
                                    ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`resultado ${styles.resultado}`}>
                                    <h2>Resultado</h2>
                                    <div className="card">
                                        <div className="card-header">
                                            Seu fluxo de caixa é:
                                        </div>
                                        <div className="card-body">
                                            <h1 className="text-center">R$ {resultado}<span id="fluxo-de-caixa"></span></h1>
                                            {/* <!-- <script src="js/calcular-fluxo-de-caixa.js"></script> --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Rodape />
            </>
        </div>
    )
}