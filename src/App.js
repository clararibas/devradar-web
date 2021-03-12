import React, { useState, useEffect } from 'react'; //O dele tem o meu não
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {

  // Armazenando todas as infos do formulário no estado do componente, tem-se acesso em tempo real
  const [devs, setDevs] = useState([]); // Usa um array vazia pois são muitos e melhor armazenas da forma que vamos usar depois

  
  // Buscar os devs na api (uma única vez)
  useEffect(() => {
    async function loadDevs() { //Carregar os devs da api
      const response = await api.get('/devs');
      setDevs(response.data); //Armazena no setDevs tudo o que vem da api
    }
    loadDevs();
  }, []);

  async function handleAddDev (data) { 
  
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);

  }

  return (

   <div id="app">
    
    <aside> {/* Side Bar */}

      <strong>Cadastrar</strong>
      < DevForm onSubmit = {handleAddDev} />
      
    </aside>

    <main> {/* Principal */}
      
      <ul>
        {/* Percorre a variável dev e a retorna: */}
        {devs.map(dev => ( 
          < DevItem key= {dev._id} dev ={ dev }/>
        ))}
      </ul>

    </main>

   </div>
  );
}

export default App;
