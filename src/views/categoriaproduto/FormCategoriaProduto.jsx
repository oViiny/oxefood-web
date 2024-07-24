import axios from "axios";
import React, { useEffect, useState } from "react";
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormCategoriaProduto() {

const { state } = useLocation();
const [idCategoriaProduto, setIdCategoriaProduto] = useState();


   const [descricao, setDescricao] = useState();


   
    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/categoriaproduto/" + state.id)
    .then((response) => {
                        setIdCategoriaProduto(response.data.id)
                        setDescricao(response.data.descricao)
            })
        }
    }, [state])


   function salvar() {

        let categoriaprodutoRequest = {
            descricao: descricao,

        }

        //Alteração
       if (idCategoriaProduto != null) 
       { 
            axios.put("http://localhost:8080/api/categoriaproduto/" + idCategoriaProduto, categoriaprodutoRequest)
            .then((response) => { console.log('Categoria Produto alterada com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar uma categoria produto.') })
        } 
        //Cadastro
        else 
        { 
            axios.post("http://localhost:8080/api/categoriaproduto", categoriaprodutoRequest)
            .then((response) => { notifySuccess('Cliente cadastrado com sucesso.')
            })
            .catch((error) => { if (error.response) {
                notifyError(error.response.data.message)
                } else {
                notifyError(mensagemErro)
                } 
                 })
        }

    }

    return (

        <div>
            <MenuSistema tela={'categoriaproduto'} />
            <div style={{marginTop: '3%'}}>

               

                <Container textAlign='justified' >

                { idCategoriaProduto === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Categoria Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                }
                { idCategoriaProduto !== undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Categoria Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                }

                <Divider />
                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Descricao'
                                    maxLength="100"
                                    value={descricao}
			                        onChange={e => setDescricao(e.target.value)}
                                />
                            </Form.Group>                       
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>
                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='orange'
                            >
                            <Icon name='reply' />
                            <Link to={'/list-cliente'}>Voltar</Link>
                        </Button>                               
                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='blue'
                            floated='right'
                            onClick={() => salvar()}
                        >
                            <Icon name='save' />
                            <Link to={'/list-produto'}>Salvar</Link>
                        </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
