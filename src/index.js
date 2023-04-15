/*configurar o redux no projeto caso a gente precise passar states para todas as telas
bibliotecas
npm install redux react-redux --save */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux'; foi subistituido pelo configureStore do biblioteca @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Reducers from './Reducers'; // onde fica todos os meus reducers

import App from './App';

const store = configureStore(Reducers); // cria a store Redux com os reducers dentro

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/*componente provider  ele permite que todos os componentes da sua aplicação acessem a store sem precisar passá-la manualmente através de várias camadas de componentes.*/}
    <App />
  </Provider>
);