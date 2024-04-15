import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';
import Juegogato from './components/Juegogato/Juegogato';
import Chatwebsockect from './components/Chatwebsockect/Chatwebsockect';

function App() {
  return (
    /*
    <div className='tablero'>
      <div className='fila'>
      <Button texto="Iniciar Sesión" color=""/>
      <Button texto="Iniciar Sesión" color=""/>
      <Button texto="Iniciar Sesión" color=""/>
      </div>
      <div className='fila'>
      <Button texto="Iniciar Sesión" color=""/>
      <Button texto="Iniciar Sesión" color=""/>
      <Button texto="Iniciar Sesión" color=""/>
      </div>
      <div className='fila'>
      <Button texto="Iniciar Sesión" color=""/>
      <Button texto="Iniciar Sesión" color=""/>
      <Button texto="Iniciar Sesión" color=""/>
      </div>
    </div>
    */
    <Chatwebsockect/>
    
  );
}

export default App;
