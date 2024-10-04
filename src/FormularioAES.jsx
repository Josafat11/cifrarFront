import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const FormularioAES = () => {
  const navigate = useNavigate(); // Inicializa el hook de navegación
  const [texto, setTexto] = useState('');
  const [clave, setClave] = useState('');
  const [resultado, setResultado] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');

  const manejarSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/encrypt/aes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: texto, key: clave }),
    });

    const data = await response.json();
    setResultado(`Cifrado: ${data.encrypted}`);
  };

  const manejarDescifrado = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/decrypt/aes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ encrypted: textoCifrado, key: clave }),
    });

    const data = await response.json();
    setResultado(`Descifrado: ${data.decrypted}`);
  };

  const irAHome = () => {
    navigate('/'); // Navega a la página de inicio
  };

  return (
    <div>
      <h1>Formulario AES</h1>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Texto a cifrar"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />
        <button type="submit">Cifrar</button>
      </form>
      
      <form onSubmit={manejarDescifrado}>
        <input
          type="text"
          placeholder="Texto cifrado"
          value={textoCifrado}
          onChange={(e) => setTextoCifrado(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />
        <button type="submit">Descifrar</button>
      </form>

      <p>{resultado}</p>
      <button onClick={irAHome}>Regresar a Inicio</button> {/* Botón para regresar */}
    </div>
  );
};

export default FormularioAES;
