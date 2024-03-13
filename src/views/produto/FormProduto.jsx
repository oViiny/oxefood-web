import {React, useState} from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto () {


    
    return (
        
        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

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
                                    /> 
                                </Form.Input>


                            </Form.Group>
                            
                            <Form.Group>

                                <Form.TextArea
                                        fluid
                                        label='Descrição'
                                        width={16}
                                        placeholder="Informe a descrição do produto"
                                    >        
                                </Form.TextArea>

                            
                            </Form.Group>

                            <Form.Group widths={"equal"}>

                                <Form.Input
                                        fluid
                                        label='Valor Unitário'        
                                        required
                                >
                                    
                                </Form.Input>

                                <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'               
                                        
                                        
                                >
                                    <InputMask             
                                            placeholder="30"
                                    /> 
                                    
                                </Form.Input>
                                <Form.Input
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'               
                                        
                                        
                                >
                                    <InputMask            
                                            placeholder="40"
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
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
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
