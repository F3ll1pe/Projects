import Header from '../components/Header'
import Rodape from '../components/Rodape'
import styles from '../styles/capitalDeGiro.module.css'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Login from '../components/Login'
import axios from 'axios'
import { useSession, getSession } from "next-auth/react"

export default function capitalDeGiro() {
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
                    <title>Capital de giro</title>
                </Head>
                <Header />
                <div className={styles.capitalDeGiro}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`h ${styles.h}`}>Calcule o seu capital de giro</h1>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-md-6">
                            <form action="/calcular" method="post">
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
                                                    <label htmlFor="valor">Valor</label>
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
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className={`resultado ${styles.resultado}`}>
                                <h2>Resultado</h2>
                                <div className="card">
                                    <div className="card-header">
                                        Seu capital de giro é:
                                    </div>
                                    <div className="card-body">
                                        <h1 className="text-center">R$ <span id="capital-de-giro"></span></h1>
                                        <script src="js/calcular-capital-de-giro.js"></script>
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