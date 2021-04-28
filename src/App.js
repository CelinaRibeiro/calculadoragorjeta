import react, { useState } from 'react';
import styled from 'styled-components';

const Site = styled.div`
  margin: 20px;
  font-family: arial,sans-serif;
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;
const Label = styled.label`
  font-size: 14px; 
`;
const Input = styled.input`
  width: 380px;
  height: 50px;
  border: 1px solid #454545;
`;
const H2 = styled.h2`
  font-weight: bold;
  font-size: 18px;
  font-family: arial;
`;


function App() {
  const [conta, setConta] = useState(0);
  const [porcentagem, setPorcentagem] = useState(10)

const handleConta = (e) => {
  setConta(parseFloat(e.target.value));
}
const handlePorcentagem = (e) => {
  setPorcentagem(parseFloat(e.target.value));
}

  return (
    <Site>
      <Title>Calculadora de Gorjeta</Title>
      <label>Quanto deu a conta?</label> <br/><br/>
      <Input type="number" onChange={handleConta} /><br/><br/>
      <label>Qual a porcentagem da gorjeta?</label><br/><br/>
      <Input type="number" onChange={handlePorcentagem}/> <br/><br/>

      <hr/>
      <label>Sub-total R$: {conta}</label><br/><br/>
      <label>Gorjeta  ({porcentagem} %): R$ {(conta * porcentagem / 100)}</label><br/>
      <H2>Total R$: {((conta * porcentagem ) / 100) + conta}</H2>

    </Site>
  );
}

export default App;
