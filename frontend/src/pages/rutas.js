// pages/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from '../pages/Dashboard'
import Clientes from '../pages/Clientes'
import Cotizaciones from '../pages/Cotizaciones';
import Couriers from '../pages/Couriers'
import Misiones from './Misiones';
import Configuraciones from '../pages/Configuraciones';

const Rutas = () => {
  return (
    <Routes>
    
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/clientes" element={<Clientes/>} />
      <Route path="/provedores" element={<Cotizaciones/>} />
      <Route path="/cotizaciones" element={<Cotizaciones/>} />
      <Route path="/misiones" element={<Misiones/>} />
      <Route path="/configuraciones" element={<Configuraciones/>} />
      <Route path="/couriers" element={<Couriers/>} />
    
      
    </Routes>
  );
};

export default Rutas; 
