import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculadora from './components/Calculadora';
import Resultado from './components/Resultado';

function App() {

  const [calcularIMC, setcalcularIMC] = useState(null);
  return (
    <>
      <div className="container">
        <header className="p-5 mb-4 mt-4 bg-light rounded-3">
          <h1>Calculadora IMC</h1>
          <p>
            Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </p>
        </header>
        <Calculadora setcalcularIMC={setcalcularIMC} />
        {calcularIMC !== null && (<Resultado imc={calcularIMC} />)}
      </div>
    </>
  );
}

export default App;
