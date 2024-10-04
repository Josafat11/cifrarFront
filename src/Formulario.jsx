import { useState } from 'react';

const FormularioHash = () => {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://back-cifrar.vercel.app/api/hash/md5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: texto }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }

      const data = await response.json();
      setResultado(`Hash MD5: ${data.hash}`);
    } catch (error) {
      console.error('Error:', error);
      setResultado(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Formulario de Hash MD5</h1>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Texto a hashear"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          required
        />
        <button type="submit">Generar Hash</button>
      </form>
      <p className="result-container">{resultado}</p>
    </div>
  );
};

export default FormularioHash;
