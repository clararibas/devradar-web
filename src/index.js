import React from 'react'; // Importando React
import ReactDOM from 'react-dom'; // Da habilidade ao React se comunicar com a "árvore de elementos"

import App from './App';


ReactDOM.render( // Renderizando o conteúdo do "App" para a "root"
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);


