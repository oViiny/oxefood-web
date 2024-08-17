import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './views/util/ProtectedRoute';

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';

import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';


import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';

import FormPromocao from './views/promocao/FormPromocao';
import ListPromocao from './views/promocao/ListPromocao';

import FormCategoriaProduto from './views/categoriaproduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaproduto/ListCategoriaProduto';
import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <FormLogin/>} />
                <Route path="home" element={ <ProtectedRoute><Home/></ProtectedRoute> } />
                <Route path="form-cliente" element={ <ProtectedRoute><FormCliente/></ProtectedRoute> } />
                <Route path="list-cliente" element={ <ProtectedRoute><ListCliente/> </ProtectedRoute>} />
                <Route path="form-produto" element={ <ProtectedRoute><FormProduto/></ProtectedRoute> } />
                <Route path="list-produto" element={ <ProtectedRoute><ListProduto/></ProtectedRoute>} />
                <Route path="form-entregador" element={<ProtectedRoute> <FormEntregador/></ProtectedRoute> } />
                <Route path="list-entregador" element={ <ProtectedRoute><ListEntregador/></ProtectedRoute> } />
                <Route path="form-promocao" element={ <ProtectedRoute><FormPromocao/></ProtectedRoute> } />
                <Route path="list-promocao" element={ <ProtectedRoute><ListPromocao/></ProtectedRoute> } />
                <Route path="form-categoriaproduto" element={ <ProtectedRoute><FormCategoriaProduto/></ProtectedRoute> } />
                <Route path="list-categoriaproduto" element={ <ProtectedRoute><ListCategoriaProduto/></ProtectedRoute> } />
            </Routes>
        </>
    )
}

export default Rotas
