import React, {useState, useEffect} from 'react';
import './style.css';

function DevForm({ onSubmit }) {

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        // Função que pega a localização do dev
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
    
          },
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
        )
      }, []);

    async function handleSubmit(e){
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,              
        });

        // Limpar as caixar de texto depois de preencher
        setGithubUsername('');
        setTechs('');

    }

    return (
        <form onSubmit={handleSubmit}> {/*Função dispara no submit do formulário*/}

        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" 
          id="github_username" 
          required
          value={github_username}
          onChange={ e => setGithubUsername(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" 
          id="techs" 
          required
          value={techs}
          onChange={ e => setTechs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="number" 
            name="latitude" 
            id="latitude" 
            required 
            value={latitude}
            onChange = { e => setLatitude(e.target.value) } // Armazena o valor no input dentro do valor no estado
            />
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" 
            name="longitude" 
            id="longitude" 
            required 
            value={longitude}
            onChange = { e => setLongitude(e.target.value) }
            />
          </div>
        </div>

        <button type="submit">Salvar</button>

      </form>
    );
}

export default DevForm;