import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const FormularioRSA = () => {
  const navigate = useNavigate(); // Inicializa el hook de navegación
  const [texto, setTexto] = useState("");
  const [clavePublica, setClavePublica] = useState("");
  const [resultado, setResultado] = useState("");
  const [textoCifrado, setTextoCifrado] = useState("");
  const [clavePrivada, setClavePrivada] = useState("");

  const manejarSubmit = async (e) => {
    e.preventDefault();
    console.log("cifrar:", texto);
    console.log(" utilizada:", clavePublica);
    try {
      const response = await fetch("https://back-cifrar-oxod5r2se-jose-josafats-projects.vercel.app/api/encrypt/rsa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: texto, publicKey: clavePublica }),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.statusText);
      }

      const data = await response.json();
      setResultado(`Cifrado: ${data.encrypted}`);
    } catch (error) {
      console.error("Error:", error);
      setResultado(`Error: ${error.message}`);
    }
  };

  const manejarDescifrado = async (e) => {
    e.preventDefault();
    console.log("Texto cifrado a descifrar:", textoCifrado);
    console.log("Clave privada utilizada:", clavePrivada);
    try {
      const response = await fetch("https://back-cifrar-oxod5r2se-jose-josafats-projects.vercel.app/api/decrypt/rsa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          encrypted: textoCifrado,
          privateKey: clavePrivada,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.statusText);
      }

      const data = await response.json();
      setResultado(`Descifrado: ${data.decrypted}`);
    } catch (error) {
      console.error("Error:", error);
      setResultado(`Error: ${error.message}`);
    }
  };

  const irAHome = () => {
    navigate("/"); // Navega a la página de inicio
  };

  return (
    <div>
      <h1>Formulario RSA</h1>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Texto a cifrar"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          required
        />
        <textarea
          placeholder="Clave Pública"
          value={clavePublica}
          onChange={(e) => setClavePublica(e.target.value)}
          required
        />
        <button type="submit">Cifrar</button>
      </form>
      <form onSubmit={manejarDescifrado}>
        <input
          type="text"
          placeholder="Texto a descifrar"
          value={textoCifrado}
          onChange={(e) => setTextoCifrado(e.target.value)}
          required
        />
        <textarea
          placeholder="Clave Privada"
          value={clavePrivada}
          onChange={(e) => setClavePrivada(e.target.value)}
          required
        />
        <button type="submit">Descifrar</button>
      </form>
      <p className="result-container">{resultado}</p>

      {/* Botón para regresar */}
      <button onClick={irAHome}>Regresar</button>
    </div>
  );
};

export default FormularioRSA;
