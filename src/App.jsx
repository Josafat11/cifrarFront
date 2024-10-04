import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './index';
import FormularioAES from './FormularioAES';
import FormularioRSA from './FormularioRSA';
import FormularioHash from './Formulario';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario1" element={<FormularioAES />} />
        <Route path="/formulario2" element={<FormularioRSA />} />
        <Route path="/formulario3" element={<FormularioHash />} />
        <Route path='*' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
