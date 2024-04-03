import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto () {
    const { state } = useLocation();
    const [idProduto, setIdProduto] = useState();

    const [codigo, setCodigo] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/produto/" + state.id)
    .then((response) => {
                        setIdProduto(response.data.id)
                        setCodigo(response.data.codigo)
                        setTitulo(response.data.titulo)
                        setDescricao(response.data.descricao)
                        setValorUnitario(response.data.valorUnitario)
                        setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
                        setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
            })
        }
    }, [state])

    
    function salvar() {


        let produtoRequest = {
            codigo: codigo,
            titulo: titulo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMaximo: tempoEntregaMaximo,
            tempoEntregaMinimo: tempoEntregaMinimo

            
        }
              //Alteração
       if (idProduto != null) 
       { 
            axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
            .then((response) => { console.log('Produto alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar um produto.') })
        } 
        //Cadastro
        else 
        { 
            axios.post("http://localhost:8080/api/produto", produtoRequest)
            .then((response) => { console.log('Produto cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o produto.') })
        }
    }
    return (
        
        <div>

            <div style={{marginTop: '3%'}}>
            <MenuSistema tela={'produto'} />
                <Container textAlign='justified' >

                { idProduto === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                }
                { idProduto !== undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                }

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    width={11}>
                                    <InputMask
                                         placeholder="Informe o titulo do produto"
                                         value={titulo}
                                         onChange={e => setTitulo(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    width={5} >
                                       
                                    <InputMask
                                        required
                                        placeholder="Informe o código do produto"
                                        value={codigo}
				                        onChange={e => setCodigo(e.target.value)}
                                    /> 
                                </Form.Input>


                            </Form.Group>
                            
                            <Form.Group>

                                <Form.TextArea
                                        fluid
                                        label='Descrição'
                                        width={16}
                                        placeholder="Informe a descrição do produto"
                                        value={descricao}
				                        onChange={e => setDescricao(e.target.value)}
                                    >        
                                </Form.TextArea>

                            
                            </Form.Group>

                            <Form.Group widths={"equal"}>

                                <Form.Input
                                        fluid
                                        label='Valor Unitário'        
                                        required
                                        value={valorUnitario}
				                        onChange={e => setValorUnitario(e.target.value)}
                                >
                                    
                                </Form.Input>

                                <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'               
                                        
                                        
                                >
                                    <InputMask             
                                            placeholder="30"
                                            value={tempoEntregaMinimo}
                                            onChange={e => setTempoEntregaMinimo(e.target.value)}
                                    /> 
                                    
                                </Form.Input>
                                <Form.Input
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'               
                                        
                                        
                                >
                                    <InputMask            
                                            placeholder="40"
                                            value={tempoEntregaMaximo}
                                            onChange={e => setTempoEntregaMaximo(e.target.value)}
                                    /> 
                                    
                                </Form.Input>
                            </Form.Group>
       
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-produto'}>Voltar</Link>
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
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
