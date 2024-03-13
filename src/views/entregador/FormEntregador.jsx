import {React, useState} from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormEntregador () {


    
    return (
        

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

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
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    width={3}>
                                    <InputMask
                                        mask="99.999-999"
                                        placeholder="Ex: 12.304-078"
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
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Celular'
                                        width={5}>
                                        <InputMask 
                                            mask="(99) 99999.9999"
                                            placeholder="Ex: (81) 98342.3967"
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Fixo'
                                        width={5}>
                                        <InputMask 
                                            mask="(99) 99999.9999"
                                            placeholder="Ex: (81) 98342.3967"
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='QTD Entregas Realizadas'
                                        placeholder="Ex: 15"
                                        width={4}>
                                       
                                    </Form.Input>
                                    <Form.Input
                                        fluid
                                        label='Valor Por Frete'
                                        placeholder="Ex: 4.99"
                                        width={4}>
                                       
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
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Número'
                                        width={4}>
                                        <InputMask 
                                            placeholder="Ex: 15"
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
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Cidade'
                                        width={7}>
                                        <InputMask 
                                            placeholder="Ex: Jaboatão dos Guararapes"
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='CEP'
                                        width={3}>
                                        <InputMask 
                                            placeholder="Ex: 54080204"
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
                                        checked={true}
                                    />
                                    <Form.Radio
                                        label='Não'
                                        value='nao'
                                        checked={false}
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
