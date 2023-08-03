import React, { useState } from 'react';

const Calculadora = ({ setcalcularIMC }) => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const calculaIMC = () => {
        const pesoKg = parseFloat(peso);
        const alturaM = parseFloat(altura) / 100; 

        if (peso > 0 && altura > 0) {
            const imcValue = pesoKg / (alturaM * alturaM);
            setcalcularIMC(imcValue.toFixed(2));
        } else {
            setcalcularIMC(null);
        }
    };

    return (
        <form className="form-group">
            <label>Peso (kg):</label>
            <input
                className="form-control"
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Peso em Kg"
            />
            <label>Altura (cm):</label>
            <input
                className="form-control"
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Altura em centímetros"
            />
            <button
                type="button"
                className="btn btn-primary"
                onClick={calculaIMC}
            >
                Calcular IMC
            </button>
        </form>
    );
};

export default Calculadora;
