import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormPromocao () {
    const { state } = useLocation();
    const [idPromocao, setIdPromocao] = useState();

    const [titulo, setTitulo] = useState();
    const [dataInicio, setDataInicio] = useState();
    const [dataFim, setDataFim] = useState();
    const [regra, setRegra] = useState();
    const [valorDesconto, setValorDesconto] = useState();


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/promocao/" + state.id)
    .then((response) => {
                        setIdPromocao(response.data.id)
                        setTitulo(response.data.titulo)
                        setDataInicio(response.data.dataInicio)
                        setDataFim(response.data.dataFim)
                        setRegra(response.data.regra)
                        setValorDesconto(response.data.valorDesconto)
            })
        }
    }, [state])

    
    function salvar() {


        let promocaoRequest = {
            titulo: titulo,
            dataInicio: dataInicio,
            dataFim: dataFim,
            regra: regra,
            valorDesconto: valorDesconto

            
        }
              //Alteração
       if (idPromocao != null) 
       { 
            axios.put("http://localhost:8080/api/promocao/" + idPromocao, promocaoRequest)
            .then((response) => { console.log('Promoção alterada com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar uma promoção.') })
        } 
        //Cadastro
        else 
        { 
            axios.post("http://localhost:8080/api/promocao", promocaoRequest)
            .then((response) => { console.log('Promoção cadastrada com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir a promoção.') })
        }
    }
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }
    
        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }
    return (
        
        <div>

            <div style={{marginTop: '3%'}}>
            <MenuSistema tela={'promocao'} />
                <Container textAlign='justified' >

                { idPromocao === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Promoção &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                }
                { idPromocao !== undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Promoção &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
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
                                    width={16}
                                    >
                                    <InputMask
                                         placeholder="Informe o titulo da promoção"
                                         value={titulo}
                                         onChange={e => setTitulo(e.target.value)}
                                    /> 
                                </Form.Input>


                            </Form.Group>
                            <Form.Group>

                                    <Form.TextArea
                                            fluid
                                            label='Regra'
                                            width={16}
                                            placeholder="Informe a regra da promoção"
                                            value={regra}
                                            onChange={e => setRegra(e.target.value)}
                                        >        
                                    </Form.TextArea>


                            </Form.Group>


                            <Form.Group widths={"equal"}>

                                <Form.Input
                                        fluid
                                        label='Valor Desconto'        
                                        width={4}
                                        value={valorDesconto}
				                        onChange={e => setValorDesconto(e.target.value)}
                                >
                                    
                                </Form.Input>

                                <Form.Input
                                    required
                                        fluid
                                        label='A partir de'
                                        width={4}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                            value={dataInicio}
                                            onChange={e => setDataInicio(e.target.value)}
                                        /> 
                                    </Form.Input>
                                    <Form.Input
                                    required
                                        fluid
                                        label='Terminando em'
                                        width={4}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                            value={dataFim}
                                            onChange={e => setDataFim(e.target.value)}
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
                                <Link to={'/list-promocao'}>Voltar</Link>
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
                                <Link to={'/list-promocao'}>Salvar</Link>
                                
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
