import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { cifrarCesar, descifrarCesar, cifrarEscitala, descifrarEscitala } from './cifrado';

function Home() {
  console.log("regrese aca");
  const navigate = useNavigate(); // Inicializa el hook

  // Estados para Cifrado César
  const [mensajeCesar, setMensajeCesar] = useState('');
  const [claveCesar, setClaveCesar] = useState(0);
  const [resultadoCesar, setResultadoCesar] = useState('');

  // Estados para Cifrado Escítala
  const [mensajeEscitala, setMensajeEscitala] = useState('');
  const [claveEscitala, setClaveEscitala] = useState(0);
  const [resultadoEscitala, setResultadoEscitala] = useState('');

  // Manejo de Cifrado César
  const manejarCifradoCesar = () => {
    const resultado = cifrarCesar(mensajeCesar, claveCesar);
    setResultadoCesar(`Cifrado: ${resultado}`);
  };

  const manejarDescifradoCesar = () => {
    const resultado = descifrarCesar(mensajeCesar, claveCesar);
    setResultadoCesar(`Descifrado: ${resultado}`);
  };

  // Manejo de Cifrado Escítala
  const manejarCifradoEscitala = () => {
    const resultado = cifrarEscitala(mensajeEscitala, claveEscitala);
    setResultadoEscitala(`Cifrado: ${resultado}`);
  };

  const manejarDescifradoEscitala = () => {
    const resultado = descifrarEscitala(mensajeEscitala, claveEscitala);
    setResultadoEscitala(`Descifrado: ${resultado}`);
  };

  // Manejo de la navegación al formulario AES
  const irAFormularioAES = () => {
    console.log('Navegando al formulario AES');
    navigate('/formulario1');
    console.log('Navegando al formulario AES');
  };

  const irAFormularioRSA = () => {
    console.log('Navegando al formulario RSA');
    navigate('/formulario2');
    console.log('Navegando al formulario RSAS');
  };

  const irAFormularioHASH = () => {
    console.log('Navegando al formulario RSA');
    navigate('/formulario3');
    console.log('Navegando al formulario RSAS');
  };


  return (
    <div className="App">
      <header>
        <h1>Cifrado César y Escítala</h1>
      </header>

      <main>
        <section>
          <h2>Cifrado César</h2>
          <label>Mensaje:</label>
          <input
            type="text"
            value={mensajeCesar}
            onChange={(e) => setMensajeCesar(e.target.value)}
          />
          <label>Desplazamiento:</label>
          <input
            type="number"
            value={claveCesar}
            onChange={(e) => setClaveCesar(parseInt(e.target.value))}
          />
          <button onClick={manejarCifradoCesar}>Cifrar</button>
          <button onClick={manejarDescifradoCesar}>Descifrar</button>
          <p>{resultadoCesar}</p>
        </section>

        <section>
          <h2>Cifrado Escítala</h2>
          <label>Mensaje:</label>
          <input
            type="text"
            value={mensajeEscitala}
            onChange={(e) => setMensajeEscitala(e.target.value)}
          />
          <label>Número de columnas:</label>
          <input
            type="number"
            value={claveEscitala}
            onChange={(e) => setClaveEscitala(parseInt(e.target.value))}
          />
          <button onClick={manejarCifradoEscitala}>Cifrar</button>
          <button onClick={manejarDescifradoEscitala}>Descifrar</button>
          <p>{resultadoEscitala}</p>


        </section>

        <section>
        <h2>Opciones de Cifrado</h2>
        <button onClick={irAFormularioAES}>Ir al Formulario AES</button> {/* Botón para ir al formulario AES */}
        <button onClick={irAFormularioRSA}>Ir al Formulario RSA</button> {/* Botón para ir al formulario RSA */}
        <button onClick={irAFormularioHASH}>Ir al Formulario HASH</button> {/* Botón para ir al formulario HASH */}
        </section>
        
      </main>
    </div>
  );
}

export default Home;