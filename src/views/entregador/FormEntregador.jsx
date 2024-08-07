import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormEntregador () {
    const { state } = useLocation();
    const [idEntregador, setIdEntregador] = useState();

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [ativo, setAtivo] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/entregador/" + state.id)
    .then((response) => {
                        setIdEntregador(response.data.id)
                        setNome(response.data.nome)
                        setCpf(response.data.cpf)
                        setRg(response.data.rg)
                        setDataNascimento(response.data.dataNascimento)
                        setFoneCelular(response.data.foneCelular)
                        setFoneFixo(response.data.foneFixo)
                        setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
                        setEnderecoRua(response.data.enderecorua)
                        setEnderecoNumero(response.data.enderecoNumero)
                        setEnderecoBairro(response.data.enderecoBairro)
                        setEnderecoCidade(response.data.enderecoCidade)
                        setEnderecoCep(response.data.enderecoCep)
                        setEnderecoUf(response.data.enderecoUf)
                        setEnderecoComplemento(response.data.enderecoComplemento)
                        setAtivo(response.data.ativo)
            })
        }
    }, [state])


    function salvar() {


        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorFrete: valorFrete,
            enderecoRua: enderecoRua,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf: enderecoUf,
            enderecoComplemento: enderecoComplemento,
            ativo: ativo
        }

        //Alteração
       if (idEntregador != null) 
       { 
            axios.put("http://localhost:8080/api/entregador/" + idEntregador, entregadorRequest)
            .then((response) => { console.log('Entregador alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alter um entregador.') })
        } 
        //Cadastro
        else 
        { 
            axios.post("http://localhost:8080/api/entregador", entregadorRequest)
            .then((response) => { notifySuccess('Entregador cadastrado com sucesso.') })
            .catch((error) => { 
                if (error.response) {
                    notifyError(error.response.data.message)
                } 
                else {
                    notifyError(mensagemErro)
                } 
                 })
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
            <MenuSistema tela={'entregador'} />
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    
                { idEntregador === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                }
                { idEntregador !== undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                }

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={10}>
                                    <InputMask
                                         placeholder="Ex: Vinicius Rodrigues Ferreira"
                                         value={nome}
                                         onChange={e => setNome(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={3} >
                                       
                                    <InputMask    
                                        mask="999.999.999-99"
                                        placeholder="Ex: 124.905.409-73"
                                        value={cpf}
				                        onChange={e => setCpf(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    width={3}>
                                    <InputMask
                                        mask="99.999-999"
                                        placeholder="Ex: 12.304-078"
                                        value={rg}
				                        onChange={e => setRg(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                        fluid
                                        label='DT Nascimento'
                                        width={4}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                            value={formatarData(dataNascimento)}
                                            onChange={e => setDataNascimento(e.target.value)}
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Celular'
                                        width={5}>
                                        <InputMask 
                                            mask="(99) 99999.9999"
                                            placeholder="Ex: (81) 98342.3967"
                                            value={foneCelular}
                                            onChange={e => setFoneCelular(e.target.value)}
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Fixo'
                                        width={5}>
                                        <InputMask 
                                            mask="(99) 99999.9999"
                                            placeholder="Ex: (81) 98342.3967"
                                            value={foneFixo}
                                            onChange={e => setFoneFixo(e.target.value)}
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='QTD Entregas Realizadas'
                                        placeholder="Ex: 15"
                                        width={4}
                                        value={qtdEntregasRealizadas}
				                        onChange={e => setQtdEntregasRealizadas(e.target.value)}>
                                            
                                       
                                    </Form.Input>
                                    <Form.Input
                                        fluid
                                        label='Valor Por Frete'
                                        placeholder="Ex: 4.99"
                                        width={4}
                                        value={valorFrete}
				                        onChange={e => setValorFrete(e.target.value)}
                                        >
                                       
                                    </Form.Input>
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                        fluid
                                        label='Rua'
                                        width={12}
                                    >
                                        <InputMask 
                                            
                                            maskChar={null}
                                            placeholder="Ex: Vasconcelos"
                                            value={enderecoRua}
                                            onChange={e => setEnderecoRua(e.target.value)}
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Número'
                                        width={4}>
                                        <InputMask 
                                            placeholder="Ex: 15"
                                            value={enderecoNumero}
                                            onChange={e => setEnderecoNumero(e.target.value)}
                                        /> 
                                    </Form.Input>
                            </Form.Group>
       
                            <Form.Group>
                                <Form.Input
                                        fluid
                                        label='Bairro'
                                        width={8}
                                    >
                                        <InputMask       
                                            maskChar={null}
                                            placeholder="Ex: Bulhões"
                                            value={enderecoBairro}
                                            onChange={e => setEnderecoBairro(e.target.value)}
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Cidade'
                                        width={7}>
                                        <InputMask 
                                            placeholder="Ex: Jaboatão dos Guararapes"
                                            value={enderecoCidade}
                                            onChange={e => setEnderecoCidade(e.target.value)}
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='CEP'
                                        width={3}>
                                        <InputMask 
                                            placeholder="Ex: 54080204"
                                            value={enderecoCep}
                                            onChange={e => setEnderecoCep(e.target.value)}
                                        /> 
                                    </Form.Input>

                            </Form.Group>     

                            <Form.Group>
                                
                                    <Form.Dropdown
                                            label='UF'
                                            width={16}
                                            selection
                                            options={[
                                                { key: 'PE', text: 'PE', value: 'PE' },
                                                { key: 'PB', text: 'PB', value: 'PB' },
                                    
                                            ]}
                                            value={enderecoCep}
                                            onChange={e => setEnderecoCep(e.target.value)}
                                    >
                                        
                                    </Form.Dropdown>
                       
                            </Form.Group>                      


                            <Form.Group>

                                <Form.Input
                                        
                                        label='Complemento'
                                        width={16}
                                    >
                                    <InputMask 
                                        placeholder="Ex: Casa"
                                        value={enderecoComplemento}
                                        onChange={e => setEnderecoComplemento(e.target.value)}
                                    /> 
                                     
                            </Form.Input>
                            </Form.Group>            
                                <Form.Group>

                            </Form.Group>           

                            <Form.Group inline>
                                <label>Ativo:</label>
                                    <Form.Radio
                                        label='Sim'
                                        value='sim'
                                        checked={ativo}
                                        onChange={e => setAtivo(true)}
                                    />
                                    <Form.Radio
                                        label='Não'
                                        value='nao'
                                        checked={!ativo}
                                        onChange={e => setAtivo(true)}
                                    />
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
                                <Link to={'/list-entregador'}>Voltar</Link>
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
