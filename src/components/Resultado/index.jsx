import React, { useState } from 'react';

const Resultado = ({ imc }) => {
    const imcStatus = (imcValor) => {
        if (imcValor < 16.9) {
            return 'Muito abaixo do peso';
        } else if (imcValor >= 17 && imcValor < 18.4) {
            return 'Abaixo do peso';
        } else if (imcValor >= 18.5 && imcValor < 24.9) {
            return 'Peso Normal';
        } else if (imcValor >= 25 && imcValor < 29.9) {
            return 'Acima do peso';
        } else if (imcValor >= 30 && imcValor < 34.9) {
            return 'Obesidade grau I';
        } else if (imcValor >= 35 && imcValor < 40) {
            return 'Obesidade grau II';
        } else {
            return 'Obesidade grau III';
        }
};

return (
    <div>
        <h4>Classificação IMC:</h4>
        <p>{imcStatus(imc)}</p>
    </div>
);

};

export default Resultado;
