import React, { useState } from 'react';

//  IMC
const ExercicioIMC = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultadoIMC, setResultadoIMC] = useState(null);

  const handleCalculo = () => {
    if (peso && altura) {
      const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
      setResultadoIMC(imc);
    }
  };

  const getIMCCategory = () => {
    if (resultadoIMC === null) {
      return '';
    } else if (resultadoIMC < 18.5) {
      return 'Abaixo do peso';
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
      return 'Peso normal';
    } else if (resultadoIMC >= 25 && resultadoIMC < 30) {
      return 'Excesso de peso';
    } else if (resultadoIMC >= 30 && resultadoIMC < 35) {
      return 'Obesidade grau I';
    } else if (resultadoIMC >= 35 && resultadoIMC < 40) {
      return 'Obesidade grau II';
    } else {
      return 'Obesidade grau III';
    }
  };

  return (
    <div className="exercicio-imc">
      <h2>Exercício IMC</h2>
      <input
        type="number"
        placeholder="Seu peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <input
        type="number"
        placeholder="Sua altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={handleCalculo}>Calcular IMC</button>

      {resultadoIMC !== null && (
        <div>
          <p>Resultado IMC: {resultadoIMC.toFixed(2)}</p>
          <p>Categoria: {getIMCCategory()}</p>
        </div>
      )}
    </div>
  );
};

// Adivinhação
const ExercicioAdivinha = () => {
  const numeroSecreto = 35;
  const [chute, setChute] = useState('');

  const handleAcerto = () => {
    const numeroChute = parseInt(chute, 10);
    if (numeroChute === numeroSecreto) {
      setChute("Parabéns, você acertou o número!");
    } else if (numeroChute > numeroSecreto) {
      setChute('Errou, o número secreto é inferior');
    } else if (numeroChute < numeroSecreto) {
      setChute('Errou, o número secreto é superior');
    }
  };

  return (
    <div className="exercicio-adivinha">
      <h2>Exercício de Adivinhação</h2>
      <input
        type="number"
        placeholder="Digite um número"
        value={chute}
        onChange={(e) => setChute(e.target.value)}
      />

      <button onClick={handleAcerto}>Acertou?</button>
      {chute && <p>{chute}</p>}
    </div>
  );
};

//  Maioridade
const ExercicioMaioridade = () => {
  const idadeMinima = 18;
  const [idade, setIdade] = useState(0);

  const handleMaioridade = () => {
    if (idade >= idadeMinima) {
      setIdade('Você é de maior');
    } else {
      setIdade('Você é de menor');
    }
  };

  return (
    <div className="exercicio-maioridade">
      <h2>Exercício de Maioridade</h2>
      <input
        type="number"
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <button onClick={handleMaioridade}>É de maior?</button>
      {idade && <p>{idade}</p>}
    </div>
  );
};

//  Triângulo
const ExercicioTriangulo = () => {
  const [ladoA, setLadoA] = useState(0);
  const [ladoB, setLadoB] = useState(0);
  const [ladoC, setLadoC] = useState(0);
  const [resultado, setResultado] = useState('');

  const handleVerificarTriangulo = () => {
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
      if (ladoA === ladoB && ladoB === ladoC) {
        setResultado('Triângulo Equilátero (todos os lados são iguais)');
      } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        setResultado('Triângulo Isósceles (dois lados são iguais)');
      } else {
        setResultado('Triângulo Escaleno (todos os lados são diferentes)');
      }
    } else {
      setResultado('Os lados não formam um triângulo válido');
    }
  };

  return (
    <div className="exercicio-triangulo">
      <h2>Exercício de Triângulo</h2>
      <label>Lado A: </label>
      <input type="number" value={ladoA} onChange={(e) => setLadoA(parseInt(e.target.value, 10))} />

      <label>Lado B: </label>
      <input type="number" value={ladoB} onChange={(e) => setLadoB(parseInt(e.target.value, 10))} />

      <label>Lado C: </label>
      <input type="number" value={ladoC} onChange={(e) => setLadoC(parseInt(e.target.value, 10))} />

      <button onClick={handleVerificarTriangulo}>Verificar Triângulo</button>

      {resultado && <p>{resultado}</p>}
    </div>
  );
};

//Caixa Eletrônico
const ExercicioCaixaEletronico = () => {
  const [valorSaque, setValorSaque] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const handleSaque = () => {
    if (valorSaque % 10 === 0) {
      setMensagem('Saque realizado com sucesso');
    } else {
      setMensagem('Valor inválido. Digite um valor múltiplo de 10');
    }
  };

  return (
    <div className="exercicio-caixa-eletronico">
      <h2>Exercício Caixa Eletrônico</h2>
      <input
        type="number"
        placeholder="Digite o valor do saque"
        value={valorSaque}
        onChange={(e) => setValorSaque(parseInt(e.target.value, 10))}
      />

      <button onClick={handleSaque}>Realizar Saque</button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

const Aula2 = () => {
  return (
    <div className="Aula2">
      <ExercicioIMC />
      <ExercicioAdivinha />
      <ExercicioMaioridade />
      <ExercicioTriangulo />
      <ExercicioCaixaEletronico />
    </div>
  );
};
